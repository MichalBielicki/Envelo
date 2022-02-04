import modalToggle from "./modalToggle.js";

const input = document.querySelector(".input");
const inputKey = document.querySelector(".input-key");
const button = document.querySelector(".btn");

button.disabled = true;

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (isNaN(input.value)) {
    alert("Numer telefonu musi się składać z cyfr.");
    return false;
  }
  if (isNaN(inputKey.value)) {
    alert("Kod musi się składać z cyfr.");
    return false;
  }
  modalToggle(e);
});

input.addEventListener("input", stateHandle);
inputKey.addEventListener("input", stateHandle);

function stateHandle() {
  if (input.value.length === 9 && inputKey.value.length === 4) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}
