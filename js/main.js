function atualizaData(){
	// Obtém a data/hora atual
	var data = new Date();

	// Guarda cada pedaço em uma variável
	var dia     = data.getDate();           // 1-31
	var mes     = data.getMonth() + 1;          // 0-11 (zero=janeiro)
	var ano     = data.getFullYear();       // 4 digitos
	var dia_sem = data.getDay();            // 0-6 (zero=domingo)
	var dias = new Array(
'Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'
);

// Formata a data e a hora (note o mês + 1)

if(dia < 10) {
	dia = '0' + dia;
}

if((mes) < 10) {
	mes = '0' + mes;
}

str_data = dias[dia_sem] + ', ' + dia + '/' + (mes) + '/' + ano;

document.getElementById("lblData").innerHTML = str_data;
}

jQuery(window).load(function($){
	atualizaData();
});

function hide(element){
	element.className = "invisivel";
}

function show(element){
	element.className = "visivel";
}

function changeClass(element) {
	if(element.className != 'mudarCor' ){
		window.location.href='Consulta.html';
	}
	else {
		element.className = 'mudarCor';
	}
}