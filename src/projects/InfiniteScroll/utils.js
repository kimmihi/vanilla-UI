export const createBox = (container, size, count) => {
  for (let i = 0; i < size; i++) {
    const box = document.createElement("div");
    box.className = "box";
    box.innerText = count * 10 + (i + 1);
    container.appendChild(box);
  }
};
