const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = () => {
  // Header
  const navHeader = $(".header_nav");
  const headerLink = $$(".header-link");
  const itemLink = $$(".item-link");
  // Xu ly scroll của window
  window.addEventListener("scroll", () => {
    const yScroll = window.scrollY;
    //   Xử lý hover vào thẻ a
    for (let i = 0; i < headerLink.length; i++) {
      headerLink[i].onmouseover = () => {
        headerLink[i].style.color = "rgb(41, 41, 241)";
      };
      headerLink[i].onmouseout = () => {
        if (yScroll >= 36) {
          headerLink[i].style.color = "#0d0c22";
        } else {
          headerLink[i].style.color = "#fff";
        }
      };
    }

    // Xu lu scroll cho header
    if (yScroll >= 660) {
      console.log(navHeader.style);
      navHeader.style.opacity = "0";
    } else if (yScroll >= 36) {
      navHeader.style.opacity = "1";
      navHeader.style.backgroundColor = "#d7d7d9";
      navHeader.borderBottom = "1px solid #ccc";
      for (let i = 0; i < headerLink.length; i++) {
        headerLink[i].style.color = "#0d0c22";
        itemLink[i].classList.add("before_border_black");
      }
      //   0d0c22
    } else if (yScroll < 36) {
      navHeader.style.opacity = "1";
      navHeader.style.backgroundColor = "transparent";
      for (let i = 0; i < headerLink.length; i++) {
        itemLink[i].classList.remove("before_border_black");
        headerLink[i].style.color = "#fff";
      }
    }
  });
};

app();
