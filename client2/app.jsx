const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});
document.addEventListener("DOMContentLoaded", function() {
  // Ensure the profile page is loaded correctly
  console.log("Profile page is ready");

  // Add more JavaScript as needed for the profile page
  // Example: Toggling edit profile section, fetching user data, etc.

  const editProfileBtn = document.querySelector('.edit-profile-btn');
  if (editProfileBtn) {
    editProfileBtn.addEventListener('click', function() {
      // Logic to edit the profile, e.g., open a modal or redirect to an edit page
      console.log("Edit profile button clicked");
    });
  }

  // More JS functionalities can be added here...
});
document.addEventListener("DOMContentLoaded", function() {
  const signInForm = document.querySelector('.sign-in-form');
  if (signInForm) {
    signInForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Assuming a successful sign-in, navigate to the profile page
      window.location.href = 'profile.html'; // Replace with your router logic if using React Router
    });
  }
});