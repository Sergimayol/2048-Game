// Crear objeto: atributo + método
var game = {
    // Matriz, guardar datos
    data: [],
    // Puntuación del juego: 0
    score: 0,
    // Establece el estado del juego: 1-inicio, 0-final
    state: 1,
    // Estado del juego: inicio
    RUNNING: 1,
    // Estado del juego: final
    GAMEOVER: 0,

    // El juego comienza con el método start ()
    start: function () {
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
    },

    // genera aleatoriamente dos números 4 o 2
    randomNum: function () {
        while (true) {
            var r = Math.floor(Math.random() * this.data.length);
            var c = Math.floor(Math.random() * this.data.length);
            if (this.data[r][c] == 0) {
                // La probabilidad de generar aleatoriamente 2 y 4 es igual
                this.data[r][c] = Math.random() < 0.5 ? 2 : 4;
                break;
            }
        }
    },

    updateView: function () {
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
    },

    // Mueve todas las líneas a la izquierda
    moveLeft: function () {
        // Determinar si la cuerda se mueve
        // Convierte la matriz en una cadena antes de hacer la operación de mover
        var before = String(this.data);
        // filas transversales
        for (var r = 0; r < this.data.length; r++) {
            this.moveLeftRow(r);
        }
        // Después de hacer la operación de mover, primero convierta la matriz en una cadena para guardar
        var after = String(this.data);
        // Compare la matriz (cadena) antes y después de la operación de movimiento, si no son iguales, es decir, cambian, genere un número al azar
        if (before != after) {
            this.randomNum();
            // Después de generar un número al azar, determina si el juego ha terminado y establece el estado del juego
            if (this.isGameOver()) {
                this.state = this.GAMEOVER;
            }
            // Actualiza la página antes de que termine el juego y luego muestra el número generado aleatoriamente
            this.updateView();
        }
    },

    // Juzga y mueve cada elemento en la línea especificada a la izquierda
    moveLeftRow: function (r) {
        // 0 inicio, recorre cada elemento en la fila r
        for (var c = 0; c < this.data.length - 1; c++) {
            // Obtener el índice del siguiente elemento del elemento actual que no es 0 nextc
            var nextc = this.getNextRow(r, c)
            // Si nextc = -1, significa que no hay ningún elemento a la derecha, salga del bucle
            if (nextc == -1) {
                break;
            } else if (this.data[r][c] == 0) {// Si usted == 0, coloque la siguiente posición en la posición actual, la siguiente posición se establece en cero
                this.data[r][c] = this.data[r][nextc];
                this.data[r][nextc] = 0;
                // Vuelva a verificar
                c--;
            } else if (this.data[r][c] == this.data[r][nextc]) {// Si el valor de la posición actual == el valor de la posición nextc, la posición actual * = 2; next La posición se establece en 0
                this.data[r][c] *= 2;
                // Añadir el valor actual al atributo de puntuación
                this.score += this.data[r][c];
                this.data[r][nextc] = 0;
            }
        }
    },

    // Encuentra el siguiente número a la derecha de la posición actual, el siguiente no es 0
    getNextRow: function (r, c) {
        // Recorrer los elementos restantes en la fila fila de c + 1,
        for (var i = c + 1; i < this.data.length; i++) {
            // Si hay un valor distinto de 0, devuelve el número de columnas
            if (this.data[r][i] != 0) {
                return i;
            }
        }
        // salida de bucle devuelve -1
        return -1;
    },


    // Mueve todas las líneas a la derecha	
    moveRight: function () {
        var before = String(this.data);
        for (var r = 0; r < this.data.length; r++) {
            this.moveRightRow(r);
        }
        var after = String(this.data);
        if (before != after) {
            this.randomNum();
            if (this.isGameOver()) {
                this.state = this.GAMEOVER;
            }
            this.updateView();
        }
    },

    moveRightRow: function (r) {
        for (var c = this.data.length - 1; c > 0; c--) {
            var prec = this.getPreRow(r, c)
            if (prec == -1) {
                break;
            } else if (this.data[r][c] == 0) {
                this.data[r][c] = this.data[r][prec];
                this.data[r][prec] = 0;
                c++;
            } else if (this.data[r][c] == this.data[r][prec]) {
                this.data[r][c] *= 2;
                this.score += this.data[r][c];
                this.data[r][prec] = 0;
            }
        }
    },

    getPreRow: function (r, c) {
        for (var i = c - 1; i >= 0; i--) {
            if (this.data[r][i] != 0) return i;
        }
        return -1;
    },

    moveUp: function () {
        var before = String(this.data);
        for (var c = 0; c < this.data.length; c++) {
            this.moveUpCol(c);
        }
        var after = String(this.data);
        if (before != after) {
            this.randomNum();
            if (this.isGameOver()) {
                this.state = this.GAMEOVER;
            }
            this.updateView();
        }
    },

    // Mueve todas las columnas hacia arriba
    moveUpCol: function (c) {
        for (var r = 0; r < this.data.length - 1; r++) {
            var nextr = this.getNextCol(r, c)
            if (nextr == -1) {
                break;
            } else if (this.data[r][c] == 0) {
                this.data[r][c] = this.data[nextr][c];
                this.data[nextr][c] = 0;
                r--;
            } else if (this.data[r][c] == this.data[nextr][c]) {
                this.data[r][c] *= 2;
                this.score += this.data[r][c];
                this.data[nextr][c] = 0;
            }
        }
    },

    getNextCol: function (r, c) {
        for (var i = r + 1; i < this.data.length; i++) {
            if (this.data[i][c] != 0) return i;
        }
        return -1;
    },

    // Mover hacia abajo todas las columnas
    moveDown: function () {
        var before = String(this.data);
        for (var c = 0; c < this.data.length; c++) {
            this.moveDownCol(c);
        }
        var after = String(this.data);
        if (before != after) {
            this.randomNum();
            if (this.isGameOver()) {
                this.state = this.GAMEOVER;
            }
            this.updateView();
        }
    },

    moveDownCol: function (c) {
        for (var r = this.data.length - 1; r > 0; r--) {
            var prer = this.getPreCol(r, c)
            if (prer == -1) {
                break;
            }
            else if (this.data[r][c] == 0) {
                this.data[r][c] = this.data[prer][c];
                this.data[prer][c] = 0;
                r++;
            } else if (this.data[r][c] == this.data[prer][c]) {
                this.data[r][c] *= 2;
                this.score += this.data[r][c];
                this.data[prer][c] = 0;
            }
        }
    },

    getPreCol: function (r, c) {
        for (var i = r - 1; i >= 0; i--) {
            if (this.data[i][c] != 0) return i;
        }
        return -1;
    },

    isGameOver: function () {
        // Condiciones de finalización del juego:
        // 1. Todos los datos en la matriz no son 0;
        // 2. Los valores de posición adyacentes de cada fila de datos en la matriz no son iguales
        // 3. Los valores de las posiciones adyacentes de cada columna de datos en la matriz no son iguales
        for (var c = 0; c < this.data.length; c++) {
            for (var r = 0; r < this.data.length; r++) {
                // Juzgar todo no 0
                if (this.data[r][c] == 0) {
                    return false;
                }
                if (c < 3) {
                    if (this.data[r][c] == this.data[r][c + 1]) {
                        return false;
                    }
                }
                if (r < 3) {
                    if (this.data[r][c] == this.data[r + 1][c]) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}
function startGame() {
    // Llama a la función para iniciar el juego
    game.start();
    document.onkeydown = function (event) {
        // Presione el botón izquierdo o la tecla de letra a para moverse hacia la izquierda
        if (event.keyCode == 37 || event.keyCode == 65) {
            game.moveLeft();
        }
        // Presione la tecla arriba o la tecla de letra w para subir
        if (event.keyCode == 38 || event.keyCode == 87) {
            game.moveUp();
        }
        // Presione la tecla derecha o la tecla de letra d para moverse hacia la derecha
        if (event.keyCode == 39 || event.keyCode == 68) {
            game.moveRight();
        }
        // Presione la tecla hacia abajo o la tecla s para moverse hacia abajo
        if (event.keyCode == 40 || event.keyCode == 83) {
            game.moveDown();
        }
        // Presiona la barra espaciadora para reiniciar el juego
        if (event.keyCode == 32) {
            game.start();
        }

    }
}
startGame();
