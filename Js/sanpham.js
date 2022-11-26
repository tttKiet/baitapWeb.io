const productMain = () => {
  //Handle search
  const searchIcon = $(".search-icon");
  const search = $(".search");
  const rmIcon = $(".rm-icon");
  const groupSearch = $(".group-search");
  searchIcon.onclick = () => {
    groupSearch.style.display = "flex";
    searchIcon.style.display = "none";
  };

  rmIcon.onclick = () => {
    searchIcon.style.display = "block";
    groupSearch.style.display = "none";
  };
};

productMain();
