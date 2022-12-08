import {
  SORT_TYPE,
  SORT_STAR,
  SORT_PRICE,
  SEARCH,
  ADD_STORE,
} from "./action.js";

const initProduct = {
  productStore: [
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
      name: "tu Lạnh",
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

var store = [];

const reducer = ({ products = initProduct, action, args }) => {
  switch (action) {
    case SORT_TYPE: {
      let productCur = products.productStore;

      const [value] = [...args];
      let productNew;
      switch (value) {
        case "1": {
          productNew = productCur.filter((item) => {
            return item.type == "DO_NHA_BEP";
          });

          return {
            productStore: [...productNew],
            store: products.store,
          };
        }

        case "2": {
          productNew = productCur.filter((item) => {
            return item.type == "DUNG_CU";
          });

          return {
            productStore: [...productNew],
            store: products.store,
          };
        }

        case "3": {
          productNew = productCur.filter((item) => {
            return item.type == "DO_CONG_NGHE";
          });

          return {
            ...products,
            store: products.store,
          };
        }
      }
      return products;
    }
    case SORT_STAR: {
      let productCur = products.productStore;
      let productNew = productCur.sort((a, b) => {
        return parseFloat(a.star) > parseFloat(b.star) ? -1 : 1;
      });

      return {
        productStore: [...productNew],
        store: products.store,
      };
    }
    case SORT_PRICE: {
      let productCur = products.productStore;
      let productNew = productCur.sort((a, b) => {
        console.log(parseFloat(a.price));
        return parseFloat(a.price) > parseFloat(b.price) ? 1 : -1;
      });

      return {
        productStore: [...productNew],
        store: products.store,
      };
    }
    case SEARCH: {
      let productCur = products.productStore;
      const [value] = [...args];

      let productNew = productCur.filter((p) => {
        let rootvalue = p.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let SsearchValue = value
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        let isResult = rootvalue
          .toLowerCase()
          .search(SsearchValue.toLowerCase());
        return isResult != -1;
      });
      return {
        productStore: [...productNew],
        store: products.store,
      };
    }
    case ADD_STORE: {
      let [value] = [...args];
      console.log(value);

      let store = window.localStorage.getItem("store");
      // console.log("json", store);
      if (store) {
        store = JSON.parse(store);
        window.localStorage.setItem("store", JSON.stringify([...store, value]));
      } else {
        window.localStorage.setItem("store", JSON.stringify(value));
      }

      return products;
    }

    default: {
      return products;
    }
  }
};

export { initProduct };

export default reducer;
