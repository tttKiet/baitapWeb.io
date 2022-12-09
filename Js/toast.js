const toast = ({ type, title, massage, duration }) => {
  const toast = document.getElementById("toast");

  const closes = document.querySelectorAll(".toast__icon_close");

  const Parent = (e, u) => {
    return e.closest(u);
  };

  if (closes) {
    closes.forEach((element) => {
      element.onclick = (e) => {
        const parent = Parent(e.target, ".toast-cus");
        if (parent) parent.style.display = "none";
      };
    });
  }
  if (toast) {
    let toastMes = document.createElement("div");
    const idset = setTimeout(() => {
      toast.removeChild(toastMes);
    }, duration + 500);

    toast.onclick = (e) => {
      if (
        e.target.closest(".toast__icon_close") &&
        toastMes.parentElement == toast
      ) {
        toast.removeChild(toastMes);
        clearTimeout(idset);
      }
    };

    const icon = {
      success: "uis uis-check icon-toast",
      error: "uis uis-exclamation-octagon icon-toast",
    };

    toastMes.classList.add("toast-cus", `toast-${type}`);
    const delay = (duration / 1000).toFixed(2);
    toastMes.style.animation = `showToast 0.4s ease-in-out, out 0.4s linear ${delay}s forwards`;

    toastMes.innerHTML = `
                <div class="toast__icon">
                    <i class="${icon[type]}"></i>
                </div>
            
                <div class="toast__massage">
                    <h3 class="toast__massage-title">${title}</h3>
                    <p class="toast__massage-content">${massage}</p>
                </div>
            
                <div class="toast__icon_close">
                    <i class="uil uil-times icon-toast"></i>
                </div>
             `;
    toast.appendChild(toastMes);
  }
};

// toast({
//   type: "success",
//   title: "Đã thêm!",
//   massage: "Vào giỏ hàng để xem sản phẩm",
//   duration: 5000,
// });
