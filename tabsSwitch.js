// JavaScript to add progress-like switching effect
const navItems = document.querySelectorAll(".navbar__menu .navbar__link");
const navLine = document.querySelector(".navbar__menu .navbar__link::after");

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Remove 'active' class from all items
    navItems.forEach((el) => el.classList.remove("active"));
    // Add 'active' class to the hovered item
    this.classList.add("active");
  });
});
