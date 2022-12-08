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
                <p class="item-price">${cart.price} VND</p>
                <div class="input-quantity">
                    <button class="btn-modify" id="decrement">
                    <i class="uil uil-minus"></i>
                    </button>
                    <input type="number" class="input-box" id="input" value="1" />
                    <button class="btn-modify" id="increment">
                    <i class="uil uil-plus"></i>
                    </button>
                </div>
            </div>
        `;
  })}`;
}
export default Carts;
