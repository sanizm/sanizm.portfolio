//Dark Mode Utility
const optionMenu = document.querySelector(".option-menu");
const adjustIcon = document.querySelector(".fa-adjust");
const defaultColorHTML = `<div class="menu-item default-color default-color-tint">
<i class="fas fa-tint"></i>
</div>`;
let defaultTintLive = false;
let isDarkModeEnabled = false;
let isColorModeEnabled = false;
let currentLiveColor = "default";
let rotateAdjustIcon = 180;
// localStorage.setItem("Theme", "light");
// localStorage.setItem("colorTheme", "default");
////////////////////////////////////////////////////////////////////
//body
const body = document.querySelector("body");
//Header
const headBar = document.querySelector(".head-bar");
//Main container that contanis loader, intro part, menu windows
const mainContainer = document.querySelector(".main-container");
// First half and second half of intro and menu window
const mainInfoSizing = document.querySelector(".main-info-sizing");
//Introduction card
const introFrameContainer = document.querySelector(".intro-frame-container");
// Menu windows
const menuLinks = document.querySelectorAll(".menu-link");
//Footer
const mainFooter = document.querySelector(".main-footer");

// Project Container and its elements
// line 22 commented because already defined
// const projectContainer = document.querySelector(".project-container");
//Project Card
const projectCards = document.querySelectorAll(".project-card");

// AboutMe Container and its elements
// line 28 commented because already defined
// const aboutMeContainer = document.querySelector('.aboutMe-container');
const aboutHeadingElements = document.querySelectorAll(".about-head");
const myIntro = document.querySelector(".my-intro");
const passionCards = document.querySelectorAll(".passion-card");
const ssCards = document.querySelectorAll(".ssCard");

// collaborate container and its elements
// line 36 commented because already defined
// const collaborateContainer = document.querySelector(".collaborate-container");
const thankContainer = document.querySelector(".thank-container");
const thankMessage = document.querySelector(".thank-message");
const contactContainer = document.querySelector(".contact-container");
// line 41 commented because already defined
const formContainer = document.querySelector(".form-container");

//Education Container and contents
const EduIntros = document.querySelectorAll(".edu-intro");

// Timeline Container
// line 48 commented because already declared
// const myTimeline = document.querySelector(".my-timeline");
const timelineHeader = document.querySelector(".timeline-header");
const timelineUL = document.querySelector("ul");
const timelineCardContainer = document.querySelectorAll(
  ".timeline-card-container"
);

// Resume Container
const resumeContainer = document.querySelector(`.user-resume`);

// Education Container
// const webslidesZoomed = document.querySelector("#webslides-zoomed");

const setLocalStorageContent = function (key, value) {
  localStorage.setItem(key, value);
};

const toggleDarkMode = function (toggledClass) {
  body.classList.toggle(toggledClass);
  headBar.classList.toggle(toggledClass);
  optionMenu.classList.toggle(toggledClass);
  mainContainer.classList.toggle(toggledClass);
  mainInfoSizing.classList.toggle(toggledClass);
  introFrameContainer.classList.toggle(toggledClass);
  menuLinks.forEach((menuLink) => {
    menuLink.classList.toggle(toggledClass);
  });
  mainFooter.classList.toggle(toggledClass);

  // Project Container
  projectContainer.classList.toggle(toggledClass);
  projectCards.forEach((projectCard) => {
    projectCard.classList.toggle(toggledClass);
  });

  // AboutMe Container
  aboutMeContainer.classList.toggle(toggledClass);
  aboutHeadingElements.forEach((aboutHeadingElement) => {
    aboutHeadingElement.classList.toggle(toggledClass);
  });
  myIntro.classList.toggle(toggledClass);
  passionCards.forEach((passionCard) => {
    passionCard.classList.toggle(toggledClass);
  });
  ssCards.forEach((ssCard) => {
    ssCard.classList.toggle(toggledClass);
  });
  collaborateContainer.classList.toggle(toggledClass);
  thankContainer.classList.toggle(toggledClass);
  thankMessage.classList.toggle(toggledClass);
  contactContainer.classList.toggle(toggledClass);
  formContainer.classList.toggle(toggledClass);

  // Education Container
  EduIntros.forEach((eduIntro) => {
    eduIntro.classList.toggle(toggledClass);
  });

  // timeline container
  myTimeline.classList.toggle(toggledClass);
  timelineHeader.classList.toggle(toggledClass);
  timelineUL.classList.toggle(toggledClass);
  timelineCardContainer.forEach((tcc) => {
    tcc.classList.toggle(toggledClass);
  });
  resumeContainer.classList.toggle(toggledClass);
  // webslidesZoomed.classList.toggle(toggledClass);
};

const toggleColorUtility = function (currentColor) {
  if (isDarkModeEnabled) {
    if (!isColorModeEnabled) {
      toggleDarkMode(`${currentColor}-mode`);
      currentLiveColor = currentColor;
      isColorModeEnabled = true;
      setLocalStorageContent("colorTheme", currentLiveColor);
      optionMenu.insertAdjacentHTML("beforeend", defaultColorHTML);
      defaultTintLive = true;
    } else {
      toggleDarkMode(`${currentLiveColor}-mode`);
      toggleDarkMode(`${currentColor}-mode`);
      currentLiveColor = currentColor;
      setLocalStorageContent("colorTheme", currentLiveColor);
    }
  }
};

const disableDarkMode = function () {
  if (currentLiveColor !== "default") {
    toggleDarkMode(`${currentLiveColor}-mode`);
    if (defaultTintLive) {
      optionMenu.removeChild(optionMenu.lastChild);
      defaultTintLive = false;
    }
    currentLiveColor = "default";
    setLocalStorageContent("colorTheme", currentLiveColor);
    isColorModeEnabled = false;
  }
};

const setDarkModeUtility = function (e) {
  const isDarkModeClicked = e.target.closest(".dark-light");
  const isPrimaryModeClicked = e.target.closest(".teal");
  const isSecondaryModeClicked = e.target.closest(".green");
  const isTertiaryModeClicked = e.target.closest(".dark-yellow");
  const isDefaultModeClicked = e.target.closest(".default-color-tint");

  if (isDarkModeClicked) {
    toggleDarkMode("dark-mode");
    adjustIcon.style.transform = `rotate(${rotateAdjustIcon}deg)`;
    rotateAdjustIcon += 180;
    isDarkModeEnabled = isDarkModeEnabled ? false : true;
    if (isDarkModeEnabled) {
      setLocalStorageContent("Theme", "dark");
    } else {
      disableDarkMode();
      setLocalStorageContent("Theme", "light");
    }
  } else if (isPrimaryModeClicked) {
    toggleColorUtility("primary");
  } else if (isSecondaryModeClicked) {
    toggleColorUtility("secondary");
  } else if (isTertiaryModeClicked) {
    toggleColorUtility("tertiary");
  } else if (isDefaultModeClicked) {
    toggleDarkMode(`${currentLiveColor}-mode`);
    isColorModeEnabled = false;
    optionMenu.removeChild(optionMenu.lastChild);
    defaultTintLive = false;
    currentLiveColor = "default";
    setLocalStorageContent("colorTheme", currentLiveColor);
  }
};

optionMenu.addEventListener("click", setDarkModeUtility);

if (localStorage.getItem("Theme") === "dark") {
  toggleDarkMode(`${localStorage.getItem("Theme")}-mode`);
  isDarkModeEnabled = true;
}
if (localStorage.getItem("colorTheme") !== "default") {
  toggleColorUtility(localStorage.getItem("colorTheme"));
}
