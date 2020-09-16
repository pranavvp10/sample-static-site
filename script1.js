$(document).ready(function () {
    $("#sharefood").hide();
    $("#wel").animate(
      {
        right:'250px'
      }
    );
    $('.navbar ul li').click(function(){
        $(".navbar ul li").removeClass("active");     
        $(this).addClass("active");
        
        $('html, body').stop().animate({
          scrollTop: $($(this).attr('href')).offset().top - 160
        }, 300);
        return false;
      });

      
      $("#sff").click(function (e) { 
          e.preventDefault();
          $("#sharefood").show();
          $("#sff").hide();
          
      });

      $("#submit").click(function (e) { 
          e.preventDefault();
          var email = $("#email").val();
          var name =$("#name").val();
          var location=$("#loc").val();
          var time=$("#time").val();
          if ((email.length == 0) || (name.length == 0)||(location.length==0)||(time.length==0)) {
            alert("fill completely");
          } else {
            $("#sharefood").html();
            $("#sharefood").html("<h1>Thanks for sharing Food</h1>");
          }
      });

     
    

    

});