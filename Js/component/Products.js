import { html } from "../core.js";
import { connect } from "../store.js";

const connector = connect();
function Products(products) {
  return html` ${products.productStore.map((item) => {
    return `
                    <div data-id="${item.id}" class="product">
                        <div class="product-content">
                                <div class="product-img">
                                <img src="${item.src}" />
                                </div>
                                <div class="product-btns">
                                <button type="button" class="btn-cart" >
                                    Thêm vào giỏ
                                    <span><i class="uil uil-plus"></i></span>
                                </button>
                                <button type="button" class="btn-buy">
                                    <a href="./chitietsp.html" class="details-item"> Xem chi tiết</a>
                                    <span><i class="uil uil-shopping-cart"></i></span>
                                </button>
                                </div>
                        </div>
                
                        <div class="product-info">
                            <div class="product-info-top">
                            <h2 class="sm-title">Đánh giá</h2>
                            <div class="rating">
                                <span class="countStar">${item.star}</span>
                                <span>
                                <i class="uis uis-favorite"></i>
                                </span>
                            </div>
                            </div>
                            <span  class="product-name"
                            >${item.name}</span
                            >
                            <p class="product-price">$ ${item.rootPrice}</p>
                            <p class="product-price">$ ${item.price}</p>
                        </div>
                        </div>
                `;
  })}`;
}

export default connector(Products);
