


$('a.nav-item.nav-link').click(function(){
    $('a.nav-item.nav-link').removeClass('active');
    $(this).addClass('active');
})

$(window).mousewheel(function(event, delta) {
    event.preventDefault();
    var scrollx = $('#content').scrollLeft();
    
    $('#content').scrollLeft(scrollx-(delta * 100));
    });

  function drawdio(){

    var $pageContent = $('#content');
    
    
    var loadContent = function(url) {
        $pageContent.hide();
     
        $pageContent.load(url, function(){
            $pageContent.fadeIn();
            
        });
     
      
    };
    loadContent('Drawdio.html');
}



    
    