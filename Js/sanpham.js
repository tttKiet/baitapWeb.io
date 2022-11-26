const productMain = () => {
  //Handle search
  const searchIcon = $(".search-icon");
  const search = $(".search");
  const groupSearch = $(".group-search");
  searchIcon.onclick = () => {
    groupSearch.style.display = "flex";
  };
};

productMain();
