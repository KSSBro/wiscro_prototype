//Constant(s) for DOM Elements
const menuBtn = document.getElementById("user-topbar-menu-btn");
const menuOverlay = document.getElementById("user-menu-overlay");
const closeMenuBtn = document.getElementById(
  "user-menu-overlay-topbar-menu-btn"
);
const menuOverlayBtns = Array.from(
  document.getElementsByClassName("user-menu-overlay-nav-el")
);
const pageBtnArray = Array.from(
  document.getElementsByClassName("home-page-button")
);
const pageArray = Array.from(document.getElementsByClassName("user-page"));
const homePageArray = Array.from(
  document.getElementsByClassName("user-page-page")
);
const bottomBar = document.getElementById("user-bottombar");
const topBar = document.getElementById("user-topbar");
const contentContainer = document.getElementById("user-content-container");
const askSubmitBtn = document.getElementById("user-ask-form-submit-btn");
const askTextarea = document.getElementById("user-ask-form-textarea");
const ansPage = document.getElementById("user-main-ques-container");
const ansBtns = Array.from(
  document.getElementsByClassName("user-question-ans")
);