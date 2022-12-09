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
      name: "Bếp Gas Mini",
      src: "../assets/imgs/bếp gas mini.jpg",
      description:
        "Bếp mini siêu nhỏ gồm bếp và hộp nhựa rất tiện lợi để mang đi dã ngoại",
      type: "DO_NHA_BEP",
      rootPrice: "300000",
      price: "253600",
      star: "5",
    },
    {
      id: 2,
      name: "Nồi cơm điện Mini",
      src: "../assets/imgs/nồi cơm điện mini.png",
      description: "Nồi Cơm Điện Mini Đa Năng",
      type: "DO_NHA_BEP",
      rootPrice: "600000",
      price: "425000",
      star: "5",
    },
    {
      id: 3,
      name: "Bình ấm siêu tốc",
      src: "../assets/imgs/ảnh ấm đun siêu tốc.jpg",
      description:
        "Điều khiển cơ học đơn giản, thuận tiện chỉ 1 nút bấm đun sôi và 1 nút bấm mở nắp",
      type: "DO_NHA_BEP",
      rootPrice: "319000",
      price: "110000",
      star: "4.5",
    },
    {
      id: 4,
      name: "Bàn gấp đa năng",
      src: "../assets/imgs/BÀN HỌC MINI.jpg",
      description:
        "Đặc điểm nổi bật của bàn học gấp gọn thông minh có khe cắm ipad\
      Rất là cần cho con để con đọc sạch vở vẽ vời khi mang ra phòng khách\
      Cần cho bản thân khi làm việc với quyển sổ và cái laptop!\
      Dành cho học sinh, sinh viên, công chức, các bé mẫu giáo tập tô tập viết\
      Có khe cắm ipad, điện thoại.",
      type: "DUNG_CU",
      rootPrice: "110000",
      price: "58000",
      star: "4",
    },
    {
      id: 5,
      name: "Sổ SKETCHBOOK - Sổ tay vẽ chì",
      src: "../assets/imgs/Sổ SKETCHBOOK.jpg",
      description:
        "Sketchbook-dòng sổ vẽ chì với 100 trang giấy kem 130gsm, chất kem ăn chì, không kỵ tẩy. Đây là sản phẩm chuyên vẽ chì đầu tiên tại STHM từ ngày mới thành lập. Sản phẩm đã có mặt trên thị trường từ năm 2016 và là sản phẩm được yêu thích nhất tại STHM, vì không chỉ có mức giá tốt mà chất lượng sổ cũng ngày một hoàn thiện hơn. Tất cả sổ sketchbook đều được khoan từng lỗ một thay vì đục lỗ, giúp cho từng bộ ruột thẳng tắp và vuông vức các góc cạnh. Sổ được chèn thêm một tờ lót giấy kraft có thông tin sản phẩm ở phía trước. Mặt sau của sổ được ép kim đồng logo STHM, và quyển sổ có logo này mới là sản phẩm chính hãng STHM sản xuất.",
      type: "DUNG_CU",
      rootPrice: "60000",
      price: "42000",
      star: "5",
    },
    {
      id: 6,
      name: "Dây đeo thẻ dọc cho sinh viên",
      src: "../assets/imgs/dây đeo thẻ SV.jpg",
      description:
        "Thẻ đeo có bề mặt trong suốt giúp dễ hiển thị thông tin tấm trên thẻ nhân viên. Nó vừa giúp bạn bảo quản thẻ sạch sẽ, không bị rách hay trầy xước vừa tạo nét chỉnh chu trong bộ trang phục",
      type: "DUNG_CU",
      rootPrice: "40000",
      price: "25000",
      star: "5",
    },
    {
      id: 7,
      name: "Tranh vải treo tường cỡ lớn",
      src: "../assets/imgs/TRANH VẢI DECOR.jpg",
      description:
        "Địa chỉ sản xuất: Hộ kinh doanh Đinh Văn Toàn. Địa chỉ: U7 L09 khu đô thị Đô Nghĩa - Hà Đông - Hà Nội.\
        Hướng dẫn sử dụng: Đóng 2 đinh treo được tặng kèm vào tường sau đó treo tranh lên là có thể sử dụng được.",
      type: "DO_TRANG_TRI",
      rootPrice: "200000",
      price: "180000",
      star: "5",
    },
    {
      id: 8,
      name: "Xốp dán tường 3D khổ 70x77cm",
      src: "../assets/imgs/miếng dán xốp.jpg",
      description:
        "Anh chị lưu ý mỗi đơn hàng đặt được có 80 tấm 1 đơn nhé vì hàng to lên đặt nhiều shop không gói được",
      type: "DO_TRANG_TRI",
      rootPrice: "18000",
      price: "6900",
      star: "5",
    },
    {
      id: 9,
      name: "Giá treo tủ kệ quần áo 3 trong 1",
      src: "../assets/imgs/gia-treo-quan-ao-tot-nhat.jpg",
      description:
        "Giá treo quần áo-kệ treo quần áo rất thời trang bắt mắt sẽ làm đẹp thêm cho không gian căn phòng của bạn.\
        Gía treo quần áo thiết kế thêm 1 tầng có các thanh sắt ngang để đồ, ngoài việc treo quần áo còn có thể để được rất nhiều vật dụng lên tầng dưới của kệ áo như : Giày dép, túi sách, ba lô...\
        Sản phẩm giá treo quần áo-kệ treo quần áo thiết kế lắp ghép bằng các vít  rất linh hoạt và chắc chắn, người dùng có  thể tháo ra dễ dàng khi vận chuyển đi nơi khác và lắp ghép lại một cách nhanh chóng  giá treo quần áo.",
      type: "DO_TRANG_TRI",
      rootPrice: "350000",
      price: "299000",
      star: "5",
    },
  ],
};

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
            return item.type == "DO_TRANG_TRI";
          });

          return {
            productStore: [...productNew],
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
