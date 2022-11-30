import { attach } from "./store.js";
import Products from "./component/Products.js";
import { SORT_PRICE, SORT_STAR, SORT_TYPE } from "./action.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const searchIcon = $(".search-icon");
const rmIcon = $(".rm-icon");
const error = $(".search ~ .error");

// func handleCSs
const handleSearchCss = () => {
  // search

  const groupSearch = $(".group-search");
  searchIcon.onclick = () => {
    groupSearch.style.display = "flex";
    searchIcon.style.display = "none";
  };

  rmIcon.onclick = () => {
    searchIcon.style.display = "block";
    groupSearch.style.display = "none";
    error.classList.toggle("active");
    error.innerText = "";
  };

  // btn-filter
  const btnFilter = $(".btn-filter");
  const menuFilter = $(".menu_filter");

  btnFilter.onclick = (e) => {
    if (menuFilter.style.display != "block") {
      menuFilter.style.display = "block";
    } else if (!e.target.matches(".btn-type")) {
      menuFilter.style.display = "none";
    }
  };

  window.addEventListener("click", (e) => {
    const isBtnFilter = e.target.closest(".btn-filter");
    if (!isBtnFilter) {
      menuFilter.style.display = "none";
    }
  });
};
const products = $(".products");
// func ramdomProduct
const ranDomProduct = () => {
  attach(Products, products);
};

// func btn menu
const handleBtnMenu = () => {
  const btnType = $(".btn-type");
  const btnPrice = $(".btn-price");
  const btnStar = $(".btn-star");
  // input search
  const Search = $(".search");
  const iconSearchOk = $(".icon_search-ok");

  iconSearchOk.onclick = () => {
    const value = Search.value.trim();
    if (value.length == 0) {
      error.innerText = "Bạn chưa điền dữ liệu tìm kiếm!";
      if (error.classList.contains("active")) error.classList.remove("active");
      else {
        error.classList.add("active");
      }
    } else {
      error.classList.toggle("active");
      error.innerText = "";
    }
  };

  btnPrice.onclick = () => {
    dispatch(SORT_PRICE);
  };

  btnStar.onclick = () => {
    dispatch(SORT_STAR);
  };

  btnType.onclick = (e) => {
    // console.log(e.target.dataset.type);
    if (!e.target.matches(".btn-type")) {
      const value = e.target.dataset.type;
      dispatch(SORT_TYPE, value);
    } else {
      console.log("test");
      e.preventDefault();
    }
  };
};

// func main
const productMain = () => {
  //Handle search
  handleSearchCss();
  // ranDomProduct();
  ranDomProduct();
  // Handle btn menu
  handleBtnMenu();
};

productMain();
