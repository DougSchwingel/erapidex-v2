function toggleNav() {
    var sidebar = document.getElementById("mySidenav");
    var main = document.getElementById("main");

    if (sidebar.offsetWidth > 0) {
        sidebar.style.width = "0";
        main.style.marginLeft = "0";
    } else {
        sidebar.style.width = "250px";
        main.style.marginLeft = "250px";
    }
}

document.addEventListener("click", function (event) {
    var sidebar = document.getElementById("mySidenav");
    var isClickInsideSidebar = sidebar.contains(event.target);

    if (!isClickInsideSidebar && sidebar.style.width == "250px") {
        toggleNav();
    }
});

function toggleSubmenu(submenu) {
    if (submenu) {
        if (submenu.style.display === "none" || submenu.style.display === "") {
            submenu.style.display = "block";
        } else {
            submenu.style.display = "none";
        }
    }
}
