// Animação ao rolar
const elements = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";
    observer.observe(el);
});

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

function abrirProduto() {
    document.getElementById("modalProduto").style.display = "flex";
}

function fecharProduto() {
    document.getElementById("modalProduto").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modalProduto");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}