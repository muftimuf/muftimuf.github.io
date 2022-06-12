// Efek Parallax
type = "text/javascript" > document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".efek-parallax").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px`;
  });
}
//]]>

// Spin Logo while Scroll
window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let image = document.getElementById("asterisk-logo");
  image.style.transform = "rotate(" + window.pageYOffset/5 + "deg)";
}

// Button follow cursor while hover by Codegrid
(function () {
  const link = document.querySelectorAll(".hover-this");

  const animateit = function (e) {
    const span = this.querySelector("span");
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      move = 10,
      xMove = (x / width) * (move * 2) - move,
      yMove = (y / height) * (move * 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === "mouseleave") span.style.transform = "";
  };

  link.forEach((b) => b.addEventListener("mousemove", animateit));
  link.forEach((b) => b.addEventListener("mouseleave", animateit));
})();

// Smooth Page Scrolling
var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}