// config.js
const SUPABASE_URL = "https://lyiwfxeycxrimskevvlx.supabase.co";
const SUPABASE_KEY = "sb_publishable_BnT82gzK-tZM5iR_B2QWPQ_XcgzWWVk";

// Load the Supabase library using a safe, patched version
const supabaseScript = document.createElement('script');
supabaseScript.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.110.1/dist/umd/supabase.js";
document.head.appendChild(supabaseScript);

// We will use the variable name 'db' instead of 'supabase' to avoid conflicts
let db;

supabaseScript.onload = () => {
    // The library is loaded. Initialize the client.
    db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    
    // Let the HTML pages know the database is ready
    window.dispatchEvent(new Event('dbReady'));
};
