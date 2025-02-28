let intentos = 0;  // Inicializar intentos



const numeroAdivinar = Math.floor(Math.random() * 10) + 1;  // Generar número aleatorio entre 1 y 10
console.log(numeroAdivinar);

while (intentos < 3) {
    let numeroUsuario = parseInt(prompt("Adivina cuál es el número, escribe un número del 1 al 10"));

    if (numeroUsuario === numeroAdivinar) {
        alert(`¡Felicitaciones! Has adivinado el número. El número es ${numeroAdivinar}`);
        break;
    } else {
        alert("Inténtalo de nuevo");
        intentos= intentos +1;  // Incrementar intentos correctamente
    } 
}

if (intentos === 3) {
    alert(`Lo siento, has agotado tus intentos. El número era ${numeroAdivinar}.`);
}
    

          