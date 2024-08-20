export function getOriginalCard(info) {
  const { img, name, rating } = info;
  
  return `<li class="card">
            <img
              class="card__img"
              src='${img ? img : "./img/default_img.jpg"}'
              alt="img of ${name}"
            />
            <div class="card__main-info">
              <h3 class="card__title">${name}</h3>
              <div class="card__rating rating">
                <div class="rating__body">
                  <div style="width:${
                    rating ? rating / 0.1 : 0
                  }%" class="rating__active"></div>
                </div>
                <p class="card__rating-value rating__value">${rating}</p>
              </div>
            </div>
          </li>`;
}
