const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector(`#ingredients`);
const itemList = ingredients.map(ingredient => {
const item = document.createElement("li");
item.classList.add("item");
item.textContent = `${ingredient}`;

console.log(item);
return item
})

console.log(itemList)
for (const item of itemList) {
  list.append(item)
}
