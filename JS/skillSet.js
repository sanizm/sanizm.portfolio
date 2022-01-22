const skillSetContainer = document.querySelector(".skillSetContainer");
const ssCard1 = document.querySelector(".ssCard-1");
const ssCard2 = document.querySelector(".ssCard-2");
const ssCard3 = document.querySelector(".ssCard-3");
const ssCard4 = document.querySelector(".ssCard-4");
const ssCard5 = document.querySelector(".ssCard-5");
const ssCard6 = document.querySelector(".ssCard-6");
const ssCard7 = document.querySelector(".ssCard-7");
const ssCard8 = document.querySelector(".ssCard-8");
const ssCard9 = document.querySelector(".ssCard-9");
const HTML = document.querySelector(".HTML");
const CSS = document.querySelector(".CSS");
const SASS = document.querySelector(".SASS");
const C = document.querySelector(".C");
const JAVA = document.querySelector(".JAVA");
const MySQL = document.querySelector(".MySQL");
const REACT = document.querySelector(".REACT");
const MERN = document.querySelector(".MERN");
const JS = document.querySelector(".JS");
const htmlSlider = document.querySelector(".htmlSlider");
const cssSlider = document.querySelector(".cssSlider");
const sassSlider = document.querySelector(".sassSlider");
const cSlider = document.querySelector(".cSlider");
const javaSlider = document.querySelector(".javaSlider");
const MySQLSlider = document.querySelector(".MySQLSlider");
const reactSlider = document.querySelector(".reactSlider");
const mernSlider = document.querySelector(".mernSlider");
const jsSlider = document.querySelector(".jsSlider");

skillSetContainer.addEventListener("mouseover", function (e) {
  if (e.target.closest(".ssCard-1")) {
    setTimeout(() => {
      HTML.textContent = "77%";
      HTML.style.color = "rgb(14, 109, 54)";
    }, 500);
    ssCard1.style.border = "1px solid #6bd54d";
    htmlSlider.style.transform = "translateY(23%)";
    htmlSlider.style.right = "23%";
  } else if (e.target.closest(".ssCard-2")) {
    setTimeout(() => {
      CSS.textContent = "72%";
      CSS.style.color = "rgb(14, 109, 54)";
    }, 500);
    ssCard2.style.border = "1px solid #6bd54d";

    cssSlider.style.transform = "translateY(28%)";
    cssSlider.style.right = "28%";
  } else if (e.target.closest(".ssCard-3")) {
    setTimeout(() => {
      SASS.textContent = "66%";
      SASS.style.color = "rgb(14, 109, 54)";
    }, 500);
    ssCard3.style.border = "1px solid #6bd54d";

    sassSlider.style.transform = "translateY(34%)";
    sassSlider.style.right = "34%";
  } else if (e.target.closest(".ssCard-4")) {
    setTimeout(() => {
      C.textContent = "53%";
      C.style.color = "rgb(14, 109, 54)";
    }, 500);
    ssCard4.style.border = "1px solid #6bd54d";

    cSlider.style.transform = "translateY(47%)";
    cSlider.style.right = "47%";
  } else if (e.target.closest(".ssCard-5")) {
    setTimeout(() => {
      JAVA.textContent = "83%";
      JAVA.style.color = "rgb(14, 109, 54)";
    }, 500);
    ssCard5.style.border = "1px solid #6bd54d";

    javaSlider.style.transform = "translateY(17%)";
    javaSlider.style.right = "17%";
  } else if (e.target.closest(".ssCard-6")) {
    setTimeout(() => {
      MySQL.textContent = "59%";
      MySQL.style.color = "rgb(14, 109, 54)";
    }, 500);
    ssCard6.style.border = "1px solid #6bd54d";

    MySQLSlider.style.transform = "translateY(41%)";
    MySQLSlider.style.right = "41%";
  } else if (e.target.closest(".ssCard-7")) {
    setTimeout(() => {
      REACT.textContent = "55%";
      REACT.style.color = "rgb(14, 109, 54)";
    }, 500);
    ssCard7.style.border = "1px solid #6bd54d";

    reactSlider.style.transform = "translateY(45%)";
    reactSlider.style.right = "45%";
  } else if (e.target.closest(".ssCard-8")) {
    setTimeout(() => {
      MERN.textContent = "42%";
      MERN.style.color = "rgb(14, 109, 54)";
    }, 500);
    ssCard8.style.border = "1px solid #6bd54d";

    mernSlider.style.transform = "translateY(58%)";
    mernSlider.style.right = "58%";
  } else if (e.target.closest(".ssCard-9")) {
    setTimeout(() => {
      JS.textContent = "81%";
      JS.style.color = "rgb(14, 109, 54)";
    }, 500);
    ssCard9.style.border = "1px solid #6bd54d";

    jsSlider.style.transform = "translateY(19%)";
    jsSlider.style.right = "19%";
  }
});

ssCard1.addEventListener("mouseleave", function (e) {
  setTimeout(() => {
    HTML.textContent = "HTML";
    HTML.style.color =
      getComputedStyle(HTML).getPropertyValue("--color-font-1");
  }, 500);
  ssCard1.style.border = "1px solid transparent";
  htmlSlider.style.transform = "translateY(100%)";
  htmlSlider.style.right = "100%";
});

ssCard2.addEventListener("mouseleave", function (e) {
  setTimeout(() => {
    CSS.textContent = "CSS";
    CSS.style.color = getComputedStyle(CSS).getPropertyValue("--color-font-1");
  }, 500);
  ssCard2.style.border = "1px solid transparent";
  cssSlider.style.transform = "translateY(100%)";
  cssSlider.style.right = "100%";
});

ssCard3.addEventListener("mouseleave", function (e) {
  setTimeout(() => {
    SASS.textContent = "SASS";

    SASS.style.color =
      getComputedStyle(SASS).getPropertyValue("--color-font-1");
  }, 500);
  ssCard3.style.border = "1px solid transparent";
  sassSlider.style.transform = "translateY(100%)";
  sassSlider.style.right = "100%";
});

ssCard4.addEventListener("mouseleave", function (e) {
  setTimeout(() => {
    C.textContent = "C";

    C.style.color = getComputedStyle(C).getPropertyValue("--color-font-1");
  }, 500);
  ssCard4.style.border = "1px solid transparent";
  cSlider.style.transform = "translateY(100%)";
  cSlider.style.right = "100%";
});

ssCard5.addEventListener("mouseleave", function (e) {
  setTimeout(() => {
    JAVA.textContent = "JAVA";

    JAVA.style.color =
      getComputedStyle(JAVA).getPropertyValue("--color-font-1");
  }, 500);
  ssCard5.style.border = "1px solid transparent";
  javaSlider.style.transform = "translateY(100%)";
  javaSlider.style.right = "100%";
});

ssCard6.addEventListener("mouseleave", function (e) {
  setTimeout(() => {
    MySQL.textContent = "MySQL";

    MySQL.style.color =
      getComputedStyle(MySQL).getPropertyValue("--color-font-1");
  }, 500);
  ssCard6.style.border = "1px solid transparent";
  MySQLSlider.style.transform = "translateY(100%)";
  MySQLSlider.style.right = "100%";
});

ssCard7.addEventListener("mouseleave", function (e) {
  setTimeout(() => {
    REACT.textContent = "REACT";

    REACT.style.color =
      getComputedStyle(REACT).getPropertyValue("--color-font-1");
  }, 500);
  ssCard7.style.border = "1px solid transparent";
  reactSlider.style.transform = "translateY(100%)";
  reactSlider.style.right = "100%";
});

ssCard8.addEventListener("mouseleave", function (e) {
  setTimeout(() => {
    MERN.textContent = "MERN";

    MERN.style.color =
      getComputedStyle(MERN).getPropertyValue("--color-font-1");
  }, 500);
  ssCard8.style.border = "1px solid transparent";
  mernSlider.style.transform = "translateY(100%)";
  mernSlider.style.right = "100%";
});

ssCard9.addEventListener("mouseleave", function (e) {
  setTimeout(() => {
    JS.textContent = "JS";

    JS.style.color = getComputedStyle(JS).getPropertyValue("--color-font-1");
  }, 500);
  ssCard9.style.border = "1px solid transparent";
  jsSlider.style.transform = "translateY(100%)";
  jsSlider.style.right = "100%";
});
