 $(document).ready(function(){
       $('#black').width(200);
       $('#black').mouseover(function()
       {
          $(this).css("cursor","pointer");
          $(this).animate({width: "210px", height: "370px"}, 'fast');
       });
    
    $('#black').mouseout(function()
      {   
          $(this).animate({width: "200px", height: "360px"}, 'fast');
       });
   });



$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});


$(document).ready(function(){
    $("#flip2").click(function(){
        $("#panel2").slideToggle("slow");
    });
});



$(document).ready(function(){
    $("#flip3").click(function(){
        $("#panel3").slideToggle("slow");
    });
});


$(document).ready(function(){
    $("#flip4").click(function(){
        $("#panel4").slideToggle("slow");
    });
});

