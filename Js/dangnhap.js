const USERS =
  '[\
    { "email": "buikiet@gmail.com", "password": "hibuikiet", "avt": "../assets/imgs/item-chrismas.jpg" },\
    { "email": "chaunghi@gmail.com", "password": "hichaunghi", "avt": "../assets/imgs/item-chrismas.jpg" }\
    ]';

const register = (form) => {
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  let isSure = false;
  let indexUser;

  const checkValidateUser = () => {
    let user = email.value;
    let pass = password.value;

    let userRoot = JSON.parse(USERS);
    let userStorage = window.localStorage.getItem("user");
    if (userStorage) {
      userRoot = [...userRoot, ...JSON.parse(userStorage)];
    }

    for (let i = 0; i < userRoot.length; i++) {
      if (userRoot[i].email == user && userRoot[i].password == pass) {
        isSure = true;
        indexUser = i;
        toast({
          title: "Đăng nhập thành công!",
          type: "success",
          massage: "Chuyển trang sau vào giây",
          duration: 2500,
        });

        setTimeout(() => {
          form.submit();
        }, 2500);
        break;
      }
    }

    if (!isSure) {
      toast({
        title: "Đăng nhập thất bại!",
        type: "error",
        massage: "Sai tên tài khoản hoặc mật khẩu",
        duration: 4000,
      });
      email.focus();
    } else {
      window.localStorage.setItem(
        "curUser",
        JSON.stringify(userRoot[indexUser])
      );
    }
  };

  checkValidateUser();
  return false;
};
