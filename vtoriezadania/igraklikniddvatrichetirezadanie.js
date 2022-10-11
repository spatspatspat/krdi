var direction = 'pravo';
var offset = 0;
var intervalLength = 120;
var kolvoclikov = 0;

$("#heading").offset({ left: offset, top: offset });

var moveHeading = function () {
  if (direction === 'pravo') {
    $("#heading").offset({ left: offset });
    offset++;
    if (offset > 200) {
      offset = 0;
      direction = 'vniz';
    }
  } else if (direction === 'vniz') {
    $("#heading").offset({ top: offset });
    offset++;
    if (offset > 200) {
      offset = 200;
      direction = 'levo';
    }
  } else if (direction === 'levo') {
    $("#heading").offset({ left: offset });
    offset--;
    if (offset < 0) {
      offset = 200;
      direction = 'verx';
    }
  } else if (direction === 'verx') {
    $("#heading").offset({ top: offset });
    offset--;
    if (offset < 0) {
      offset = 0;
      direction = 'pravo';
    }
  }
};
var intervalId = setInterval(moveHeading, intervalLength);
    $("#heading").click(function () {
    clearInterval(intervalId);
    intervalLength /= 2;
    kolvoclikov++;

    if (kolvoclikov > 10) {
      $("#heading").text("Вы победили!");
    } else {
      intervalId = setInterval(moveHeading, intervalLength)

    }
  });


