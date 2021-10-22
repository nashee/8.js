
const buttonOne = document.querySelector('.btn-one');
const listOne = document.querySelector('.list-one');
const startOne = document.querySelector('.start-one');
const showOne = document.querySelector('.show-one');
const hideOne = document.querySelector('.hide-one');
buttonOne.addEventListener('click',
function(){
   let styleOne = getComputedStyle(listOne).display;
  if(styleOne === "block"){
     listOne.style.display = "none";
     startOne.style.display = "none";
     showOne.classList.add("show");
     hideOne.classList.remove("show");
     showOne.style.background = "darkgreen";
     showOne.style.padding = ".6rem 1.2rem";
     showOne.style.color = "white";
     
  }if(styleOne === "none") {
   listOne.style.display = "block";
   showOne.classList.remove("show");
   hideOne.classList.add("show");
  
   startOne.style.display = "none";
   hideOne.style.background = "darkred";
   hideOne.style.padding = ".6rem 1.2rem";
   hideOne.style.color = "white";

  }
});

//  two

const buttonTwo = document.querySelector('.btn-two');
const listTwo = document.querySelector('.list-two');
const startTwo = document.querySelector('.start-two');
const showTwo = document.querySelector('.show-two');
const hideTwo = document.querySelector('.hide-two');
buttonTwo.addEventListener('click',
function(){
   let styleTwo = getComputedStyle(listTwo).display;
  if(styleTwo === "block"){
     listTwo.style.display = "none";
     startTwo.style.display = "none";
     showTwo.classList.add("show");
     hideTwo.classList.remove("show");
     showTwo.style.background = "darkgreen";
     showTwo.style.padding = ".6rem 1.2rem";
     showTwo.style.color = "white";
     
  }if(styleTwo === "none") {
   listTwo.style.display = "block";
   showTwo.classList.remove("show");
   hideTwo.classList.add("show");
   startTwo.style.display = "none";
   
   hideTwo.style.background = "darkred";
   hideTwo.style.padding = ".6rem 1.2rem";
   hideTwo.style.color = "white";


  }
});

//  three

const buttonThree = document.querySelector('.btn-three');
const listThree = document.querySelector('.list-three');
const startThree= document.querySelector('.start-three');
const showThree = document.querySelector('.show-three');
const hideThree = document.querySelector('.hide-three');
buttonThree.addEventListener('click',
function(){
   let styleThree = getComputedStyle(listThree).display;
  if(styleThree === "block"){
     listThree.style.display = "none";
     startThree.style.display = "none";
     showThree.classList.add("show");
     hideThree.classList.remove("show");
     showThree.style.background = "darkgreen";
     showThree.style.padding = ".6rem 1.2rem";
     showThree.style.color = "white";
     
  }
  if(styleThree === "none") {
   listThree.style.display = "block";
   showThree.classList.remove("show");
   hideThree.classList.add("show");
   startThree.style.display = "none";
   hideThree.style.background = "darkred";
   hideThree.style.padding = ".6rem 1.2rem";
   hideThree.style.color = "white";


  }
});

//four
  
const buttonFour = document.querySelector('.btn-four');
const listFour = document.querySelector('.list-four');
const startFour = document.querySelector('.start-four');
const showFour = document.querySelector('.show-four');
const hideFour = document.querySelector('.hide-four');
buttonFour.addEventListener('click',
function(){
   let styleFour = getComputedStyle(listFour).display;
  if(styleFour === "block"){
     listFour.style.display = "none";
     startFour.style.display = "none";
     showFour.classList.add("show");
     hideFour.classList.remove("show");
     showFour.style.background = "darkgreen";
     showFour.style.padding = ".6rem 1.2rem";
     showFour.style.color = "white";
     
  }if(styleFour === "none") {
   listFour.style.display = "block";
   showFour.classList.remove("show");
   hideFour.classList.add("show");
   startFour.style.display = "none";
   hideFour.style.background = "darkred";
   hideFour.style.padding = ".6rem 1.2rem";
   hideFour.style.color = "white";

  }
});

// seven
 
const buttonSeven = document.querySelector('.btn-seven');
const listSeven = document.querySelector('.list-seven');
const startSeven = document.querySelector('.start-seven');
const showSeven = document.querySelector('.show-seven');
const hideSeven = document.querySelector('.hide-seven');
buttonSeven.addEventListener('click',
function(){
   console.log('seven');
    
   let styleSeven = getComputedStyle(listSeven).display;
  if(styleSeven === "block"){
     listSeven.style.display = "none";
     startSeven.style.display = "none";
     showSeven.classList.add("show");
     hideSeven.classList.remove("show");
     showSeven.style.background = "darkgreen";
     showSeven.style.padding = ".6rem 1.2rem";
     showSeven.style.color = "white";
     
  }if(styleSeven === "none") {
   listSeven.style.display = "block";
   showSeven.classList.remove("show");
   hideSeven.classList.add("show");
   startSeven.style.display = "none";
   hideSeven.style.background = "darkred";
   hideSeven.style.padding = ".6rem 1.2rem";
   hideSeven.style.color = "white";

  }  
});

// Eight

const buttonEight = document.querySelector('.btn-eight');
const listEight = document.querySelector('.list-eight');
const startEight = document.querySelector('.start-eight');
const showEight = document.querySelector('.show-eight');
const hideEight = document.querySelector('.hide-eight');
buttonEight.addEventListener('click',
function(){
   let styleEight = getComputedStyle(listEight).display;
  if(styleEight === "block"){
     listEight.style.display = "none";
     startEight.style.display = "none";
     showEight.classList.add("show");
     hideEight.classList.remove("show");
     showEight.style.background = "darkgreen";
     showEight.style.padding = ".6rem 1.2rem";
     showEight.style.color = "white";
     
  }if(styleEight === "none") {
   listEight.style.display = "block";
   showEight.classList.remove("show");
   hideEight.classList.add("show");
   startEight.style.display = "none";
   hideEight.style.background = "darkred";
   hideEight.style.padding = ".6rem 1.2rem";
   hideEight.style.color = "white";

  }
});

// Nine

const buttonNine = document.querySelector('.btn-nine');
const listNine = document.querySelector('.list-nine');
const startNine = document.querySelector('.start-nine');
const showNine = document.querySelector('.show-nine');
const hideNine = document.querySelector('.hide-nine');
buttonNine.addEventListener('click',
function(){
   let styleNine = getComputedStyle(listNine).display;
  if(styleNine === "block"){
     listNine.style.display = "none";
     startNine.style.display = "none";
     showNine.classList.add("show");
     hideNine.classList.remove("show");
     showNine.style.background = "darkgreen";
     showNine.style.padding = ".6rem 1.2rem";
     showNine.style.color = "white";
     
  }if(styleNine === "none") {
   listNine.style.display = "block";
   showNine.classList.remove("show");
   hideNine.classList.add("show");
   startNine.style.display = "none";
   hideNine.style.background = "darkred";
   hideNine.style.padding = ".6rem 1.2rem";
   hideNine.style.color = "white";

  }
});

// ten

const buttonTen = document.querySelector('.btn-ten');
const listTen = document.querySelector('.list-ten');
const startTen = document.querySelector('.start-ten');
const showTen = document.querySelector('.show-ten');
const hideTen = document.querySelector('.hide-ten');
buttonTen.addEventListener('click',
function(){
   let styleTen = getComputedStyle(listTen).display;
  if(styleTen === "block"){
     listTen.style.display = "none";
     startTen.style.display = "none";
     showTen.classList.add("show");
     hideTen.classList.remove("show");
     showTen.style.background = "darkgreen";
     showTen.style.padding = ".6rem 1.2rem";
     showTen.style.color = "white";
     
  }if(styleTen === "none") {
   listTen.style.display = "block";
   showTen.classList.remove("show");
   hideTen.classList.add("show");
   startTen.style.display = "none";
   hideTen.style.background = "darkred";
   hideTen.style.padding = ".6rem 1.2rem";
   hideTen.style.color = "white";

  }
});
  