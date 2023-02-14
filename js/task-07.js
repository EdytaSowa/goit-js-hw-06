const rangeValue = document.querySelector("#font-size-control");
const newText = document.querySelector("#text");


const changeSize = (event) => {
    const number = event.currentTarget.value;
    newText.style.fontSize = `${number}px`;
}


rangeValue.addEventListener("input", changeSize)
