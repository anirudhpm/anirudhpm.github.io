
$( document ).ready(function() {
  // When the page has loaded
  $("body").fadeIn(200);
});

$('a.nav-item.nav-link').click(function(){
    $('a.nav-item.nav-link').removeClass('active');
    $(this).addClass('active');
})

$('.topic a').click(function(){
    $('.topic a h2').removeClass('topicSelected');
    $(this).children('h2').addClass('topicSelected');
})

$('.topic a').mouseover(function(){
    $('.topic a h2').removeClass('topicSelected');
    $(this).children('h2').addClass('topicSelected');
})

function arail(){
    $('body').removeClass().addClass("arail");
    }

function drawdio(){
$('body').removeClass().addClass("drawdio");
}



function juley(){
    $('body').removeClass().addClass("juley");
    }

function most(){
    $('body').removeClass().addClass("most");
    }

function jam(){
    $('body').removeClass().addClass("jam");
    }
    
    