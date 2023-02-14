const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');


const copyName = (event) => {
        outputName.textContent = event.currentTarget.value;

        if (event.target.value === "") {outputName.textContent = "Anonymous"}

      }

inputName.addEventListener("input", copyName);