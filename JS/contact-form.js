// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
import {
  getStorage,
  ref,
  uploadString,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD4C2EMBQ3Qz775YB-xjkqTUpRMCO86L4",
  authDomain: "portfolio-contact-form-2a259.firebaseapp.com",
  projectId: "portfolio-contact-form-2a259",
  storageBucket: "portfolio-contact-form-2a259.appspot.com",
  messagingSenderId: "871952766098",
  appId: "1:871952766098:web:d1093af3b03c06f204824b",
  measurementId: "G-SLX0P2PS9W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const messageRef = ref(storage, "Unread message");
const analytics = getAnalytics(app);

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
    form.style.display = "none";
    thankyou.style.zIndex = "1";
    thankyou.style.opacity = "1";

    setTimeout(() => {
      thankyou.style.opacity = "0";
      thankyou.style.zIndex = "-1";
    }, 2000);
    setTimeout(() => {
      form.style.display = "block";
    }, 3500);

    const contactInfo = {
      recipientName: nameInput.value,
      recipientEmail: emailInput.value,
      recipientSubject: subjectInput.value,
      recipientMessage: messageInput.value,
    };

    const contactInfoInJSON = JSON.stringify(contactInfo);

    uploadString(messageRef, contactInfoInJSON)
      .then(() => console.log("message sending succesfull"))
      .catch((err) =>
        console.error(`message sending unsucessful becasue ${err.message}`)
      );

    nameInput.value = "";
    emailInput.value = "";
    subjectInput.value = "";
    messageInput.value = "";
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
