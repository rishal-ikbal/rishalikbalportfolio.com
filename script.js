$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });
  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });
  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "Web Developer",
      "Web Designer",
      "Freelancer",
      "Videographer",
      "Video Editor",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing-2", {
    strings: [
      "Web Developer",
      "Web Designer",
      "Freelancer",
      "Videographer",
      "Video Editor",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

// Triangle toggle logic
const switches = {
  fast: document.querySelector('input[value="fast"]'),
  cheap: document.querySelector('input[value="cheap"]'),
  good: document.querySelector('input[value="good"]')
};

Object.values(switches).forEach(sw => {
  sw.addEventListener('change', () => {
    const fast = switches.fast.checked;
    const cheap = switches.cheap.checked;
    const good = switches.good.checked;

    // When all 3 are ON, apply triangle logic
    if (fast && cheap && good) {
      // Determine which one was just turned ON
      const changed = sw.value;

      // Turn OFF the one that violates the triangle logic
      if (changed === 'fast') {
        switches.good.checked = false;
      } else if (changed === 'cheap') {
        switches.good.checked = false;
      } else if (changed === 'good') {
        // If user turned on Good, and Fast + Cheap were already on
        switches.fast.checked = false;
      }
    }

    // Keep triangle rules active when only 2 are ON
    // Clean-up invalid third toggle after rapid switching
    const active = Object.entries(switches).filter(([key, el]) => el.checked).map(([key]) => key);

    if (active.length > 2) {
      if (active.includes('fast') && active.includes('cheap')) {
        switches.good.checked = false;
      } else if (active.includes('cheap') && active.includes('good')) {
        switches.fast.checked = false;
      } else if (active.includes('fast') && active.includes('good')) {
        switches.cheap.checked = false;
      }
    }
  });
});

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
