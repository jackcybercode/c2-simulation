const http = require('http');

// 🔄 এখানেই হ্যাকার পেলোড পরিবর্তন করে (Apps Script-এ হাত না দিয়েই)!
// আপনি টেস্ট করতে করতে এখানে "v1", "v2", "v3" পরিবর্তন করে সেভ করবেন।
const CURRENT_PAYLOAD_VERSION = "v1"; 

const server = http.createServer((req, res) => {
    // চেক করা হচ্ছে রিকোয়েস্টটি nrl.js ফাইলের জন্য কিনা
    if (req.url.includes('/nrl.js')) {
        const userAgent = req.headers['user-agent'] || '';
        res.writeHead(200, { 'Content-Type': 'application/javascript' });

        // 🤖 ক্লোকিং লজিক: গুগলবটকে নিরীহ ফাইল দেওয়া
        if (userAgent.includes('Googlebot')) {
            console.log('🤖 Googlebot detected. Sending empty script.');
            res.end('// Nothing to see here for Googlebot');
        } 
        // 👤 মানুষকে ম্যালওয়্যার পেলোড দেওয়া
        else {
            if (CURRENT_PAYLOAD_VERSION === "v1") {
                console.log('👤 Human detected. Sending Payload V1 (Redirect).');
                res.end('console.log("☣️ C2 SERVER: Payload V1 executed (Redirecting to Scam Site)"); alert("☣️ C2 SERVER: In a real attack, you would be redirected to a scam site now! (Safe Simulation)");');
            } 
            else if (CURRENT_PAYLOAD_VERSION === "v2") {
                console.log('👤 Human detected. Sending Payload V2 (Crypto Miner).');
                res.end('console.log("☣️ C2 SERVER: Payload V2 executed (Crypto Miner)"); alert("☣️ C2 SERVER: In a real attack, a crypto miner would start in your browser now! (Safe Simulation)");');
            }
            else if (CURRENT_PAYLOAD_VERSION === "v3") {
                console.log('👤 Human detected. Sending Payload V3 (Cookie Theft).');
                res.end('console.log("☣️ C2 SERVER: Payload V3 executed (Stealing Cookies)"); alert("☣️ C2 SERVER: In a real attack, your cookies would be stolen now! (Safe Simulation)");');
            }
        }
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('✅ Local C2 Server running on http://localhost:3000');
    console.log(`🔄 Current Payload: ${CURRENT_PAYLOAD_VERSION} (Edit the file to change)`);
});
