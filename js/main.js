$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
         autoplay:true,
         autoplaySpeed:1500,
         autoplayTimeout:4000,
         autoWidth:true,
    
        dotsEach:true,
         stagePadding:100,
         center:true,
        navText:[
            '<i class="fa-solid fa-chevron-left"></i>',
            ' <i class="fa-solid fa-chevron-right"></i>'
        ],
        responsive:{
            0:{
                items:1,
                navText:[]
            },
            768:{
                items:2,
                dots:true,
                navText:[]
            },
            1000:{
                items:3
            }
        }
    });
});

/* ----------- */
document.querySelectorAll('.img-container img').forEach(img =>{
  img.onclick = () =>{
    document.querySelector('.pop-up').style.display = 'block';
    document.querySelector('.pop-up img').src = img.getAttribute('src');
  }
});

function scrollToMenu() {
  var menu = document.querySelector('.Menu');
  menu.scrollIntoView({ behavior: 'smooth' });
}
function scrollToGallery() {
  var gallery = document.querySelector('.GalleryBlock');
  gallery.scrollIntoView({ behavior: 'smooth' });
}
function scrollToFooter() {
  var footer = document.querySelector('.footer');
  footer.scrollIntoView({ behavior: 'smooth' });
}
