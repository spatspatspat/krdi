var leftOffset = 150;//увеличили что бы ускорить//
var MoveHeading = function (){
    $("#heading").offset({left: leftOffset });
    leftOffset++;
    if (leftOffset > 200){
         leftOffset = 0;
    }
};
setInterval(MoveHeading, 15);//уменьшаем чтобы увеличить скорость//
