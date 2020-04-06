import allUiElements from "./allUiElements";

const { loadingClass } = allUiElements;

const loadingHtml = () => {
  return `<div class='${loadingClass}'><img src="images/refresh.svg"></div>`;
};

export const removeAllLoading = (parentClass) => {
  document
    .querySelectorAll(`.${parentClass} > .${loadingClass}`)
    .forEach((e) => document.querySelector(`.${parentClass}`).removeChild(e));
};
export const showLoading = (parent) => {
  parent.insertAdjacentHTML("beforeend", loadingHtml());
};
