let ball1 = document.getElementById("ball1");
let ball2 = document.getElementById("ball2");

let maxX = window.innerWidth - ball1.offsetWidth;
let maxY = window.innerHeight - ball1.offsetHeight;

let duration = 0.0003;
let gridSize = 100;

let start = null;

const step = (timestamp) => {
  let progress, x, y, y2;
  if (start === null) start = timestamp;

  progress = (timestamp - start) * duration;

  x = progress * maxX;

  dy = x / gridSize;
  y = 2 * Math.sin(dy);
  y2 = 2 * Math.cos(dy);

  ball1.style.left = ball2.style.left = Math.min(maxX, x) + "px";
  ball1.style.bottom = maxY / 2 + gridSize * y + "px";
  ball2.style.bottom = maxY / 2 + gridSize * y2 + "px";

  if (progress >= 1) start = null;

  requestAnimationFrame(step);
};

requestAnimationFrame(step);
