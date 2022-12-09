const login = (form) => {
  const mailDn = document.querySelector(".mail-dn");
  const passDn = document.querySelector(".passDn");
  const repassDn = document.querySelector(".repassDn");
  const mfpClose = document.querySelector(".mfp-close");

  if (passDn.value != repassDn.value) {
    toast({
      title: "Đăng ký thất bại!",
      type: "error",
      massage: "Nhập lại mật khẩu không đúng",
      duration: 4000,
    });
    repassDn.focus();
  } else {
    const user = {
      email: mailDn.value,
      password: passDn.value,
      avt: "../assets/imgs/item-chrismas.jpg",
    };

    let userStorage = window.localStorage.getItem("user");
    if (userStorage) {
      let users = [...JSON.parse(userStorage), user];
      console.log("log", users);
      window.localStorage.setItem("user", JSON.stringify(users));
    } else {
      window.localStorage.setItem("user", JSON.stringify([user]));
    }
    toast({
      title: "Đăng ký thành công!",
      type: "success",
      massage: "Đang lưu dữ liệu",
      duration: 2000,
    });
    setInterval(() => {
      mfpClose.click();
    }, 2000);
  }

  return false;
};
