const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
    } else {
      entry.target.classList.remove("in-view");
    }
  });
});

// Get all elements with the class "item"
const items = document.querySelectorAll(".item");

// Loop over each item and observe it
items.forEach((item) => {
  observer.observe(item);
});
