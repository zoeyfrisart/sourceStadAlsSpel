// Function that listenes for click on the tabs in Create
$('.nav-tabs li a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});

// Functions to iniate the Swiper Sliders
var mySwiper = new Swiper('.cont1', {
  spaceBetween: 10,
  observeParents: true,
  preloadImages: false,
  lazyLoading: true,
  observer: true,
  paginationClickable: true,
  // If we need pagination
  pagination: '.pagination1'
});

var mySwiper2 = new Swiper('.cont2', {
  spaceBetween: 10,
  preloadImages: false,
  lazyLoading: true,
  observer: true,
  observeParents: true,
  paginationClickable: true,
  // If we need pagination
  pagination: '.pagination2'
});

var mySwiper3 = new Swiper('.cont3', {
  spaceBetween: 10,
  preloadImages: false,
  lazyLoading: true,
  observer: true,
  observeParents: true,
  paginationClickable: true,
  // If we need pagination
  pagination: '.pagination3'
});

var mySwiper4 = new Swiper('.cont4', {
  spaceBetween: 10,
  observeParents: true,
  preloadImages: false,
  lazyLoading: true,
  observer: true,
  paginationClickable: true,
  // If we need pagination
  pagination: '.pagination4'
});

var mySwiper5 = new Swiper('.cont5', {
  spaceBetween: 10,
  preloadImages: false,
  lazyLoading: true,
  observer: true,
  observeParents: true,
  paginationClickable: true,
  // If we need pagination
  pagination: '.pagination5'
});

var mySwiper6 = new Swiper('.cont6', {
  spaceBetween: 10,
  preloadImages: false,
  lazyLoading: true,
  observer: true,
  observeParents: true,
  paginationClickable: true,
  // If we need pagination
  pagination: '.pagination6'
});

var mySwiper7 = new Swiper('.cont7', {
  spaceBetween: 10,
  preloadImages: false,
  lazyLoading: true,
  observer: true,
  observeParents: true,
  paginationClickable: true,
  // If we need pagination
  pagination: '.pagination7'
});

var mySwiper8 = new Swiper('.cont8', {
  spaceBetween: 10,
  preloadImages: false,
  lazyLoading: true,
  observer: true,
  observeParents: true,
  paginationClickable: true,
  // If we need pagination
  pagination: '.pagination8'
});

var mySwiper9 = new Swiper('.cont9', {
  spaceBetween: 10,
  preloadImages: false,
  lazyLoading: true,
  observer: true,
  observeParents: true,
  paginationClickable: true,
  // If we need pagination
  pagination: '.pagination9'
});

var mySwiper10 = new Swiper('.cont10', {
  spaceBetween: 10,
  preloadImages: false,
  lazyLoading: true,
  observer: true,
  observeParents: true,
  paginationClickable: true,
  // If we need pagination
  pagination: '.pagination10'
});

var mySwiper11 = new Swiper('.cont11', {
  spaceBetween: 10,
  preloadImages: false,
  lazyLoading: true,
  observer: true,
  observeParents: true,
  paginationClickable: true,
  // If we need pagination
  pagination: '.pagination11'
});

var mySwiper12 = new Swiper('.point-photo', {
  spaceBetween: 10,
  preloadImages: false,
  lazyLoading: true,
  observer: true,
  observeParents: true,
  // effect: 'fade',
  paginationClickable: true,
  // If we need pagination
  pagination: '.point-pagination'
});

// Function to check if gender is defined and if its not forcefully sets it to Male
if (localStorage.gender === undefined) {
  localStorage.setItem('gender', 'male');
};

if (localStorage.base === undefined) {
  localStorage.setItem('base', '/base/noneall.webp');
}

//  Load Assets to character
// vars
const mantleFront = document.querySelector('.char-manF');
const mantleFrontWebp = document.querySelector('.char-manF > source');
const mantleFrontImg = document.querySelector('.char-manF > img');

const charClothing = document.querySelector('.char-cloth');
const charClothingWebp = document.querySelector('.char-cloth > source');
const charClothingImg = document.querySelector('.char-cloth > img');

const charEars = document.querySelector('.char-ear');
const charEarsWebp = document.querySelector('.char-ear > source');
const charEarsImg = document.querySelector('.char-ear > img');

const charBangs = document.querySelector('.char-bang');
const charBangsWebp = document.querySelector('.char-bang > source');
const charBangsImg = document.querySelector('.char-bang > img');

const charHair = document.querySelector('.char-hairf');
const charHairWebp = document.querySelector('.char-hairf > source');
const charHairImg = document.querySelector('.char-hairf > img');

const charFace = document.querySelector('.char-face');
const charFaceWebp = document.querySelector('.char-face > source');
const charFaceImg = document.querySelector('.char-face > img');

const charFaceB = document.querySelector('.char-face-back');
const charFaceBWebp = document.querySelector('.char-face-back > source');
const charFaceBImg = document.querySelector('.char-face-back > img');

const charBase = document.querySelector('.char-base');
const charBaseWebp = document.querySelector('.char-base > source');
const charBaseImg = document.querySelector('.char-base > img');

const mantleBack = document.querySelector('.char-manB');
const mantleBackWebp = document.querySelector('.char-manB > source');
const mantleBackImg = document.querySelector('.char-manB > img');

const charHairBack = document.querySelector('.char-hairb');
const charHairBackWebp = document.querySelector('.char-hairb > source');
const charHairBackImg = document.querySelector('.char-hairb > img');

// Function to set the Front and back
function setCharAssets(assetCategory, assetPart, genderNeeded, frontNeeded, webpElem, imgFallback) {
  const inStorage = localStorage.getItem(`${ assetCategory }`);
  const genderLink = `${ localStorage.gender }`;
  // Check if asset is defined
  if (inStorage !== undefined && inStorage !== null) {
    const splittedAsset = inStorage.split('front');
    if (splittedAsset[1] !== undefined) {
      assetPart.classList.remove('hidden');
      const front = `${ splittedAsset[0] }front${ splittedAsset[1] }`;
      const back = `${ splittedAsset[0] }back${ splittedAsset[1] }`;
      webpElem.srcset = `links/img/assets/${ genderNeeded ? genderLink : '' }${ frontNeeded ? front : back }.webp`;
      imgFallback.src = `links/img/assets/${ genderNeeded ? genderLink : '' }${ frontNeeded ? front : back }.png`;
    } else {
      assetPart.classList.remove('hidden');
      const subSplitAsset = inStorage.split('back');
      const front = `${ subSplitAsset[0] }front${ subSplitAsset[1] }`;
      const back = `${ subSplitAsset[0] }back${ subSplitAsset[1] }`;
      webpElem.srcset = `links/img/assets/${ genderNeeded ? genderLink : '' }${ frontNeeded ? front : back }.webp`;
      imgFallback.src = `links/img/assets/${ genderNeeded ? genderLink : '' }${ frontNeeded ? front : back }.png`;
    }
  } else {
    // console.log(assetPart)
    assetPart.classList.add('hidden');
  }
}

// Funtion to check if the Assets are defined in localstorage
function checkLocalStorageAsset(assetCategory, assetPart, genderNeeded, webpElem, imgFallback) {
  const inStorage = localStorage.getItem(`${ assetCategory }`);
  const genderLink = `${ localStorage.gender }`;
  // console.log(inStorage);
  if (inStorage !== undefined && inStorage !== null) {
    // Set the Image Source
    assetPart.classList.remove('hidden');
    webpElem.srcset = `links/img/assets/${ genderNeeded ? genderLink : '' }${ inStorage }.webp`;
    imgFallback.src = `links/img/assets/${ genderNeeded ? genderLink : '' }${ inStorage }.png`;
  } else {
    // Remove the Img element
    // console.log(assetPart)
    assetPart.classList.add('hidden');
  }
}

// Function to iniate render the Character
function initiateCharacter() {
  setCharAssets('mantle', mantleFront, false, true, mantleFrontWebp, mantleFrontImg); // Front Mantle
  checkLocalStorageAsset('body', charClothing, true, charClothingWebp, charClothingImg); // Clothing
  checkLocalStorageAsset('ears', charEars, false, charEarsWebp, charEarsImg); // Ears
  checkLocalStorageAsset('bangs', charBangs, true, charBangsWebp, charBangsImg); // Bangs
  setCharAssets('hair', charHair, true, true, charHairWebp, charHairImg); // Front Hair
  setCharAssets('face', charFace, false, true, charFaceWebp, charFaceImg); // Front Eyes
  setCharAssets('face', charFaceB, false, false, charFaceBWebp, charFaceBImg); // back Eyes
  checkLocalStorageAsset('base', charBase, true, charBaseWebp, charBaseImg); // Base Skin Character
  setCharAssets('mantle', mantleBack, false, false, mantleBackWebp, mantleBackImg); // Back Mantle
  setCharAssets('hair', charHairBack, true, false, charHairBackWebp, charHairBackImg); // Hair back
}

// Variables of the Switch
const genderToggle = document.querySelector('.gender-switch');
const genderSwitch = document.querySelector('[name="gender"]');

//  Function to make the slider be the gender defined in localstorage. After reload
function genderSwitcher() {
  if (localStorage.gender === 'male') {
    genderSwitch.checked = true;
  } else if (localStorage.gender === 'female') {
    genderSwitch.checked = false;
  }
}

// Function to write the gender to localstorage when a user switches the Gender switch
function switchGender(e) {
  if (genderSwitch.checked === true) {
    localStorage.setItem('gender', 'male');
    showMale();
  } else {
    localStorage.setItem('gender', 'female');
    showFemale();
  }
  initiateCharacter();
}

// If statement to check if there is a gender switch before excecuting a function (to prevent console errors)
if (document.querySelector('.gender') !== null) {
  genderSwitcher();
  genderSwitch.addEventListener('click', switchGender);
}

const assetsGender = document.querySelectorAll('.asset-gender');

const femaleSlides = document.querySelectorAll('.female-slider');
const maleSlides = document.querySelectorAll('.male-slider');

// Function to show the female Assets
function showFemale() {
  Object.keys(maleSlides).map((key, maleassets) => {
    $(maleSlides[key]).removeClass('active-gender');
  });
  Object.keys(femaleSlides).map((key, femaleasset) => {
    $(femaleSlides[key]).addClass('active-gender');
  });
}

// Function to show the male assets
function showMale() {
  Object.keys(femaleSlides).map((key, femaleasset) => {
    $(femaleSlides[key]).removeClass('active-gender');
  });
  Object.keys(maleSlides).map((key, maleassets) => {
    $(maleSlides[key]).addClass('active-gender');
  });
}

// Function to change the assets visible when the user switches gender
function updateGenderAssets() {
  if (localStorage.gender === 'female') {
    showFemale();
  } else if (localStorage.gender === 'male') {
    showMale();
  }
}

updateGenderAssets();

//  All The code Needed for saving character data and Allowing Change

// variables
const assetImgTile = document.querySelectorAll('picture.asset-gender');

// function

// Function to split to src link up, Get the category and write it to LocalStorage

function splitter(stringSplitted) {
  if (stringSplitted[1] !== undefined) {
    const itemCat = stringSplitted[1].split('/');
    localStorage.setItem(`${ itemCat[1] }`, `${ stringSplitted[1] }`);
  } else {
    const itemCat = stringSplitted[0].split('/');
    localStorage.setItem(`${ itemCat[0] }`, `${ stringSplitted[0] }`);
  }
}

// Function to get the SRC, Check the Gender then splits the source on the Gender.
function getTheImg(clickedAsset) {
  // console.log(clickedAsset);
  const testImgCase = clickedAsset.getAttribute('data-assetsrc');
  // console.log(testImgCase);
  // console.log(testImgCase);
  if (localStorage.gender === 'female') {
    const splitted = testImgCase.split('female');
    splitter(splitted);
  } else if (localStorage.gender === 'male') {
    const splitted = testImgCase.split('male');
    splitter(splitted);
  }
};

// Function to add a event listener to all the assets for a click
function addListnersToAssets() {
  Object.keys(assetImgTile).map(key => {
    assetImgTile[key].addEventListener('click', () => {
      getTheImg(assetImgTile[key]);
      initiateCharacter();
    });
  });
  // console.log()
}

const resetButtons = document.querySelectorAll('.reset');

// Function to reset the Asset
function resetAsset() {
  Object.keys(resetButtons).map(key => {
    resetButtons[key].addEventListener('click', () => {
      const resetCat = resetButtons[key].getAttribute('data-cat');
      localStorage.removeItem(`${ resetCat }`);
      initiateCharacter();
    });
  });
}

addEventListener("click", () => {});

// Excecute Functions For Assets Storage
addListnersToAssets();
resetAsset();

const characterLoaded = document.querySelector('.character');
if (characterLoaded !== undefined && characterLoaded !== null) {
  initiateCharacter();
}

const usernameInput = document.querySelector('#username');
const loginForm = document.querySelector('.login-form');
function loginHandler(event) {
  event.preventDefault;
  // console.log('hi');
  const username = usernameInput.value;
  localStorage.setItem('username', `${ username }`);
}

const backButton = document.querySelector('.back-arrow');

if (backButton !== null) {
  backButton.addEventListener('click', () => {
    history.back();
  });
}

const uploadImg = document.querySelector('.bannerImg');
if (uploadImg !== undefined && uploadImg !== null) {
  uploadImg.addEventListener('change', () => {
    window.location = 'photo-taken1.html';
  });
}

const xpGotWrap = document.querySelector('.xpwrap');

if (xpGotWrap !== undefined && xpGotWrap !== null) {
  setTimeout(function () {
    document.querySelector('.xpGot').style.height = '100%';
  }, 1000);
};

const lvlUpWrap = document.querySelector('.lvl-up');

if (lvlUpWrap !== undefined && lvlUpWrap !== null) {
  setTimeout(function () {
    console.log('hi');
    const xpGotten = document.querySelector('.xpGot');
    xpGotten.style.height = '100%';
    particlesJS.load('levelup', '../particlesjs-config.json', function () {
      console.log('callback - particles.js config loaded');
    });
  }, 300);
};

function redirect(url) {
  window.location = url;
}


// Loads serverworker So all assets gets cached for offline. So the user 1 doesnt have to load a 35 mb everytime and 2 so it works when the user does not have a working internet connection
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ENABLED IN THE END NOT EARLIER

// ServiceWorker is a progressive technology. Ignore unsupported browsers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').then(function () {}, function () {});
} else {
  console.error('Ur browser does not support ServiceWorkers :( performance might be hurt');
}

// Enable in the end NOT EARLIER
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
