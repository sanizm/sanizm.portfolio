const hello = document.querySelector(".hello");
const infiniteIntroFlip = document.querySelector(".infinite-intro-flip");
const MyName = document.querySelector(".My-name");
const Welcome = document.querySelector(".Welcome");
const portfolio = document.querySelector(".portfolio");

const flip = () => {
  setTimeout(() => {
    infiniteIntroFlip.style.transform = `rotateX(180deg) translate3d(0, 0, 0)`;
  }, 3000);
  setTimeout(() => {
    infiniteIntroFlip.style.transform = `rotateX(0deg) translate3d(0, 0, 0)`;
  }, 6000);

  // setTimeout(() => {}, 6100);
};
flip();
setInterval(flip, 6000);

// const addHtmlCssProjects = function (
//   projectArray,
//   liveArray,
//   rightArray,
//   projectContainer
// ) {
//   if (projectArray.length > noHtmlCssProject) {
//     sliderLeft.style.display = "inline";
//     sliderRight.style.display = "inline";
//   }
//   const limit =
//     projectArray.length < noHtmlCssProject
//       ? projectArray.length
//       : noHtmlCssProject;
//   for (let i = 0; i < limit; i++) {
//     let elementToBeLive = projectArray[i];
//     liveArray.push(elementToBeLive);
//     projectContainer.insertAdjacentHTML("beforeend", elementToBeLive);
//   }
//   if (projectArray.length > noHtmlCssProject) {
//     for (let i = noHtmlCssProject; i < projectArray.length; i++)
//       rightArray.push(projectArray[i]);
//   }
// };

// addHtmlCssProjects(
//     projectArray,
//     liveArray,
//     rightArray,
//     projectContainer
//   )
