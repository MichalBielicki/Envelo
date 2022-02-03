import modalToggle from "./modalToggle.js";

const input = document.querySelector(".input");
const button = document.querySelector(".btn");

button.disabled = true;

input.addEventListener("change", stateHandle);
button.addEventListener("click", (e) => {
  modalToggle(e);
  c.start();
});

function stateHandle() {
  if (document.querySelector(".input").value === "") {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}
