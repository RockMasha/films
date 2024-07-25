import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/bundle";

export const swiper = new Swiper(".swiper", {
  touchRation: 0.3,
  grabCursor: true,
  mousewheel: {
    sensitivity: 0.35,
    eventsTarget: ".swiper",
  },
  initialSlide: 2,
  centeredSlides: true,
  speed: 5000,
  slidesPerView: 5,
  slidesPerGroup: 1,
  direction: "vertical",
  freeMode: true,
});
