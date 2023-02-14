function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const colorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.body;


const changeColor = () => {
//  const  color = getRandomHexColor();
  // console.log(color);

colorSpan.textContent = `${getRandomHexColor()}`;
body.style.backgroundColor = `${getRandomHexColor()}`;
}


colorButton.addEventListener("click", changeColor)