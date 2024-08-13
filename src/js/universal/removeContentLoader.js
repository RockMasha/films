const loadWrapper = document.querySelector(".contentLoad-loaderWrapper");

export function removeContentLoader() {
  setTimeout(() => {
    loadWrapper.removeAttribute("active");
    document.body.removeAttribute("lock");
  }, 1500);
}
