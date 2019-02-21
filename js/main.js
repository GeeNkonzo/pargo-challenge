$('#hide').click(function() {
    $('#content1').hide();
    $('#content2').show();
});

$('#show').click(function() {
    $('#content1').show();
    $('#content2').hide();
});

function move() {
    var elem = document.getElementById("bar");   
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 26) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%';
      }
    }
} 
