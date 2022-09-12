import { container } from "./projects/InfiniteScroll";

window.onload = () => {
  const root = document.querySelector("#root");

  root.appendChild(container);
};
