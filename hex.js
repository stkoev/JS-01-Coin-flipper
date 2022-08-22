const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const getRndNum = function (min, max) {
  const rnd = Math.random() * (max - min) + min;
  return Math.floor(rnd);
};

const getRndColor = function () {
  let hexColor = "#";
  for (let index = 0; index < 6; index++) {
    hexColor += hex[getRndNum(0, 16)];
  }
  return hexColor;
};

btn.addEventListener("click", function () {
  const hexColor = getRndColor();
  console.log(hexColor);
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
