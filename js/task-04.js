const decrementBtn = document.querySelector('button[data-action="decrement"]');


const incrementBtn = document.querySelector('button[data-action="increment"]');


// const button = document.querySelector(".my-button");

let counterValue = 0; 
const newValue = document.querySelector("#value");

const decrementClick = () => {
  counterValue--;
  newValue.innerText = counterValue;

};

decrementBtn.addEventListener("click", decrementClick);

const incrementClick = () => {
    counterValue++;
    newValue.innerText = counterValue;
  
  };
  
  incrementBtn.addEventListener("click", incrementClick);