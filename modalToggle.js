import loaderToggle from "./loaderToggle.js";
const modal = document.querySelector("[data-modal]");

export default function modalToggle(e) {
  e.preventDefault();
  setTimeout(
    () => modal.classList.toggle("is-hidden").then(loaderToggle()),
    1000,
    loaderToggle()
  );
}
