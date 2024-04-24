// accordion

var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

var acc = document.getElementsByClassName('accordion-first');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// hamburger-menu

function openNav() {
document.getElementById("myNav").style.height = "100%";
document.getElementById("myNav").style.overflow = "scroll";
}

function closeNav() {
document.getElementById("myNav").style.height = "0%";
}

// div-with-loader
var loaderTimeout;

function divLoaderFunction() {
  loaderTimeout = setTimeout(showDiv, 2000);
}

function showDiv() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("div-to-load").style.display = "block";
}