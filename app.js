const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const body = document.getElementsByTagName("body")[0];

const getRndNum = function (min, max) {
  const rnd = Math.random() * (max - min) + min;
  return Math.floor(rnd);
};

const getRndColor = function (arr, num) {
  return arr[num];
};

btn.addEventListener("click", function () {
  // Get random number between 0 and colors.length
  const randomNumber = getRndNum(0, colors.length);
  const randomColor = getRndColor(colors, randomNumber);
  console.log(randomNumber, randomColor);

  // change background color to:
  body.style.backgroundColor = randomColor;

  // show new color in span
  color.textContent = randomColor;
});
