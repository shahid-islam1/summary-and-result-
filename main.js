import "./style.scss";

import Products from "./data.json";
const summary = document.querySelector("div.summary");

if (summary) {
  Products.forEach(({ category, score, icon, color, bgColor }) => {
    summary.innerHTML =
      summary.innerHTML +
      `<div class="summary-child" style="color: ${color}; background-color: ${bgColor};">
          <div class="category">
            <img src="${icon}" />
            <p>${category}</p>
          </div>
          <div class="score">
            <p>${score} / 100</p>
          </div>
      </div>`;
  });
}
