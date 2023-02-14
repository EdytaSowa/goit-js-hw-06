const inputArea = document.querySelector('#validation-input');

const givenLength = Number(inputArea.dataset.length);//ilosc podana w placeholderze

const checkLength = (event) => {
const numberOfSymbol = event.target.value.length; //ilosc znakow we wprowadzonym stringu
// console.log(numberOfSymbol);


if (numberOfSymbol === givenLength) {
    inputArea.classList.add("valid");
    inputArea.classList.remove("invalid");
}
else {inputArea.classList.add("invalid");
inputArea.classList.remove("valid");}
}


inputArea.addEventListener("blur", checkLength);