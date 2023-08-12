console.log("hello");

// get all the elements
const dayInput = document.querySelector('.day-input');
const monthInput = document.querySelector('.month-input');
const yearInput = document.querySelector('.year-input');

const dayResult = document.querySelector(".num-days");
const monthResult = document.querySelector(".num-months");
const yearResult = document.querySelector(".num-years");

const labYear = document.querySelector(".lab-year");
const labMonth = document.querySelector(".lab-month");
const labDay = document.querySelector(".lab-day");

const errorYear = document.querySelector(".error-year");
const errorMonth = document.querySelector(".error-month");
const errorDay = document.querySelector(".error-day");


//use the date function
const the_date = new Date();
const current_year = the_date.getFullYear();
const current_day = the_date.getDate();
const current_month = the_date.getMonth() + 1 ;


// day input code
const dayValue = (e) => {
  const dayVal = e.target.value;

  if (dayVal > 0 && dayVal <= 31) {
    dayResult.textContent = e.target.value;
    labDay.style.color = "#008000";
    dayInput.style.border = "1px solid #008000";
    errorDay.textContent = "Good";
    errorDay.style.color = "#008000";
  } 
  else {
    dayResult.textContent = "- -";
    labDay.style.color = "#FF0000";
    dayInput.style.border = "1px solid #FF0000";
    errorDay.textContent = "Invalid Day";
    errorDay.style.color = "#FF0000";
    errorDay.style.fontSize = "8px";
  }
}

// add focus event to the day input
dayInput.addEventListener("focus", function () {
  errorDay.textContent = "";
  dayInput.style.border = "1px solid blue";
});

// add blur event for the day input
dayInput.addEventListener("blur", function () {
  if (!dayInput.value) {
    labDay.style.color = "#FF0000";
    errorDay.textContent = "Day is required!";
    dayInput.style.border = "1px solid #FF0000";
    errorDay.style.color = "#FF0000";
    errorDay.style.fontSize = "8px";
  } 
});


// month input code
const monthValue = (e) => {
  console.log(e.target.value);
  const getMonth = e.target.value 

  if (getMonth > 0 && getMonth <= 12 ) {
    monthResult.textContent = e.target.value;
    labMonth.style.color = "#008000";
    monthInput.style.border = "1px solid #008000";
    errorMonth.textContent = "Good";
    errorMonth.style.color = "#008000";
  } 
  else {
    monthResult.textContent = "- -";
    labMonth.style.color = "#FF0000";
    monthInput.style.border = "1px solid #FF0000";
    errorMonth.textContent = "Invalid Month";
    errorMonth.style.color = "#FF0000";
    errorMonth.style.fontSize = "8px";
  }
};

// add focus to the month input
monthInput.addEventListener("focus", function () {
  errorMonth.textContent = "";
  monthInput.style.border = "1px solid blue";
  monthResult.textContent = "- -";
  // labMonth.style.color = "green";
});

// add blur event for the month input
monthInput.addEventListener("blur", function () {
  if (!monthInput.value) {
    labMonth.style.color = "#FF0000";
    errorMonth.textContent = "month is required!";
    monthInput.style.border = "1px solid #FF0000";
    errorMonth.style.color = "#FF0000";
    errorMonth.style.fontSize = "8px";
    monthResult.textContent = "- -"
  }
});


// year input code
const yearValue = (e) => {
  const yearVal = e.target.value;
  if (yearVal.length === 4 && yearVal <= current_year) {
    if (yearVal < 1930) {
      yearResult.textContent = "- -";
      labYear.style.color = "#FF0000";
      yearInput.style.border = "1px solid #FF0000";
      errorYear.textContent = "Invalid Year";
      errorYear.style.color = "#FF0000";
      errorYear.style.fontSize = "8px";
    } 
    
    else {
      yearResult.textContent = current_year - e.target.value;
      labYear.style.color = "#008000";
      yearInput.style.border = "1px solid #008000";
      errorYear.textContent = "Good";
      errorYear.style.color = "#008000";
    }
  }

  else {
    yearResult.textContent = "- -";
    labYear.style.color = "#FF0000";
    yearInput.style.border = "1px solid #FF0000";
    errorYear.textContent = "Invalid Year";
    errorYear.style.color = "#FF0000";
    errorYear.style.fontSize = "8px";
  }
};

// add focus event to the year input
yearInput.addEventListener("focus", function () {
  errorYear.textContent = "";
  yearInput.style.border = "1px solid blue";
});

// add blur event for the year input
yearInput.addEventListener("blur", function () {
  if (!yearInput.value) {
    labYear.style.color = "#FF0000";
    errorYear.textContent = "Year is required!";
    yearInput.style.border = "1px solid #FF0000";
    errorYear.style.color = "#FF0000";
    errorYear.style.fontSize = "8px";
  } 
});



// add event listeners for all the inputs
dayInput.addEventListener("input", dayValue);
monthInput.addEventListener("input", monthValue);
yearInput.addEventListener("input", yearValue);