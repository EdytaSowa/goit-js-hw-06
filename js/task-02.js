const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const items = ingredients.map(ingredient => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList = "item";
return item;

});//dla kazdego składnika dostaje <li>składknik</li>. Dostaję tablicę z elementami postaci <li>składki</li>. Musze to rozdzielić przed dodaniem do ul i stąd spread 
// console.log(items);
list.append(...items);//