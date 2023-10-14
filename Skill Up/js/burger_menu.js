const burgerButtonNode = document.querySelector(".head__burgermenu");
const lineOneNode = document.querySelector(".line-1");
const lineTwoNode = document.querySelector(".line-2");
const lineThreNode = document.querySelector(".line-3");
const navbarNode = document.querySelector(".head__navbar");

burgerButtonNode.addEventListener("click", function () {
  navbarNode.classList.toggle("transform_navbar");
  lineOneNode.classList.toggle("rotate45");
  lineThreNode.classList.toggle("rotate-45");
  lineTwoNode.classList.toggle("dnone");
});
