// Utility
const sliderLeft = document.querySelector(`.slider__btn--left`);
const sliderRight = document.querySelector(`.slider__btn--right`);
const sliderBtn = document.querySelector(`.slider__btn`);
const projectWindow = document.querySelector(`.project-container`);
const projectItemsContainer = document.querySelector(
  `.project-items-container`
);
const mainProjectCardContainer = document.querySelector(
  `.main-projectCard-container`
);
let projectItemsContainerWidth,
  mainProjectCardContainerWidth,
  mainProjectCardContainerinnerWidth,
  projectCardWidth,
  totalProjectCards;

function init() {
  changeProjectCardWidth();
  // prettier-ignore
  addProjects(HtmlCssProjectArray, liveHCProjectArray,rightHCProjectArray,htmlCssProjectContainer,totalProjectCards, hcleftArrow,hcrightArrow);
  // prettier-ignore
  addProjects( HtmlCssJsProjectArray, liveHCJProjectArray, rightHCJProjectArray, htmlCssJsProjectContainer, totalProjectCards,hcjleftArrow,hcjrightArrow );
  // prettier-ignore
  addProjects( JavaProjectArray,liveJProjectArray,rightJProjectArray,javaProjectContainer,totalProjectCards,jleftArrow,jrightArrow);
}

const moveElementToLeft = function (
  leftArray,
  liveArray,
  rightArray,
  projectContainer
) {
  if (leftArray.length !== 0) {
    rightArray.unshift(liveArray.pop());
    projectContainer.removeChild(projectContainer.lastElementChild);
    let liveElement = leftArray.pop();
    liveArray.unshift(liveElement);
    projectContainer.insertAdjacentHTML("afterbegin", liveElement);
  }
};

const moveElementToRight = function (
  leftArray,
  liveArray,
  rightArray,
  projectContainer
) {
  if (rightArray.length !== 0) {
    leftArray.push(liveArray.shift());
    projectContainer.removeChild(projectContainer.firstElementChild);
    let liveElement = rightArray.shift();
    liveArray.push(liveElement);
    projectContainer.insertAdjacentHTML("beforeend", liveElement);
  }
};

const showSliderArrow = function (
  leftArray,
  liveArray,
  rightArray,
  leftbutton,
  rightbutton
) {
  if (
    (leftArray.length + liveArray.length + rightArray.length) *
      projectCardWidth <
    mainProjectCardContainerinnerWidth
  ) {
    leftbutton.style.display = "none";
    rightbutton.style.display = "none";
  } else {
    leftbutton.style.display = "inline";
    rightbutton.style.display = "inline";
  }
};
// CalculateResizedWidth
const calcResizedWidth = function () {
  return (
    window.innerWidth -
    projectItemsContainerWidth -
    mainProjectCardContainerWidth
  );
};

function changeProjectCardWidth() {
  if (window.innerWidth === 375 || window.innerWidth === 360) {
    projectCardWidth = 290;
  } else if (window.innerWidth === 320) {
    projectCardWidth = 250;
  } else if (window.innerWidth === 280) {
    projectCardWidth = 215;
  } else {
    projectCardWidth = 332;
  }
  projectItemsContainerWidth =
    parseFloat(getComputedStyle(projectItemsContainer).paddingLeft) * 2;
  mainProjectCardContainerWidth =
    parseFloat(getComputedStyle(mainProjectCardContainer).paddingLeft) * 2;
  mainProjectCardContainerinnerWidth =
    window.innerWidth -
    projectItemsContainerWidth -
    mainProjectCardContainerWidth;
  totalProjectCards = Math.floor(
    mainProjectCardContainerinnerWidth / projectCardWidth
  );
}

window.addEventListener("resize", function () {
  changeProjectCardWidth();
  mainProjectCardContainerinnerWidth = calcResizedWidth();
  // prettier-ignore
  ActionOnProjectCardOnWindowResize(HtmlCssProjectArray, leftHCProjectArray,liveHCProjectArray,rightHCProjectArray,htmlCssProjectContainer,totalProjectCards,hcleftArrow,hcrightArrow);
  // prettier-ignore
  ActionOnProjectCardOnWindowResize(HtmlCssJsProjectArray, leftHCJProjectArray,liveHCJProjectArray,rightHCJProjectArray,htmlCssJsProjectContainer,totalProjectCards,hcjleftArrow,hcjrightArrow);
  // prettier-ignore
  ActionOnProjectCardOnWindowResize(JavaProjectArray, leftJProjectArray,liveJProjectArray,rightJProjectArray,javaProjectContainer,totalProjectCards,jleftArrow,jrightArrow);
});

// Event Delegation being used.
projectWindow.addEventListener("click", function (e) {
  if (e.target.closest(`.html-css-left`))
    moveElementToLeft(
      leftHCProjectArray,
      liveHCProjectArray,
      rightHCProjectArray,
      htmlCssProjectContainer
    );
  else if (e.target.closest(`.html-css-right`))
    moveElementToRight(
      leftHCProjectArray,
      liveHCProjectArray,
      rightHCProjectArray,
      htmlCssProjectContainer
    );
  else if (e.target.closest(`.html-css-js-left`))
    moveElementToLeft(
      leftHCJProjectArray,
      liveHCJProjectArray,
      rightHCJProjectArray,
      htmlCssJsProjectContainer
    );
  else if (e.target.closest(`.html-css-js-right`))
    moveElementToRight(
      leftHCJProjectArray,
      liveHCJProjectArray,
      rightHCJProjectArray,
      htmlCssJsProjectContainer
    );
  else if (e.target.closest(`.java-left`))
    moveElementToLeft(
      leftJProjectArray,
      liveJProjectArray,
      rightJProjectArray,
      javaProjectContainer
    );
  else if (e.target.closest(`.java-right`))
    moveElementToRight(
      leftJProjectArray,
      liveJProjectArray,
      rightJProjectArray,
      javaProjectContainer
    );
});

// sliderRight.addEventListener(`click`, function () {
//   if (rightHCProjectArray.length !== 0) {
//     leftHCProjectArray.push(liveHCProjectArray.shift());
//     mainProjectCardContainer.removeChild(
//       mainProjectCardContainer.firstElementChild
//     );
//     let liveElement = rightHCProjectArray.shift();
//     liveHCProjectArray.push(liveElement);
//     mainProjectCardContainer.insertAdjacentHTML("beforeend", liveElement);
//   }
// });

// sliderLeft.addEventListener(`click`, function () {

// });

const ActionOnProjectCardOnWindowResize = function (
  projectArray,
  leftArray,
  liveArray,
  rightArray,
  projectContainer,
  noOfElements,
  leftbutton,
  rightbutton
) {
  showSliderArrow(leftArray, liveArray, rightArray, leftbutton, rightbutton);

  if (liveArray.length > noOfElements) {
    let i = liveArray.length;
    while (i > noOfElements) {
      projectContainer.removeChild(projectContainer.lastElementChild);
      rightArray.unshift(liveArray.pop());
      i--;
    }
  } else if (liveArray.length < noOfElements) {
    if (rightArray.length !== 0 || leftArray.length !== 0) {
      let i = liveArray.length;
      while (i < noOfElements && i < projectArray.length) {
        if (rightArray.length === 0) {
          let addLiveElement = leftArray.pop();
          liveArray.unshift(addLiveElement);
          projectContainer.insertAdjacentHTML("afterbegin", addLiveElement);
        } else {
          let addLiveElement = rightArray.shift();
          liveArray.push(addLiveElement);
          projectContainer.insertAdjacentHTML("beforeend", addLiveElement);
        }
        i++;
      }
    }
  }
};

// const addHtmlCssProjects = function () {
//   if (HtmlCssProjectArray.length > totalProjectCards) {
//     sliderLeft.style.display = "inline";
//     sliderRight.style.display = "inline";
//   }
//   const limit =
//     HtmlCssProjectArray.length < totalProjectCards
//       ? HtmlCssProjectArray.length
//       : totalProjectCards;
//   for (let i = 0; i < limit; i++) {
//     let elementToBeLive = HtmlCssProjectArray[i];
//     liveHCProjectArray.push(elementToBeLive);
//     mainProjectCardContainer.insertAdjacentHTML("beforeend", elementToBeLive);
//   }
//   if (HtmlCssProjectArray.length > totalProjectCards)
//     for (let i = totalProjectCards; i < HtmlCssProjectArray.length; i++)
//       rightHCProjectArray.push(HtmlCssProjectArray[i]);
// };

// addHtmlCssProjects();

function addProjects(
  projectArray,
  liveArray,
  rightArray,
  projectContainer,
  noOfElements,
  leftbutton,
  rightbutton
) {
  if (
    projectArray.length * projectCardWidth >
    mainProjectCardContainerinnerWidth
  ) {
    leftbutton.style.display = `inline`;
    rightbutton.style.display = `inline`;
  }
  const limit =
    projectArray.length < noOfElements ? projectArray.length : noOfElements;
  for (let i = 0; i < limit; i++) {
    let elementToBeLive = projectArray[i];
    liveArray.push(elementToBeLive);
    projectContainer.insertAdjacentHTML("beforeend", elementToBeLive);
  }
  if (projectArray.length > noOfElements) {
    for (let i = noOfElements; i < projectArray.length; i++)
      rightArray.push(projectArray[i]);
  }
}
