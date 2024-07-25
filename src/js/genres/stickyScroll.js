import { root } from "./rootOfGenresPage";

export function stickyScrollForListTypesEl() {
  const scrollTop = window.scrollY;
  const listTypesElHeight = root.genresTypesList.scrollHeight;
  const maxScrollTop = listTypesElHeight - window.innerHeight + 75;

  if (scrollTop < maxScrollTop) {
    root.genresTypesList.style.transform = `translateY(-${scrollTop}px)`;
  } else {
    root.genresTypesList.style.transform = `translateY(-${maxScrollTop}px)`;
  }
}
