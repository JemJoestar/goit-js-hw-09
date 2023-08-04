const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

let intervalindex

function colorChange(){
    refs.body.style.backgroundColor = getRandomHexColor()
}

refs.startBtn.addEventListener("click", (event) => {
    intervalindex = setInterval(colorChange, 1000)
    event.currentTarget.disabled = true
    refs.stopBtn.disabled = false

})

refs.stopBtn.addEventListener("click", (event) => {
    clearInterval(intervalindex)
    event.currentTarget.disabled = true
    refs.startBtn.disabled = false

})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}