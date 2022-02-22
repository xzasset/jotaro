function OpenMenu() { document.getElementById("Menu").classList.toggle('active'); }

const menu = new Audio('sounds/button2.mp3')

document.querySelector('.toggle-btn').addEventListener('click', function () {
    menu.play();
})

document.querySelector('.themetoggle').addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme');
    }
    else {
        localStorage.setItem('theme','dark')
    }
    addDarkClassToHTML();
})

function addDarkClassToHTML() {
    try {
        if (localStorage.getItem('theme') === 'dark') {
            // $('html').addClass('dark');
            document.querySelector('html').classList.add('dark');
        }
        else {
            document.querySelector('html').classList.remove('dark');
        }
    } catch (err) { }

}

addDarkClassToHTML();