let ball1 = document.getElementById("ball1");
let ball2 = document.getElementById("ball2");

let maxX = window.innerWidth - ball1.offsetWidth;
let maxY = window.innerHeight - ball1.offsetHeight;

let duration = 0.2; // increment => faster, decrement => slower
let gridSize = 100; // amplitude

let start = null;

const step = (timestamp) => {
  // hitting the right side of the wall will reset the progress to zero. (range 0 - 1)
  let progress = ((timestamp - start) * duration) / 1000;

  let x = progress * maxX;
  let dy = x / gridSize;
  let y = 2 * Math.sin(dy);
  let y2 = 2 * Math.cos(dy);

  ball1.style.left = ball2.style.left = Math.min(maxX, x) + "px";
  ball1.style.bottom = maxY / 2 + gridSize * y + "px";
  ball2.style.bottom = maxY / 2 + gridSize * y2 + "px";

  // hitting the right side of the wall
  if (progress >= 1) start = timestamp;

  requestAnimationFrame(step);
};

requestAnimationFrame(step);
