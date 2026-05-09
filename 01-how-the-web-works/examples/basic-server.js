// ==========================================
// EXAMPLE: A Raw Node.js HTTP Server
// ==========================================

// Node.js এর ডিফল্ট 'http' মডিউল নিয়ে আসছি।
// Express.js তৈরি হওয়ার আগে মানুষ এভাবেই সার্ভার বানাতো।
const http = require('http');

// ১. সার্ভার তৈরি করা
// যখনই কোনো ক্লায়েন্ট (ব্রাউজার) রিকোয়েস্ট করবে, এই ভেতরের ফাংশনটি চলবে।
const server = http.createServer((request, response) => {
    
    // ক্লায়েন্ট কী চাচ্ছে সেটা কনসোলে প্রিন্ট করছি
    console.log(`রিকোয়েস্ট এসেছে: ${request.url} মেথড: ${request.method}`);

    // ৩. আসল ডেটা পাঠানো এবং রেসপন্স শেষ করা
    if (request.url === '/') {
        // ২. HTTP Response Header সেট করা (২০০ মানে সব ঠিক আছে)
        response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        response.end('হ্যালো সার্ভার থেকে! আপনি এখন হোমপেজে আছেন।\n');
    } else if (request.url === '/about') {
        // ২. HTTP Response Header সেট করা
        response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        response.end('এটি হলো অ্যাবাউট পেজ।\n');
    } else {
        // যদি অন্য কোনো URL এ যায়, তাহলে 404 Not Found দেখাবো
        response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        response.end('404 পেজটি পাওয়া যায়নি\n');
    }
});

// ৪. একটি নির্দিষ্ট পোর্টে সার্ভারকে চালু (listen) করা
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`সার্ভার রান্নাঘরে কাজ শুরু করেছে পোর্ট ${PORT}-এ...`);
    console.log(`আপনার ব্রাউজারে গিয়ে http://localhost:${PORT} ওপেন করে চেক করুন`);
});

/**
 * EXPECTED OUTPUT (টার্মিনালে যা দেখাবে):
 * সার্ভার রান্নাঘরে কাজ শুরু করেছে পোর্ট 3000-এ...
 * 
 * যখন আপনি ব্রাউজারে যাবেন, তখন টেক্সট রেসপন্স দেখতে পাবেন।
 */
