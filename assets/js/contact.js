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







// -----------------------------
// FORM SUBMISSION (ADDED)
// -----------------------------

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = {
        firstName: document.getElementById("firstName")?.value,
        lastName: document.getElementById("lastName")?.value,
        email: document.getElementById("email")?.value,
        phone: document.getElementById("phone")?.value,
        address: document.getElementById("address")?.value,
        city: document.getElementById("city")?.value,
        postalCode: document.getElementById("postalCode")?.value,
        contactMethod: document.querySelector('input[name="contactMethod"]:checked')?.value,
        referral: document.getElementById("referral")?.value,
        serviceType: document.getElementById("serviceType")?.value,
        gateCode: document.getElementById("gateCode")?.value,
        appointmentDate: dateInput?.value,
        appointmentTime: timeInput?.value
    };

    try {
        const response = await fetch("submit-contact.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
            alert("Request submitted successfully!");
            form.reset();
            form.classList.add("hidden"); // hide again after submit
        } else {
            alert("Error: " + result.message);
        }

    } catch (error) {
        alert("Server error.");
        console.error(error);
    }
});