!function(){var t,e={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};function n(){e.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}e.startBtn.addEventListener("click",(function(r){t=setInterval(n,1e3),r.currentTarget.disabled=!0,e.stopBtn.disabled=!1})),e.stopBtn.addEventListener("click",(function(n){clearInterval(t),n.currentTarget.disabled=!0,e.startBtn.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.985b9341.js.map