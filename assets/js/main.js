$(document).ready(function(){
  var dg_H = $(window).height(); // to get the height of the current devicies browser window
  var dg_W = $(window).width();  // to get the width of the current devicies browser window
  //make the background hieght and width of the index page to the values identified above
  $('#background').css({'height':dg_H,'width':dg_W});
  // this function will change the background of the index page with different images
  function anim() {
           $("#background img.backgroundImg").first().appendTo('#background').fadeOut(1500);
           $("#background img.backgroundImg").first().fadeIn(1500);
           setTimeout(anim, 3000);
         }
  anim();
//slide animation for dalol depression
  var semenImgArray = ["semen_mountails.jpg","semen_mountains_1.jpg",
                        "semen_mountains_2.jpg","semen_mountains_3.jpg",
                       "semen_mountains_4.jpg","semen_mountains_5.jpg",
                       "semen_mountains_6.jpg","semen_mountains_7.jpg"];
  var i = 0,j=0, k=0; // used to accesses the array elements for the comming three functions
  function semen_slide() {
    if (i < semenImgArray.length) {
      //fadeOut the current picture and when done as a callback function fadeIn a new image
      $("#Semen_mountains .natural_thumbnail img").fadeOut(1000,"swing",
      function(){
        // fadeIn the next elemnt by replacing a string in the src attribute of the image
        $("#Semen_mountains .natural_thumbnail img").attr("src","assets/images/"+semenImgArray[i]).fadeIn(3000,"linear",function(){
          i++;
        });
      });
    }else { // if i is larger than the array length of the array set i to 0 and restart the transition again
      i = 0;
      $("#Semen_mountains .natural_thumbnail img").fadeOut(1000,"swing",
      function(){
        $("#Semen_mountains .natural_thumbnail img").attr("src","assets/images/"+semenImgArray[i]).fadeIn(3000,"linear");
      });
    }
 }
 setInterval(semen_slide,5000);//run the function after each 5s
//slide animation for semen Mountains
var dalolImgArray = ["dalol_1.jpg","dalol_2.jpg","dalol_3.jpg",
                     "dalol_4.jpg","dalol_5.jpg","dalol_6.jpeg",
                     "dalol_7.jpg","dalol_8.jpg","dalol_9.jpg",
                     "Camel-Train-Lake-Dallol---Danakil-Depression.jpg"];
function dalol_slide() {
    if (j < dalolImgArray.length) {
      $("#dalol_depression .natural_thumbnail img").first().fadeOut(1500,"swing",
      function(){
        $("#dalol_depression .natural_thumbnail img").attr("src","assets/images/"+dalolImgArray[j]).fadeIn(2500,"linear",function(){
          j++;
        });
      });
    }else {
      j = 0;
      $("#dalol_depression .natural_thumbnail img").first().fadeOut(1000,"swing",
      function(){
        $("#dalol_depression .natural_thumbnail img").attr("src","assets/images/"+dalolImgArray[j]).fadeIn(3000,"linear");
      });
    }
  }
setInterval(dalol_slide,5000);

//slide animation for semen Mountains depression
var clothImgArray = ["cloth_1.jpg","cloth_2.jpg","cloth_3.jpg",
                     "cloth_4.jpg","cloth_5.jpeg","cloth_5.jpg",
                     "cloth_6.jpg","cloth_6.png","cloth_7.jpg",
                     "cloth_8.jpg","cloth_9.jpg","cloth_10.jpg",
                     "cloth_11.jpg"];
function cloth_slide() {
    if (k < clothImgArray.length) {
      $("#ethioian_clothing > div:nth-of-type(2) > div:nth-of-type(2) img").fadeOut(1500,"swing",
      function(){
        $("#ethioian_clothing > div:nth-of-type(2) > div:nth-of-type(2) img").attr("src","assets/images/"+clothImgArray[k]).fadeIn(500,"linear",
        function(){
          k++;
        });
      });
    }else {
      k = 0;
      $("#ethioian_clothing > div:nth-of-type(2) > div:nth-of-type(2) img").first().fadeOut(1000,"swing",
      function(){
        $("#ethioian_clothing > div:nth-of-type(2) > div:nth-of-type(2) img").attr("src","assets/images/"+clothImgArray[k]).fadeIn(3000,"linear");
      });
    }
}
setInterval(cloth_slide,5000);
//slide animation for ethiopian people traditional cloth
var eartaleImgArray = ["eartale_1.jpg","eartale_2.jpg","eartale_3.jpg",
                       "eartale_4.jpg","eartale_4.png","eartale_5.jpg",
                       "eartale_6.jpg","erta_ale.jpg","eartale_7.jpg",
                       "eartale_8.jpg","eartale_9.jpg"];
function eartale_slide() {
    if (j < eartaleImgArray.length) {
      $("#erta_ale .natural_thumbnail img").first().fadeOut(1500,"swing",
      function(){
        $("#erta_ale .natural_thumbnail img").attr("src","assets/images/"+eartaleImgArray[j]).fadeIn(2500,"linear",function(){
          j++;
        });
      });
    }else {
      j = 0;
      $("#erta_ale .natural_thumbnail img").first().fadeOut(1000,"swing",
      function(){
        $("#erta_ale .natural_thumbnail img").attr("src","assets/images/"+eartaleImgArray[j]).fadeIn(3000,"linear");
      });
    }
}
setInterval(eartale_slide,5000);
// navigation menu for mobile devices
x = $('nav').height();
$('nav a#mobile_menu').on('click',function(){
if($('nav').height() < 60){ // if the navigation is not vissible - extend the height of the nav and show the hidden menus
  $('nav').animate({"height":"200px"},550,"linear");
  $('nav ul li:nth-child(n+2)').show();
  $('nav >ul >li:not(li:first-of-type)').css("width","98%");
  $('nav >ul >li:first-of-type').css("width","78%");
  $('nav >ul >li').css("border-bottom","1px solid grey"); // create border at the bottom each list of the menu
}else{
  $('nav').animate({"height":x},550,"linear",function(){ // if the navigation is vissible hide it and remove the borders
    $('nav ul li:nth-child(n+2)').hide();
    $('nav ul li:first-of-type').css("border-bottom","0px");
  });
}
});
//slick natural attraction page wildlife picture slide
// the following code snippet is used to configure slick.js that is used for sliding the wildlife image
$('.wildlife_thumbnail').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        dots: true,
		    asNavFor: '.wildlife_description',
        centerMode: false,
        focusOnSelect: true,
        slide: 'div',
		    autoplay:true
    });
$('.wildlife_description').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        fade: true,
        asNavFor: '.wildlife_thumbnail'
    });
$(window).resize(function(){window.location.href=window.location.href});
});
