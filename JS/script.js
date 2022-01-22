const resume = document.querySelector(".icon-resume");
const userResume = document.querySelector(".user-resume");
const myTimeline = document.querySelector(".my-timeline");
const timeline = document.querySelector(".timeline");
const closeUserResume = document.querySelector(".close-user-resume");
const closeMyTimeline = document.querySelector(".close-my-timeline");
const closeOverlay = document.querySelector(".close-overlay");
const headerBar = document.querySelector(".head-bar");
const angle = document.querySelector(".angle");
const thankYouMessage = document.querySelector(".thank-message");
const EduToProject = document.querySelector("#fa-angle-left");
const ProToContact = document.querySelector(".qContact");
// MyTimeline js code
const timelineListItems = document.querySelectorAll(".timeline-container li");
const myTimelineOverlay = document.querySelector(".my-timeline");

let alreadyOccured = false,
  angleName,
  messageOccured = false;

const setDocumentTitle = function (title) {
  document.title = title;
};

const addAngleContent = function (angleContent) {
  setTimeout(() => {
    angle.classList.add(angleContent);
    angle.style.display = "inline-block";
  }, 1500);
};

const removeAngleContent = function (angleContent) {
  setTimeout(() => {
    angle.classList.remove(angleContent);
    angle.style.display = "none";
    angleName = "";
  }, 1500);
};

// Event delegation used

headerBar.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.closest(".icon-resume")) {
    setDocumentTitle("Saniz Momin | Resume");
    userResume.style.transform = `translateY(0) translateX(0)`;
    setTimeout(() => (closeUserResume.style.opacity = `1`), 1500);
  } else if (e.target.closest(".timeline")) {
    setDocumentTitle("Saniz Momin | Timeline");
    myTimeline.style.transform = `translateY(0) translateX(0%)`;
    setTimeout(() => (closeMyTimeline.style.opacity = `1`), 1500);
  } else if (e.target.closest(".redirect")) {
    if (angleName === `fa-angle-right`) {
      setDocumentTitle("Saniz Momin | Computer Scientiest");
      MainContainer.style.transform = `translateX(0%)`;
      educationContainer.style.transform = `translateX(100%)`;
      removeAngleContent(angleName);
    } else if (angleName === `fa-angle-left`) {
      setDocumentTitle("Saniz Momin | Computer Scientiest");
      MainContainer.style.transform = `translateX(0%)`;
      projectContainer.style.transform = `translateX(-100%)`;
      removeAngleContent(angleName);
    } else if (angleName === `fa-angle-up`) {
      setDocumentTitle("Saniz Momin | Computer Scientiest");
      MainContainer.style.transform = `translateY(0%)`;
      aboutMeContainer.style.transform = `translateY(-100%)`;
      removeAngleContent(angleName);
    } else if (angleName === `fa-angle-down`) {
      setDocumentTitle("Saniz Momin | Computer Scientiest");
      MainContainer.style.transform = `translateY(0%)`;
      collaborateContainer.style.transform = `translateY(100%)`;
      removeAngleContent(angleName);
    }
  }
});

closeUserResume.addEventListener("click", function () {
  setDocumentTitle("Saniz Momin | Computer Scientiest");
  userResume.style.transform = `translateY(-100%) translateX(-100%)`;
  closeUserResume.style.opacity = `0`;
});

closeMyTimeline.addEventListener("click", function () {
  setDocumentTitle("Saniz Momin | Computer Scientiest");
  myTimeline.style.transform = `translateY(-100%) translateX(100%)`;
  closeMyTimeline.style.opacity = `0`;
});

// Menu click activation
const MainContainer = document.querySelector(".main-container");
const educationContainer = document.querySelector(".education-container");
const projectContainer = document.querySelector(".project-container");
const aboutMeContainer = document.querySelector(".aboutMe-container");
const collaborateContainer = document.querySelector(".collaborate-container");
const mainMenu = document.querySelector(".main-menu");

// Bring menu window into focus
mainMenu.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.closest(".education-active")) {
    setDocumentTitle("Saniz Momin | Education");
    MainContainer.style.transform = `translateX(-100%)`;
    educationContainer.style.transform = `translateX(0)`;

    angleName = "fa-angle-right";
    addAngleContent(angleName);
  } else if (e.target.closest(".project-active")) {
    setDocumentTitle("Saniz Momin | Projects");
    MainContainer.style.transform = `translateX(100%)`;
    projectContainer.style.transform = `translateX(0)`;

    if (!alreadyOccured) {
      setTimeout(() => {
        init();
      }, 1000);
      alreadyOccured = true;
    }
    angleName = "fa-angle-left";
    addAngleContent(angleName);
  } else if (e.target.closest(".aboutMe-active")) {
    setDocumentTitle("Saniz Momin | AboutMe");
    MainContainer.style.transform = `translateY(100%)`;
    aboutMeContainer.style.transform = `translateY(0)`;
    angleName = "fa-angle-up";
    addAngleContent(angleName);
  } else if (e.target.closest(".collaborate-active")) {
    setDocumentTitle("Saniz Momin | Contact Me");
    MainContainer.style.transform = `translateY(-100%)`;
    collaborateContainer.style.transform = `translateY(0)`;
    if (!messageOccured) {
      setTimeout(() => {
        thankYouMessage.style.display = "inline";
      }, 1500);
      thankYouMessage.classList.add("animate");
    }
    messageOccured = true;
    angleName = "fa-angle-down";
    addAngleContent(angleName);
  }
});

EduToProject.addEventListener("click", () => {
  MainContainer.style.transform = `translateX(0%)`;
  educationContainer.style.transform = `translateX(100%)`;
  setDocumentTitle("Saniz Momin | Computer Scientiest");
  removeAngleContent(angleName);
  setTimeout(() => {
    setDocumentTitle("Saniz Momin | Projects");
    MainContainer.style.transform = `translateX(100%)`;
    projectContainer.style.transform = `translateX(0)`;
    if (!alreadyOccured) {
      setTimeout(() => {
        init();
      }, 1000);
      alreadyOccured = true;
    }
    angleName = "fa-angle-left";
    addAngleContent(angleName);
  }, 1500);
});

ProToContact.addEventListener("click", () => {
  MainContainer.style.transform = `translateX(0%)`;
  projectContainer.style.transform = `translateX(-100%)`;
  setDocumentTitle("Saniz Momin | Computer Scientiest");
  removeAngleContent(angleName);
  setTimeout(() => {
    setDocumentTitle("Saniz Momin | Contact Me");
    MainContainer.style.transform = `translateY(-100%)`;
    collaborateContainer.style.transform = `translateY(0)`;
    if (!messageOccured) {
      setTimeout(() => {
        thankYouMessage.style.display = "inline";
      }, 1500);
      thankYouMessage.classList.add("animate");
    }
    messageOccured = true;
    angleName = "fa-angle-down";
    addAngleContent(angleName);
  }, 1500);
});

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () => {
  timelineListItems.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("show");
    }
  });
};

window.addEventListener("resize", run);
myTimelineOverlay.addEventListener("scroll", run);
