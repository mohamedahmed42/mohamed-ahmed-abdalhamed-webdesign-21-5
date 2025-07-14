  var counters = document.querySelectorAll('.counter');
  var started = false;

  function animateCounter(counter) {
    var target = +counter.getAttribute('data-target');
    var duration = 2000; 
    var increment = target / (duration / 16); 

    var count = 0;
    function update() {
      count += increment;
      if (count < target) {
        counter.textContent = Math.floor(count);
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
      }
    }
    update();
  }

  function startCountingOnScroll() {
    var section = document.querySelector('.counter').closest('.py-5');
    var sectionTop = section.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (!started && sectionTop < windowHeight - 100) {
      counters.forEach(animateCounter);
      started = true;
    }
  }

  window.addEventListener('scroll', startCountingOnScroll);

$(document).ready(function () {
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    slideBy: 1, 
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>',
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
    },
  });
});

$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $("#scrollTopBtn").removeClass("d-none");
    } else {
      $("#scrollTopBtn").addClass("d-none");
    }
  });

  // Smooth scroll to top
  $("#scrollTopBtn").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});

