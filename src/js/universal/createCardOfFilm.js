import { getSrcImg } from "./getSrcImg";

export function createCardOfFilm(info, getCard) {
  const { title: name, poster_path: src, vote_average: ratingVal } = info;
  const img = getSrcImg(src);
  const rating =
    ratingVal === 0 ? "no rating" : Math.round(ratingVal * 10) / 10;

  return getCard({ name, img, rating });
}
