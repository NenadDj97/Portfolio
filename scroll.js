
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

jQuery(document).ready(function($) {

    var open = false;

    var openMenu = function() {
        $('.phone-nav').addClass('downward');
        $('#expand-menu').addClass('active');
        $('#expand-menu').addClass('toggle-close');
        open = true;
    }
    var closeMenu = function() {
        $('.phone-nav').removeClass('downward');
        $('#expand-menu').removeClass('active');
        $('#expand-menu').removeClass('toggle-close');
        open = false;
    }

    $('#expand-menu').click(function(event){
        event.stopPropagation();
        var toggle = open ? closeMenu : openMenu;
        toggle();
    });
/* 

    $('#expand-menu').click(function(event) {
        event.stopPropagation();
        openMenu();
    }); */

    $(document).click(function(event) {
        if (!$(event.target).closest('.nav-container.downward').length) {
            closeMenu();
        }
    });
});