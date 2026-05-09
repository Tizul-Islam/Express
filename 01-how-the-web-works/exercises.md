# Exercises: How the Web Works (প্র্যাকটিস)

## Beginner Practice
১. আপনার ব্রাউজারে `https://google.com` ওপেন করুন। `F12` চেপে Developer Tools খুলুন এবং "Network" ট্যাবে যান। এবার পেজটি রিলোড দিন। একদম প্রথম রিকোয়েস্টটিতে ক্লিক করুন এবং "Headers" অংশে খেয়াল করুন। `Status Code`, `Request Method` এবং `Remote Address` কী দেখাচ্ছে তা বোঝার চেষ্টা করুন।
২. আপনার টার্মিনালে `node examples/basic-server.js` রান করুন। এরপর আরেকটি টার্মিনাল খুলে `node examples/basic-client.js` রান করুন। যদি আপনি সার্ভারটি বন্ধ করে দিয়ে ক্লায়েন্ট ফাইলটি রান করেন, তাহলে কী হবে? নিজে চেষ্টা করে দেখুন।

## Intermediate Practice
১. `basic-server.js` ফাইলটি পরিবর্তন করে plain text এর বদলে HTML রেসপন্স হিসেবে পাঠান। 
(Hint: `Content-Type` পরিবর্তন করে `text/html` দিন এবং রেসপন্সে `<h1>Hello</h1>` ট্যাগ পাঠান)।
২. সার্ভারে `/api/data` নামে একটি নতুন রাউট (route) তৈরি করুন যেটা JSON ডেটা রিটার্ন করবে (যেমন: `{"message": "success"}`)। এর জন্য `Content-Type` হিসেবে `application/json` ব্যবহার করতে হবে এবং ডেটাকে `JSON.stringify()` করতে হবে।

## Advanced Practice
১. Node.js এর ডিফল্ট `net` মডিউল ব্যবহার করে একটি Raw TCP সার্ভার তৈরি করুন (এখানে `http` মডিউল ব্যবহার করা যাবে না)। এরপর ম্যানুয়ালি একটি HTTP রেসপন্স টেক্সট হিসেবে পাঠান যেন ব্রাউজার `http://localhost:3000`-এ গেলে রেসপন্সটি বুঝতে পারে।

*বিঃদ্রঃ আগে নিজে চেষ্টা করুন। আটকে গেলে আমি তো আছিই!*
