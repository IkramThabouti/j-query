$(".image-hover").mouseenter(function(){
    $(this).find(".bt").show();
    $(this).css("opacity","0.7");
})
$(".image-hover").mouseleave(function(){
    $(this).find(".bt").hide();
    $(this).css("opacity","1");

})

$("#red").click(function(){
   alert(window.getSelection().getRangeAt(0))
})











// $("div").mouseover(function(){
//     $(this).children("button").show();
// })
// $("div").mouseleave(function(){
//     $(this).children("button").hide();
// })