// $(document).ready(function(){
//   $('.owl-carousel').owlCarousel({
//     items:2,
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })
// });
var home= document.getElementById("home");
var contact= document.getElementById("contact")
var servicies =document.getElementById("servicies")
home.addEventListener("mouseenter", () => {
      flag = "home";
      home.classList.add("red");
      contact.classList.remove("blue");
    });

    home.addEventListener("mouseleave", () => {
      if (flag === "home") {
        home.classList.remove("red");
        flag = "";
      }
    });

    contact.addEventListener("mouseenter", () => {
      flag = "contact";
      contact.classList.add("blue");
      home.classList.remove("red");
    });


