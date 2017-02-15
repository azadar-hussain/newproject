$('document').ready(function(){



$('.thumb-unit').hover(function(){
  $(this).css("background-size","120%");
})


  $('.thumb-unit1').hover(function(){
    $(this).css("background-size","180%");
  });



$('.thumb-unit').mouseout(function(){
  $(this).css("background-size","150%");
});

$('.thumb-unit1').mouseout(function(){
  $(this).css("background-size","190%");
});


workbelt();
workLoad();
clientStuff();


});


$(window).scroll(function(){

  var skillProgress = function(){
  var timer = 2000;
  $('.skill1').animate({width:'70%'},timer);
  $('.skill2').animate({width:'50%'},timer);
  $('.skill3').animate({width:'95%'},timer);
  $('.skill4').animate({width:'65%'},timer);
  $('.skill5').animate({width:'65%'},timer);
  $('.skill6').animate({width:'95%'},timer);
  $('.skill7').animate({width:'95%'},timer);
  $('.skill8').animate({width:'40%'},timer);
  };

  var face_section_top = $('#about-section').offset().top;
  var avatarTop = $('.face-img').offset().top;
  var iconBack = $('.work-belt').offset().top;
  var wScroll = $(this).scrollTop();




if(wScroll > avatarTop) {

  skillProgress();
}

if(wScroll > face_section_top) {
  $('.blurb').animate({opacity: 1},1000);
}


});


function workbelt() {
  $('.thumb-unit').click(function(){
    $('.work-belt').css('left','-100%')
    $('.work-container').show()
  });

  $('.icon-back').click(function(){
    $('.work-belt').css('left','0%')
    $('.work-container').hide(800)
  });

};

function workLoad(){

$.ajaxSetup({cache: true});
$('.thumb-unit').click(function(){

  var $this  = $(this);
      newTitle = $this.find('strong').text(),
      newFile1 = $this.attr('class').split(" "),
      newFile2 = newFile1[1],
      spinner = '<div class="loader">Loading..</div>',
      newHTML = '../work/' + newFile2 + '.html';

    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle);
    console.log(newFile2);

});

}


function clientStuff(){
  $('.client-unit').first().addClass('active-client');
  $('.client-logo').first().addClass('active-client');
  $('.mobile-client-nav span').first().addClass('active-client');

  $('.client-logo,.mobile-client-nav span').click(function(){
    var  $this = $(this),
         $siblings = $this.parent().children(),
         position = $siblings.index($this);
        //  console.log(position);
        $('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
        $('.client-logo').removeClass('active-client').eq(position).addClass('active-client');
        $('.mobile-client-nav span').removeClass('active-client').eq(position).addClass('active-client');

  });


$('.client-control-next,.client-control-prev').click(function(){
      var $this = $(this),
          currentActive = $('.client-belt').find('.active-client'),
          position = $('.client-belt').children().index(currentActive),
          clientNum = $('.client-unit').length;
if($this.hasClass('client-control-next')){
if(position <clientNum-1){
          $('.active-client').removeClass('active-client').next().addClass('active-client');
          console.log(currentActive + "\n" + position + "\n" + clientNum);
}else{
  $('.client-unit').removeClass('active-client').first().addClass('active-client');
  $('.client-logo').removeClass('active-client').first().addClass('active-client');
    $('.mobile-client-nav span').removeClass('active-client').first().addClass('active-client');
}
}else{

if(position > 0){
      $('.active-client').removeClass('active-client').prev().addClass('active-client');
}else{
  $('.client-unit').removeClass('active-client').last().addClass('active-client');
    $('.client-logo').removeClass('active-client').last().addClass('active-client');
    $('.mobile-client-nav span').removeClass('active-client').last().addClass('active-client');


}

}console.log("working")
});
}
