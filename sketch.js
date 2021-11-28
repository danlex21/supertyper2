var superTyperArduino;

var supertyper;

var profeDany;

var titulo;

var Inicio, reglas, creditos, arduino;

var nube3, nube2, nube1;

var teclado, teclado2, teclaf;

var timerPortada;

var score, errores;

var nubex, nubey, nubex2, nubey2, nubex3, nubey3;

var supertyperx, supertypery;

var profeDanyx, profeDanyy;

var titulox, tituloy;

var iniciox, inicioy;

var reglasx, reglasy;

var creditosx, creditosy;

var arduinox, arduinoy;

var tecladox, tecladoy, teclado2x, teclado2y, teclafx, teclafy;

var letra1x, letra1y, letra2x, letra2y, letra3x, letra3y, letra4x, letra4y;

var letra5x, letra5y, letra6x, letra6y, letra7x, letra7y, letra8x, letra8y;

var letra9x, letra9y, letra10x, letra10y, letra11x, letra11y, letra12x, letra12y;

var letra13x, letra13y, letra14x, letra14y, letra15x, letra15y, letra16x, letra16y;

var letra1, letra2, letra3, letra4, letra5, letra6, letra7, letra8, letra9, letra10, letra11, letra12;

var letra13, letra14, letra15, letra16;

function setup() {
    initializeFields();
    // fullScreen();
    createCanvas(1024, 600);
    supertyper = loadImage("supertyper.png");
    superTyperArduino = loadImage("superTyperArduino.gif");
    profeDany = loadImage("profeDany.png");
    titulo = loadImage("Titulo.png");
    Inicio = loadImage("Inicio.png");
    reglas = loadImage("Reglas.png");
    creditos = loadImage("Creditos.png");
    arduino = loadImage("Arduino.png");
    nube3 = loadImage("nube3.png");
    nube2 = loadImage("nube2.png");
    nube1 = loadImage("nube1.png");
    teclado = loadImage("teclado.png");
    teclado2 = loadImage("teclado2.png");
    teclaf = loadImage("brilloF.png");
}

function draw() {
    portada();
    if (arduinox == -5000) {
        Nivel1();
    }
// println(mouseX,mouseY);
}

function portada() {
    background(color(0x35, 0xb4, 0xe4));
    timerPortada++;
    print(timerPortada);
    image(nube1, nubex, nubey);
    if (timerPortada >= 30) {
        nubex += 10;
    }
    if (nubex >= 42) {
        nubex = 42;
    }
    image(nube2, nubex2, nubey2);
    if (timerPortada >= 50) {
        nubex2 += 10;
    }
    if (nubex2 >= 525) {
        nubex2 = 525;
    }
    image(nube3, nubex3, nubey3);
    if (timerPortada >= 80) {
        nubex3 += 10;
    }
    if (nubex3 >= 319) {
        nubex3 = 319;
    }
    if (timerPortada > 200) {
        image(Inicio, iniciox, inicioy);
        playerplop.play();
    }
    if (timerPortada > 230) {
        image(reglas, reglasx, reglasy);
        playerplop2.play();
    }
    if (timerPortada > 260) {
        image(creditos, creditosx, creditosy);
        playerplop3.play();
    }
    if (timerPortada > 290) {
        image(arduino, arduinox, arduinoy);
        playerplop4.play();
    }
    image(supertyper, supertyperx, supertypery);
    image(profeDany, profeDanyx, profeDanyy);
    image(titulo, titulox, tituloy);
}

function mousePressed() {
    if (mouseX > 190 && mouseX < 470 && mouseY > 242 && mouseY < 340) {
        nubex = -5000;
        nubex2 = -5000;
        nubex3 = -5000;
        supertyperx = -5000;
        profeDanyx = -5000;
        titulox = -5000;
        iniciox = -5000;
        reglasx = -5000;
        creditosx = -5000;
        arduinox = -5000;
    }
    if (mouseX > 190 && mouseX < 470 && mouseY > 242 && mouseY < 340) {
        nubex = -5000;
        nubex2 = -5000;
        nubex3 = -5000;
        supertyperx = -5000;
        profeDanyx = -5000;
        titulox = -5000;
        iniciox = -5000;
        reglasx = -5000;
        creditosx = -5000;
        arduinox = -5000;
    }
}

function Nivel1() {
    textSize(40);
    text("Puntos= " + score, 10, 60);
    text("Errores= " + errores, 10, 110);
    image(teclado, tecladox, tecladoy);
    print(letra1x);
    textSize(50);
    fill(color(0xFE, 0xFF, 0x08));
    text("F", letra1x, letra1y);
    letra1x--;
    text("J", letra2x, letra2y);
    letra2x--;
    text("D", letra3x, letra3y);
    letra3x--;
    text("K", letra4x, letra4y);
    letra4x--;
    text("S", letra5x, letra5y);
    letra5x--;
    text("L", letra6x, letra6y);
    letra6x--;
    text("A", letra7x, letra7y);
    letra7x--;
    text("Ñ", letra8x, letra8y);
    letra8x--;
/* text("F", letra9x, letra9y);
   letra9x--;
   text("J", letra10x, letra10y);
   letra10x--;
   text("F", letra11x, letra11y);
   letra11x--;
   text("J", letra12x, letra12y);
   letra12x--;
   text("F", letra13x, letra13y);
   letra13x--;
   text("J", letra14x, letra14y);
   letra14x--;
   text("F", letra15x, letra15y);
   letra15x--;
   text("J", letra16x, letra16y);
   letra16x--;*/
}

function keyPressed() {
    if (keyIsPressed) {
        if (key == 'f' || key == 'F') {
            image(teclado2, teclado2x, teclado2y);
            image(teclaf, teclafx, teclafy);
            letra1x = -1000;
            score += 10;
        }
    }
    if (keyIsPressed) {
        if (key == 'j' || key == 'J') {
            image(teclado2, teclado2x, teclado2y);
            // image(tecla2f, tecla2fx, tecla2fy);
            letra2x = -1000;
            score += 10;
        }
    }
    if (keyIsPressed) {
        if (key == 'd' || key == 'D') {
            image(teclado2, teclado2x, teclado2y);
            // image(tecla2f, tecla2fx, tecla2fy);
            letra3x = -1000;
            score += 10;
        }
    }
    if (keyIsPressed) {
        if (key == 'k' || key == 'K') {
            image(teclado2, teclado2x, teclado2y);
            // image(tecla2f, tecla2fx, tecla2fy);
            score += 10;
            letra4x = -1000;
        }
    }
    if (keyIsPressed) {
        if (key == 's' || key == 'S') {
            image(teclado2, teclado2x, teclado2y);
            // image(tecla2f, tecla2fx, tecla2fy);
            score += 10;
            letra5x = -1000;
        }
    }
    if (keyIsPressed) {
        if (key == 'l' || key == 'L') {
            image(teclado2, teclado2x, teclado2y);
            // image(tecla2f, tecla2fx, tecla2fy);
            score += 10;
            letra6x = -1000;
        }
    }
    if (keyIsPressed) {
        if (key == 'a' || key == 'A') {
            image(teclado2, teclado2x, teclado2y);
            // image(tecla2f, tecla2fx, tecla2fy);
            score += 10;
            letra7x = -1000;
        }
    }
    if (keyIsPressed) {
        if (key == 'ñ' || key == 'Ñ') {
            image(teclado2, teclado2x, teclado2y);
            // image(tecla2f, tecla2fx, tecla2fy);
            score += 10;
            letra8x = -1000;
        }
    } else {
        errores += 10;
    }
}

function initializeFields() {
    superTyperArduino = null;
    supertyper = null;
    profeDany = null;
    titulo = null;
    Inicio = null;
    reglas = null;
    creditos = null;
    arduino = null;
    nube3 = null;
    nube2 = null;
    nube1 = null;
    teclado = null;
    teclado2 = null;
    teclaf = null;
    timerPortada = 0;
    score = 0;
    errores = 0;
    nubex = -500;
    nubey = 14;
    nubex2 = -500;
    nubey2 = 164;
    nubex3 = -500;
    nubey3 = 467;
    supertyperx = 361;
    supertypery = 135;
    profeDanyx = 98;
    profeDanyy = 381;
    titulox = 68;
    tituloy = 32;
    iniciox = 190;
    inicioy = 242;
    reglasx = 275;
    reglasy = 100;
    creditosx = 540;
    creditosy = 90;
    arduinox = 540;
    arduinoy = 220;
    tecladox = 138;
    tecladoy = 320;
    teclado2x = 138;
    teclado2y = 320;
    teclafx = 138;
    teclafy = 320;
    letra1x = 1100;
    letra1y = 50;
    letra2x = 1150;
    letra2y = 50;
    letra3x = 1200;
    letra3y = 50;
    letra4x = 1250;
    letra4y = 50;
    letra5x = 1300;
    letra5y = 50;
    letra6x = 1350;
    letra6y = 50;
    letra7x = 1400;
    letra7y = 50;
    letra8x = 1450;
    letra8y = 50;
    letra9x = 1500;
    letra9y = 50;
    letra10x = 1550;
    letra10y = 50;
    letra11x = 1600;
    letra11y = 50;
    letra12x = 1650;
    letra12y = 50;
    letra13x = 1700;
    letra13y = 50;
    letra14x = 1750;
    letra14y = 50;
    letra15x = 1800;
    letra15y = 50;
    letra16x = 1850;
    letra16y = 50;
    letra1 = false;
    letra2 = false;
    letra3 = false;
    letra4 = false;
    letra5 = false;
    letra6 = false;
    letra7 = false;
    letra8 = false;
    letra9 = false;
    letra10 = false;
    letra11 = false;
    letra12 = false;
    letra13 = false;
    letra14 = false;
    letra15 = false;
    letra16 = false;
}

function preload() {
// TODO: put method calls that load from files into this method
// I found the following calls that you should move here:
// - on line 32: supertyper = loadImage("supertyper.png")
// - on line 33: superTyperArduino = loadImage("superTyperArduino.gif")
// - on line 34: profeDany = loadImage("profeDany.png")
// - on line 35: titulo = loadImage("Titulo.png")
// - on line 36: Inicio = loadImage("Inicio.png")
// - on line 37: reglas = loadImage("Reglas.png")
// - on line 38: creditos = loadImage("Creditos.png")
// - on line 39: arduino = loadImage("Arduino.png")
// - on line 40: nube3 = loadImage("nube3.png")
// - on line 41: nube2 = loadImage("nube2.png")
// - on line 42: nube1 = loadImage("nube1.png")
// - on line 43: teclado = loadImage("teclado.png")
// - on line 44: teclado2 = loadImage("teclado2.png")
// - on line 45: teclaf = loadImage("brilloF.png")
// (note that line numbers are from your Processing code)
}