function numAleatorio(minimo, maximo) {
  var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
  return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var listadoOpciones = ["Piedra", "Papel", "Tijera"];

// Combinaciones para resultados
var opcionPiedra = ["Empate!", "Perdiste!", "Ganaste!"];
var opcionPapel = ["Ganaste!", "Empate!", "Perdiste!"];
var opcionTijera = ["Perdiste!", "Ganaste!", "Empate!"];

var eleccionUser;
var eleccionMaquina = numAleatorio(0, 2);

// estableciendo valor por default
eleccionUser = prompt(
  `¿Qué eliges?
	Priedra: 0
	Papel: 1
	Tijera: 2`,
  0
);
if (eleccionUser >= 0 && eleccionUser < 3) {
  alert(
    eleccionUser >= 0 && eleccionUser < 3
      ? `Elegiste ${listadoOpciones[eleccionUser]}`
      : "Ingresa un numero de la lista anterior"
  );
} else {
  alert(
    eleccionUser >= 0 && eleccionUser < 3
      ? `Elegiste ${listadoOpciones[eleccionUser]}`
      : "Ingresa un numero de la lista anterior"
  );
  eleccionUser = prompt(
    `¿Qué eliges?
	Priedra: 0
	Papel: 1
	Tijera: 2`,
    0
  );
  alert(
    eleccionUser >= 0 && eleccionUser < 3
      ? `Elegiste ${listadoOpciones[eleccionUser]}`
      : "Ingresa un numero de la lista anterior"
  );
}
alert(`Javascript eligió ${listadoOpciones[eleccionMaquina]}`);

if (eleccionUser == 0) {
  alert(opcionPiedra[eleccionMaquina]);
} else if (eleccionUser == 1) {
  alert(opcionPapel[eleccionMaquina]);
} else if (eleccionUser == 2) {
  alert(opcionTijera[eleccionMaquina]);
} else {
  alert("Opción no valida!");
}
