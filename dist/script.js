
// $(document).ready(function(){
//     $('.main-carousel').flickity();
// })

$(document).ready(function(){
   
    var $carousel = $('.main-carousel').flickity();
  
    $('.thumbnail').on( 'click', function() {
      var index = $(this).index();
      $carousel.flickity( 'select', index );
    });
  
    
    var $carouselNav = $('.thumbnails');
    var $carouselNavCells = $carouselNav.find('.thumbnail');
    var flkty = $carousel.data('flickity');
  
  
    $carousel.on( 'select.flickity', function() {
      // set selected nav cell
      $carouselNav.find('.is-nav-selected').removeClass('is-nav-selected');
      var $selected = $carouselNavCells.eq( flkty.selectedIndex )
      .addClass('is-nav-selected');
    });

})