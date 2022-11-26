window.onload = function () {
    // burger-menu
    document
        .getElementById("burger-menu")
        .addEventListener("click", myFunction);

    // to-up button
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

function myFunction() {
    var x = document.getElementById("nav-items");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}