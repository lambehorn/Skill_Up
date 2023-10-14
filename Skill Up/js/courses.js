// окно карусели
const coursesNode = document.querySelector(".courses__container");

// массив жлементов ленты
const itemArrayNode = document.querySelectorAll(".tape__item");

// лента карусели
const tapeNode = document.querySelector(".courses__container__tape");
// console.log(tapelength)

const resize = () => {
  // ширина карусели
  // console.log(coursesWidth)
  var coursesWidth = coursesNode.clientWidth;

  // ширина ленты в карусели
  // console.log(tapelength)
  var tapelength = coursesWidth * itemArrayNode.length;

  // изменение ширины ленты под колличество итемов
  // console.log(tapeNode.style.width)
  tapeNode.style.width = tapelength + "px";

  for (let i = 0; i < itemArrayNode.length; i++) {
    // изменение ширины итема
    itemArrayNode[i].style.width = coursesWidth + "px";
  }
};

resize();

window.addEventListener("resize", function () {
  resize();
  tapeNode.style.transform =
  "translate(-" + coursesNode.clientWidth * position + "px)";
});

// кнопки
const buttonLeftNode = document.querySelector(".button__left");
const buttonRightNode = document.querySelector(".button__right");

// позиция
let position = 0;

buttonRightNode.addEventListener("click", () => {
  position++;
  if (position >= itemArrayNode.length) {
    position = 0;
  }
  tapeNode.style.transform =
    "translate(-" + coursesNode.clientWidth * position + "px)";
});

buttonLeftNode.addEventListener("click", () => {
  position--;
  if (position < 0) {
    position = itemArrayNode.length;
    position--;
  }
  tapeNode.style.transform =
    "translate(-" + coursesNode.clientWidth * position + "px)";
});
