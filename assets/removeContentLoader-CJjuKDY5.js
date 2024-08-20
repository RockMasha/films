(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c="a7d2ec52ab2717b6be947c1334145223",l="https://api.themoviedb.org/3";async function _(){const r=`${l}/movie/popular?api_key=${c}&sort_by=release_date.desc&page=1`;return await(await fetch(r)).json()}async function v(){const r=`${l}/genre/movie/list?api_key=${c}`;return await(await fetch(r)).json()}let i=null;async function y(r){i&&i.abort(),i=new AbortController;const{genreId:a,page:s}=r,n=`${l}/discover/movie?api_key=${c}&with_genres=${a}&page=${s}`,t=await(await fetch(n,{signal:i.signal})).json();return i=null,t}const u="https://image.tmdb.org/t/p/w300";function f(r){return r?`${u}${r}`:"./img/default_img.svg"}function g(r,a){const{title:s,poster_path:n,vote_average:e}=r,t=f(n),o=e===0?"no rating":Math.round(e*10)/10;return a({name:s,img:t,rating:o})}function p(r){const{img:a,name:s,rating:n}=r;return`<li class="card">
            <img
              class="card__img"
              src='${a||"./img/default_img.jpg"}'
              alt="img of ${s}"
            />
            <div class="card__main-info">
              <h3 class="card__title">${s}</h3>
              <div class="card__rating rating">
                <div class="rating__body">
                  <div style="width:${n?n/.1:0}%" class="rating__active"></div>
                </div>
                <p class="card__rating-value rating__value">${n}</p>
              </div>
            </div>
          </li>`}async function h(r,a,s=p){const n=a?await r(a):await r(),{results:e,total_results:t}=n;return{cards:e.map(d=>g(d,s)),maxFilms:t}}const m=document.querySelector(".contentLoad-loaderWrapper");function b(){setTimeout(()=>{m.removeAttribute("active"),document.body.removeAttribute("lock")},1500)}export{y as a,v as b,h as c,_ as f,f as g,b as r};
