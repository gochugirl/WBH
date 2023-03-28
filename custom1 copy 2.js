// $("선택자").함수(function(){
//     $('선택자').메서드();
// })

$('.show-btn').mouseenter(function(){
    $('div').fadeIn(500);
});
$('.hide-btn').mouseleave(function(){
    $('div').fadeOut(2000);
});
$('.togg-btn').mouseleave(function(){
    $('div').fadeToggle();
});