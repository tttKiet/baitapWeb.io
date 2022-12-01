import { initProduct } from "./reducer.js";
import { html } from "./core.js";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Xử lý dữ liệu

// const arrayProduct = [
//   {
//     id: 1,
//     name: "Cái bàn học",
//     src: "",
//     description: "Đây là mô tả của cái bàn",
//     type: "DO_NHA_BEP",
//     rootPrice: "200000",
//     price: "180000",
//     star: "4",
//   },
// ];

const totalPrice = () => {
  const sumPrice = $(".sum-total");
  let sum = 0;
  for (let i = 0; i < initProduct.products.length; i++) {
    var priceNum = parseInt(initProduct.products[i].price, 10);
    sum += priceNum;
  }
  sumPrice.innerText = sum + " VND";
  return 0;
};

const randomProDuct = () => {
  const itemlist = $(".shop-nav");
  const htmlItemList = html`
    ${initProduct.map((item, index) => {
      return `
    <div class="shop-item">
    <img
      class="item-img"
      src="https://img.freepik.com/free-vector/realistic-white-smartphone-design-with-three-cameras_23-2148374059.jpg?w=740&t=st=1669800671~exp=1669801271~hmac=0f7c0930ab03bbe597006ec7b22eecef555d19897562f858cf8353bca8801fef"
      alt=""
    />

    <p class="item-name">${item.name}</p>
    <p class="item-price">${item.price} VND</p>
    <div class="input-quantity">
      <button class="btn-modify" id="decrement">
        <i class="uil uil-minus"></i>
      </button>
      <input
        type="number"
        class="input-box"
        id="input"
        value="1"
      />
      <button class="btn-modify" id="increment">
        <i class="uil uil-plus"></i>
      </button>
    </div>
  </div>
    `;
    })}
  `;
  itemlist.insertAdjacentHTML("afterend", htmlItemList);
};

const cartMain = () => {
  totalPrice();
  randomProDuct();
};

cartMain();

//
//
//
//
//
//
//
//
//

// Ô số lượng

// const inc = $$("#increment");
// const input = $$("#input");
// const dec = $$("#decrement");

// let counter = 1;
// let totalQuantity = 0;

// input.forEach((element, index) => {
//   inc[index].addEventListener("click", () => {
//     counter += 1;
//     element.value = counter;
//   });

//   dec[index].addEventListener("click", () => {
//     counter -= 1;
//     element.value = counter;
//   });
// });

// for (let i = 0; i < input.length; i++) {
//   console.log(input[i].value);
// }

// const totalQuantityP = $(".sum-quantity-total");
// totalQuantityP.innerText = "test";

const input = $$("#input");
let sumQuantity = 0;
const totalQuantityP = $(".sum-quantity-total");

input.forEach((element, index) => {
  element.onchange = () => {
    sumQuantity += parseInt(element.value, 10);
    console.log(sumQuantity);
  };
});
// for (let i = 0; i < input.length; i++) {
//   sumQuantity += parseInt(input[i].value, 10);
// }
