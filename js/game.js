class game {
    constructor() {
        // Array datos
        var data = [];
        // Puntuación del juego: 0
        score = 0;
        // Establece el estado del juego: 1-inicio, 0-final
        state = 1;
        // Estado del juego: inicio
        RUNNING = 1;
        // Estado del juego: final
        GAMEOVER = 0;
    }

    start() {
        // Establecer el estado del juego para comenzar
        this.state = this.RUNNING;
        // La puntuación inicial del juego es 0
        this.score = 0;
        // Crear una matriz bidimensional
        for (var r = 0; r < 4; r++) {
            // Crea una matriz unidimensional,
            var datacell = [];
            // Inicializa el valor de matriz unidimensional a 0
            for (var c = 0; c < 4; c++) {
                datacell[c] = 0;
            }
            // Asigne cíclicamente el valor de la matriz unidimensional a los datos de la matriz [] y cree con éxito una matriz bidimensional
            this.data[r] = datacell;
        }

        // Llama a la función para generar aleatoriamente dos números
        this.randomNum();
        this.randomNum();
        // Actualiza la página y muestra el valor div
        this.updateView();
    }

    // genera aleatoriamente dos números 4 o 2
    randomNum() {
        while (true) {
            var r = Math.floor(Math.random() * this.data.length);
            var c = Math.floor(Math.random() * this.data.length);
            if (this.data[r][c] == 0) {
                // La probabilidad de generar aleatoriamente 2 y 4 es igual
                this.data[r][c] = Math.random() < 0.5 ? 2 : 4;
                break;
            }
        }
    }

    updateView() {
        for (var r = 0; r < this.data.length; r++) {
            for (var c = 0; c < this.data.length; c++) {
                // Juzgar los datos en la matriz, si es 0, no se realiza ninguna operación y los datos originales y el nombre de la clase permanecen sin cambios
                // Obtenga la identificación de la etiqueta dinámicamente: cuando se requiere el nombre de identificación, corresponde al subíndice de la matriz
                if (this.data[r][c] == 0) {
                    document.getElementById("cell-" + r + c).innerHTML = "";
                    document.getElementById("cell-" + r + c).className = "cell";
                } else {
                    // No es 0, luego muestra los datos en la matriz en la cuadrícula div correspondiente
                    document.getElementById("cell-" + r + c).innerHTML = this.data[r][c];
                    // Mantenga el nombre de clase original sin cambios y agregue el nombre de clase div correspondiente (dinámico)
                    document.getElementById("cell-" + r + c).className = "cell n" + this.data[r][c];

                }
            }
        }
        // Muestra la puntuación en la parte superior de la interfaz
        document.getElementById("score").innerHTML = this.score;
        var gameOver = document.getElementById("gameOver");
        if (this.state == this.GAMEOVER) {
            // Si el estado es GAMEOVER (es decir, 0, significa que el juego ha terminado, se muestra la interfaz final y la puntuación final se muestra en la interfaz final
            gameOver.style.display = "block";
            document.getElementById("final").innerHTML = this.score;
        } else {
            // Si el estado es 1, significa que el juego aún no ha terminado y la pantalla final está oculta
            gameOver.style.display = "none";
        }
    }
}


function startGame() {
    partida = game.start();
}