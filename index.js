// Toggle Click - Button
// Fade In Button
// Fade Out Button
$(document).ready(function() {
    console.log("hello - you're looking at the console :)");
    $("button").html ("Click me to display the Date and Time....")
    $(".btn1").html ("Click once to make it disappear!")
    $(".btn2").html ("I don't know why you'd want it to appear again, but click me.")
    $("button").on("click", function(event) {
        $("#date").toggleClass('warning');
        console.log(" the times clicked on any buttons");    
    });
      $(".btn1").click(function(){
      $(".hate").fadeOut(1000);
    });
    $(".btn2").click(function(){
        $(".hate").fadeIn(1000);
  })
});