import{F as s,f as o,g as l,S as u}from"./swiper-bundle-DZT8d7oe.js";function c(t){const{img:i,name:a,rating:e}=t;return`<li class="card swiper-slide">
            <img
              class="card__img"
              src='${i||"./img/default_img.jpg"}'
              alt="img of ${a}"
            />
            <div class="card__main-info">
              <h3 class="card__title">${a}</h3>
              <div class="card__rating rating">
                <div class="rating__body">
                  <div style="width:${e?e/.1:0}px" class="rating__active"></div>
                </div>
                <p class="card__rating-value rating__value">${e}</p>
              </div>
            </div>
          </li>`}const r={popularSlider:document.querySelector(".swiper"),mostPopularFilm:{name:document.querySelector(".most-popular__film-name"),img:document.querySelector(".most-popular__img"),rating:document.querySelector(".most-popular-rating"),ratingValue:document.querySelector(".most-popular-rating__value"),ratingStar:document.querySelector(".most-popular-rating__active"),text:document.querySelector(".most-popular__text")}};async function m(){new s(r.popularSlider).setCardsOfFilms(o,!1,c)}async function p(){const t=await d();g(t),_(t.rating)}async function d(){const t=await o(),{poster_path:i,vote_average:a,title:e,overview:n}=t[0];return{srcOfImg:await l(i),rating:a,name:e,text:n}}function g(t){const{srcOfImg:i,name:a,text:e}=t;r.mostPopularFilm.img.src=i,r.mostPopularFilm.name.textContent=a,r.mostPopularFilm.text.textContent=e}function _(t){r.mostPopularFilm.ratingValue.textContent=Math.round(t*10)/10,r.mostPopularFilm.ratingStar.style.width=`${t/.1}%`}new u(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},loop:!0,touchRation:1.5,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:.5,eventsTarget:".swiper"},initialSlide:1,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!0},speed:700,spaceBetween:"50px",observeSlideChildren:!0,observer:!0,observeParents:!0,slidesPerView:4,slidesPerGroup:2});function v(){r.mainLink.setAttribute("active","")}m();p();v();
