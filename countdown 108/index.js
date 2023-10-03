var count=1;

$("img").click(checkCount);


function checkCount(){
    if(count>108){
        var end=new Audio("end.mp3");
        end.play();
        setTimeout(function(){
            location.reload();
        },5000);
        
    }else{
    //  changecount(count);
    $(".countdown").text(count);
    var start=new Audio("flute.wav");
    start.play();
    count++;
    }
}
// function changecount(count){
//     $(".countdown").text(count);
//     var start=new Audio("flute.wav");
//     start.play();
//     count++;
// }