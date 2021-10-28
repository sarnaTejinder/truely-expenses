const sidebar = document.querySelector('.sidebar')
const navLinks = document.querySelectorAll(".nav-link")

const makeDark = ()=>{
    sidebar.classList.toggle("bg-dark")
    navLinks.forEach(e=>{
        if(!e.classList.contains("active"))
            e.classList.toggle("text-light")
})
}

fetch('/extras/theme')
.then(res =>res.json())
.then(result => {
    if(result) makeDark()
})
