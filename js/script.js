window.onload = function () {
    // burger-menu
    document
        .getElementById("burger-menu")
        .addEventListener("click", showHideMenu);

    // top-menu
    document.getElementById("to-up").addEventListener("click", colorArrow);

    // Mostrar botón to-up cuando el scrollY baja de 600px
    window.addEventListener(
        "scroll",
        function (event) {
            var x = document.getElementById("to-up");
            var top = this.scrollY;
            if (top > 600) x.style.display = "block";
            else x.style.display = "none";
        },
        false
    );
};

/*
 * showHideMenu: Muestra u oculta el menú hamburguesa en modo responsive
 */
function showHideMenu() {
    var x = document.getElementById("nav-items");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

/*
 * colorArrow: Mantiene el color de la flecha de subida al inicio
 */
function colorArrow() {
    var x = document.getElementById("arrow");
    x.setAttribute("style", "color:var(--orange);");
}
