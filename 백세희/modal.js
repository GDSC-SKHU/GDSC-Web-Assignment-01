const openButton = document.querySelector(".js-modal-open-button");
const closeButton = document.querySelector(".js-modal-close-button");
const modal = document.querySelector(".js-modal");

const CN_OPEN = "open";

const openButtonHandler = () => {
  modal.classList.add(CN_OPEN);
};

const closeButtonHandler = () => {
  modal.classList.remove(CN_OPEN);
};

const initModal = () => {
  openButton.addEventListener("click", openButtonHandler);
  closeButton.addEventListener("click", closeButtonHandler);
};

initModal();

