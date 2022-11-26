document.addEventListener("DOMContentLoaded", () => {
    let open;
    let close;
    let menu;
    let overlay;

    open = document.querySelector(".open");
    close = document.querySelector(".cross");
    open.addEventListener("click", () => {
        menu = document.querySelector(".list");
        overlay = document.querySelector(".overlay");
        menu.style.right = "0";
        overlay.style.display = "block";
        document.body.style.height = "100%";
        document.body.style.overflow = "hidden";
    })
    close.addEventListener("click", () => {
        menu = document.querySelector(".list");
        overlay = document.querySelector(".overlay");
        menu.style.right = "-100%";
        overlay.style.display = "none";
        document.body.style.height = "auto";
        document.body.style.overflow = "auto";
    })
})