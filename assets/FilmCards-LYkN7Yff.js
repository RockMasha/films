(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const o="a7d2ec52ab2717b6be947c1334145223",c="https://api.themoviedb.org/3";async function p(){const a=`${c}/movie/popular?api_key=${o}&sort_by=release_date.desc&page=1`;return(await(await fetch(a)).json()).results}async function _(){const a=`${c}/genre/movie/list?api_key=${o}`;return await(await fetch(a)).json()}async function y(a){const{genreId:e,page:n}=a,s=`${c}/discover/movie?api_key=${o}&with_genres=${e}&page=${n}`;return(await(await fetch(s)).json()).results}const l="https://image.tmdb.org/t/p/w300";async function d(a){return a?`${l}${a}`:"./img/default_img.svg"}async function u(a,e){const{title:n,poster_path:s,vote_average:t}=a,r=await d(s),i=t===0?"no rating":Math.round(t*10)/10;return e({name:n,img:r,rating:i})}function g(a){const{img:e,name:n,rating:s}=a;return`<li class="card">
            <img
              class="card__img"
              src='${e||"./img/default_img.jpg"}'
              alt="img of ${n}"
            />
            <div class="card__main-info">
              <h3 class="card__title">${n}</h3>
              <div class="card__rating rating">
                <div class="rating__body">
                  <div class="rating__active"></div>
                </div>
                <p class="card__rating-value rating__value">${s}</p>
              </div>
            </div>
          </li>`}async function f(a,e,n=g){const s=e?await a(e):await a();return await Promise.all(s.map(r=>u(r,n)))}function m(a){let e;for(const t of a)e=t,n();function n(){const r=e.querySelector(".rating__value").textContent;r!=="no rating"&&s(r)}function s(t){const r=e.querySelector(".rating__active");r.style.width=`${t/.1}%`}}class v{constructor(e){this.element=e}async setCardsOfFilms(e,n,s){const t=await f(e,n,s);this.element.insertAdjacentHTML("beforeend",t.join(""));const r=this.element.querySelectorAll(".rating");m(r)}}export{v as F,y as a,_ as b,p as f,d as g,m as i};
