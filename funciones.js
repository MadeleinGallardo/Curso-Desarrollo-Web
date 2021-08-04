function diaprueba() {
	var escolas = ['Mocidade','Imperatriz','Unidos da Tijuca', 'Portela', 'Viradouro', 'Grande Rio', 'Sangueiro', 'Vila Isabel', 'Beija-Flor', 'Mangueira','Sao Clemente', 'Paraiso do Tuiuti']
	var numero = prompt('Ingresa un número entre 0 y 11')
	var baterias = prompt('Ingresa el nombre de tu escola de Rio de Janeiro preferida: Mocidade, Imperatriz, Unidos da Tijuca, Portela, Viradouro, Grande Rio, Sangueiro, Vila Isabel, Beija-Flor, Mangueira, Sao Clemente, Paraiso do Tuiuti' )

	if (baterias == escolas[numero]){
		alert('¡ Qué suerte! GANASTE ')
		var gano = document.querySelector('#ganador')
		gano.style.display = 'block'
	} else {
		alert('La próxima será ...')
	}
	}


 function mostrar() {
 	var titulo = document.getElementById("des1");
 	titulo.style.display = 'block';
 }

 function mostrar2() {
 	var titulo = document.getElementById("des2");
 	titulo.style.display = 'block';
 }