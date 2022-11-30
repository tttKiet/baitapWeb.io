import { SORT_TYPE, SORT_STAR, SORT_PRICE, SEARCH } from "./action.js";

const initProduct = {
  products: [
    {
      id: 1,
      name: "Cái bàn học",
      src: "../assets/imgs/3.jpg",
      description: "Đây là mô tả cảu cái bàn",
      type: "DUNG_CU",
      rootPrice: "200000",
      price: "180000",
      star: "4",
    },
    {
      id: 2,
      name: "Cái bàn học",
      src: "../assets/imgs/bg4.jpg",
      description: "Đây là mô tả cảu cái bàn",
      type: "DO_NHA_BEP",
      rootPrice: "200000",
      price: "260000",
      star: "4",
    },
    {
      id: 3,
      name: "Cái bàn học",
      src: "../assets/imgs/background_header.jpg",
      description: "Đây là mô tả cảu cái bàn",
      type: "DO_NHA_BEP",
      rootPrice: "888000",
      price: "190000",
      star: "4",
    },
    {
      id: 4,
      name: "Cái Ghe học",
      src: "../assets/imgs/anh1.jpg",
      description: "Đây là mô tả cảu cái bàn",
      type: "DO_NHA_BEP",
      rootPrice: "408000",
      price: "160000",
      star: "5",
    },
  ],
};

const reducer = ({ products = initProduct, action, args }) => {
  switch (action) {
    case SORT_TYPE: {
      let productCur = products.products;
      const [value] = [...args];
      let productNew;
      switch (value) {
        case "1": {
          productNew = productCur.filter((item) => {
            return item.type == "DO_NHA_BEP";
          });

          return {
            products: [...productNew],
          };
        }

        case "2": {
          productNew = productCur.filter((item) => {
            return item.type == "DUNG_CU";
          });

          return {
            products: [...productNew],
          };
        }

        case "3": {
          productNew = productCur.filter((item) => {
            return item.type == "DO_CONG_NGHE";
          });

          return {
            products: [...productNew],
          };
        }
      }
      return products;
    }
    case SORT_STAR: {
      let productCur = products.products;
      let productNew = productCur.sort((a, b) => {
        return parseFloat(a.star) > parseFloat(b.star) ? -1 : 1;
      });

      return {
        products: [...productNew],
      };
    }
    case SORT_PRICE: {
      let productCur = products.products;
      let productNew = productCur.sort((a, b) => {
        console.log(parseFloat(a.price));
        return parseFloat(a.price) > parseFloat(b.price) ? 1 : -1;
      });

      return {
        products: [...productNew],
      };
    }
    case SEARCH: {
      let productCur = products.products;
      const [value] = [...args];
      let productNew;
      return {
        products: [...productNew],
      };
    }
    default: {
      return products;
    }
  }
};

export default reducer;
