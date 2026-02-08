  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenuBtn = document.getElementById("closeMenuBtn");

  // Toggle mobile menu
  function toggleMobileMenu() {
    mobileMenu.classList.toggle("hidden");
    menuBtn.classList.toggle("active");
    // Prevent body scroll when menu is open
    if (!mobileMenu.classList.contains("hidden")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  menuBtn.addEventListener("click", toggleMobileMenu);
  
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", toggleMobileMenu);
  }

  // Close menu when clicking on a mobile link
  


  // Smooth scroll function
 function smoothScroll(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;

  // Wait for next animation frame to ensure element is visible
  requestAnimationFrame(() => {
    const topOffset = target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: topOffset,
      behavior: "smooth"
    });
  });

  // Close mobile menu if open
  if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden");
    if (menuBtn) menuBtn.classList.remove("active");
    document.body.style.overflow = "";
  }
}


  // Attach smooth scroll to all nav links
  // Handle both smooth scroll AND page navigation safely
document.querySelectorAll(".nav-link, .mobile-link, .scroll-link").forEach(link => {

  link.addEventListener("click", function(e) {

    const href = this.getAttribute("href");

    // ✅ If it's a section (#about) → smooth scroll
    if (href && href.startsWith("#")) {

      e.preventDefault();

      const targetId = href.substring(1);
      smoothScroll(targetId);
    }

    // ✅ If it's a real page (aboutus.html)
    // DO NOTHING → browser will navigate normally
  });

});




  // FAQ Toggle
document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector("span.text-xl");
    answer.classList.toggle("hidden");

    // Change + to -
    if (answer.classList.contains("hidden")) {
      icon.textContent = "+";
    } else {
      icon.textContent = "-";
    }
  });
});


// Smooth scroll for "Learn More" button
document.querySelectorAll(".scroll-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const href = link.getAttribute("href").substring(1);
    smoothScroll(href);
  });
});









document.addEventListener("DOMContentLoaded", function () {
  const swiperEl = document.querySelector(".heroSwiper");
  const nextBtn = document.querySelector(".hero-nav-next");
  const prevBtn = document.querySelector(".hero-nav-prev");
  
  if (swiperEl && nextBtn && prevBtn) {
    var swiper = new Swiper(".heroSwiper", {
      loop: true,
      speed: 900,
      effect: "slide",
      // fadeEffect: { crossFade: true },
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      autoplay: {
  delay: 5000,          // 5 seconds per slide
  disableOnInteraction: false, // keeps autoplay after manual clicks
},

    });
    
    // Verify navigation is working
    console.log("Swiper initialized with navigation buttons");
  } else {
    console.error("Swiper elements not found", { swiperEl, nextBtn, prevBtn });
  }
});



new Swiper(".testimonialsSwiper", {
  loop: true,
  centeredSlides: true,
  speed: 800,
  spaceBetween: 30,
  slidesPerView: 1,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".testimonials-next",
    prevEl: ".testimonials-prev",
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});


  // function toggleServices() {
  //   const content = document.getElementById("servicesContent");
  //   const arrow = document.getElementById("servicesArrow");

  //   if (content.style.maxHeight === "0px") {
  //     content.style.maxHeight = "2000px";
  //     arrow.style.transform = "rotate(0deg)";
  //   } else {
  //     content.style.maxHeight = "0px";
  //     arrow.style.transform = "rotate(-90deg)";
  //   }
  // }



//   function toggleServices() {

//   const content = document.getElementById("servicesContent");
//   const arrow = document.getElementById("servicesArrow");

//   if (content.style.maxHeight) {

//     content.style.maxHeight = null;
//     arrow.style.transform = "rotate(0deg)";

//   } else {

//     content.style.maxHeight = content.scrollHeight + "px";
//     arrow.style.transform = "rotate(180deg)";
//   }
// }



const servicesBtn = document.getElementById('servicesBtn');
const servicesMenu = document.getElementById('servicesMenu');
const servicesArrow = document.getElementById('servicesArrow');

servicesBtn.addEventListener('click', () => {
  // Toggle menu visibility
  servicesMenu.classList.toggle('opacity-0');
  servicesMenu.classList.toggle('invisible');
  
  // Rotate arrow
  servicesArrow.classList.toggle('rotate-180');
});

// Optional: close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!servicesBtn.contains(e.target) && !servicesMenu.contains(e.target)) {
    servicesMenu.classList.add('opacity-0');
    servicesMenu.classList.add('invisible');
    servicesArrow.classList.remove('rotate-180');
  }
});




// Unified mobile-link handler
document.querySelectorAll(".mobile-link").forEach(link => {
  link.addEventListener("click", function(e) {
    const href = this.getAttribute("href");

    // 1️⃣ If it's a section link (#about), do smooth scroll
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      smoothScroll(targetId);
    } else {
      // 2️⃣ Real page link → navigate normally
      // Close mobile menu first
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
        menuBtn.classList.remove("active");
        document.body.style.overflow = "";
      }
      // DO NOT preventDefault → browser navigates to page
    }
  });
});
