import "./styles.css";

const container = document.createElement("div");
const box = document.createElement("div");
const wrapper = document.createElement("div");

container.className = "container";
box.className = "box";
wrapper.className = "wrapper";
// draggable 속성이 true일 때 drag를 할 수 있음.
box.draggable = true;

wrapper.style.marginTop = "150px";

container.appendChild(box);
container.appendChild(wrapper);

box.addEventListener("dragstart", () => {
  console.log("drag start");
});

box.addEventListener("drag", () => {
  console.log("drag!!");
});

box.addEventListener("dragend", (e) => {
  console.log("drag end");
});

wrapper.addEventListener("dragenter", () => {
  console.log("drag enter");
});

wrapper.addEventListener("drop", () => {
  console.log("drag drop");
});

export default container;
