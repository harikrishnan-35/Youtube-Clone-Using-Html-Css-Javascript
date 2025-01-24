function showNavbar() {
    var sidenav = document.querySelector(".sidebar");
    sidenav.style.display = "block";
    var invis = document.querySelector(".killaimg");
    invis.style.display = "none";
}
function hideNavbar() {
    var sidenav = document.querySelector(".sidebar");
    sidenav.style.display = "none";
    var invis = document.querySelector(".killaimg");
    invis.style.display = "block";

}
function change2(){
    var input = document.querySelector(".subscribe-button");
    input.innerHTML = "<h3>Subscribed</h3>";
    belly = document.querySelector(".bell");
    belly.style.display="block";
}
