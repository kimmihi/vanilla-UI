/**
 * InterSectionObserver API를 활용하여 무한 스크롤 구현하기
 *
 */

import "./styles.css";

const createBox = (container, size) => {
  for (let i = 0; i < size; i++) {
    const box = document.createElement("div");
    box.className = "box";
    container.appendChild(box);
  }
};

const body = document.querySelector("body");

export const container = document.createElement("div");
const end = document.createElement("div");
container.className = "container";
end.className = "end";

body.appendChild(end);

const observer = new IntersectionObserver(
  () => {
    createBox(container, 10);
  },
  {
    threshold: 1.0,
  }
);

observer.observe(end);
