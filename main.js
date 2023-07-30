document.getElementById('nav-button').addEventListener('click', e => {
    const nav = document.getElementsByTagName('nav')[0];
    console.log(nav);
    nav.classList.contains('hidden')
        ? nav.classList.remove('hidden')
        : nav.classList.add('hidden')
})

const mql = window.matchMedia("(max-width: 500px)");
console.log(mql.matches);

addEventListener('resize', (e) => {
    if(e.target.innerWidth > 500) {
        document.getElementsByTagName('nav')[0].classList.remove('hidden');
    }
})