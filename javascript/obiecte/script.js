
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

//$('#rezolvare').append('<p>ex 1:'+text.replace(/ /gi,'')+'</p>'); // ex 1
//var textNou1 = ''
//var v=text.split(' ')
//for(var i = 0; i< v.length; i++){
	//textNou1 += v[i]
//}
//$('#rezolvare').html('<p>'+textNou1+'</p>')

var textNou2 = '' // ex 1
for(var i = 0; i< text.length; i+=1){
	if(text[i]!=' ')
	textNou2 += text[i]
}
$('#rezolvare').html('<p> ex 1:'+textNou2+'</p>')


var indiceAparitie = -1 //ex 2
for(var i = 6; i< text.length - cauta.length; i+=1){
	var suntEgale = 1 // daca este adevarat
	for(var j = 0; j< cauta.length; j+=1){
		if(cauta[j]!=text[j+i]){
			suntEgale = 0
			break
		}
	}
	if(suntEgale == 1){
		indiceAparitie = i
		break
	}
}
$('#lectie').append('<br> ex 2: A doua apartie a cuvantului "'+cauta+'" in cuvantul "'+text+'" este la positia:'+indiceAparitie)



var suma=0; // ex 4
var vector=vectorString.split(',')
for(i=0; i<vector.length; i++){
	if(parseInt(vector[i]))	{
		suma=suma+parseInt(vector[i]);
	}
	
}
console.log(suma)

var max = 0;
indiceMaxim = 0;	
for(var i=0;i<vector.length;i=i+1){
	if(parseInt(vector[i])>max){ 
		max=parseInt(vector[i]);
		indiceMaxim=i;
	}
}
console.log(vector[indiceMaxim]);

var min =10000;
indiceMinim =0;
for(var i=0; i<vector.length; i++){
	if(vector[i]<min){
		min=vector[i];
		indiceMinim=i;
	}
}
console.log(vector[indiceMinim]);


var n= parsare.split('-'); // ex 3
console.log(n);
var t= n[0].split('div');
console.log(t);
var cifra2 = parseInt(n[1]);
var cifra1 = parseInt(t[1]);
cl(cifra1+cifra2+3)


var h =parsare1.split('-');
console.log(h);
var f = h[0].split('div');
var cifra11 =parseInt(h[1]);
var cifra12 = parseInt(f[1]);
cl(cifra11+cifra12+3);
cl(cifra1+cifra2+cifra11+cifra12+3);

cifre='' // ex 5
litere=''
for(i=0; i<numereSauCifre.length; i++){
    if(numereSauCifre[i]>='0'&& numereSauCifre[i]<='9'){
		cifre+=numereSauCifre[i];
	    alert('cifre sunt: '+cifre);
	}
    else{
		litere+=numereSauCifre[i]+',';
	}			
}
alert('sunt litere: '+litere)








