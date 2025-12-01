// ==UserScript==
// @name         Hello World Example
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  In ra Hello World trên mọi trang web
// @author       You
// @match        *://*/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/bee-sample/tampermonkey-deployment/develop/test.js?v=fbd3870
// @downloadURL  https://raw.githubusercontent.com/bee-sample/tampermonkey-deployment/develop/test.js?v=fbd3870
// ==/UserScript==

(function() {
    'use strict';

    /*
     * https://raw.githack.com/bee-sample/tampermonkey-deployment/develop/test.js
     * https://cdn.jsdelivr.net/gh/bee-sample/tampermonkey-deployment@develop/test.js
     * clear cache: https://purge.jsdelivr.net/gh/bee-sample/tampermonkey-deployment@develop/test.js
     */

    const now = new Date();

    console.log(`Hello World từ Tampermonkey! ${now}`);
    alert(`Hello World từ Tampermonkey! ${now}`);
	alert(`Hello World từ Tampermonkey! 20250112 16:19`);
	alert(`Hello World từ Tampermonkey! 20250112 16:32`);
	alert(`Hello World từ Tampermonkey! 20250112 16:36`);
	alert(`Hello World từ Tampermonkey! 20250112 16:38`);
	alert(`Hello World từ Tampermonkey! 20250112 16:46`);
	alert(`Hello World từ Tampermonkey! 20250112 18:32`);
	alert(`Hello World từ Tampermonkey! 20250112 18:34`);

    // const div = document.createElement("div");
    // div.textContent = "Hello World từ Tampermonkey #1!";
    // div.style.cssText = `
    //     position: fixed;
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    //     padding: 10px;
    //     background: #fffae6;
    //     border-bottom: 2px solid #ffcc00;
    //     color: #333;
    //     font-size: 20px;
    //     text-align: center;
    //     z-index: 999999;
    // `;
    // document.body.prepend(div);
})();
