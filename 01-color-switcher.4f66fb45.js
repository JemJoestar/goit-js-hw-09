const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};let e;function r(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.startBtn.addEventListener("click",(a=>{e=setInterval(r,1e3),a.currentTarget.disabled=!0,t.stopBtn.disabled=!1})),t.stopBtn.addEventListener("click",(r=>{clearInterval(e),r.currentTarget.disabled=!0,t.startBtn.disabled=!1}));
//# sourceMappingURL=01-color-switcher.4f66fb45.js.map
