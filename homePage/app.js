

(function($) { 
    $(function() { 
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        $('.dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); 
  })(jQuery);

  let image = document.images[1]
  let bigImage = document.createElement('img')

  bigImage.onload = function(){
    image.src = this.src
  }
  setTimeout(function(){
    bigImage.src = 'images/dinner.jpg'
  },50)
