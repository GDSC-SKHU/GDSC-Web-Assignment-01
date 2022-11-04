const ageSpan = document.querySelector(".js-age");
const upButton = document.querySelector(".js-age-up");
const downButton = document.querySelector(".js-age-down");

const DEFAULT_AGE = 20;

const CN_ODD = "odd";

function setAge(number) {
  ageSpan.innerHTML = number;

  if (number % 2 == 1) {
    ageSpan.classList.add(CN_ODD);
  } else {
    ageSpan.classList.remove(CN_ODD);
  }
}

function getAge() {
  return Number(ageSpan.innerHTML);
}

function upButtonHandler() {
  const nextAge = getAge() + 1;
  setAge(nextAge);
}

function downButtonHandler() {
  const nextAge = getAge() - 1;
  setAge(nextAge);
}

function init() {
  setAge(DEFAULT_AGE);
  upButton.addEventListener("click", upButtonHandler);
  downButton.addEventListener("click", downButtonHandler);
}

init();