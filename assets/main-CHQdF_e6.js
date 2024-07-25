import{F as l,f as n,g as u,S as c}from"./swiper-bundle-t_bLrQZw.js";function m(e){const{img:a,name:i,rating:t}=e;return`<li class="card swiper-slide">
            <img
              class="card__img"
              src='${a||"./img/default_img.jpg"}'
              alt="img of ${i}"
            />
            <div class="card__main-info">
              <h3 class="card__title">${i}</h3>
              <div class="card__rating rating">
                <div class="rating__body">
                  <div style="width:${t?t/.1:0}px" class="rating__active"></div>
                </div>
                <p class="card__rating-value rating__value">${t}</p>
              </div>
            </div>
          </li>`}const r={mainLink:document.querySelector(".header-nav__link_films"),popularSlider:document.querySelector(".swiper"),mostPopularFilm:{name:document.querySelector(".most-popular__film-name"),img:document.querySelector(".most-popular__img"),rating:document.querySelector(".most-popular-rating"),ratingValue:document.querySelector(".most-popular-rating__value"),ratingStar:document.querySelector(".most-popular-rating__active"),text:document.querySelector(".most-popular__text")}};async function p(){new l(r.popularSlider).setCardsOfFilms(n,!1,m)}async function d(){const e=await g();_(e),f(e.rating)}async function g(){const e=await n(),{results:a}=e,{poster_path:i,vote_average:t,title:o,overview:s}=a[0];return{srcOfImg:await u(i),rating:t,name:o,text:s}}function _(e){const{srcOfImg:a,name:i,text:t}=e;r.mostPopularFilm.img.src=a,r.mostPopularFilm.name.textContent=i,r.mostPopularFilm.text.textContent=t}function f(e){r.mostPopularFilm.ratingValue.textContent=Math.round(e*10)/10,r.mostPopularFilm.ratingStar.style.width=`${e/.1}%`}new c(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},loop:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:.35,eventsTarget:".swiper"},autoplay:{delay:2e3,disableOnInteraction:!0},speed:500,spaceBetween:"50px",observeSlideChildren:!0,observer:!0,observeParents:!0,slidesPerView:4,slidesPerGroup:2,freeMode:!0});function v(){r.mainLink.setAttribute("active","")}p();d();v();
