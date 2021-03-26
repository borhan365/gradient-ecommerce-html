
 new WOW().init();

// newsletter
let input = document.querySelector('#newsletter');
let labelText = document.querySelector('.label-text');
let root = document.querySelector('body');

input.addEventListener('click', () => {
  labelText.classList.add('label-text-up');
});

document.addEventListener('mousedown', () => {
  if(!input.value) {
    labelText.classList.remove('label-text-up');
  }
});


// Hero slider
var HeroSlider = new Swiper('.hero-slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
  });


// Category slider
var TestimonialSlider = new Swiper('.testimonial-slider', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
  },
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
  // breakpoints: {
  //   640: {
  //     slidesPerView: 2,
  //     spaceBetween: 10,
  //   },
  //   767: {
  //     slidesPerView: 2,
  //     spaceBetween: 10,
  //   },
  //   1024: {
  //     slidesPerView: 8,
  //     spaceBetween: 10,
  //   },
  // }
});




// toggle left profile sidebar
function SidebarToggle() {
  var SidebarMenu = document.getElementById("LeftSidebar");
  if (SidebarMenu.style.display === "none" || SidebarMenu.style.display === "") {
    SidebarMenu.style.display = "block";

  } else {
    SidebarMenu.style.display = "none";
  }
}



// toggle right cart sidebar
function CartSidebarToggle() {
  var CartSidebarMenu = document.getElementById("CartSidebar");

    if (CartSidebarMenu.style.display === "none"  || CartSidebarMenu.style.display === "") {
      CartSidebarMenu.style.display = "block";
    } else {
      CartSidebarMenu.style.display = "none";
    }
  }


// Mobile toggle menu
function OpenMobileMenu() {
  var MobileSidebarMenu = document.getElementById("LeftSidebar");
      if (MobileSidebarMenu.style.display === "none" || MobileSidebarMenu.style.display === "") {
        MobileSidebarMenu.style.display = "block";
      } else {
        MobileSidebarMenu.style.display = "none";
      }
}


// Mobile Cart Sidebar
function MobileCartSidebarToggle() {
var MobileCartSidebarMenu = document.getElementById("CartSidebar");

if (MobileCartSidebarMenu.style.display === "none" || MobileCartSidebarMenu.style.display === "") {
  MobileCartSidebarMenu.style.display = "block";
  } else {
    MobileCartSidebarMenu.style.display = "none";
  }
}



// Click to top

const ClickToTop = document.querySelector('.ClickTop');

window.addEventListener('scroll', () => {

  if (window.pageYOffset > 100) {
      ClickToTop.classList.add("active");
  } else {
      ClickToTop.classList.remove("active");
  }
})

ClickToTop.addEventListener("click", function(){
  window.scrollTo(0, 0);
});


// Sticky menu
window.onscroll = function() {myFunction()};

var MainMenu = document.getElementById("MainMenu");
var stickyMenu = MainMenu.offsetTop;

function myFunction() {

if (window.pageYOffset >= stickyMenu) {

  MainMenu.classList.add("stickyMenu")
  document.querySelector('stickyMenu').style.zIndex = "1000";

} else {

  MainMenu.classList.remove("stickyMenu");

}

}


// Browse category mega menu || click to open menu and close
function BrowseCategory() {
  var BrowseCategory = document.getElementById("BrowseCategory");
  
  if (BrowseCategory.style.visibility === "hidden" || BrowseCategory.style.visibility === "") {
    BrowseCategory.style.visibility = "visible";
    BrowseCategory.style.opacity = "1";
    BrowseCategory.style.top = "0px";
    } else {
      BrowseCategory.style.visibility = "hidden";
    }
  }


  
 