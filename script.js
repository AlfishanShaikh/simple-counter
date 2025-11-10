let count = 0;
let incClicks = 0;
let decClicks = 0;

function update() {
  document.getElementById("count").textContent = count;
  document.getElementById("incClicks").textContent = incClicks;
  document.getElementById("decClicks").textContent = decClicks;
}

function increment() {
  count++;
  incClicks++;
  update();
}

function decrement() {
  if (count > 0) count--;
  decClicks++;
  update();
}

function resetCounter() {
  count = 0;
  incClicks = 0;
  decClicks = 0;
  update();
}
