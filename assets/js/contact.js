// elements
const dateInput = document.getElementById("appointmentDate");
const timeInput = document.getElementById("appointmentTime");
const form = document.getElementById("contactForm");

// prevent past dates
dateInput.min = new Date().toISOString().split("T")[0];

// check selection
function checkBooking(){
    if(dateInput.value && timeInput.value){
        form.classList.remove("hidden");
    }
}

dateInput.addEventListener("change", checkBooking);
timeInput.addEventListener("change", checkBooking);