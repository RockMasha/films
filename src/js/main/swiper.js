import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  navigation : {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  touchRation: 1.5,
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 0.5,
    eventsTarget: ".swiper",
  },
  initialSlide: 1,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  speed: 700,
  spaceBetween: "50px",
  observeSlideChildren: true,
  observer: true,
  observeParents: true,
  slidesPerView: 4,
  slidesPerGroup: 2,
});
