const list = document.querySelector("ul");
const product = document.querySelector("input");
const addItemButton = document.querySelector("button");
let products;

// addItem.onclick = () => products += addTextProduct.value 

addItemButton.addEventListener("click",() => {
    const products = product.value;
    product.value = "";


const listItem = document.createElement("li");
const span = document.createElement("span");
const button = document.createElement("button");

listItem.appendChild(span);
span.textContent = products;
listItem.appendChild(button);
button.textContent = "Delete";

list.appendChild(listItem);
button.addEventListener("click",() =>{
    list.removeChild(listItem);
});

product.focus();
});


addItem.onclick;