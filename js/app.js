let querty = document.querySelector('.qwerty');
let search = document.querySelector('.buscar');

// Para el Boton
search.onclick = () => {
    let url = 'https://www.google.com/search?q=' + querty.value;
    window.open(url, '_self');
}

// Para enter
querty.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        let url = 'https://www.google.com/search?q=' + querty.value;
        window.open(url, '_self');
    }
})