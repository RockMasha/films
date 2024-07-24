import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  touchRation: 0.3,
  grabCursor: true,
  mousewheel: {
    sensitivity: 0.35,
    eventsTarget: ".swiper",
  },
  initialSlide: 0,
  centeredSlides: true,
  speed: 5000,
  observeSlideChildren: true,
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  slidesPerGroup: 2,
  autoHeight: true,
  direction: "vertical",
  freeMode: true,
});
