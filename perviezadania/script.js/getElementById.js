var headingElement = document.getElementById("main-heading");
 console.log(headingElement.innerHTML);
 var newHeadingText = prompt("Введите новый заголовок:");
headingElement.innerHTML = newHeadingText;