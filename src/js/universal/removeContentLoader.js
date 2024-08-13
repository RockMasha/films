const loadWrapper = document.querySelector(".contentLoad-loaderWrapper")

export function removeContentLoader() {
  loadWrapper.removeAttribute("active");
  document.body.removeAttribute("lock");
}
