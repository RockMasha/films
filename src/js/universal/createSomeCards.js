import { createCardOfFilm } from "./createCardOfFilm";
import { getOriginalCard } from "./templateCardFilm/getOriginalCard";

export async function createSomeCards(
  request,
  infoOfRequest = false,
  templateCard = getOriginalCard
) {
  const infoOfFilms = await request(infoOfRequest);
  const cards = await Promise.all(
    infoOfFilms.map((item) => createCardOfFilm(item, templateCard))
  );
  return cards;
}
