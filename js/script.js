


$('a.nav-item.nav-link').click(function(){
    $('a.nav-item.nav-link').removeClass('active');
    $(this).addClass('active');
})

$(window).mousewheel(function(event, delta) {
    event.preventDefault();
    var scrollx = $('#content').scrollLeft();
     $('#content').scrollLeft(scrollx-(delta * 30));
    
});

  function drawdio(){

    var $pageContent = $('#content');
    
    
    var loadContent = function(url) {
        $pageContent.hide();
     
        $pageContent.load(url, function(){
            $pageContent.fadeIn();
            $('#logo').attr("src","assets/logo-icon-white.png");
            
            var controller = new ScrollMagic.Controller({vertical: false});

            //var tween =TweenMax.to("#drawdio1",1,{opacity: "1"});
            var scene = new ScrollMagic.Scene({
               triggerElement: '.hide',triggerHook:0.7
        })
       // .setTween(tween)
       .setClassToggle(".hide","show")
        //.addIndicators()
        .addTo(controller); 
   
    
        });
     
      
    };
    loadContent('Drawdio.html');
}



    
    