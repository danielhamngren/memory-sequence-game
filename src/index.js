import "./styles.css";

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const colors = [
  "red",
  "lime",
  "blue",
  "orange",
  "yellow",
  "cyan",
  "magenta",
  "hotpink"
];

document.addEventListener("click", (e) => {
  const infoElement = document.getElementById("info");
  infoElement.style.display = "none";

  let size = 0.07 + 0.09 * Math.random();
  let absoluteSize = Math.max(window.innerWidth, window.innerHeight) * size;
  const dot = document.createElement("div");
  dot.className = "dot";
  const color = colors.random();

  dot.style.height = `${absoluteSize}px`;
  dot.style.width = `${absoluteSize}px`;
  const element = document.getElementById("app");
  if (element) {
    element.appendChild(dot);
  }
  dot.style.left = `${e.x - dot.clientWidth / 2}px`;
  dot.style.top = `${e.y - dot.clientHeight / 2}px`;

  dot.style.background = color;
  dot.style.boxShadow = `0px 0px ${absoluteSize / 2}px ${color}`;
});
