import { attach } from "./store.js";
import Carts from "./component/Carts.js";
import { initProduct } from "./reducer.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const addShop = $(".add-shop");

const render = () => {
  let store = window.localStorage.getItem("store");
  if (store) {
    store = JSON.parse(store);
    let itemStore = initProduct.productStore.filter((item) => {
      return store.indexOf(`${item.id}`) > -1;
    });
    addShop.innerHTML = Carts(itemStore);
  }
};

// Check xem trong localStorage đã có inputValue hay chưa
const checkInputValue = () => {
  const CheckValue = localStorage.getItem("inputValue");
  if (CheckValue == null) {
    localStorage.setItem("inputValue", JSON.stringify(valueInput));
  }
};

// Xoá các id sản phẩm bị lặp lại
const deleteIdProduct = () => {
  const getStore = localStorage.getItem("store");
  if (getStore) {
    const data = JSON.parse(getStore);
    data.sort();
    for (let i = 0; i < data.length; i++) {
      for (let j = i + 1; j < data.length; j++) {
        if (data[j] == data[i]) {
          data.splice(j, 1);
          j--;
        }
      }
    }
    const dataChange = JSON.stringify(data);
    localStorage.setItem("store", dataChange);
  }
};

// Xoá sản phẩm
const deleteItem = () => {
  const deleteIc = $$(".delete-icon");
  const getStore = localStorage.getItem("store");
  if (getStore) {
    const data = JSON.parse(getStore);
    data.sort();
    deleteIc.forEach((i, index) => {
      i.addEventListener("click", () => {
        data.splice(index, 1);
        const dataChange = JSON.stringify(data);
        localStorage.setItem("store", dataChange);
        const getDataInput = JSON.parse(localStorage.getItem("inputValue"));
        getDataInput.splice(index, 1);
        console.log(getDataInput);
        localStorage.removeItem("inputValue");
        localStorage.setItem("inputValue", JSON.stringify(getDataInput));
        location.reload();
      });
    });
  }
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
  if (getStore) {
    const data = JSON.parse(getStore);
    data.sort();
    const dataChange = JSON.stringify(data);
    localStorage.setItem("store", dataChange);
  }
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
  const totalModal = $(".total-modal");
  totalModal.innerHTML = total;
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
  const priceModal = $(".price-modal");
  priceModal.innerHTML = totalMoneyCur;
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

const saveInputValue = () => {
  const storeLength = JSON.parse(localStorage.getItem("store"));
  const inputBox = $$("#input");
  if (storeLength) {
    sortArray();
    for (let i = 0; i < storeLength.length; i++) {
      valueInput[i] = "1";
    }
    const getDataValue = JSON.parse(localStorage.getItem("inputValue"));
    if (getDataValue.length == 0) {
      localStorage.setItem("inputValue", JSON.stringify(valueInput));
    }
  }

  inputBox.forEach((i, index) => {
    i.addEventListener("change", () => {
      const valueInputClone = JSON.parse(localStorage.getItem("inputValue"));
      if (valueInputClone) {
        console.log(valueInputClone);
        console.log(index);
        const getArray = [...valueInputClone];
        getArray[index] = i.value;
        console.log(getArray);
        localStorage.removeItem("inputValue");
        localStorage.setItem("inputValue", JSON.stringify(getArray));
      }
    });
  });
};

// Lấy giá trị input từ localStorage và set vào ô input mỗi khi load lại trang
const setValueInput = () => {
  const inputBox = $$("#input");
  window.addEventListener("load", () => {
    const dataInputStorage = localStorage.getItem("inputValue");
    const dataInput = JSON.parse(dataInputStorage);
    console.log(dataInput);
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
  checkInputValue();
  deleteIdProduct();
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

// Xử lý js phần modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

var modalSucess = document.getElementById("modal-success");
var btnSuccess = document.getElementById("btn-success");
var spanSuc = document.getElementsByClassName("close")[1];
const inputAddress = $(".modal-input-address");
const inputPhone = $(".modal-input-phone");
const er1 = $(".er1");
const er2 = $(".er2");
// Check ô input
btnSuccess.onclick = function () {
  if (inputAddress.value.length == 0) {
    er1.innerText = "Bạn chưa nhập địa chỉ.";
    if (inputPhone.value.length == 0) {
      er2.innerText = "Bạn chưa nhập số điện thoại.";
    }

    return;
  } else {
    er1.innerText = "";
  }

  if (inputPhone.value.length != 10) {
    er2.innerText = "Số điện thoại phải là 10 số.";
    return;
  } else {
    er2.innerText = "";
  }
  modalSucess.style.display = "block";
};

spanSuc.onclick = function () {
  modalSucess.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalSucess) {
    modalSucess.style.display = "none";
    modal.style.display = "none";
  }
};
