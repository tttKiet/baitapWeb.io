import initProduct from "./core.js";
import { html } from "./core.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const handleSearchCss = () => {
  const searchIcon = $(".search-icon");
  const search = $(".search");
  const rmIcon = $(".rm-icon");
  const groupSearch = $(".group-search");
  searchIcon.onclick = () => {
    groupSearch.style.display = "flex";
    searchIcon.style.display = "none";
  };

  rmIcon.onclick = () => {
    searchIcon.style.display = "block";
    groupSearch.style.display = "none";
  };
};

const ranDomProduct = () => {
  const products = $(".products");
  const htmlProducts = html`
    ${initProduct.map((item, index) => {
      return `
      <div class="product">
          <div class="product-content">
                <div class="product-img">
                  <img src="${item.src}" />
                </div>
                <div class="product-btns">
                  <button type="button" class="btn-cart">
                    Thêm vào giỏ
                    <span><i class="fas fa-plus"></i></span>
                  </button>
                  <button type="button" class="btn-buy">
                    <a href="#"> Mua ngay</a>
                    <span><i class="fas fa-shopping-cart"></i></span>
                  </button>
                </div>
          </div>

          <div class="product-info">
            <div class="product-info-top">
              <h2 class="sm-title">lifestyle</h2>
              <div class="rating">
                <span class="countStar">${item.star}</span>
                <span>
                  <i class="uim uim-favorite"></i>
                </span>
              </div>
            </div>
            <a href="#" class="product-name"
              >${item.name}</a
            >
            <p class="product-price">$ ${item.rootPrice}</p>
            <p class="product-price">$ ${item.price}</p>
          </div> 
        </div> 
      `;
    })}
  `;
  products.innerHTML = htmlProducts;
};

const productMain = () => {
  //Handle search
  handleSearchCss();
  // Ran dom Product
  ranDomProduct();
};

productMain();
