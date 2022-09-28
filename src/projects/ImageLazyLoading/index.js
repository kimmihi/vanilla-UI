class ImageList {
  constructor({ $target, images }) {
    const container = document.createElement("div");
    container.className = "Cat-List";
    this.target = $target;
    this.images = images;
    this.container = container;
    $target.appendChild(this.container);

    this.observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          // 교차 되었을 때만
          if (entry.isIntersecting) {
            // 교차되는 순간에 img의 src에 url 삽입
            entry.target.src = entry.target.dataset.src;
            // 구독해지
            // 안그러면 다시 위로 스크롤 올릴 때 다시 콜백 실행됨
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px 30px 0px",
        threshold: 0.2,
      }
    );
    this.render();
  }

  render() {
    if (this.images) {
      this.images.forEach((image) => {
        const img = document.createElement("img");
        img.className = "Cat-Img";
        img.style.width = "500px";
        img.style.height = "500px";
        img.setAttribute("data-src", image.url);
        this.container.appendChild(img);
        this.observer.observe(img);
      });
    }
  }
}

export default ImageList;
