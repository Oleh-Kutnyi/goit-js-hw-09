!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var u=i("iU1Pc"),c=document.querySelector("input[name=delay]"),r=document.querySelector("input[name=step]"),a=document.querySelector("input[name=amount]");function l(e,n){var t=Math.random()>.3;return new Promise(t?function(t){setTimeout((function(){t({position:e,delay:n})}),n)}:function(t,o){setTimeout((function(){o({position:e,delay:n})}),n)})}document.querySelector("button[type=submit]").addEventListener("click",(function(n){n.preventDefault(),setTimeout((function(){for(var n=function(n){t=t.then((function(){return l(n,r.valueAsNumber)})).then((function(n){var t=n.position,o=n.delay;e(u).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(u).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))},t=l(1,0).then((function(n){var t=n.position,o=n.delay;e(u).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(u).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),o=2;o<=a.valueAsNumber;o++)n(o)}),c.valueAsNumber)}))}();
//# sourceMappingURL=03-promises.b632f848.js.map
