const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  
  const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };  

  const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
};

console.log(refs);
refs.startBtn.addEventListener('click', startBtnClick);
refs.stopBtn.addEventListener('click', stopBtnClick);
refs.startBtn.disabled = false;

function timer() {
    const getColorId = randomIntegerFromInterval(0, colors.length);
    refs.body.style.background = colors[getColorId];
  }
let id = null;
function startBtnClick() {
   id=setInterval(timer, 1000);
    refs.startBtn.disabled = true;
    
}

function stopBtnClick() {
    refs.startBtn.disabled = false;
    clearInterval(id);
}
