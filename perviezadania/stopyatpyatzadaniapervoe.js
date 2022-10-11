for (var i=0; i<5; i++){
    var friends = prompt("Введите имя вашего друга");
    $("body").append("<p>"+ friends + "</p>").fadeIn(1000).hide(1000);
    $("#main-heading").text("Мои друзья");
}
$("p").append(" Лучший!");