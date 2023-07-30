let image = document.getElementById("image")
let show_pass = document.getElementById("password");
let imageUrl = "./assets/closed-removebg-preview.png"
let eye = document.getElementById("eye")
let flag = false;
let email = document.getElementById('email')

email.addEventListener("focus", () => {
    image.src = "./assets/open-removebg-preview.png"
    eye.classList = "fa-solid fa-eye"
    show_pass.type = "password"
})

show_pass.addEventListener("focus", () => {
    if (show_pass.type === "text") {
        image.src = "./assets/show-removebg-preview.png"
    }
    else {
        image.src = "./assets/closed-removebg-preview.png"
    }
})
show_pass.addEventListener("blur", () => {
    console.log("blured")
    eye.classList = "fa-solid fa-eye"
    show_pass.type = "password"
})
eye.addEventListener("click", () => {
    flag = !flag
    if (flag) {
        eye.classList = "fa-solid fa-eye-slash"
        show_pass.type = "text"
        if (show_pass.type === "text") {
            image.src = "./assets/show-removebg-preview.png"
        }
    } else {
        eye.classList = "fa-solid fa-eye"
        show_pass.type = "password"
        image.src = "./assets/closed-removebg-preview.png"
    }
})