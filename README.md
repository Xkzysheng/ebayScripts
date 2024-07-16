# ebayScripts(ebay篡改猴js脚本)

@match部分要写成 https://order.ebay.com/ord/* ，不要用具体订单的链接，否则脚本无法运行

用篡改猴（油猴）插件运行

1. 修改订单价格(changeOrderPrice.js)
原理很简单，F12先找到各元素，再复制它们的XPath，替换到代码的相应部分，然后再把需要改成什么内容修改一下即可

2. 在F12控制台输出订单详情页中各个商品的链接(showItemLinks.js)

# 仅供学习使用，请勿用于非法用途！
