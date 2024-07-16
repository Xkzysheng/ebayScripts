// ==UserScript==
// @name         修改ebay订单页面
// @namespace    http://tampermonkey.net/
// @version      2024-07-09
// @description  try to take over the world!
// @author       You
// @match        https://order.ebay.com/ord/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
function findElement(xpath) {
    return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function applyModifiedValue() {
    const e1 = findElement('替换为待修改内容对应元素的XPath，例如下面的e2');
    e1.textContent = '替换为你想改成的内容，例如下面的e2把对应元素的内容改成了“US $10.00”';
    const e2 = findElement('/html/body/div[4]/div[2]/div[2]/div[2]/div[2]/div/div[2]/div[2]/div[1]/div[2]/div[1]/dl/div/dd/span/span/span');
    e2.textContent = 'US $10.00';
    // 需要改多少个元素，就用多少个变量存储对应的元素，再进行替换即可
}

(function() {
    'use strict';
    // Your code here...
    applyModifiedValue();
    //window.addEventListener('load', applyModifiedValue);
})();
