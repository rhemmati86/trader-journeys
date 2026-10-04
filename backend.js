/* Trader Journeys backend adapter.
 * Uses Supabase Auth + Postgres when configured; otherwise leaves the current
 * local demo flow available and clearly marks it as local-only.
 */
(function () {
  'use strict';
  const cfg = window.TJ_SUPABASE_CONFIG || {};
  const configPresent = Boolean(String(cfg.url || '').trim() && String(cfg.publishableKey || '').trim());
  let client = null;
  let initError = '';
  if (configPresent) {
    if (!window.supabase || typeof window.supabase.createClient !== 'function') {
      initError = 'Supabase client library did not load.';
    } else if (/service[_-]?role|secret/i.test(String(cfg.publishableKey))) {
      initError = 'A secret key was supplied to the browser. Use a publishable/anon key only.';
    } else {
      try { client = window.supabase.createClient(cfg.url, cfg.publishableKey, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } }); }
      catch (error) { initError = error?.message || 'Supabase initialization failed.'; }
    }
  }

  const lang = () => localStorage.getItem('tj-lang') || localStorage.getItem('site-language') || 'fa';
  const uuidLike = value => /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(value || ''));
  const fail = (error, fallback) => { if (error) throw new Error(error.message || fallback || 'Request failed'); };
  const profileFields = 'id,public_id,username,display_name,country,years_active,markets,bio,bio_language,core_story,story_language,role,is_public,seeking_support,current_stage,created_at,updated_at';
  // Birth year is stored in profile_private, never in the publicly queryable profiles table.
  const publicProfileFields = 'id,public_id,username,display_name,country,years_active,markets,bio,bio_language,core_story,story_language,role,is_public,seeking_support,current_stage,created_at,updated_at';

  function isConfigured() { return Boolean(client); }
  function hasConfig() { return configPresent; }
  function status() { return !configPresent ? 'demo' : (client ? 'live' : 'configuration-error'); }
  function statusMessage(language = lang()) {
    if (!configPresent) return language === 'en'
      ? 'Demo mode: profiles are saved only in this browser. Configure Supabase to enable shared accounts and global storage.'
      : 'حالت نمایشی: اطلاعات فقط در همین مرورگر ذخیره می‌شوند. برای حساب مشترک جهانی، Supabase را پیکربندی کن.';
    if (!client) return language === 'en'
      ? 'The backend is configured but could not initialize. Check the Supabase URL/key and make sure the Supabase CDN library loads.'
      : 'تنظیمات بک‌اند وجود دارد اما اتصال اولیه برقرار نشد. آدرس/کلید Supabase و بارگذاری کتابخانه را بررسی کن.';
    return language === 'en' ? 'Connected to the shared account system.' : 'به سیستم حساب‌های مشترک متصل هستی.';
  }

  function mapProfile(row) {
    if (!row) return null;
    return {
      id: row.id,
      publicId: row.public_id,
      role: row.role || 'community',
      name: row.display_name || row.username || 'Trader',
      country: row.country || '',
      username: row.username || '',
      years: row.years_active || '',
      markets: Array.isArray(row.markets) ? row.markets : [],
      bio: row.bio || '',
      bioLang: row.bio_language || 'en',
      story: row.core_story || '',
      storyLang: row.story_language || 'en',
      donorStory: row.role === 'donor' ? (row.core_story || '') : '',
      donorStoryLang: row.story_language || 'en',
      isPublic: Boolean(row.is_public),
      seekingSupport: Boolean(row.seeking_support),
      currentStage: row.current_stage || 'start',
      createdAt: row.created_at,
      updatedAt: row.updated_at
    };
  }

  function mapChapter(row) {
    return {
      id: row.id,
      profileId: row.profile_id,
      title: row.title || '',
      body: row.body || '',
      stage: row.stage || 'start',
      date: row.event_date || row.created_at?.slice(0, 10) || '',
      sourceLang: row.source_language || 'en',
      public: Boolean(row.is_public),
      createdAt: row.created_at,
      updatedAt: row.updated_at
    };
  }

  function profileToRow(profile, userId) {
    return {
      id: userId,
      username: String(profile.username || '').trim().toLowerCase(),
      display_name: String(profile.name || profile.display_name || '').trim(),
      country: String(profile.country || '').trim() || null,
      years_active: String(profile.years || '').trim() || null,
      markets: Array.isArray(profile.markets) ? profile.markets : [],
      bio: String(profile.bio || '').trim() || null,
      bio_language: profile.bioLang || lang(),
      core_story: String(profile.story || profile.donorStory || '').trim() || null,
      story_language: profile.storyLang || profile.donorStoryLang || lang(),
      role: ['recipient', 'donor', 'community'].includes(profile.role) ? profile.role : 'community',
      is_public: Boolean(profile.isPublic),
      seeking_support: Boolean(profile.seekingSupport ?? profile.role === 'recipient'),
      updated_at: new Date().toISOString()
    };
  }

  async function getUser() {
    if (!client) return null;
    const { data, error } = await client.auth.getUser();
    fail(error, 'Could not read session');
    return data.user || null;
  }

  async function signUp(profile, privateData, password) {
    if (!client) throw new Error(statusMessage());
    const email = String(profile.email || '').trim().toLowerCase();
    const metadata = {
      display_name: String(profile.name || '').trim(),
      username: String(profile.username || '').trim().toLowerCase(),
      role: profile.role,
      birth_year: /^\d{4}$/.test(String(profile.birthYear || '')) ? String(profile.birthYear) : '',
      country: String(profile.country || '').trim(),
      years_active: String(profile.years || ''),
      markets: Array.isArray(profile.markets) ? profile.markets : [],
      bio: String(profile.bio || ''),
      bio_language: profile.bioLang || lang(),
      core_story: profile.role === 'donor' ? String(profile.donorStory || '') : String(profile.story || ''),
      story_language: profile.role === 'donor' ? (profile.donorStoryLang || lang()) : (profile.storyLang || lang()),
      is_public: Boolean(profile.isPublic),
      seeking_support: profile.role === 'recipient'
    };
    const options = { data: metadata };
    // Direct local-file testing uses file:// and reports location.origin as 'null'.
    // Do not send an invalid redirect URL to Supabase in that case.
    if (location.origin && location.origin !== 'null') {
      options.emailRedirectTo = `${location.origin}${location.pathname.replace(/[^/]*$/, '')}login.html`;
    }
    const { data, error } = await client.auth.signUp({ email, password, options });
    fail(error, 'Account creation failed');
    if (data.session) {
      // The auth trigger creates the stable public ID and resolves username collisions.
      // Read that record first so a valid account is not lost when a requested username is already taken.
      const initial = await loadWorkspace();
      const profileForSave = { ...profile, username: initial.profile?.username || profile.username, publicId: initial.profile?.publicId || profile.publicId };
      await saveProfile(profileForSave);
      await savePrivate({ ...(privateData || {}), birthYear: profile.birthYear });
      return { session: data.session, user: data.user, confirmationRequired: false };
    }
    return { session: null, user: data.user, confirmationRequired: true };
  }

  async function signIn(email, password) {
    if (!client) throw new Error(statusMessage());
    const { data, error } = await client.auth.signInWithPassword({ email: String(email).trim().toLowerCase(), password });
    fail(error, 'Sign-in failed');
    return data;
  }

  async function signOut() {
    if (!client) { ['tj-profile', 'tj-chapters', 'tj-profile-private'].forEach(key => localStorage.removeItem(key)); return; }
    const { error } = await client.auth.signOut(); fail(error, 'Could not sign out');
    ['tj-profile', 'tj-chapters', 'tj-profile-private'].forEach(key => localStorage.removeItem(key));
  }

  async function saveProfile(profile) {
    if (!client) return null;
    const user = await getUser();
    if (!user) throw new Error('Sign in before saving your profile.');
    const row = profileToRow(profile, user.id);
    delete row.id; // Never update the immutable auth/profile identity.
    let { data, error } = await client.from('profiles').update(row).eq('id', user.id).select(profileFields).maybeSingle();
    fail(error, 'Could not save profile');
    if (!data) {
      const inserted = await client.from('profiles').insert({ id: user.id, ...row }).select(profileFields).single();
      fail(inserted.error, 'Could not initialize profile');
      data = inserted.data;
    }
    const mapped = mapProfile(data);
    localStorage.setItem('tj-profile', JSON.stringify(mapped));
    return mapped;
  }

  async function savePrivate(privateData) {
    if (!client) return null;
    const user = await getUser();
    if (!user) throw new Error('Sign in before saving private support details.');
    const payload = {
      profile_id: user.id,
      birth_year: /^\d{4}$/.test(String(privateData.birthYear || '')) ? Number(privateData.birthYear) : null,
      needs: Array.isArray(privateData.needs) ? privateData.needs : [],
      need_detail: String(privateData.needDetail || '').trim() || null,
      recipient_wallet_address: String(privateData.wallet || '').trim() || null,
      donor_wallet_address: String(privateData.donorWallet || '').trim() || null,
      updated_at: new Date().toISOString()
    };
    const { data, error } = await client.from('profile_private').upsert(payload, { onConflict: 'profile_id' }).select().single();
    fail(error, 'Could not save private support details');
    localStorage.setItem('tj-profile-private', JSON.stringify(data));
    return data;
  }

  async function loadWorkspace() {
    if (!client) return { user: null, profile: null, privateProfile: null, chapters: [], mode: status() };
    const user = await getUser();
    if (!user) return { user: null, profile: null, privateProfile: null, chapters: [], mode: 'live' };
    const [pRes, privateRes, chaptersRes] = await Promise.all([
      client.from('profiles').select(profileFields).eq('id', user.id).maybeSingle(),
      client.from('profile_private').select('*').eq('profile_id', user.id).maybeSingle(),
      client.from('journey_chapters').select('*').eq('profile_id', user.id).order('event_date', { ascending: true }).order('created_at', { ascending: true })
    ]);
    fail(pRes.error || privateRes.error || chaptersRes.error, 'Could not load the workspace');
    let profileRow = pRes.data;
    if (!profileRow) {
      const meta = user.user_metadata || {};
      const fallback = {
        id: user.id,
        username: String(meta.username || `trader_${user.id.replace(/-/g, '').slice(0, 8)}`).toLowerCase(),
        display_name: String(meta.display_name || 'Trader'), role: ['recipient','donor','community'].includes(meta.role) ? meta.role : 'community',
        country: meta.country || null, years_active: meta.years_active || null, markets: Array.isArray(meta.markets) ? meta.markets : [],
        bio: meta.bio || null, bio_language: meta.bio_language || lang(), core_story: meta.core_story || null, story_language: meta.story_language || lang(),
        is_public: false, seeking_support: meta.role === 'recipient'
      };
      const ins = await client.from('profiles').insert(fallback).select(profileFields).single();
      fail(ins.error, 'Could not initialize profile');
      profileRow = ins.data;
    }
    let privateRow = privateRes.data || null;
    if (!privateRow) {
      const insertedPrivate = await client.from('profile_private').upsert({ profile_id: user.id, birth_year: /^\d{4}$/.test(String(user.user_metadata?.birth_year || '')) ? Number(user.user_metadata.birth_year) : null }, { onConflict: 'profile_id' }).select().single();
      fail(insertedPrivate.error, 'Could not initialize private profile details');
      privateRow = insertedPrivate.data;
    }
    const profile = mapProfile(profileRow);
    const chapters = (chaptersRes.data || []).map(mapChapter);
    return { user, profile, privateProfile: privateRow || null, chapters, mode: 'live' };
  }

  async function upsertChapter(chapter) {
    if (!client) return chapter;
    const user = await getUser();
    if (!user) throw new Error('Sign in before updating a journey.');
    const row = {
      id: chapter.id || crypto.randomUUID(), profile_id: user.id,
      title: String(chapter.title || '').trim(), body: String(chapter.body || '').trim(),
      stage: chapter.stage || 'experience', event_date: chapter.date || new Date().toISOString().slice(0,10),
      source_language: chapter.sourceLang || lang(), is_public: Boolean(chapter.public), updated_at: new Date().toISOString()
    };
    const { data, error } = await client.from('journey_chapters').upsert(row, { onConflict: 'id' }).select().single();
    fail(error, 'Could not save chapter');
    return mapChapter(data);
  }

  async function deleteChapter(id) {
    if (!client) return;
    const { error } = await client.from('journey_chapters').delete().eq('id', id);
    fail(error, 'Could not delete chapter');
  }

  async function setProfilePublic(isPublic) {
    if (!client) return null;
    const user = await getUser(); if (!user) throw new Error('Sign in to update profile visibility.');
    const { data, error } = await client.from('profiles').update({ is_public: Boolean(isPublic), updated_at: new Date().toISOString() }).eq('id', user.id).select(profileFields).single();
    fail(error, 'Could not update profile visibility');
    return mapProfile(data);
  }

  async function listPublicProfiles(limit = 100) {
    if (!client) return [];
    const { data, error } = await client.from('profiles').select(publicProfileFields).eq('is_public', true).order('updated_at', { ascending: false }).limit(Math.min(200, Math.max(1, limit)));
    fail(error, 'Could not load public journeys');
    return (data || []).map(row => mapProfile(row));
  }

  async function getPublicProfile(identifier) {
    if (!client || !identifier) return null;
    let query = client.from('profiles').select(publicProfileFields).eq('is_public', true);
    if (uuidLike(identifier)) query = query.eq('id', identifier);
    else if (/^TJ-[A-Z0-9]+$/i.test(identifier)) query = query.eq('public_id', identifier);
    else query = query.eq('username', String(identifier).toLowerCase());
    const { data, error } = await query.maybeSingle();
    fail(error, 'Could not load public profile');
    if (!data) return null;
    const [chaptersRes] = await Promise.all([
      client.from('journey_chapters').select('*').eq('profile_id', data.id).eq('is_public', true).order('event_date', { ascending: true }).order('created_at', { ascending: true })
    ]);
    fail(chaptersRes.error, 'Could not load public journey chapters');
    return { profile: mapProfile(data), chapters: (chaptersRes.data || []).map(mapChapter) };
  }

  async function isFollowing(profileId) {
    if (!client) return false;
    const user = await getUser(); if (!user) return false;
    const { data, error } = await client.from('profile_follows').select('follower_id').eq('follower_id', user.id).eq('followed_profile_id', profileId).maybeSingle();
    fail(error, 'Could not check follow status');
    return Boolean(data);
  }

  async function toggleFollow(profileId) {
    if (!client) throw new Error('Follow is available after backend setup.');
    const user = await getUser(); if (!user) throw new Error('Please sign in to follow a journey.');
    if (user.id === profileId) throw new Error('You cannot follow your own journey.');
    const following = await isFollowing(profileId);
    if (following) {
      const { error } = await client.from('profile_follows').delete().eq('follower_id', user.id).eq('followed_profile_id', profileId);
      fail(error, 'Could not unfollow this journey'); return false;
    }
    const { error } = await client.from('profile_follows').insert({ follower_id: user.id, followed_profile_id: profileId });
    fail(error, 'Could not follow this journey'); return true;
  }

  window.TJBackend = Object.freeze({
    isConfigured, hasConfig, status, statusMessage, initError,
    signUp, signIn, signOut, getUser, saveProfile, savePrivate, loadWorkspace,
    upsertChapter, deleteChapter, setProfilePublic, listPublicProfiles,
    getPublicProfile, isFollowing, toggleFollow, mapProfile, mapChapter
  });
})();
