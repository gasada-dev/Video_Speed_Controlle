const SPEED = document.querySelector('.speed')
const BAR = document.querySelector('.speed__bar')
const VIDEO = document.querySelector('.video')

function move(e) {
  const I = e.pageY - this.offsetTop;
  const PERCENT = I / this.offsetHeight;
  const MIN = 0.5;
  const MAX = 2;
  const HEIGHT = Math.round(PERCENT * 100) + '%';
  const playbackRate = PERCENT * (MAX - MIN) + MIN;

  BAR.style.height = HEIGHT;
  BAR.textContent = playbackRate.toFixed(2) + '×';
  VIDEO.playbackRate = playbackRate;
}

SPEED.addEventListener('mousemove', move)