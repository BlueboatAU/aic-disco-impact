//is visible
//!function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);

//sal onscroll animation
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.sal=t():e.sal=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="dist/",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};n(1);var o={rootMargin:"0% 50%",threshold:.5,animateClassName:"sal-animate",disabledClassName:"sal-disabled",enterEventName:"sal:in",exitEventName:"sal:out",selector:"[data-sal]",once:!0,disabled:!1},a=[],s=null,i=function(e,t){var n=new CustomEvent(e,{bubbles:!0,detail:t});t.target.dispatchEvent(n)},l=function(e){e.target.classList.add(o.animateClassName),i(o.enterEventName,e)},c=function(e){e.target.classList.remove(o.animateClassName),i(o.exitEventName,e)},u=function(e){return e.classList.contains(o.animateClassName)},d=function(){document.body.classList.remove(o.disabledClassName)},f=function(){document.body.classList.add(o.disabledClassName)},b=function(){return o.disabled||"function"==typeof o.disabled&&o.disabled()},m=function(e,t){e.forEach(function(e){e.intersectionRatio>=o.threshold?(l(e),o.once&&t.unobserve(e.target)):o.once||c(e)})},p=function(){f(),s.disconnect(),s=null},v=function(){d(),s=new IntersectionObserver(m,{rootMargin:o.rootMargin,threshold:o.threshold}),a=[].filter.call(document.querySelectorAll(o.selector),function(e){return!u(e,o.animateClassName)}),a.forEach(function(e){return s.observe(e)})},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;if(e!==o&&(o=r({},o,e)),!window.IntersectionObserver)throw f(),Error("\n      Your browser does not support IntersectionObserver!\n      Get a polyfill from here:\n      https://github.com/w3c/IntersectionObserver/tree/master/polyfill\n    ");return b()?f():v(),{elements:a,disable:p,enable:v}};t.default=h},function(e,t){}]).default});

//show menu on scroll
$(window).scroll(function() {
    if ($(this).scrollTop() >= $("#home-hero").height() || $(this).scrollTop() >= -100 ) { 
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

  //used for testing ==> console.log(`${pos1.top} ${pos1.left} and ${pos2.top}`);
}

function angle(cx, cy, ex, ey) {
  var dy = ey - cy;
  var dx = ex - cx;
  var theta = Math.atan2(dy, dx); // range (-PI, PI]
  theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
  //if (theta < 0) theta = 360 + theta; // range [0, 360)
  return theta;
}

//function that draws the circles
function drawCircle(d1, d2, c, a){
  let div1 = $(`#${d1}`);
  let div2 = $(`#${d2}`);
  let circle = $(`#${c}`);
  let arrow = $(`#${a}`);
  let arrowpoly = $(`#${a} polyline`);
  let pos1 = div1.offset();
  let pos2 = div2.offset();
  let midx = pos1.left + (pos2.left - pos1.left)/2;
  let midy = pos1.top + (pos2.top - pos1.top)/2;
  let ang = angle(pos1.left, pos1.top, pos2.left, pos2.top) + 235

  circle.attr('cx', midx).attr('cy', midy);
  arrow.attr('x', midx-4.5).attr('y', midy-4)
  arrowpoly.attr('transform', `rotate(${ang.toFixed(0)}, 5 , 5)`);

  //used for testing ==> console.log(`${midx} and ${midy} - ${pos1.left} and ${pos2.left}`);
  //used for testing ==> console.log(ang);

}

//list of lines to draw
function drawTheLines(){
  let docsize = $('.body-sans-lines').height();
  //used for testing ==> console.log(docsize);
  $('.linesvg').css('height', docsize);

  if(location.pathname === '/'){
    //about lines
  drawLine('desc-target', 'about-target', 'aboutline');
  drawLine('about-target-end', 'chair-target', 'chairline');
  //res lines
  drawLine('ene-target', 'inf-target', 'eneline');
  drawLine('inf-target', 'urb-target', 'infline');
  drawLine('urb-target', 'hea-target', 'urbline');
  drawLine('hea-target', 'foo-target', 'healine');
  //att and rel lines
  drawLine('att-target', 'how-target', 'attline');
  drawLine('rel-target', 'more-target', 'relline');
  //draw circles
  drawCircle('ene-target', 'inf-target', 'enecircle', 'enearrow');
   drawCircle('inf-target', 'urb-target', 'infcircle', 'infarrow');
  drawCircle('urb-target', 'hea-target', 'urbcircle', 'urbarrow');
  drawCircle('hea-target', 'foo-target', 'heacircle', 'heaarrow');
  } else {
      drawLine('top-target', 'bot-target', 'intline');
  }

  

} 

//init
window.onload = function() {

    //draw lines
    drawTheLines();
    
    sal();
    
    //used for testing ==> console.log(location.pathname);

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