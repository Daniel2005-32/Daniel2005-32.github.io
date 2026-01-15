/*
Aparentemente no realiza nada al documento 

// external heavy script (non-minified)
function heavyCalc() {
    var total = 0;
    for (var i = 0; i < 10000000; i++) {
        total += Math.pow(i, 0.5);
    }
    console.log('heavyCalc', total);
}
heavyCalc();

Se omite este proceso que simplemente hace más pesada la página
function runHeavy() {
    var result = 0;
    for (var i = 0; i < 20000000; i++) {
        result += Math.sqrt(i) * Math.sin(i);
    }
    alert('Proceso terminado: ' + result);
}
*/
//Se ha modificado para que cumpla su fncionalidad pero que no cree mucha cantidad
var list = document.getElementById('list');
for (var i = 1; i < 6; i++) {
    var li = document.createElement('li');
    li.innerHTML = 'Elemento número ' + i;
    list.appendChild(li);
}
/*

Se quita esto porque hace que el navegador se quede bloqueado hasta qye el servidor responda o falle
// Synchronous XHR blocking example (deprecated but intentionally heavy)
function blockingXHR() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/no-existe', false); // synchronous
    try {
        xhr.send(null);
    } catch(e) {}
}
// Call blocking XHR (commented out by default)
// blockingXHR();

*/
