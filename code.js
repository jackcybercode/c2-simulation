// ================================================================
// Server Payload (Hosted on GitHub Pages)
// ================================================================
// ⚠️ Educational simulation: Only secure domains are used here.
// ================================================================

var CURRENT_PAYLOAD_VERSION = "v1"; 

window.C2_PAYLOAD_ACTION = function() {
    
    // 🌐
    var REDIRECT_URL_V1 = "https://www.youtube.com";    // V1: Video Streaming Site
    var REDIRECT_URL_V2 = "https://www.google.com";     // V2: Search Engine
    var REDIRECT_URL_V3 = "https://www.wikipedia.org";  // V3: Information Site
    
    if (CURRENT_PAYLOAD_VERSION === "v1") {
        // 🚀 V1:
        window.location.href = REDIRECT_URL_V1;
    } 
    else if (CURRENT_PAYLOAD_VERSION === "v2") {
        // 🚀 V2: 
        window.location.href = REDIRECT_URL_V2;
    } 
    else if (CURRENT_PAYLOAD_VERSION === "v3") {
        // 🚀 V3: 
        window.location.reload();
    } 
    else {
    }
};
