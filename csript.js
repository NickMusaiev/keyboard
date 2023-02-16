const keys = document.querySelectorAll(".key");

function init(e) {
    keys.forEach(item => {
        if (item.getAttribute("data") == e.keyCode) item.classList.add("active")

        item.onkeyup = setTimeout(() => {
            item.classList.remove("active")
        }, 300);
    })

}
document.onkeydown = init
