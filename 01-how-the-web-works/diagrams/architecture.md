# Web Architecture (ওয়েব আর্কিটেকচার)

## Sequence Diagram of a Web Request (একটি ওয়েব রিকোয়েস্টের সিকোয়েন্স ডায়াগ্রাম)

```mermaid
sequenceDiagram
    participant User as ব্যবহারকারী (User)
    participant Browser as ব্রাউজার (Browser)
    participant DNS as DNS সার্ভার
    participant Server as ওয়েব সার্ভার

    User->>Browser: www.example.com টাইপ করলো
    Browser->>DNS: www.example.com এর IP Address কত?
    DNS-->>Browser: IP হলো 192.0.2.1
    Browser->>Server: TCP Handshake (কানেকশন তৈরি করা)
    Note over Browser,Server: কানেকশন তৈরি হয়েছে
    Browser->>Server: HTTP GET / (হোমপেজ দাও)
    Server-->>Browser: HTTP 200 OK + HTML ডেটা
    Browser->>User: ওয়েবপেজ স্ক্রিনে দেখালো
```

## TCP/IP Layers Visualization (TCP/IP লেয়ারের চিত্র)
```text
+---------------------+
| Application (HTTP)  | <-- ব্রাউজার এবং সার্ভার এই লেয়ারে কথা বলে
+---------------------+
| Transport (TCP)     | <-- নিশ্চিত করে যে ডেটা ঠিকমতো পৌঁছেছে
+---------------------+
| Network (IP)        | <-- সঠিক IP অ্যাড্রেসে ডেটা পাঠিয়ে দেয়
+---------------------+
| Physical/Link       | <-- আসল ফিজিক্যাল কেবল, রাউটার এবং ওয়াইফাই
+---------------------+
```
