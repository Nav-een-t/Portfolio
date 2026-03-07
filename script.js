let menuu=document.querySelector('.menu_in')
function m_drop(){
    if(menuu.style.display==='block'||menuu.style.display==='flex'){
        menuu.style.display='none'
    }
    else{
        menuu.style.display='block'
        menuu.style.display='flex'
    }
}

// Active

var sections = document.querySelectorAll(".sction");
var links = document.querySelectorAll(".nav-link");

function setActive() {

  var index = 0;

  for (var i = 0; i < sections.length; i++) {
    if (window.scrollY >= sections[i].offsetTop - 150) {
      index = i;
    }
  }

  for (var j = 0; j < links.length; j++) {
    links[j].classList.remove("active");
  }

  links[index].classList.add("active");
}

window.addEventListener("scroll", setActive);
window.addEventListener("load", setActive);   // 👈 this makes first one active on load