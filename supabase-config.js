/* Trader Journeys Supabase configuration.
 * Paste your Supabase Publishable key into SUPABASE_PUBLISHABLE_KEY below.
 * Do NOT paste a service_role or secret key here.
 */
(function () {
  'use strict';
  const SUPABASE_URL = 'https://nrwugflmgrrfjawtfpsi.supabase.co';
  const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_qFXb3XAIT___syybHM4mqw_QwwtsBXY';
  const key = SUPABASE_PUBLISHABLE_KEY.trim();
  window.TJ_SUPABASE_CONFIG = Object.freeze({
    url: SUPABASE_URL,
    publishableKey: key === 'PASTE_YOUR_SB_PUBLISHABLE_KEY_HERE' ? '' : key
  });
})();
