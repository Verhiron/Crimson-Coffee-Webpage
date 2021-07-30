$(document).ready(function() {
    $(".scroll").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
  
            // Store hash
            var hash = this.hash;
            // animates the scroll down to body
            $('html, body').animate({
                scrollTop: $(hash).offset().top
             }, 2000);
        } else {
            console.log("error");
        }
    });
});