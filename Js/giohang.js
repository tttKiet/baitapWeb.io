import { attach } from "./store.js";
import Carts from "./component/Carts.js";
import { initProduct } from "./reducer.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const addShop = $(".add-shop");

const render = () => {
  let store = window.localStorage.getItem("store");
  store = JSON.parse(store);
  let itemStore = initProduct.productStore.filter((item) => {
    return store.indexOf(`${item.id}`) > -1;
  });
  addShop.innerHTML = Carts(itemStore);
};

const cartMain = () => {
  render();
};

cartMain();
