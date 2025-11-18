let contador = 1;

function cambiarImagen() {
    contador++;

    const imagen = document.getElementById("banner");
    imagen.style.opacity = 0;

    setTimeout(() => {
        const rutas = [
            "img/horizontal.jpg",
            "img/rlsb.jpg",
            "img/fondo rels b.jpg"
        ];

        if (contador > rutas.length) {
            contador = 1;
        }

        imagen.src = rutas[contador - 1];
        imagen.style.opacity = 1;
    }, 300);
}