export function getOriginalCard(info) {
  const { img, name, rating } = info;

  return `<li class="card">
            <img
              class="card__img"
              src='${img ? img : "./img/default_img.jpg"}'
              alt="img of ${name}"
            />
            <h3 class="card__title">${name}</h3>
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
              <div class="card__rating-value rating__value">${rating}</div>
            </div>
          </li>`;
}
