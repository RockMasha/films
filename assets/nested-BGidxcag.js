var v=(e,s,t)=>{if(!s.has(e))throw TypeError("Cannot "+t)};var p=(e,s,t)=>(v(e,s,"read from private field"),t?t.call(e):s.get(e)),i=(e,s,t)=>{if(s.has(e))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(e):s.set(e,t)},G=(e,s,t,n)=>(v(e,s,"write to private field"),n?n.call(e,t):s.set(e,t),t);var r=(e,s,t)=>(v(e,s,"access private method"),t);import{S as T,F as O,a as S,b as k}from"./swiper-bundle-DZT8d7oe.js";new T(".swiper",{touchRation:.3,grabCursor:!0,mousewheel:{sensitivity:.35,eventsTarget:".swiper"},initialSlide:0,centeredSlides:!0,speed:5e3,observeSlideChildren:!0,observer:!0,observeParents:!0,slidesPerView:1,slidesPerGroup:2,autoHeight:!0,direction:"vertical",freeMode:!0});const f={genresTypesList:document.querySelector(".genres__list"),genresMoviesBlock:document.querySelector(".genres__movies"),headerGenresLink:document.querySelector(".header-nav__link__genres")};function M(){f.headerGenresLink.setAttribute("active","")}var a,d,L,c,y,h,F,u,I,o,b,g,w,m,B;class A extends O{constructor(t){super(t);i(this,d);i(this,c);i(this,h);i(this,u);i(this,o);i(this,g);i(this,m);i(this,a,void 0);this.fatherElement=t,this.btn,this.page=1,this.genresId,this.isFirstTime=!0}async setCardsOnGenres(t){this.isFirstTime?this.isFirstTime=!1:r(this,h,F).call(this),this.setGenresId(t),!r(this,d,L).call(this)&&(this.listCardsEl.innerHTML="",this.resetPage(),await this.setCardsOfFilms(),r(this,c,y).call(this))}async setCardsOfFilms(){this.page!==0&&(r(this,u,I).call(this),r(this,g,w).call(this)),this.nextPage(),await super.setCardsOfFilms(S,{genreId:this.genresId,page:this.page}),this.page!==1&&(r(this,o,b).call(this),r(this,m,B).call(this))}setGenresId(t){const n=t.dataset.genresId;G(this,a,this.genresId),this.genresId=n}nextPage(){this.page+=1}resetPage(){this.page=0}}a=new WeakMap,d=new WeakSet,L=function(){return p(this,a)===this.genresId},c=new WeakSet,y=function(){this.fatherElement.insertAdjacentHTML("beforeend",'<button class="genres__bth-more">More movies</button>'),this.btn=document.querySelector(".genres__bth-more"),r(this,o,b).call(this)},h=new WeakSet,F=function(){this.btn.remove()},u=new WeakSet,I=function(){this.btn.removeEventListener("click",_)},o=new WeakSet,b=function(){this.btn.addEventListener("click",_)},g=new WeakSet,w=function(){this.btn.insertAdjacentHTML("beforeend",E())},m=new WeakSet,B=function(){this.btn.querySelector(".loader").remove()};function E(){return'<div class="loader"></div>'}let C=new A(f.genresMoviesBlock);function P(e){const s=e.target.closest(".genres__item");s&&(C.setCardsOnGenres(s),q(s))}let l="";function q(e){l!==e&&(l&&l.removeAttribute("active"),l=e,e.setAttribute("active",""))}function _(){C.setCardsOfFilms()}async function H(){const t=(await k()).genres.map(n=>j(n));f.genresTypesList.innerHTML=t.join("")}function j(e){const{id:s,name:t}=e;return`<li class="genres__item swiper-slide" data-genres-id="${s}">
            <button class="genres-item__btn">${t}</button>
          </li>
  `}M();H();f.genresTypesList.addEventListener("click",P);
