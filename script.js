var windowHeight = $(window).height();
var menu = $("#menu").height();
var code= windowHeight - menu;
$("#htmlcode").height(code + "px");


$(".sel").click(function() {
$(this).toggleClass("active");
$(this).toggleClass("too");
 var activeDiv = $(this).html();
 
  $("#" +activeDiv).toggle()
  
  var appear = $(".codeblock").filter(function() {
    return ($(this).css("display") !=  "none");
     
  
  }).length;
  
  
  var divWidth = 100/appear;
  $(".codeblock").width(divWidth+"%");

  
  
});

$("#run").click(function() {
  var x = $("#change").val();
  var c = $("#changeCss").val();
  //$("iframe").contents().find("html").html(x);
  
  $("iframe").contents().find("html").html('<style>' + $("#changeCss").val() + '</style>' + $("#change").val());
  
  document.getElementById("frame").contentWindow.eval($('#changeJs').val());
  
});