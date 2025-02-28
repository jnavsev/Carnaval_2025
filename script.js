document.addEventListener("DOMContentLoaded", function() {
    const phrases = [
        "La única cita que te espera es la del dentista, porque con esa boca no besas ni a tu perro."
        "Te preocupas por el amor cuando deberías preocuparte por el espejo."
        "Tu Tinder es como tu nevera, aunque lo abras muchas veces, siempre está vacío."
        "No eres un 10, pero tienes algo que nadie tiene… mis ganas de salir corriendo."
        "Podría decirte algo bonito, pero prefiero que la realidad te lo diga de golpe."
        "Eres la prueba de que la suerte no siempre juega a tu favor, pero en el amor tampoco."
        "El amor es rapido, pero tu más, pero tu crush es el correcaminos."
        "Lo tuyo no es mala suerte en el amor, es castigo divino."
        "Te quiero como amigo, pero ni eso. Mejor un bloqueito y seguimos con nuestras vidas. Te suena esa frase eeh"
        "No te voy a decir lo que pienso por si llevas rimel waterprof",
        "Pero tu te has visto? Primero arreglate esa cara de alcohólico para conquistar a alguién",
        "Me das pena pero Ganaste el derecho a decirle cornudo a José Luis!! Enhorabuena!!",
        "Me das pena pero para animarte te doy un bailecito sexy con el gran seductor moisex",
        "Lo único que te va a tocar, va a ser el urólogo las pelotas, más Tinder y menos rascas"
        "Eres como un WiFi sin contraseña, cualquiera se conecta y luego se va."
        "Si fueras una película, serías ‘Rápidos y Rechazados’."
        "Tienes menos posibilidades en el amor que un vegetariano en un asador."
        "Si fueras un postre, serías un flan sin caramelo: triste y sin gracia."
        "Tu carisma es como una dieta keto: sin pan y sin gracia."
    ];
    
    const randomIndex = Math.floor(Math.random() * phrases.length);
    document.getElementById("random-phrase").textContent = phrases[randomIndex];
});
