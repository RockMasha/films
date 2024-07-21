(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();const o="a7d2ec52ab2717b6be947c1334145223",c="https://api.themoviedb.org/3";async function p(){const i=`${c}/movie/popular?api_key=${o}&sort_by=release_date.desc&page=1`;return(await(await fetch(i)).json()).results}async function _(){const i=`${c}/genre/movie/list?api_key=${o}`;return await(await fetch(i)).json()}async function v(i){const{genreId:a,page:r}=i,n=`${c}/discover/movie?api_key=${o}&with_genres=${a}&page=${r}`;return(await(await fetch(n)).json()).results}const l="https://image.tmdb.org/t/p/w300";async function u(i){return i?`${l}${i}`:"./img/default_img.svg"}async function d(i,a){const{title:r,poster_path:n,vote_average:t}=i,e=await u(n),s=t===0?"no rating":Math.round(t*10)/10;return a({name:r,img:e,rating:s})}function g(i){const{img:a,name:r,rating:n}=i;return`<li class="card">
            <img
              class="card__img"
              src='${a||"./img/default_img.jpg"}'
              alt="img of ${r}"
            />
            <h3 class="card__title">${r}</h3>
            <div class="card__rating rating">
              <div class="rating__body">
                <div class="rating__active"></div>
                <div class="rating__list">
                  <input type="radio" class="rating__item" value="1" name="rating">
                  <input type="radio" class="rating__item" value="2" name="rating">
                  <input type="radio" class="rating__item" value="3" name="rating">
                  <input type="radio" class="rating__item" value="4" name="rating">
                  <input type="radio" class="rating__item" value="5" name="rating">
                </div>
              </div>
              <div class="card__rating-value rating__value">${n}</div>
            </div>
          </li>`}async function f(i,a=!1,r=g){const n=await i(a);return await Promise.all(n.map(e=>d(e,r)))}function m(i){let a;for(let t=0;t<i.length;t++)a=i[t],r();function r(){const e=a.querySelector(".rating__value").textContent;e!=="no rating"&&n(e)}function n(t){const e=a.querySelector(".rating__active");e.style.width=`${t/.1}%`}}class y{constructor(a){this.element=a}async setCardsOfFilms(a,r,n){const t=await f(a,r,n);this.element.insertAdjacentHTML("beforeend",t.join(""));const e=this.element.querySelectorAll(".rating");m(e)}}export{y as F,v as a,_ as b,p as f,u as g,m as i};
