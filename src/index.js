import { container } from "./projects/InfiniteScroll";
import { scrollContainer } from "./projects/InfiniteScroll/scroll";

window.onload = () => {
  const root = document.querySelector("#root");

  root.appendChild(scrollContainer);
};
