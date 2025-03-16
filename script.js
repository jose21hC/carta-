const frases = [
    "Eres mi 🔥tentación favorita🔥 y mi debilidad más dulce 🍯❤️.",
    "Si fueras un café ☕, serías el más dulce y el que siempre quiero cada mañana 💕.",
    "Eres mi sueño más prohibido 😈💭 y mi deseo más real ❤️🔥.",
    "Tenerte cerca es mi paz 🕊️, besarte es mi felicidad 😘💕.",
    "Si besarte fuera un delito… ya estaría cumpliendo cadena perpetua 😏💋❤️.",
    "Eres el mejor capítulo de mi historia 📖❤️, y quiero que nunca termine.",
    "💖 Cada latido de mi corazón dice tu nombre 💕",
    "😍 Tu amor es mi mayor tesoro 💎",
    "💞 Mi felicidad está en tu sonrisa 😊",
    "🌙 En tu mirada encuentro mi hogar ❤️",
    "🎶 Tu amor es la melodía que alegra mi vida 🎵",
    "💑 A tu lado, todo es perfecto 💖",
    "❤️ Eres el sueño que nunca quiero despertar 🌠"
];

let mensajeFinal = "";

function abrirSobre() {
    document.getElementById("tapa").style.transform = 'rotateX(-180deg)';
    const carta = document.getElementById("carta");
    carta.style.transform = 'translateY(0)';
    carta.style.opacity = '1';
}

function cambiarMensaje(event) {
    event.stopPropagation();
    mensajeFinal = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById("frase").textContent = mensajeFinal;

    // Muestra la flor con animación
    const flor = document.getElementById("flor");
    flor.style.opacity = '1';
    flor.style.transform = 'scale(1)';

    // Cierra el sobre después de 1 minuto (60000 ms)
    setTimeout(() => {
        cerrarSobre();
    }, 60000);
}

function cerrarSobre() {
    document.getElementById("tapa").style.transform = 'rotateX(0deg)';
    const carta = document.getElementById("carta");
    carta.style.transform = 'translateY(100%)';
    carta.style.opacity = '0';

    // Oculta la flor al cerrar el sobre
    const flor = document.getElementById("flor");
    flor.style.opacity = '0';
    flor.style.transform = 'scale(0)';
}
