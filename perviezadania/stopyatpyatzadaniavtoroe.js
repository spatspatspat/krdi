var pudge;
for(var i=0; i<5; i++){
    pudge = (i + 1) * 1000;
    $("#main-heading").fadeOut(pudge / 2).fadeIn(pudge / 2);
}