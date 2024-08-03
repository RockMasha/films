var v=(e,s,t)=>{if(!s.has(e))throw TypeError("Cannot "+t)};var T=(e,s,t)=>(v(e,s,"read from private field"),t?t.call(e):s.get(e)),r=(e,s,t)=>{if(s.has(e))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(e):s.set(e,t)},_=(e,s,t,i)=>(v(e,s,"write to private field"),i?i.call(e,t):s.set(e,t),t);var n=(e,s,t)=>(v(e,s,"access private method"),t);import{S as P,F as C,a as M,b as q}from"./swiper-bundle-8fZQihk-.js";const o={genresTypesList:document.querySelector(".genres__list"),genresMoviesBlock:document.querySelector(".genres__movies"),headerGenresLink:document.querySelector(".header-nav__link__genres"),scrollToTopBtn:document.querySelector(".genres-btn-up"),BtnTopProgressLine:document.querySelector(".genres-btn-up__line")};window.onscroll=A;o.scrollToTopBtn.addEventListener("click",H);function A(){if(N()){x(),G();return}j()}function H(){window.scrollTo({top:0,behavior:"smooth"})}function G(){const e=D();o.BtnTopProgressLine.style.strokeDasharray=`${e}, 100`}function N(){return document.body.scrollTop>100||document.documentElement.scrollTop>100}function x(){o.scrollToTopBtn.style.display="block"}function j(){o.scrollToTopBtn.style.display="none"}function D(){const{scrollTop:e,scrollHeight:s,clientHeight:t}=document.documentElement,i=e||document.body.scrollTop,O=s-t;return i/O*100}new P(".swiper",{touchRation:.3,grabCursor:!0,mousewheel:{sensitivity:.35,eventsTarget:".swiper"},initialSlide:2,centeredSlides:!0,speed:5e3,slidesPerView:5,slidesPerGroup:1,direction:"vertical",freeMode:!0});function $(){o.headerGenresLink.setAttribute("active","")}var c,g,w,m,k,a,B,p,I,d,y,f,F,b,E,l,h;class R extends C{constructor(t){super(t);r(this,g);r(this,m);r(this,a);r(this,p);r(this,d);r(this,f);r(this,b);r(this,l);r(this,c,void 0);this.fatherElement=t,this.btn,this.page=1,this.genresId,this.isNoBtn=!0}async setCardsOnGenres(t){this.isNoBtn?this.isNoBtn=!1:n(this,a,B).call(this),this.setGenresId(t),!n(this,g,w).call(this)&&(this.listCardsEl.innerHTML="",this.resetPage(),await this.setCardsOfFilms(),n(this,m,k).call(this))}async setCardsOfFilms(){this.nextPage(),(this.page!==1||n(this,l,h).call(this))&&(n(this,p,I).call(this),n(this,f,F).call(this)),await super.setCardsOfFilms(M,{genreId:this.genresId,page:this.page}),n(this,l,h).call(this)&&(n(this,a,B).call(this),this.isNoBtn=!0),this.page!==1&&!n(this,l,h).call(this)&&(n(this,d,y).call(this),n(this,b,E).call(this)),G()}setGenresId(t){const i=t.dataset.genresId;_(this,c,this.genresId),this.genresId=i}nextPage(){this.page+=1}resetPage(){this.page=0}}c=new WeakMap,g=new WeakSet,w=function(){return T(this,c)===this.genresId},m=new WeakSet,k=function(){this.fatherElement.insertAdjacentHTML("beforeend",'<button class="genres__bth-more">More movies</button>'),this.btn=document.querySelector(".genres__bth-more"),n(this,d,y).call(this)},a=new WeakSet,B=function(){this.btn.remove()},p=new WeakSet,I=function(){this.btn.removeEventListener("click",L)},d=new WeakSet,y=function(){this.btn.addEventListener("click",L)},f=new WeakSet,F=function(){this.btn.insertAdjacentHTML("beforeend",U())},b=new WeakSet,E=function(){this.btn.querySelector(".loader").remove()},l=new WeakSet,h=function(){return this.page*20>=this.max_films};function U(){return'<div class="loader"></div>'}let S=new R(o.genresMoviesBlock);function V(e){const s=e.target.closest(".genres__item");s&&(S.setCardsOnGenres(s),z(s))}let u="";function z(e){u!==e&&(u&&u.removeAttribute("active"),u=e,e.setAttribute("active",""))}function L(){S.setCardsOfFilms()}async function J(){const t=(await q()).genres.map(i=>K(i));o.genresTypesList.innerHTML=t.join("")}function K(e){const{id:s,name:t}=e;return`<li class="genres__item swiper-slide" data-genres-id="${s}">
            <button class="genres-item__btn">${t}</button>
          </li>
  `}$();J();o.genresTypesList.addEventListener("click",V);
