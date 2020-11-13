$(document).on('mousemove', function(e){
    $('.eyes').css({
       left:  (e.pageX * 0.35),
       top:   (e.pageY * 0.35)
    });
});