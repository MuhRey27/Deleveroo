// Menu
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
  navbar.classList.toggle("active");
  const link = document.querySelectorAll(".nav-item");
  link.forEach((e) => {
    e.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
});

// Loading Menu
const loader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 3000);
});

const scrollTop = document.querySelector(".scrool-top");

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 300) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});
