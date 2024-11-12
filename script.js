//disclaimer:This Javascript Code is not mine, it is from W3Schools. I am using it for educational purposes only.

let slideIndex = 1;
showSlides(slideIndex);

// Function to navigate to the next or previous slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to set the current slide based on dot click
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to display the current slide and hide the others
function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  // If the slide index exceeds the total, start from the first slide
  if (n > slides.length) { slideIndex = 1; }
  // If the slide index is less than 1, go to the last slide
  if (n < 1) { slideIndex = slides.length; }

  // Hide all slides initially
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove "active" class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Show the current slide and mark the corresponding dot as active
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}
