import "./styles.css";
import { createBox } from "./utils";

let count = 0;

const scrollContainer = document.createElement("div");
scrollContainer.className = "container";

createBox(scrollContainer, 10, 0);

document.addEventListener("scroll", (e) => {
  const scrollY = window.scrollY;
  const innerHeight = window.innerHeight;
  const bodyHeight = document.body.offsetHeight;

  if (scrollY + innerHeight >= bodyHeight) {
    createBox(scrollContainer, 10, count);
    count += 1;
  }
});

export { scrollContainer };
