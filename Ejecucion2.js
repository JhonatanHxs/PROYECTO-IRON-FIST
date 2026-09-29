let Tiempolvl2 = 61;
let Puntajelvl2 = 0;
const metaPuntos = 34; // Meta real del juego

let Restar_Tiempolvl2, Reanudar_trayectorialvl2, Reanudar_trayectoria2lvl2, Reanudar_trayectoria3lvl2;
let Activador_iniciallvl2, Activador_inicial2lvl2, Activador_inicial3lvl2;

function JUEGOlvl2() {
    // 1. Temporizador
    function Tiempo_Disminurlvl2() {
        Tiempolvl2--;
        document.getElementById("Tiempolvl2").innerHTML = Tiempolvl2;
        if (Tiempolvl2 <= 0) {
            document.getElementById("Perdiste_sound").play();
            alert("El tiempo se agotó. Has fallado la misión.");
            reiniciarEstado();
        }
    }
    Restar_Tiempolvl2 = setInterval(Tiempo_Disminurlvl2, 1000);

    // 2. Sistema de Puntos y Eventos
    const meteoritos = ['Meteioritolvl2', 'Meteiorito2lvl2', 'Meteiorito3lvl2'];
    meteoritos.forEach(id => {
        let el = document.getElementById(id);
        // Limpiamos eventos viejos clonando el nodo para evitar bugs
        let newEl = el.cloneNode(true);
        el.parentNode.replaceChild(newEl, el);
        
        newEl.addEventListener('mouseover', Aumentar_Puntoslvl2);
        newEl.addEventListener('mouseover', () => Expulsar(newEl.id));
    });

    function Aumentar_Puntoslvl2() {
        Puntajelvl2++;
        document.getElementById("Puntajelvl2").innerHTML = Puntajelvl2 + " / " + metaPuntos;
        
        // CORRECCIÓN: Se gana al llegar a 34, no a 2.
        if (Puntajelvl2 >= metaPuntos) {
            terminarJuego();
        }
    }

    // 3. Lógica de Victoria Limpia
    function terminarJuego() {
        document.getElementById("Tiempolvl2").innerHTML = 60;
        document.getElementById("Fondo_Ciberpunk").pause();
        document.getElementById("Triunfo").play();
        document.getElementById("NEXT").addEventListener('click', Habilitar_Siguienten_LVL);
        
        function Habilitar_Siguienten_LVL() {
            document.getElementById("NIVEL_01").style.display = "none";
            document.getElementById("NIVEL_02").style.display = "none";
            document.getElementById("NIVEL3").style.display = "block";
        }

        detenerMeteoritos();
        
        // Usamos solo la pantalla nativa estilizada, sin alertas raras.
        document.getElementById("GanastePantallaLvL2").style.display = "flex";
        Puntajelvl2 = 0;
        Tiempolvl2 = 61;
    }

    // 4. Control de Meteoritos
    function detenerMeteoritos() {
        clearInterval(Reanudar_trayectorialvl2);
        clearTimeout(Activador_iniciallvl2);
        clearInterval(Reanudar_trayectoria2lvl2);
        clearTimeout(Activador_inicial2lvl2);
        clearInterval(Reanudar_trayectoria3lvl2);
        clearTimeout(Activador_inicial3lvl2);
        clearInterval(Restar_Tiempolvl2);

        meteoritos.forEach(id => {
            let el = document.getElementById(id);
            if(el) {
                el.style.left = "-70%";
                el.style.transition = "0s";
            }
        });
    }

    function iniciarTrayectoria(id, distancia, velocidad) {
        let el = document.getElementById(id);
        if(el){
            let altura = Math.round(Math.random() * 450); // Límite Y ajustado
            el.style.left = distancia + "%";
            el.style.top = altura + "px";
            el.style.transition = velocidad + "s";
        }
    }

    Activador_iniciallvl2 = setTimeout(() => iniciarTrayectoria('Meteioritolvl2', 80, 2), 3500);
    Reanudar_trayectorialvl2 = setInterval(() => iniciarTrayectoria('Meteioritolvl2', 80, 2), 2030);

    Activador_inicial2lvl2 = setTimeout(() => iniciarTrayectoria('Meteiorito2lvl2', 80, 2), 3000);
    Reanudar_trayectoria2lvl2 = setInterval(() => iniciarTrayectoria('Meteiorito2lvl2', 80, 2), 2750);

    Activador_inicial3lvl2 = setTimeout(() => iniciarTrayectoria('Meteiorito3lvl2', 80, 2), 2200);
    Reanudar_trayectoria3lvl2 = setInterval(() => iniciarTrayectoria('Meteiorito3lvl2', 80, 2), 2470);

    function Expulsar(id) {
        let sound = document.getElementById("Puntos_sound");
        if(sound) {
            sound.currentTime = 0; // Permite reproducir rápido si tocas varios
            sound.play(); 
        }
        let el = document.getElementById(id);
        let altura = Math.round(Math.random() * 450);
        el.style.left = "-500px";
        el.style.top = altura + "px";
        el.style.transition = "1.8s";
    }

    // 5. Game Over
    function reiniciarEstado() {
         detenerMeteoritos();
         Tiempolvl2 = 61;
         Puntajelvl2 = 0;
         document.getElementById("Tiempolvl2").innerHTML = 60;
         document.getElementById("Puntajelvl2").innerHTML = "0 / " + metaPuntos;
         
         // SOLUCIÓN: Reactivamos los tiempos de inicio (setTimeout) y el bucle infinito (setInterval)
         Activador_iniciallvl2 = setTimeout(() => iniciarTrayectoria('Meteioritolvl2', 80, 2), 2000);
         Reanudar_trayectorialvl2 = setInterval(() => iniciarTrayectoria('Meteioritolvl2', 80, 2), 2030);

         Activador_inicial2lvl2 = setTimeout(() => iniciarTrayectoria('Meteiorito2lvl2', 80, 2), 2500);
         Reanudar_trayectoria2lvl2 = setInterval(() => iniciarTrayectoria('Meteiorito2lvl2', 80, 2), 2750);

         Activador_inicial3lvl2 = setTimeout(() => iniciarTrayectoria('Meteiorito3lvl2', 80, 2), 3000);
         Reanudar_trayectoria3lvl2 = setInterval(() => iniciarTrayectoria('Meteiorito3lvl2', 80, 2), 2470);

         Restar_Tiempolvl2 = setInterval(Tiempo_Disminurlvl2, 1000);
    }

// 6. Arranque del Nivel
document.getElementById("Playlvl2").addEventListener('click', PLAYlvl2);
let Conteolvl2 = 4;

function PLAYlvl2() {
    document.getElementById("Fondo_Ciberpunk").play();
    document.getElementById("Texolvl2").style.left = "-900px";
    document.getElementById("Playlvl2").style.left = "-900px";
    document.getElementById("Dificultad").style.left = "-900px";

    setTimeout(JUEGOlvl2, 4100);

    function ESPERARlvl2() {
        let cuentaRegresiva = setInterval(() => {
            Conteolvl2--;
            document.getElementById("RGBlvl2").innerHTML = Conteolvl2;
            if (Conteolvl2 === -1) {
                clearInterval(cuentaRegresiva);
                document.getElementById("Contenedor_contadorlvl2").style.display = "none";
                document.getElementById("Startlvl2").style.display = "none";
                DETENER_JUEGOlvl2();
            }
        }, 1000);
    }
    setTimeout(ESPERARlvl2, 350);
}

// 7. Pausa simplificada
let ActivoLvl2 = true;
function DETENER_JUEGOlvl2() {
    document.getElementById("Pauselvl2").addEventListener('click', () => {
        if (ActivoLvl2) {
            document.getElementById("Pausa_Pantallalvl2").style.display = "flex"; 
            document.getElementById("Fondo_Ciberpunk").pause();
            clearInterval(Restar_Tiempolvl2);
        } else {
            document.getElementById("Pausa_Pantallalvl2").style.display = "none";
            document.getElementById("Fondo_Ciberpunk").play();
            Restar_Tiempolvl2 = setInterval(Tiempo_Disminurlvl2, 1000);
        }
        ActivoLvl2 = !ActivoLvl2;
    });
}}