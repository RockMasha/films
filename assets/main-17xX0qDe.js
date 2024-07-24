import{F as s,f as o,g as l,i as u,S as c}from"./swiper-bundle-uG9oL2dI.js";function m(t){const{img:e,name:r,rating:a}=t;return`<li class="card swiper-slide">
            <img
              class="card__img"
              src='${e||"./img/default_img.jpg"}'
              alt="img of ${r}"
            />
            <div class="card__main-info">
              <h3 class="card__title">${r}</h3>
              <div class="card__rating rating">
                <div class="rating__body">
                  <div class="rating__active"></div>
                </div>
                <p class="card__rating-value rating__value">${a}</p>
              </div>
            </div>
          </li>`}const i={popularSlider:document.querySelector(".swiper"),mostPopularFilm:{name:document.querySelector(".most-popular__film-name"),img:document.querySelector(".most-popular__img"),rating:document.querySelector(".most-popular-rating"),text:document.querySelector(".most-popular__text")}};async function p(){new s(i.popularSlider).setCardsOfFilms(o,!1,m)}async function d(){const t=await g();_(t),f(t.rating)}async function g(){const t=await o(),{poster_path:e,vote_average:r,title:a,overview:n}=t[0];return{srcOfImg:await l(e),rating:r,name:a,text:n}}function _(t){const{srcOfImg:e,name:r,text:a}=t;i.mostPopularFilm.img.src=e,i.mostPopularFilm.name.textContent=r,i.mostPopularFilm.text.textContent=a}function f(t){const e=document.querySelector(".most-popular-rating__value");e.textContent=Math.round(t*10)/10,u([i.mostPopularFilm.rating])}new c(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},loop:!0,touchRation:1.5,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:.5,eventsTarget:".swiper"},initialSlide:1,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!0},speed:700,spaceBetween:"50px",observeSlideChildren:!0,observer:!0,observeParents:!0,slidesPerView:4,slidesPerGroup:2});p();d();
