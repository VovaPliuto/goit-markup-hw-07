(() => {
  const refs = {
    openMobileBtn: document.querySelector("[data-mobile-open]"),
    closeMobileBtn: document.querySelector("[data-mobile-close]"),
    mobile: document.querySelector("[data-mobile]"),
  };

  refs.openMobileBtn.addEventListener("click", toggleMobile);
  refs.closeMobileBtn.addEventListener("click", toggleMobile);

  function toggleMobile() {
    refs.mobile.classList.toggle("is-hidden");
  }
})();

const refs = {
  btnFilter: document.querySelector(".portfolio-filter"),
  cardsList: document.querySelectorAll(".portfolio .item"),
};

refs.btnFilter.addEventListener("click", onFilterBtnClick);

function onFilterBtnClick(e) {
  // console.log(e.target.nodeName);
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  refs.cardsList.forEach((el) => el.removeAttribute("style"));

  const filterValue = e.target.dataset.id;
  if (filterValue === "all") {
    return refs.cardsList.forEach((el) => el.removeAttribute("style"));
  }
  refs.cardsList.forEach((el) => {
    if (el.dataset.id !== filterValue) {
      el.style.display = "none";
    }
  });
}

console.log(refs.cardsList);
