const inputElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");

inputElem.addEventListener("input", (e) => {
  const inputText = e.target.value.trim();

  if (inputText) {
    outputElem.textContent = inputText;
  } else {
    outputElem.textContent = "Anonymous";
  }
});
