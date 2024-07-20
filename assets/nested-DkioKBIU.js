var g=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var d=(t,e,s)=>(g(t,e,"read from private field"),s?s.call(t):e.get(t)),a=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},_=(t,e,s,i)=>(g(t,e,"write to private field"),i?i.call(t,s):e.set(t,s),s);var m=(t,e,s)=>(g(t,e,"access private method"),s);import{i as y,a as F,c as G,b as I}from"./api-CKPx_f9i.js";const n={genresList:document.querySelector(".genres__list"),genresMovies:document.querySelector(".genres__movies-list"),moreFilmsBox:document.querySelector(".genres__movies-more")};function L(t){const{img:e,name:s,rating:i}=t;return`<li class="card">
            <img
              class="card__img"
              src='${e||"./img/default_img.jpg"}'
              alt="img of ${s}"
            />
            <h3 class="card__title">${s}</h3>
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
              <div class="card__rating-value rating__value">${i}</div>
            </div>
          </li>`}var r,c,u,o,v;class O{constructor(e){a(this,c);a(this,o);a(this,r,void 0);this.page=0,this.element=e,this.genresId}async setCardsOnGenres(e){this.setGenresId(e),!m(this,c,u).call(this)&&(this.element.innerHTML="",this.resetPage(),this.setCardsOfFilms())}async setCardsOfFilms(e){this.nextPage();const s=await m(this,o,v).call(this,e);this.element.insertAdjacentHTML("beforeend",s.join(""));const i=this.element.querySelectorAll(".rating");y(i)}setGenresId(e){const s=e.dataset.genresId;_(this,r,this.genresId),this.genresId=s}nextPage(){this.page+=1}resetPage(){this.page=0}}r=new WeakMap,c=new WeakSet,u=function(){return d(this,r)===this.genresId},o=new WeakSet,v=async function(e=L){const{genresId:s,page:i}=this,h=await F(s,i);return await Promise.all(h.map(p=>G(p,e)))};let f=new O(n.genresMovies);function b(t){const e=t.target.closest(".genres__item");e&&(f.setCardsOnGenres(e),n.moreFilmsBox.querySelector(".genres__bth-more")||C(),A(e))}let l="";function A(t){l!==t&&(l&&l.removeAttribute("active"),l=t,t.setAttribute("active",""))}function C(){n.moreFilmsBox.innerHTML='<button class="genres__bth-more">20 more movies</button>'}function x(){f.setCardsOfFilms()}async function B(){const s=(await I()).genres.map(i=>M(i));n.genresList.innerHTML=s.join("")}function M(t){const{id:e,name:s}=t;return`<li class="genres__item" data-genres-id="${e}">
            <p class="genres-item__text">${s}</p>
          </li>
  `}B();n.genresList.addEventListener("click",b);n.moreFilmsBox.addEventListener("click",x);
