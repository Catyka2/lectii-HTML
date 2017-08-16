
function cl(a){//functie pentru a afisa
	console.log(a)
}

var text = 'ion face casa face'//text
var cauta = 'fac';

var textNou = ''
for(var i = 0; i< text.length; i+=2){
	textNou += text[i]//un text este tot un vector
}

$('#lectie').html('<p>'+textNou+'</p>')

var indiceAparitie = -1

for(var i = 0; i< text.length - cauta.length; i+=1){
	var suntEgale = 1
	for(var j = 0; j< cauta.length; j+=1){
		
		if(cauta[j]!=text[j+i]){
			suntEgale = 0
		}
	}
	if(suntEgale == 1){
		indiceAparitie = i
	}
}

$('#lectie').append('Prima apartie a cuvantului "'+cauta+'" in cuvantul "'+text+'" este la positia:'+indiceAparitie)

var cautaDupa = 6

var parsare = 'div3-4'
var parsare1 = 'div4-7'
var vectorString = '3,4,55,67,3'
var vectorString1 = '31,14,1551,671,1,3'

var numereSauCifre = 'adsa3'
var numereSauCifre1 = '344'
var numereSauCifre2 = 'ass'
var numereSauCifre3 = 'as,s'

/*Exercitii
1. afiseaza variabila text fara spatiu in divul rezolvare
2. gaseste aparitia  variabilei cauta in variabila text dupa primele 'cautaDupa' caractere
3. aduna la cifrele din variabila parsare si parsare1 cu 3 si afiseazale (cu split folosit de 2 ori)
4. transforma vectorString in vector de numere si gaseste minimul, maximul si suma numerelor
5. verifica daca numereSauCifre sunt doar cifre sau numai litere

*/

