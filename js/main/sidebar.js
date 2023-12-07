/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    var sidebar = document.getElementById("mySidenav");
    var main = document.getElementById("main");

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        main.style.marginLeft = "0";

    } else {
        sidebar.style.width = "250px";
        main.style.marginLeft = "250px";
    }
}
