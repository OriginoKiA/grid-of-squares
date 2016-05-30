$(document).ready(function() {
    var main = $(".main");
    
    for (var i=0;i<256;i++){
        main.append("<div></div>");
    }
    $(".main div").mouseenter(function(){
        $(this).css("background-color","yellow");
    })
});
