let memu = document.getElementById("menu-bars");
let navbar = document.querySelector(".navbar");
const getStarted = document.getElementById("get-started");
const authBtns = document.querySelector(".auth-btn");

const isLoggedIn = localStorage.getItem("token");
// const isLoggedIn = true;

if (isLoggedIn) {
  authBtns.style.display = "none";
  getStarted.style.display = "block";
} else {
  authBtns.style.display = "block";
  getStarted.style.display = "none";
}

memu.addEventListener("click", () => {
  memu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  memu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".review-slider", {
  // effect: "coverflow",
  grabCursor: true,
  // centeredSlides: true,
  // slidesPerView: "auto",
  // coverflowEffect: {
  //   rotate: 0,
  //   stretch: 0,
  //   depth: 100,
  //   modifier: 1,
  //   slideShadows: true,
  // },
  slidesPerView: 1,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
