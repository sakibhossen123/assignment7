What is JSX, and why is it used?
=> এটি হচ্ছে javascript এঁর ভিতর এইচটিএমএল লেখার সহজ পদ্ধতি এটি দিয়ে আমরা এইচটিএমএল এন্ড লজিক একসাথে লেখতে পারি আমাদের ইচ্ছা মত আমরা UI সাজাতে পারি । এটি ব্যাবহার করে আমরা dom এর কাজ সহজ করতে পারি ।

What is the difference between State and Props?
=> state ব্যাবহার করে আমরা component এঁর ভিতর দাটা পাথাতে পাররি যা আমরা পরিবর্তন করতে পারি কিন্ত Props ব্যাবহার করে আমরা parent থেকে children এ data পাথাতে পারি কিন্তুু data আমরা পরিবর্তন করতে পারিন না ।

What is the useState hook, and how does it work?
=> এটি আমরা একটি উদাহরন এর মাধ্যমে দেখি মনে করি আমার কাছে ৫ টি data আছে আমি চাই সাথে আর একটি data এড করতে আমি একটি state বানাব যার ভিতরে রাখব ৫তি data আর useState hook এ setState data,নতুন data diye dibo এইটায় useState .

How can you share state between components in React?
=> আমরা state কে Props হিসাবে পাথাতে পারি Component এ পাথিয়ে তা Component এঁর ভিতরে গিয়ে {} ব্যাবহার করে Destructhar করে ব্যাবহার করতে পারি ।

How is event handling done in React?
=> html এ আমরা onclick="function()" কল করে দিতে হত কিন্ত React এ আমরা onClick={function} এ ভাবে লিখি react এ function কাল করে দিতে হয় না ।