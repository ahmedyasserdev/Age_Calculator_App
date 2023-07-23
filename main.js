// output elements

const outputYear = document.querySelector(".output-year")
const outputMonth = document.querySelector(".output-month")
const outputDay = document.querySelector(".output-day")
const submitBtn = document.querySelector(".submit-btn")

// input elements
const inputYear = document.querySelector("#year")
const inputMonth = document.querySelector("#month")
const inputDay = document.querySelector("#day")

// Error Elements

const errorYear = document.querySelector(".error-year")
const errorMonth = document.querySelector(".error-month")
const errortDay = document.querySelector(".error-day")


let isValid = false;

submitBtn.addEventListener("click" , calculateData)

document.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        calculateData()
    }
});



inputDay.addEventListener("input", (e) => {
    if (+inputDay.value > 31) {
        errortDay.textContent = "Must be a valid day"
        isValid = false ;
        return ;
    } else {
        isValid = true
        errortDay.textContent = " "

    }

    if (+inputDay.value === 0) {
        errortDay.textContent = "this field is required"
        isValid = false
        return ;

    }else {
        errortDay.textContent = " "
    }
})




inputMonth.addEventListener("input", (e) => {
    if (+inputMonth.value > 12) {
        errorMonth.textContent = "Must be a valid month"
        isValid = false ;
        return ;
    } else {
        isValid = true
        errorMonth.textContent = " "

    }

    if (+inputMonth.value === 0) {
        errorMonth.textContent = "this field is required"
        isValid = false
        return ;

    }else {
        errorMonth.textContent = " "
    }
})


inputYear.addEventListener("input", (e) => {
    const currentYear = new Date().getFullYear(); // Get current year
    if (+inputYear.value > currentYear) { // Compare with current year
        errorYear.textContent = "Must be a valid year.";
        isValid = false ;
        return ;
    } else {
        isValid = true;
        errorYear.textContent = "";
    }

    if (+inputYear.value === 0) {
        errorYear.textContent = "This field is required.";
        isValid = false;
        return ;
    } else {
        errorYear.textContent = "";
    }
});



function calculateData() {
    if (isValid) {
        const day = parseInt(inputDay.value);
        const month = parseInt(inputMonth.value) - 1; // Subtract 1 since month index starts from 0
        const year = parseInt(inputYear.value);

        const birthDayObj = new Date(year, month, day);
        const ageDiff = Date.now() - birthDayObj;
        const ageDate = new Date(ageDiff);
        const ageYear = ageDate.getUTCFullYear() - 1970;
        const ageMonth = ageDate.getUTCMonth();
        const ageDay = ageDate.getUTCDate() - 1;

        outputDay.textContent = ageDay;
        outputMonth.textContent = ageMonth;
        outputYear.textContent = ageYear;
    } else {
        alert("Please fix the errors in the form before submitting.");
    }
}