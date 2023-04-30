class Burger {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}
let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let btnAddToCart = document.querySelectorAll(".add-to-cart");
let quantity = document.querySelectorAll(".quantity");
let btnCart = document.querySelector(".btn-cart");
let badge = document.querySelector(".badge");
let currentProductsList = document.querySelector(".added-quantity");
let updatedProductList = document.querySelector(".updated-quantity");
let cart = [];

if (cart.length === 0) {
  currentProductsList.innerHTML = "No items added.";
  updatedProductList.innerHTML = "No items added.";
}

plus.forEach((element) => {
  element.addEventListener("click", (event) => {
    let target = event.target;
    let parent = target.parentNode;
    let siblingNode = parent.querySelector(".quantity");
    let currentQuantity = parseInt(siblingNode.value);
    currentQuantity += 1;
    siblingNode.value = currentQuantity;
  });
});

minus.forEach((element) => {
  element.addEventListener("click", (event) => {
    let target = event.target;
    let parent = target.parentNode;
    let siblingNode = parent.querySelector(".quantity");
    let currentQuantity = parseInt(siblingNode.value);
    if (currentQuantity > 1) {
      currentQuantity -= 1;
    }
    siblingNode.value = currentQuantity;
  });
});

btnAddToCart.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    let target = event.target;
    let parent = target.parentNode;
    let burgerName = parent.querySelector(".title").textContent;
    let price = parent.querySelector(".price").textContent;
    let quantity = parent.querySelector(".quantity").value;

    let burger = new Burger(burgerName, price, quantity / 2);
    cart.push(burger);
    badge.textContent = cart.length;
    currentProductsList.innerHTML = "";
    displayCurrentList();
    updatedProductList.innerHTML = "";
    updateCart();
  });
});

function displayCurrentList() {
  cart.forEach((element) => {
    let li = document.createElement("li");
    li.innerHTML = `<div>${element.name}</div>
              <div>${element.quantity}</div>`;
    currentProductsList.appendChild(li);
  });
}

function updateCart() {
  cart.forEach((element) => {
    let li = document.createElement("li");
    li.innerHTML = `<div>${element.name}</div>
                  <div>${element.quantity * 2}</div>`;
    updatedProductList.appendChild(li);
  });
}
