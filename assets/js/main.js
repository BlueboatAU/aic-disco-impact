//init
window.onload = function() {
  
    //smoothscroll
    $('.list-group-item').click(function() {
      var sectionTo = $(this).attr('href');
      console.log('sectionTo')
      $('html, body').animate({
        scrollTop: $(sectionTo).offset().top
      }, 800);
  });

}
