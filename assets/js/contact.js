// elements
// const dateInput = document.getElementById("appointmentDate");
// const timeInput = document.getElementById("appointmentTime");
// const form = document.getElementById("contactForm");

// prevent past dates
// dateInput.min = new Date().toISOString().split("T")[0];

// check selection
// function checkBooking(){
//     if(dateInput.value && timeInput.value){
//         form.classList.remove("hidden");
//     }
// }

// dateInput.addEventListener("change", checkBooking);
// timeInput.addEventListener("change", checkBooking);



window.addEventListener("message", function(event) {

  // Make sure message comes from Auxiliox
  if (event.origin.includes("auxiliox.com")) {

    // Check if form was successfully submitted
    if (event.data.type === "formSubmitted") {

      // Show Calendar
      document.getElementById("calendarSection").style.display = "block";

      // Scroll smoothly to calendar
      document.getElementById("calendarSection").scrollIntoView({
        behavior: "smooth"
      });
    }
  }
});