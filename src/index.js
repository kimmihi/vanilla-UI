import ImageList from "./projects/ImageLazyLoading/index.js";
import { getCatImages } from "./api/index.js";
window.onload = async () => {
  try {
    const root = document.querySelector("#root");
    const response = await getCatImages("q");
    const { data } = response;

    new ImageList({ $target: root, images: data });
  } catch (e) {
    console.log(e);
  }
};
