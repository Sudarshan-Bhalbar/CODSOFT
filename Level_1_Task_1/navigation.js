// Get the main body element
const body = document.querySelector("body");
const navItems = Array.from(document.querySelectorAll(".nav-item"));

// Add an event listener for scroll events
body.addEventListener("scroll", function () {
  // Get the current scroll position
  const scrollPosition = body.scrollTop;
  console.log(scrollPosition);

  // Check if the scrollbar is at the top (0 on the y-axis)
  if (scrollPosition > 0 || scrollPosition < 580) {
    // Add the "active" class to the element with ID "Home"
    navItems[0].classList.add("active");
  }if (scrollPosition > 580) {
    navItems[1].classList.add("active");
  } else {
    // Remove the "active" class from the element with ID "Home"
    navItems[1].classList.remove("active");
    navItems[2].classList.remove("active");
  }
});
