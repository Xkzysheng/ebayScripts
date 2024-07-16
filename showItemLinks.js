// ==UserScript==
// @name         eBay Link Extractor
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Extract item links from eBay order page
// @author       You
// @match        https://order.ebay.com/ord/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function() {
    console.log("等待页面加载");
    }, 5000);
    var boxes = document.querySelectorAll("div.card-content-description-box");
    var ans = ''
    boxes.forEach(function(box) {
            var linkElement = box.querySelector('a[data-test-id="VIEW_ITEM"]');
            if (linkElement) {
                ans = ans + linkElement.href + '\n'
            }
    });
    if (ans) {console.log(ans);}
    else {console.log("hello world")}
})();
