(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const c="a7d2ec52ab2717b6be947c1334145223",l="https://api.themoviedb.org/3";async function y(){const s=`${l}/movie/popular?api_key=${c}&sort_by=release_date.desc&page=1`;return await(await fetch(s)).json()}async function h(){const s=`${l}/genre/movie/list?api_key=${c}`;return await(await fetch(s)).json()}let o=null;async function v(s){o&&o.abort(),o=new AbortController;const{genreId:r,page:a}=s,n=`${l}/discover/movie?api_key=${c}&with_genres=${r}&page=${a}`,t=await(await fetch(n,{signal:o.signal})).json();return o=null,t}const u="https://image.tmdb.org/t/p/w300";async function m(s){return s?`${u}${s}`:"./img/default_img.svg"}async function f(s,r){const{title:a,poster_path:n,vote_average:e}=s,t=await m(n),i=e===0?"no rating":Math.round(e*10)/10;return r({name:a,img:t,rating:i})}function p(s){const{img:r,name:a,rating:n}=s;return`<li class="card">
            <img
              class="card__img"
              src='${r||"./img/default_img.jpg"}'
              alt="img of ${a}"
            />
            <div class="card__main-info">
              <h3 class="card__title">${a}</h3>
              <div class="card__rating rating">
                <div class="rating__body">
                  <div style="width:${n?n/.1:0}px" class="rating__active"></div>
                </div>
                <p class="card__rating-value rating__value">${n}</p>
              </div>
            </div>
          </li>`}async function g(s,r,a=p){const n=r?await s(r):await s(),{results:e,total_results:t}=n;return{cards:await Promise.all(e.map(d=>f(d,a))),maxFilms:t}}class w{constructor(r){this.listCardsEl=r.querySelector(".cards-list"),this.max_films}async setCardsOfFilms(r,a,n){let e;try{const t=await g(r,a,n);this.listCardsEl.insertAdjacentHTML("beforeend",t.cards.join("")),this.max_films=t.maxFilms,e="ok"}catch{e="error"}return e}}const _=document.querySelector(".contentLoad-loaderWrapper");function b(){setTimeout(()=>{_.removeAttribute("active"),document.body.removeAttribute("lock")},1500)}export{w as F,v as a,h as b,y as f,m as g,b as r};
