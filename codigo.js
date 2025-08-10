    // creacion de una funcion para numeros aleatorios
    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function eleccion(jugada) {
        let resultado = ""
        if (jugada == 1) {
            resultado =
                "Piedra 🪨"
        } else
        if (jugada == 2) {
            resultado =
                "Papel📄"
        } else
        if (jugada == 3) {
            resultado = "Tijera✂️"
        } else {
            resultado =
                "Nulo"
        }
        return resultado
    }
    // 1 es piedra , 2 es papel , 3 es tijera
    let jugador = 0
    let pc = 0
    let triufos = 0
    let perdidas = 0

    while (triufos < 3 && perdidas < 3) {
        pc = aleatorio(1, 3)
        jugador = prompt(" Elige : 1 para piedra 🪨 , 2 para Papel 📄, 3 para Tijera✂️")

        // alert (Elegiste + jugador)
        alert("PC elige: " + eleccion(pc))
        alert("Tu eliges : " + eleccion(jugador))

        //COMBATE
        if (pc == jugador) {
            alert
                ("Empate")
        } else if (jugador == 1 && pc == 3) {
            alert
                ("Ganaste")
            triufos = triufos + 1
        } else if (jugador == 2 && pc == 1) {
            alert("Ganaste")
            triufos = triufos + 1
        } // Pierdo
        else {
            alert("PERDISTE 😭")
            perdidas = perdidas + 1
        }
    }
    alert
        ("Ganaste " + triufos + "veces. Perdiste " + perdidas + " veces.")