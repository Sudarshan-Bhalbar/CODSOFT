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
