function handleOnClickNavbar(value) {
  let navlink = Array.prototype.slice.call(
    document.querySelectorAll(".nav-link")
  );
  let navImage = Array.prototype.slice.call(
    document.querySelectorAll(".nav-arrow")
  );
  navlink.map((e, index) => {
    if (value === index) {
      navlink[index].classList.add("active");
      navImage[index].classList.add("active");
    } else {
      navlink[index].classList.remove("active");
      navlink[index].style.fontSize = "0.9rem";
      navImage[index].classList.remove("active");
    }
  });
}
handleOnClickNavbar(0);
function scrollbar() {
  const element = document.querySelector("body");

  element.addEventListener("scroll", function () {
    const scrollTop = element.scrollTop;
    const scrollLeft = element.scrollLeft;

    if (scrollTop > 100) {
      document.querySelector(".top-btn").style.display = "block";
    } else {
      document.querySelector(".top-btn").style.display = "none";
    }
  });
}

scrollbar();

function navMenu() {
  let smallNavbar = document.querySelector("#small-navbar");
  let btn = document.querySelector(".navmenu-btn");
  let navImagebtn = document.querySelector(".nav-opn-close-btn");
  let isOpen = false;

  btn.addEventListener("click", () => {
    if (isOpen) {
      smallNavbar.style.height = "0px";
      isOpen = false;
      navImagebtn.setAttribute("src", "./images/Hamburger Menu.png");

    } else {
      smallNavbar.style.height = "fit-content";
      navImagebtn.setAttribute("src", "./images/close.png");
      isOpen = true;
    }
    console.log("isOpen:", isOpen);
  });
}

navMenu();
