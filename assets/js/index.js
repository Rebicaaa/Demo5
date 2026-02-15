document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const serviceIndex = params.get("service");

    if (serviceIndex !== null && !isNaN(serviceIndex)) {
      showService(Number(serviceIndex));

      // Smooth scroll to services section
      document.getElementById("services").scrollIntoView({
        behavior: "smooth"
      });
    }
  });


  function showService(index) {
  const tabs = document.querySelectorAll(".service-tab");
  const contents = document.querySelectorAll(".service-content");

  tabs.forEach(t => t.classList.remove("active"));
  contents.forEach(c => c.classList.add("hidden"));

  tabs[index].classList.add("active");
  contents[index].classList.remove("hidden");
}


function openModal(id){
  document.getElementById(id).style.display = "block";
}

function closeModal(id){
  document.getElementById(id).style.display = "none";
}

// close when clicking outside
window.onclick = function(e){
  document.querySelectorAll(".modal").forEach(modal => {
    if(e.target === modal){
      modal.style.display = "none";
    }
  });
}








function openModal(id){
  const modal = document.getElementById(id);
  if (!modal) return;

  modal.style.display = "block";
  document.body.classList.add("modal-open"); // ✅ lock background scroll
}

function closeModal(id){
  const modal = document.getElementById(id);
  if (!modal) return;

  modal.style.display = "none";

  // ✅ unlock scroll only if no other modal is open
  const anyOpen = Array.from(document.querySelectorAll(".modal"))
    .some(m => m.style.display === "block");
  if (!anyOpen) document.body.classList.remove("modal-open");
}

// close when clicking outside
window.onclick = function(e){
  document.querySelectorAll(".modal").forEach(modal => {
    if(e.target === modal){
      modal.style.display = "none";
    }
  });

  // ✅ unlock if nothing open
  const anyOpen = Array.from(document.querySelectorAll(".modal"))
    .some(m => m.style.display === "block");
  if (!anyOpen) document.body.classList.remove("modal-open");
}

// optional: ESC key closes open modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal").forEach(modal => modal.style.display = "none");
    document.body.classList.remove("modal-open");
  }
});




