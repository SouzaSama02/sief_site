function menuShow() {
  const menuMobile = document.querySelector(".mobile-menu");
  const icon = document.querySelector(".icon");

  menuMobile.classList.toggle("open");
  icon.src = menuMobile.classList.contains("open")
    ? "img/icons/x-lg.svg"
    : "img/icons/list.svg";
}
