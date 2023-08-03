console.log("hello");

// get all the elements
const dayInput = document.querySelector('.day-input');
const monthInput = document.querySelector('.month-input');
const yearInput = document.querySelector('.year-input');

const dayResult = document.querySelector(".num-days");
const monthResult = document.querySelector(".num-months");
const yearResult = document.querySelector(".num-years");

//use the date function
const the_date = new Date();
const current_year = the_date.getFullYear();
const current_day = the_date.getDate();
const current_month = the_date.getMonth();

const dayValue = (e) => {
    console.log(e.target.value);
    dayResult.textContent = e.target.value;
    console.log(current_day);
}

const monthValue = (e) => {
  console.log(e.target.value);
  monthResult.textContent = current_month - e.target.value;
};

const yearValue = (e) => {
  console.log(e.target.value);
  yearResult.textContent = current_year - e.target.value;
/*
//   if (e.target.value <= 1930 || e.target.value >= current_year){
//     document.querySelector(".year").style.color = "#FF0000";
//     yearInput.style.border = "2px solid #FF0000";
//     console.log("you don dey do too much!")
//   }
//   document.querySelector(".year").style.color = "#008000";
//   yearInput.style.border = "2px solid #008000";
*/

};

// add event listeners for all the inputs
dayInput.addEventListener("input", dayValue);
monthInput.addEventListener("input", monthValue);
yearInput.addEventListener("input", yearValue);