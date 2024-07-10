function openPage(pageName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(pageName).style.display = "block";
  event.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function() {
  openPage('home');
  document.querySelector('.tablink').classList.add('active');


  const welcomeSection = document.getElementById('welcome');
  const welcomeOffset = welcomeSection.offsetTop;
  const windowHeight = window.innerHeight;

  function fadeInOnScroll() {
    if (window.pageYOffset > welcomeOffset - windowHeight + 100) {
      welcomeSection.style.opacity = '1';
      welcomeSection.style.transform = 'translateY(0)';
    }
  }

  window.addEventListener('scroll', fadeInOnScroll);
  fadeInOnScroll();
});