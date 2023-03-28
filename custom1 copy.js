// $("선택자").함수(function(){
//     $('선택자').메서드();
// })

$('.btn').mouseenter(function(){
    $('div').show();
});
$('.btn').mouseleave(function(){
    $('div').hide();
});