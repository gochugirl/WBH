// $("선택자").함수(function(){
//     $('선택자').메서드();
// })

$('.add-btn').click(function(){
    $('.container div').addClass('active');
});
$('.remove-btn').click(function(){
    $('.container div').removeClass('active');
});
$('.toggle-btn').click(function(){
    $('.container div').toggleClass('active');
});