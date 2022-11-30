const html = ([first, ...strings], ...values) => {
  return values
    .reduce((initial, cur) => initial.concat(cur, strings.shift()), [first])
    .filter((x) => (x && x !== true) || x === 0)
    .join("");
};

const initProduct = [
  {
    id: 1,
    name: "Cái bàn học",
    src: "../assets/imgs/3.jpg",
    description: "Đây là mô tả cảu cái bàn",
    type: "DO_NHA_BEP",
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
    price: "160000",
    star: "4",
  },
  {
    id: 3,
    name: "Cái bàn học",
    src: "../assets/imgs/background_header.jpg",
    description: "Đây là mô tả cảu cái bàn",
    type: "DO_NHA_BEP",
    rootPrice: "208000",
    price: "160000",
    star: "4",
  },
  {
    id: 3,
    name: "Cái Ghe học",
    src: "../assets/imgs/anh1.jpg",
    description: "Đây là mô tả cảu cái bàn",
    type: "DO_NHA_BEP",
    rootPrice: "408000",
    price: "160000",
    star: "5",
  },
];

export { html };
export default initProduct;
