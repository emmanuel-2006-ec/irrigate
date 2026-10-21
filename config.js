// config.js
const SUPABASE_URL = "https://lyiwfxeycxrimskevvlx.supabase.co";
const SUPABASE_KEY = "sb_publishable_BnT82gzK-tZM5iR_B2QWPQ_XcgzWWVk";

// Load Supabase library
const supabaseScript = document.createElement('script');
supabaseScript.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
document.head.appendChild(supabaseScript);

// Initialize client
let supabase;
supabaseScript.onload = () => {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    // Dispatch event so pages know it's ready
    window.dispatchEvent(new Event('supabaseReady'));
};
