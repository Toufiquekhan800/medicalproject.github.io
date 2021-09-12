//Q&N section js
var coll = document.getElementsByClassName("collapsible");
var icon = document.querySelector(".arrow-icon");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      
    } else {
      content.style.display = "block";
      
    }
  });
}


//javascript animation
const sr = ScrollReveal({
   
    distance: '40px',
    duration: 3000,
    reset: true
 });
 sr.reveal(`.banner-right, .info-card, .test-type, .location, .more-question, .main, .symtom-card, 
 .expand-collapse, .our-clind, .vertual-assistant, .app-download, .footer, .header-bar, .nav-bar, .social-icon`,{
    origin: 'top',
    interval: 200
 })
 sr.reveal(`.get-tested-left`,{
    origin: 'left',
    interval: 200
 })
 sr.reveal(`.get-tested-right`,{
    origin: 'right',
    interval: 200
 })