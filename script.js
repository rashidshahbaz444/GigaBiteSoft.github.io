


// home page blogs slider

var swiper = new Swiper(".reviews-slider", {
    loop:true,
    spaceBetween: 20,
    grabCursor:true,
    autoHeight:true,
    // pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     },
    breakpoints: {
      640: {
         slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
       1024: {
         slidesPerView: 3,
        },
      },
    });