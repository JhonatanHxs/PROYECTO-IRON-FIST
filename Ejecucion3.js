let Tiempolvl3 = 50;
let Puntajelvl3 = 0;
let nivel3Terminado = false; // CANDADO BUG DOBLE VICTORIA
let Intervalo_Dirlvl3, Intervalo_Dir2lvl3, Intervalo_Dir3lvl3, Intervalo_Dir4lvl3, Restar_Tiempolvl3, Pause_offlvl3;

function JUEGOlvl3() {
    function Tiempo_Disminurlvl3() { 
        if (nivel3Terminado) return;
        Tiempolvl3--;
        let relojDom = document.getElementById("Tiempolvl3");
        relojDom.innerHTML = Tiempolvl3;
        
        // MODO FRENESÍ: Faltando 10 segundos
        if (Tiempolvl3 <= 10) {
            relojDom.classList.add("Frenesi");
        } else {
            relojDom.classList.remove("Frenesi");
        }

        if (Tiempolvl3 <= 0) {
            Tiempolvl3 = 50;
            Puntajelvl3 = 0;
            alert("EL TIEMPO SE AGOTÓ. LA TIERRA HA SIDO DESTRUIDA.");
        }
    }
    Restar_Tiempolvl3 = setInterval(Tiempo_Disminurlvl3, 1000);

    document.getElementById("Meteoritolvl3").addEventListener('mouseover', Aumentar_Puntoslvl3);
    document.getElementById("Meteorito2lvl3").addEventListener('mouseover', Aumentar_Puntoslvl3);
    document.getElementById("Meteorito3lvl3").addEventListener('mouseover', Aumentar_Puntoslvl3);
    document.getElementById("Meteorito4lvl3").addEventListener('mouseover', Aumentar_Puntoslvl3);

    function Aumentar_Puntoslvl3() {
        if (nivel3Terminado) return; // BLOQUEA CLICS EXTRA

        Puntajelvl3 += 500; // SISTEMA ARCADE: 500 Puntos por impacto
        document.getElementById("Puntajelvl3").innerHTML = Puntajelvl3 + " / 2000";
        
        if (Puntajelvl3 >= 2000) { 
            nivel3Terminado = true; 
            Puntajelvl3 = 0;
            Tiempolvl3 = 50;
            
            function Contactos(){
                Swal.fire({
                    title : '¡MISIÓN CUMPLIDA! <br> Grupo Omega<br><br><img src="IMG/Logo_Omega.png" width = "120px">',
                    html: '<b style="color: cyan;">Sabía que lo lograrías. La humanidad está a salvo por ahora... prepárate para IRON FIST 2. <br><br> CONTACTOS:<br><br> 71727432@certus.edu.pe <br> 71663265@certus.edu.pe <br> 70845813@certus.edu.pe <br> </b>',
                    icon: 'success', // LIBRERIA CORREGIDA
                    background: '#000',
                    color: '#fff',
                    confirmButtonText: 'ENTENDIDO',
                    width: '50%', height: '80%', timer: 100000, timerProgressbar: true,
                    allowOutsideClick: true, allowEscapeKey: false, allowEnterKey: false, stopKeydownPropagation: false,
                });
            }
            setTimeout(Contactos, 15000);

            document.getElementById("Fondo_Ciberpunk").pause();
            document.getElementById("Triunfo").play();

            function Ganaste_Pantallalvl3(){
                document.getElementById("Meteoritolvl3").style.left = "-70%";
                document.getElementById("Meteoritolvl3").style.transition = "0s";
                document.getElementById("Meteorito2lvl3").style.left = "-70%";
                document.getElementById("Meteorito2lvl3").style.transition = "0s";
                document.getElementById("Meteorito3lvl3").style.left = "-70%";
                document.getElementById("Meteorito3lvl3").style.transition = "0s";
                document.getElementById("Meteorito4lvl3").style.left = "-70%";
                document.getElementById("Meteorito4lvl3").style.transition = "0s";
            }
            Ganaste_Pantallalvl3(); // BUCLE INFINITO DE MEMORIA REPARADO

            clearInterval(Intervalo_Dirlvl3); clearInterval(Intervalo_Dir2lvl3);
            clearInterval(Intervalo_Dir3lvl3); clearInterval(Intervalo_Dir4lvl3);
            clearInterval(Restar_Tiempolvl3);
            document.getElementById("Musica_Final").play();

            document.getElementById("Pantalla_Ovnislvl3").style.left = "7%";
            document.getElementById("Pantalla_Ovnislvl3").style.transition = "6s";
            document.getElementById("Pantalla_Nodrizalvl3").style.left = "10%";
            document.getElementById("Pantalla_Nodrizalvl3").style.transition = "5s";
            document.getElementById("Pantalla_Ovnis2lvl3").style.left = "7%";
            document.getElementById("Pantalla_Ovnis2lvl3").style.transition = "6s";

            function Creditoslvl3() {
                document.getElementById("Pantalla_creditoslvl3").style.background = "black";
                document.getElementById("Creditoslvl3").style.top = "-15%";
                document.getElementById("Creditoslvl3").style.transition = "10s";
                document.getElementById("Proximolvl3").style.bottom = "-34%";
                document.getElementById("Proximolvl3").style.transition = "15s";
            }
            setTimeout(Creditoslvl3, 5000);
        }
    }

    // CORRECCIÓN LÍMITE Y: Math.random() * 430
    function Meteorito_Direccionlvl3() {
        document.getElementById("Meteoritolvl3").style.left = "80%";
        document.getElementById("Meteoritolvl3").style.top = Math.round(Math.random() * 430) + "px";
        document.getElementById("Meteoritolvl3").style.transition = "1.9s";
    }
    setTimeout(Meteorito_Direccionlvl3, 2200);
    Intervalo_Dirlvl3 = setInterval(Meteorito_Direccionlvl3, 2950);

    function Meteorito_Direccion2lvl3() {
        document.getElementById("Meteorito2lvl3").style.left = "80%";
        document.getElementById("Meteorito2lvl3").style.top = Math.round(Math.random() * 430) + "px";
        document.getElementById("Meteorito2lvl3").style.transition = "1.9s";
    }
    setTimeout(Meteorito_Direccion2lvl3, 2660);
    Intervalo_Dir2lvl3 = setInterval(Meteorito_Direccion2lvl3, 2750);

    function Meteorito_Direccion3lvl3() {
        document.getElementById("Meteorito3lvl3").style.left = "80%";
        document.getElementById("Meteorito3lvl3").style.top = Math.round(Math.random() * 430) + "px";
        document.getElementById("Meteorito3lvl3").style.transition = "1.9s";
    }
    setTimeout(Meteorito_Direccion3lvl3, 2900);
    Intervalo_Dir3lvl3 = setInterval(Meteorito_Direccion3lvl3, 2550);

    function Meteorito_Direccion4lvl3() {
        document.getElementById("Meteorito4lvl3").style.left = "80%";
        document.getElementById("Meteorito4lvl3").style.top = Math.round(Math.random() * 430) + "px";
        document.getElementById("Meteorito4lvl3").style.transition = "1.9s";
    }
    setTimeout(Meteorito_Direccion4lvl3, 3100);
    Intervalo_Dir4lvl3 = setInterval(Meteorito_Direccion4lvl3, 2150);

    document.getElementById("Meteoritolvl3").addEventListener('mouseover', Explulsarlvl3);
    document.getElementById("Meteorito2lvl3").addEventListener('mouseover', Explulsar2lvl3);
    document.getElementById("Meteorito3lvl3").addEventListener('mouseover', Explulsar3lvl3);
    document.getElementById("Meteorito4lvl3").addEventListener('mouseover', Explulsar4lvl3);

    function Explulsarlvl3() {
        document.getElementById("Puntos_sound").play();
        document.getElementById("Meteoritolvl3").style.left = "-500px";
        document.getElementById("Meteoritolvl3").style.top = Math.round(Math.random() * 430) + "px";
        document.getElementById("Meteoritolvl3").style.transition = "1.7s";
    }
    function Explulsar2lvl3() {
        document.getElementById("Punto2").play();
        document.getElementById("Meteorito2lvl3").style.left = "-500px";
        document.getElementById("Meteorito2lvl3").style.top = Math.round(Math.random() * 430) + "px";
        document.getElementById("Meteorito2lvl3").style.transition = "1.7s";
    }
    function Explulsar3lvl3() {
        document.getElementById("Punto3").play();
        document.getElementById("Meteorito3lvl3").style.left = "-500px";
        document.getElementById("Meteorito3lvl3").style.top = Math.round(Math.random() * 430) + "px";
        document.getElementById("Meteorito3lvl3").style.transition = "1.7s";
    }
    function Explulsar4lvl3() {
        document.getElementById("Punto4").play();
        document.getElementById("Meteorito4lvl3").style.left = "-500px";
        document.getElementById("Meteorito4lvl3").style.top = Math.round(Math.random() * 430) + "px";
        document.getElementById("Meteorito4lvl3").style.transition = "1.7s";
    }

    function perdistelvl3() {
        if ((document.getElementById("Meteoritolvl3").offsetLeft > 630) ||
            (document.getElementById("Meteorito2lvl3").offsetLeft > 630) ||
            (document.getElementById("Meteorito3lvl3").offsetLeft > 630) ||
            (document.getElementById("Meteorito4lvl3").offsetLeft > 630)) {

            // SCREEN SHAKE AL PERDER
            document.getElementById("Tablero_Juegolvl3").classList.add("shake-anim");
            setTimeout(() => { document.getElementById("Tablero_Juegolvl3").classList.remove("shake-anim"); }, 500);

            document.getElementById("Perdiste_sound").play();

            document.getElementById("Meteoritolvl3").style.left = "-70%"; document.getElementById("Meteoritolvl3").style.transition = "0s";
            document.getElementById("Meteorito2lvl3").style.left = "-70%"; document.getElementById("Meteorito2lvl3").style.transition = "0s";
            document.getElementById("Meteorito3lvl3").style.left = "-70%"; document.getElementById("Meteorito3lvl3").style.transition = "0s";
            document.getElementById("Meteorito4lvl3").style.left = "-70%"; document.getElementById("Meteorito4lvl3").style.transition = "0s";
            
            // ERROR COPY PASTE REPARADO: Se llama a todos los meteoritos
            setTimeout(Meteorito_Direccionlvl3, 2000);
            setTimeout(Meteorito_Direccion2lvl3, 2000);
            setTimeout(Meteorito_Direccion3lvl3, 2600);
            setTimeout(Meteorito_Direccion4lvl3, 2900);

            Tiempolvl3 = 50;
            Puntajelvl3 = 0;
            document.getElementById("Puntajelvl3").innerHTML = "0 / 2000";
            document.getElementById("Tiempolvl3").classList.remove("Frenesi");
            nivel3Terminado = false; // Quita el candado
        } else {
            document.getElementById("Meteoritolvl3").style.transition = "1.9s";
            document.getElementById("Meteorito2lvl3").style.transition = "1.9s";
            document.getElementById("Meteorito3lvl3").style.transition = "1.9s";
            document.getElementById("Meteorito4lvl3").style.transition = "1.9s";
        }
    }
    setInterval(perdistelvl3, 10); // Optimizado a 10ms en lugar de 1ms para mejor rendimiento
}

// EVENTOS DE START Y PAUSA
document.getElementById("Playlvl3").addEventListener('click', PLAYlvl3);
let Conteolvl3 = 4;

function PLAYlvl3() {
    document.getElementById("Fondo_Ciberpunk").play();
    document.getElementById("Textolvl3").style.left = "-900px";
    document.getElementById("Playlvl3").style.left = "-900px";
    document.getElementById("Dificultadlvl3").style.left = "-900px";
    
    function ARRACARlvl3(){ JUEGOlvl3(); }
    setTimeout(ARRACARlvl3, 4100);
    
    function ESPERARlvl3() {
        function Cuenta_rglvl3() {
            Conteolvl3--;
            document.getElementById("RGBlvl3").innerHTML = Conteolvl3;
            if (Conteolvl3 === -1) {
                document.getElementById("Contenedor_contadorlvl3").style.display = "none";
                function Borrarlvl3() {
                    document.getElementById("Startlvl3").style.display = "none";
                    DETENER_JUEGOlvl3();
                }
                setTimeout(Borrarlvl3, 500);
            }
        }
        setInterval(Cuenta_rglvl3, 1000);
    }
    setTimeout(ESPERARlvl3, 350);
}

function DETENER_JUEGOlvl3() {
    document.getElementById("Pauselvl3").addEventListener('click', PAUSElvl3);
    let Activolvl3 = 1;

    function PAUSElvl3() {
        if (Activolvl3 === 1) {
            document.getElementById("Pausa_Pantallalvl3").style.display = "table";
            document.getElementById("Tiempolvl3").innerHTML = Tiempolvl3;
            document.getElementById("Fondo_Ciberpunk").pause();
            
            function Meteorito_detenerlvl3() {
                document.getElementById("Meteoritolvl3").style.left = document.getElementById("Meteoritolvl3").offsetLeft + "px";
                document.getElementById("Meteorito2lvl3").style.left = document.getElementById("Meteorito2lvl3").offsetLeft + "px";
                document.getElementById("Meteorito3lvl3").style.left = document.getElementById("Meteorito3lvl3").offsetLeft + "px";
                document.getElementById("Meteorito4lvl3").style.left = document.getElementById("Meteorito4lvl3").offsetLeft + "px";

                document.getElementById("Meteoritolvl3").style.top = document.getElementById("Meteoritolvl3").offsetTop + "px";
                document.getElementById("Meteorito2lvl3").style.top = document.getElementById("Meteorito2lvl3").offsetTop + "px";
                document.getElementById("Meteorito3lvl3").style.top = document.getElementById("Meteorito3lvl3").offsetTop + "px";
                document.getElementById("Meteorito4lvl3").style.top = document.getElementById("Meteorito4lvl3").offsetTop + "px";
            }
            Pause_offlvl3 = setInterval(Meteorito_detenerlvl3, 10);
            Activolvl3 = 2;
        } else { 
            document.getElementById("Pausa_Pantallalvl3").style.display = "none";
            document.getElementById("Fondo_Ciberpunk").play();
            clearInterval(Pause_offlvl3);
            Activolvl3 = 1;
        }
    }
}