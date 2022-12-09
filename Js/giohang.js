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

// Xoá sản phẩm
const deleteItem = () => {
  const deleteIc = $$(".delete-icon");
  const getStore = localStorage.getItem("store");
  const data = JSON.parse(getStore);
  data.sort();
  deleteIc.forEach((i, index) => {
    i.addEventListener("click", () => {
      data.splice(index, 1);
      const dataChange = JSON.stringify(data);
      localStorage.setItem("store", dataChange);
      location.reload();
    });
  });
};

// Tính tổng số sản phẩm
let total = 0;
function updateTotalItem(arr) {
  for (let i = 0; i < arr.length; i++) {
    const arrValue = parseInt(arr[i].value, 10);
    total += arrValue;
  }
  return total;
}

// Sắp xếp thứ tự mảng trong localStorage
function sortArray() {
  const getStore = localStorage.getItem("store");
  const data = JSON.parse(getStore);
  data.sort();
  const dataChange = JSON.stringify(data);
  localStorage.setItem("store", dataChange);
}

// Đếm số lượng sản phẩm
const countQuantity = () => {
  const inputBox = $$("#input");
  sortArray();
  updateTotalItem(inputBox);
  setQuantity();
  inputBox.forEach((i, index) => {
    i.addEventListener("change", () => {
      if (i.value < 1) {
        i.value = 1;
      }
      total = 0;
      updateTotalItem(inputBox);
      setQuantity();
    });
  });
};

// Hàm tính tổng tiền sản phẩm
let totalMoney = 0;
function updateTotalMoney(input, p) {
  for (let i = 0; i < p.length; i++) {
    const priceNum = parseInt(p[i].innerText, 10);
    const inputValue = parseInt(input[i].value, 10);
    totalMoney += priceNum * inputValue;
  }
  return totalMoney;
}

// Tính tiền sản phẩm khi số lượng thay đổi
const sumProduct = () => {
  sortArray();
  const inputBox = $$("#input");
  const iteamPrice = $$(".item-price");
  updateTotalMoney(inputBox, iteamPrice);
  setSumPrice();
  inputBox.forEach((i) => {
    i.addEventListener("change", () => {
      totalMoney = 0;
      updateTotalMoney(inputBox, iteamPrice);
      setSumPrice();
    });
  });
};

// Set giá trị tổng số lượng
const setQuantity = () => {
  const sumQT = $(".sum-quantity-total");
  sumQT.innerHTML = total;
};

// Hàm chuyển number sang kiểu tiền tệ
function convertMoney(num) {
  return num.toLocaleString("it-IT", { style: "currency", currency: "VND" });
}

// Set giá trị tổng giá tiền
const setSumPrice = () => {
  const sumTotal = $(".sum-total");
  var totalMoneyCur = convertMoney(totalMoney);
  sumTotal.innerHTML = totalMoneyCur;
};

// Chuyển number cột giá thành dạng tiền tệ
const convertMoneyDisplay = () => {
  const iteamPriceD = $$(".item-price-display");
  for (let i = 0; i < iteamPriceD.length; i++) {
    var iteamPriceCur = convertMoney(parseInt(iteamPriceD[i].innerText, 10));
    iteamPriceD[i].innerText = iteamPriceCur;
  }
};

// Lưu giá trị input vào localStorage
let valueInput = [];
console.log("asdads");
const saveInputValue = () => {
  const inputBox = $$("#input");
  sortArray();
  var currentValueInput = JSON.parse(localStorage.getItem("inputValue"));
  valueInput = currentValueInput;
  console.log(currentValueInput);
  inputBox.forEach((i, index) => {
    i.addEventListener("change", () => {
      valueInput.splice(index, 1, i.value);
      console.log(valueInput);
      let inputValueC = JSON.stringify(valueInput);
      localStorage.setItem("inputValue", inputValueC);
      console.log("asdads");
    });
  });
};

// Lấy giá trị input từ localStorage và set vào ô input mỗi khi load lại trang
const setValueInput = () => {
  const inputBox = $$("#input");
  window.addEventListener("load", () => {
    const dataInputStorage = localStorage.getItem("inputValue");
    const dataInput = JSON.parse(dataInputStorage);
    for (let i = 0; i < dataInput.length; i++) {
      if (inputBox[i].value == null) {
        inputBox[i].value = 1;
      }
      inputBox[i].value = dataInput[i];
    }
    total = 0;
    countQuantity();
    totalMoney = 0;
    sumProduct();
  });
};

const cartMain = () => {
  render();
  deleteItem();
  countQuantity();
  sumProduct();
  setQuantity();
  setSumPrice();
  convertMoneyDisplay();
  setValueInput();
  saveInputValue();
};

cartMain();

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
