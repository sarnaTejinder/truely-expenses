const setTheme = ()=>{
    const light = document.querySelector('.light-theme')
    const dark = document.querySelector('.dark-theme')
    fetch('/extras/theme')
    .then(res =>res.json())
    .then(result => {
        if(result == 0)
        light.selected = true
        else
        dark.selected = true
    })
}

document.onload = setTheme()