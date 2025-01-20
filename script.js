  //preloading images
  let myImages = document.getElementsByTagName('IMG');
  for (i = 0; i < myImages.length; i++) {
    let allImages = document.createElement('img');
    let imageSrc = [];
    imageSrc.push(myImages[i].src);
    imageSrc.forEach(img => {
      allImages.src = imageSrc;
      allImages.preload = true;
    })
  }
  
// Variables
const menuIcon = document.getElementById('menu_icon');
const sideMenu = document.getElementById('side_menu');
const signupButton = document.getElementById('signup_button');
const loginButton = document.getElementById('login_button');
const signupForm = document.getElementById('signup_form');
const loginForm = document.getElementById('login_form');
const hideForm = document.getElementsByClassName('cancelButton');
const form = document.getElementsByClassName('account_access_form');
const cancelButton = document.getElementById('cancel_icon');
const fol_but = document.getElementsByClassName('fol_but')

// Functions
function navBar() {
  sideMenu.style.marginLeft = 0;
  signupForm.style.visibility = 'hidden';
  loginForm.style.visibility = 'hidden';
}

function showSignupForm() {
  signupForm.style.visibility = 'visible';
  loginForm.style.visibility = 'hidden';
  sideMenu.style.marginLeft = '-100%';
}

function showLoginForm() {
  loginForm.style.visibility = 'visible';
  signupForm.style.visibility = 'hidden';
  sideMenu.style.marginLeft = '-100%';
}

function hideForms() {
  for (i = 0; i < form.length; i++) {
    form[i].style.visibility = 'hidden';
  }
}

/*f=1;
function follow() {
  this.innerHTML = 'followed';
  this.style.color='black';
}*/

// Event listeners
menuIcon.addEventListener('click', navBar);
signupButton.addEventListener('click', showSignupForm);
loginButton.addEventListener('click', showLoginForm);
for (i = 0; i < hideForm.length; i++) {
  hideForm[i].addEventListener('click', hideForms)
}
cancelButton.addEventListener('click', () => {
  sideMenu.style.marginLeft = '-100%';
});
/*for (i = 0; i < fol_but.length; i++) {
  fol_but[i].addEventListener('click', follow)
}*/

//review section
//user reviews
const rv1 = "I'm blown away by the sheer variety of content on Paradox Media! From the latest movies to nostalgic cartoons, they've got it all.10/10 would recommend!";
const rv2 = "Paradox Media has been a game-changer for our family movie nights! My kids love the animated shows and educational content, while my wife and I enjoy the latest TV series and movies.";
const rv3 = "I was skeptical at first, but Paradox Media has really impressed me. The music selection is incredible, with playlists curated by experts in the industry.Love it!";
const rv4 = "Paradox Media is the perfect solution for our busy family. With a vast library of content, we can always find something to watch or listen to together.";
const rv5 = "Paradox Media is...fine. I mean, it's got a lot of content and the interface is okay, but it's not blowing me away. I've had some issues with buffering and the search function can be a bit clunky. Maybe it just needs some more development? I'll stick with it for now, but I'm not totally sold.";
const rv6 = "Paradox Media is my go-to destination for all things entertainment! The video quality is top-notch, and the selection of movies and TV shows is unbeatable.Keep up the great work!";
const rv7 = "We were a bit hesitant to try Paradox Media, but our grandkids convinced us to give it a shot. And boy, are we glad we did!.It's been a great way for us to stay entertained and engaged in our retirement.";
const rv8 = "I've tried a few different streaming services in the past, but Paradox Media is hands-down the best. The music selection is incredible, with a huge library of songs and playlists.I've already recommended it to all my friends!";

const userReviews = function(image, name, review) {
  this.image = image;
  this.name = name;
  this.review = review;
}

let user_1 = new userReviews('usersReview/user1.jpg', 'Alex', rv1);
let user_2 = new userReviews('usersReview/user2.jpg', 'David', rv2);
let user_3 = new userReviews('usersReview/user3.jpg', 'Racheal', rv3);
let user_4 = new userReviews('usersReview/user4.jpg', 'Mark', rv4);
let user_5 = new userReviews('usersReview/user5.jpg', 'James', rv5);
let user_6 = new userReviews('usersReview/user6.jpg', 'Tom', rv6);
let user_7 = new userReviews('usersReview/user7.jpg', 'Emily and Ryan', rv7);
let user_8 = new userReviews('usersReview/user8.jpg', 'chris', rv8);

const rvws = [user_1, user_2, user_3, user_4, user_5, user_6, user_7, user_8];
let x = 0;

document.addEventListener('DOMContentLoaded', () => {
  profilePicture.src = rvws[0].image;
  userName.innerText = rvws[0].name;
  review.innerText = rvws[0].review;
});

function next() {
  if (x < rvws.length - 1) {
    x++;
    //profilePicture.setAttribute('src', rvws[x].image);
    profilePicture.src = rvws[x].image;
    userName.innerText = rvws[x].name;
    review.innerText = rvws[x].review;
  }
}

function previous() {
  if (x > 0) {
    x--;
    profilePicture.setAttribute('src', rvws[x].image);
    userName.innerText = rvws[x].name;
    review.innerText = rvws[x].review;
  }
}