function atualizaData(){
		// Obtém a data/hora atual
		var data = new Date();

		// Guarda cada pedaço em uma variável
		var dia     = data.getDate();           // 1-31
		var mes     = data.getMonth();          // 0-11 (zero=janeiro)
		var ano     = data.getFullYear();       // 4 digitos
		var dia_sem = data.getDay();            // 0-6 (zero=domingo)
		var dias = new Array(
 'Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'
);

	// Formata a data e a hora (note o mês + 1)
	str_data = dias[dia_sem] + ', ' + dia + '/0' + (mes+1) + ano;

	document.getElementById("lblData").innerHTML = str_data;
}