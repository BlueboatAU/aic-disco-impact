//is visible
!function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);

//show menu on scroll
$(window).scroll(function() {
    if ($(this).scrollTop() >= $("#home-hero").height() ) { 
        $('#indexnav').addClass("shown");
    } else {
    $('#indexnav').removeClass("shown");
    }
});

//function that draws the lines
function drawLine(d1, d2, l){
  let div1 = $(`#${d1}`);
  let div2 = $(`#${d2}`);
  let line = $(`#${l}`);
  let pos1 = div1.offset();
  let pos2 = div2.offset();
  line.attr('x1', pos1.left).attr('y1', pos1.top).attr('x2', pos2.left).attr('y2', pos2.top);

  console.log(`${pos1.top} ${pos1.left} and ${pos2.top}`);
}

//list of lines to draw
function drawTheLines(){
  drawLine('desc-target', 'about-target', 'aboutline');
  drawLine('about-target-end', 'chair-target', 'chairline');
} 

//init
window.onload = function() {

    //draw lines
    drawTheLines();
    
    //smoothscroll
    $('.list-group-item').click(function() {
      var sectionTo = $(this).attr('href');
      console.log('sectionTo')
      $('html, body').animate({
        scrollTop: $(sectionTo).offset().top
      }, 800);
  });

}

//listen for resize for line drawings
$( window ).resize(function(){drawTheLines()});