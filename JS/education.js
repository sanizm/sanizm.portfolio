const webSlides = document.querySelector("#webslides");
let tick = false; // currently no task in process.

webSlides.addEventListener("scroll", function (e) {
  console.log(
    webSlides.scrollTop,
    webSlides.scrollHeight,
    webSlides.clientHeight
  );
});
