$('#show').click(function() {

  $('#shopper-content').hide();
  $('#business-content').show();

});

$('#hide').click(function() {

  $('#shopper-content').show();
  $('#business-content').hide();

});

// function move() {
//     var elem = document.getElementById("bar");   
//     var width = 0;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= 26) {
//         clearInterval(id);
//       } else {
//         width++; 
//         elem.style.width = width + '%';
//       }
//     }
// } 
