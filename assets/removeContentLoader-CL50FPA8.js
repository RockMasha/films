(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const o="a7d2ec52ab2717b6be947c1334145223",c="https://api.themoviedb.org/3";async function _(){const r=`${c}/movie/popular?api_key=${o}&sort_by=release_date.desc&page=1`;return await(await fetch(r)).json()}async function y(){const r=`${c}/genre/movie/list?api_key=${o}`;return await(await fetch(r)).json()}async function h(r){const{genreId:t,page:a}=r,i=`${c}/discover/movie?api_key=${o}&with_genres=${t}&page=${a}`;return await(await fetch(i)).json()}const d="https://image.tmdb.org/t/p/w300";async function u(r){return r?`${d}${r}`:"./img/default_img.svg"}async function m(r,t){const{title:a,poster_path:i,vote_average:e}=r,s=await u(i),n=e===0?"no rating":Math.round(e*10)/10;return t({name:a,img:s,rating:n})}function f(r){const{img:t,name:a,rating:i}=r;return`<li class="card">
            <img
              class="card__img"
              src='${t||"./img/default_img.jpg"}'
              alt="img of ${a}"
            />
            <div class="card__main-info">
              <h3 class="card__title">${a}</h3>
              <div class="card__rating rating">
                <div class="rating__body">
                  <div style="width:${i?i/.1:0}px" class="rating__active"></div>
                </div>
                <p class="card__rating-value rating__value">${i}</p>
              </div>
            </div>
          </li>`}async function p(r,t,a=f){const i=t?await r(t):await r(),{results:e,total_results:s}=i;return{cards:await Promise.all(e.map(l=>m(l,a))),maxFilms:s}}class v{constructor(t){this.listCardsEl=t.querySelector(".cards-list"),this.max_films}async setCardsOfFilms(t,a,i){const e=await p(t,a,i);this.listCardsEl.insertAdjacentHTML("beforeend",e.cards.join("")),this.max_films=e.maxFilms}}const g=document.querySelector(".contentLoad-loaderWrapper");function w(){setTimeout(()=>{g.removeAttribute("active"),document.body.removeAttribute("lock")},1500)}export{v as F,h as a,y as b,_ as f,u as g,w as r};
