import { html } from "../core.js";

function Carts(cart) {
  return html` ${cart.map((cart) => {
    return `
            <div class="shop-item">
                <img
                    class="item-img"
                    src="${cart.src}"
                    alt=""
                />
                <p class="item-name">${cart.name}</p>
                <p class="item-price">${cart.price}</p>
                <p class="item-price-display">${cart.price}</p>
                <div class="input-quantity">
                    <input type="number" class="input-box" id="input" value="1" />
                </div>
                <div class="delete-item">
                    <i class="uil uil-times delete-icon"></i>
                </div>
            </div>
        `;
  })}`;
}
export default Carts;
