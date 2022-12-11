import { initProduct } from "./reducer.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const addContent = $(".detail-content");

function convertMoney(num) {
  return num.toLocaleString("it-IT", { style: "currency", currency: "VND" });
}

function getData(element) {
  return `
        <div class="detail-nav">
        <span class="detail-nav-icon"
        >
        <a href="./sanpham.html"><i class="uil uil-arrow-left nav-icon"></i
          ></a>
        </span>
            <h1 class="title-product">
            Chi tiết sản phẩm: ${element.name}
            </h1>
        </div>
 
        <div class="detail-container">
            <div class="detail-img">
            <img
                class="img-product"
                src="${element.src}"
                alt=""
            />
            </div>
            <div class="detail-info">
            <div class="about">
                <h1 class="about-title">${element.name}</h1>
                <p class="about-des">
                    ${element.description}
                </p>
                <span class="line"></span>
            </div>
            <div class="add-cart">
                <span class="add-cart-icon">
                <p class="star-index">${element.star}</p>
                <i class="uis uis-star star-icon"></i>
                </span>
                <p class="price-before">${convertMoney(
                  parseInt(element.rootPrice, 10)
                )}</p>
                <p class="price">${convertMoney(
                  parseInt(element.price, 10)
                )}</p>
               
            </div>
            </div>
        </div>
            `;
}

const renderProduct = () => {
  let productIndex = window.localStorage.getItem("detail-product");
  if (productIndex) {
    productIndex = JSON.parse(productIndex);
    const productItem = initProduct.productStore[productIndex - 1];
    // console.log(productItem.name.toLowerCase());
    addContent.innerHTML = getData(productItem);
  }
};

const detailProductMain = () => {
  renderProduct();
};

detailProductMain();
