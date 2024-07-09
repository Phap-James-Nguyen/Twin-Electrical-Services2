function openPage(pageName) {
    var i;
    var x = document.getElementsByClassName("tabcontent");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "block";
  }
  
  // Open the default tab (HOME) when the page loads
  document.addEventListener("DOMContentLoaded", function() {
    openPage('home');
  });
  