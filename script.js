// Menu
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  
  //Menu scroll
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
  
  
  
  // Tabs
  
  
    function changeTab(target, name){
      var buttonContainer = document.getElementById('tabs');
      var buttons = buttonContainer.getElementsByTagName("button");
      var tabs = document.getElementsByClassName("tab");
      var tab = document.getElementById(name);
      for(var i = 0; i < tabs.length; i++){
        tabs[i].style.display = "none";
        setTimeout(function(){
          tab.style.display = "flex";
        }, 400);
        buttons[i].classList.remove("active");
      }
      target.currentTarget.className = 'active';
    }
  
  
  
  //Swiper pricing
  
  const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  
  // If we need pagination
  // pagination: {
  // el: '.swiper-pagination',
  // },
  
  // Navigation arrows
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
  
  // And if we need scrollbar
  scrollbar: {
  el: '.swiper-scrollbar',
  },
  
  breakpoints: {
    // when window width is >= 370px
    200: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    // when window width is >= 700px
    700: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    // when window width is >= 900px
    900: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
  
    1200: {
      slidesPerView: 3,
      spaceBetween: 100,
      slidesPerGroup: 3,
    }
  }
  });
  
  
  
  // Swiper reviews
  const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  
  // If we need pagination
  pagination: {
  el: '.swiper-pagination',
  },
  
  // Navigation arrows
  // navigation: {
  // nextEl: '.swiper-button-next',
  // prevEl: '.swiper-button-prev',
  // },
  
  // And if we need scrollbar
  scrollbar: {
  el: '.swiper-scrollbar',
  },
  
  breakpoints: {
    // when window width is >= 370px
    200: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    // when window width is >= 700px
    700: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    // when window width is >= 900px
    900: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
  
    1200: {
      slidesPerView: 3,
      spaceBetween: 100,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true
    }
  }
  });