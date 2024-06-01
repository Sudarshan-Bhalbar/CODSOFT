function handleOnClickNavbar(value) {
  let navlink = Array.prototype.slice.call(
    document.querySelectorAll(".nav-link")
  );
  let navImage = Array.prototype.slice.call(
    document.querySelectorAll(".nav-arrow")
  );
  console.log(navImage)
  navlink.map((e,index) =>{
    if (value === index) {
      navlink[index].classList.add("active");
      navImage[index].classList.add("active");
    } else {
        navlink[index].classList.remove("active");
        navlink[index].style.fontSize = "0.9rem";
        navImage[index].classList.remove("active");
    }
  })
  
  console.log(value);
}
handleOnClickNavbar(0);
function scrollbar() {
  const element = document.querySelector("body");

  element.addEventListener("scroll", function () {
    const scrollTop = element.scrollTop;
    const scrollLeft = element.scrollLeft;

    if (scrollTop > 100) {
      document.querySelector(".top-btn").style.display = "block";
    }else{
      document.querySelector(".top-btn").style.display = "none";
    }
  });
}

scrollbar();