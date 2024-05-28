function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./img/menu_24dp_FILL0_wght400_GRAD0_opsz24.png"; // Corrigido o caminho da imagem
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./img/close_24dp_FILL0_wght400_GRAD0_opsz24.png"; // Corrigido o caminho da imagem
    }
}

var radio = document.querySelector('.manual-btn')
var cont = 1;
document.getElementById('radio1').checked = true;

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true;
}


/* console.log('#teste') */
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))

myObserver.observe(lastOne)