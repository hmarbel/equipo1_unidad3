function quitaBorde(componente) {
    //componente.style.borderColor = "transparent";
    componente.style.backgroundColor = "white";
}

function ver(componente) {
    const banda4 = document.getElementById("bandas4");
    const banda5 = document.getElementById("bandas5");
    const banda6 = document.getElementById("bandas6");

    banda4.className = 'oculto';
    banda5.className = 'oculto';
    banda6.className = 'oculto';

    if (componente == 4) {
        banda4.className = 'visible';
    } else if (componente == 5) {
        banda5.className = 'visible';
    } else {
        banda6.className = 'visible';
    }

    var contenedor = document.getElementById("resultado");
    contenedor.innerHTML = "";

    const pTolerancia = document.getElementById("tolerancia");
    const pResistencia = document.getElementById("resistencia");

    pResistencia.innerHTML = "<strong>Resistencia: </strong>";
    pTolerancia.innerHTML = "<strong>Tolerancia: </strong>";
}

function validar(...args) {
    let flag = true;

    var base = args.length == 4 ? "a" : args.length == 5 ? "b" : "c";

    for (let index = 0; index < args.length; index++) {
        if (args[index] > 11 || args[index] < 0) {
            flag = false;

            var number = document.getElementById("n" + base + (index + 1));
            number.style.backgroundColor = "#C56175";
            //number.style.borderColor = "#A91230";
        }

        if (index = args.length - 1) {
            if (args[index] > 7 || args[index] < 0) {
                flag = false;

                var number = document.getElementById("n" + base + (index + 1));
                number.style.backgroundColor = "#C56175";
                //number.style.borderColor = "#A91230";
            }
        }
    }

    if (flag) {
        pintar(args);
    }
}

function pintar(args) {
    var div = document.createElement("div");
    var table = document.createElement("table");
    table.style.marginLeft = "auto";
    table.style.marginRight = "auto";
    var row = table.insertRow(-1);

    for (let index = 0; index < args.length; index++) {
        if (index != args.length - 1) {
            var celda = row.insertCell(index);

            var parrafo = document.createElement("p");
            var color = document.createTextNode(nombreColor(args[index]));
            parrafo.appendChild(color);

            var fondo = colorear(parseInt(args[index]));
            parrafo.style = "border: 1px solid #999999; background-color: #" + fondo + "; width: 70px; height: 20px; text-align: center;";

            celda.appendChild(parrafo);
        } else {
            if (args.length != 6) {
                var celda = row.insertCell(index);

                var parrafo = document.createElement("p");
                var color = document.createTextNode(nombreColorUltimo(args[index]));
                parrafo.appendChild(color);

                var fondo = colorearUltimo(parseInt(args[index]));
                parrafo.style = "border: 1px solid #999999; background-color: " + fondo + "; width: 70px; height: 20px; text-align: center;";

                celda.appendChild(parrafo);
            } else {
                var celda = row.insertCell(index);

                var parrafo = document.createElement("p");
                var color = document.createTextNode(nombreColorPPM(args[index]));
                parrafo.appendChild(color);

                var fondo = colorearPPM(parseInt(args[index]));
                parrafo.style = "border: 1px solid #999999; background-color: " + fondo + "; width: 70px; height: 20px; text-align: center;";

                celda.appendChild(parrafo);
            }
        }
        //div.append(parrafo);
    }
    div.appendChild(table);
    var contenedor = document.getElementById("resultado");
    contenedor.innerHTML = "";
    contenedor.appendChild(div);

    obtenerDatos(args);
}

function obtenerDatos(args) {
    const pTolerancia = document.getElementById("tolerancia");
    const pResistencia = document.getElementById("resistencia");

    if (args.length == 4) {
        pResistencia.innerHTML = "<strong>Resistencia: </strong>" + ((args[0] * args[2]) + (args[1] * (args[2] / 10)));
        pTolerancia.innerHTML = "<strong>Tolerancia: </strong>" + tolerancia(args[3]) + "%";
    } else if (args.length == 5) {
        pResistencia.innerHTML = "<strong>Resistencia: </strong>" + ((args[1] * args[3]) + (args[2] * (args[3] / 10)) + (args[0] * args[3]));
        pTolerancia.innerHTML = "<strong>Tolerancia: </strong>" + tolerancia(args[4]) + "%";
    } else {
        pResistencia.innerHTML = "<strong>Resistencia: </strong>" + (args[0] * 100 + args[1] * 10 + args[2]) * Math.pow(10, args[3]);
        pTolerancia.innerHTML = "<strong>PPM: </strong>" + ppm(args[5]) + "ppm";
    }


}

function terminarPrograma() {
    var content = document.getElementById("section");
    var terminar = document.getElementById("divTerminar");
    terminar.innerHTML = "";

    var div = document.createElement("div");
    var titulo = document.createElement("h3");
    var tituloText = document.createTextNode("¿Estás seguro?");
    titulo.appendChild(tituloText);
    titulo.style.color = "white";
    div.appendChild(titulo);

    var aceptar = document.createElement("input");
    aceptar.type = "button";
    aceptar.value = "Aceptar";
    aceptar.addEventListener("click", funcionCerrar);
    div.appendChild(aceptar);

    var cancelar = document.createElement("input");
    cancelar.type = "button";
    cancelar.value = "Cancelar";
    cancelar.addEventListener("click", funcionAceptar);
    div.appendChild(cancelar);

    //div.style.padding = "20px";
    div.style.height = "482px";

    terminar.appendChild(div);

    content.className = "vOculto";
    terminar.className = "vVisible";
}

function funcionCerrar() {
    close();
}

function funcionAceptar() {
    var content = document.getElementById("section");
    var terminar = document.getElementById("divTerminar");
    terminar.innerHTML = "";

    terminar.className = "vOculto";
    content.className = "vVisible";
}

function nombreColor(num) {
    switch (parseInt(num)) {
        case 0:
            return "Negro";
        case 1:
            return "Café";
        case 2:
            return "Rojo";
        case 3:
            return "Naranja";
        case 4:
            return "Amarillo";
        case 5:
            return "Verde";
        case 6:
            return "Azul";
        case 7:
            return "Violeta";
        case 8:
            return "Gris";
        case 9:
            return "Blanco";
        case 10:
            return "Oro";
        case 11:
            return "Plata";
    }
}

function colorear(num) {
    switch (num) {
        case 0:
            return "000000";
        case 1:
            return "A85719";
        case 2:
            return "BF042C";
        case 3:
            return "F75E0C";
        case 4:
            return "FCB319";
        case 5:
            return "66BF2E";
        case 6:
            return "2991CF";
        case 7:
            return "A866D9";
        case 8:
            return "A8A8A8";
        case 9:
            return "FFFFFF";
        case 10:
            return "FFD700";
        case 11:
            return "C0C0C0";
    }
}

function nombreColorUltimo(num) {
    switch (parseInt(num)) {
        case 0:
            return "Café";
        case 1:
            return "Rojo";
        case 2:
            return "Verde";
        case 3:
            return "Azul";
        case 4:
            return "Violeta";
        case 5:
            return "Gris";
        case 6:
            return "Oro";
        case 7:
            return "Plata";
    }
}

function colorearUltimo(num) {
    switch (num) {
        case 0:
            return "brown";
        case 1:
            return "red";
        case 2:
            return "green";
        case 3:
            return "blue";
        case 4:
            return "violet";
        case 5:
            return "gray";
        case 6:
            return "gold";
        case 7:
            return "silver";
    }
}

function nombreColorPPM(num) {
    switch (parseInt(num)) {
        case 0:
            return "Café";
        case 1:
            return "Rojo";
        case 2:
            return "Naranja";
        case 3:
            return "Amarillo";
        case 4:
            return "Azul";
        case 5:
            return "Violeta";
    }
}

function colorearPPM(num) {
    switch (num) {
        case 0:
            return "brown";
        case 1:
            return "red";
        case 2:
            return "orange";
        case 3:
            return "yellow";
        case 4:
            return "blue";
        case 5:
            return "violet";
    }
}

function tolerancia(num) {
    switch (parseInt(num)) {
        case 0:
            return 1; // Brown
        case 1:
            return 2; // Red
        case 2:
            return 0.5; // Green
        case 3:
            return 0.25; // Blue
        case 4:
            return 0.1; // Purple
        case 5:
            return 0.05; // Gray
        case 6:
            return 5; // Golden
        case 7:
            return 10; // Silver
    }
}

function ppm(num) {
    switch (parseInt(num)) {
        case 0:
            return 100; // Brown
        case 1:
            return 50; // Red
        case 2:
            return 15; // Green
        case 3:
            return 25; // Blue
        case 4:
            return 10; // Purple
        case 5:
            return 5; // Gray
    }
}