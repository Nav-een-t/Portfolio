let menuu=document.querySelector('.menu_in')
function m_drop(){
    menuu.classList.toggle('show');
}

function m_close(){
        menuu.classList.remove('show');
}



function smoothScrollTo(e, targetId) {
    e.preventDefault();

    const target = document.getElementById(targetId);
    if (!target) return;

    const navHeight = 90;

    const startPosition = window.scrollY;

    const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        navHeight;

    const distance = targetPosition - startPosition;
    const duration = 600;

    let startTime = null;

    function easeInOutCubic(t) {
        return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;

        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const eased = easeInOutCubic(progress);

        window.scrollTo(
            0,
            startPosition + distance * eased
        );

        if (progress < 1) {
            requestAnimationFrame(animation);
        } else {
            history.pushState(null, "", `#${targetId}`);
        }
    }

    requestAnimationFrame(animation);
}


const upButton = document.getElementById("upButton");
const homeSection = document.getElementById("Home");

window.addEventListener("scroll", () => {
    const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;

    if (window.scrollY >= homeBottom) {
        upButton.classList.add("show");
    } else {
        upButton.classList.remove("show");
    }
});

// // Active

// var sections = document.querySelectorAll(".sction");
// var links = document.querySelectorAll(".nav-link");

// function setActive() {

//   var index = 0;

//   for (var i = 0; i < sections.length; i++) {
//     if (window.scrollY >= sections[i].offsetTop - 150) {
//       index = i;
//     }
//   }

//   for (var j = 0; j < links.length; j++) {
//     links[j].classList.remove("active");
//   }

//   links[index].classList.add("active");
// }

// window.addEventListener("scroll", setActive);
// window.addEventListener("load", setActive);   // 👈 this makes first one active on load