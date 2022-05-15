import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  child,
  update,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrzYYaDaVdyVmSfspnpkGZR6_1w25fHMk",
  authDomain: "contact-form-d8a15.firebaseapp.com",
  databaseURL: "https://contact-form-d8a15-default-rtdb.firebaseio.com",
  projectId: "contact-form-d8a15",
  storageBucket: "contact-form-d8a15.appspot.com",
  messagingSenderId: "1050458217858",
  appId: "1:1050458217858:web:fa4409fea521278975039b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const form = document.querySelector(`.form-content-container`);
const nameInput = document.querySelector(`input[name="name"]`);
const emailInput = document.querySelector(`input[name="email"]`);
const subjectInput = document.querySelector(`input[name="subject"]`);
const messageInput = document.querySelector(`textarea[name="message"]`);
const formBtn = document.querySelector(`.form-btn`);
const thankyou = document.querySelector(`.thank-you`);
const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let isNameValid = false,
  isEmailValid = false,
  isMessageValid = false,
  isSubmitValid = false;

const validateName = () => {
  if (!nameInput.value) {
    nameInput.nextElementSibling.classList.toggle("error-hidden");
    nameInput.classList.toggle(`invalid`);
    setTimeout(() => {
      nameInput.nextElementSibling.classList.toggle("error-hidden");
      nameInput.classList.toggle(`invalid`);
    }, 1000);
  } else {
    isNameValid = true;
  }
};

const validateEmail = () => {
  if (!emailInput.value.match(pattern)) {
    emailInput.nextElementSibling.classList.toggle("error-hidden");
    emailInput.classList.toggle(`invalid`);
    setTimeout(() => {
      emailInput.nextElementSibling.classList.toggle("error-hidden");
      emailInput.classList.toggle(`invalid`);
    }, 1000);
  } else {
    isEmailValid = true;
  }
};

const validateMessage = () => {
  if (!messageInput.value) {
    messageInput.nextElementSibling.classList.toggle("error-hidden");
    messageInput.classList.toggle(`invalid`);
    setTimeout(() => {
      messageInput.nextElementSibling.classList.toggle("error-hidden");
      messageInput.classList.toggle(`invalid`);
    }, 1000);
  } else {
    isMessageValid = true;
  }
};

const validateSubject = () => {
  if (!subjectInput.value) {
    subjectInput.nextElementSibling.classList.toggle("error-hidden");
    subjectInput.classList.toggle(`invalid`);
    setTimeout(() => {
      subjectInput.nextElementSibling.classList.toggle("error-hidden");
      subjectInput.classList.toggle(`invalid`);
    }, 1000);
  } else {
    isSubmitValid = true;
  }
};

const submit = () => {
  if (isNameValid && isMessageValid && isEmailValid) {
    form.style.opacity = "0";
    thankyou.style.zIndex = "1";
    thankyou.style.opacity = "1";

    setTimeout(() => {
      thankyou.style.opacity = "0";
      thankyou.style.zIndex = "-1";
    }, 2000);
    setTimeout(() => {
      form.style.opacity = "1";
    }, 3500);

    const contactInfo = {
      recipient1Name: nameInput.value,
      recipient2Email: emailInput.value,
      recipient3Subject: subjectInput.value,
      recipient4Message: messageInput.value,
    };

    const Key = push(child(ref(database), "messages")).key;
    const updates = {};
    updates["messages/" + Key] = contactInfo;
    update(ref(database), updates);

    setTimeout(() => {
      nameInput.value = "";
      emailInput.value = "";
      subjectInput.value = "";
      messageInput.value = "";
    }, 1000);
  }

  isNameValid = false;
  isMessageValid = false;
  isEmailValid = false;
  isSubmitValid = false;
};

formBtn.addEventListener("click", function (e) {
  e.preventDefault();
  validateName();
  validateEmail();
  validateMessage();
  validateSubject();
  if (isSubmitValid === true) {
    submit();
  }
  setTimeout(() => {
    submit();
  }, 1400);
});
