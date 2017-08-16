
function cl(a){//functie pentru a afisa
	console.log(a)
}

function mySearch(text1, text2){
	var indiceAparitie = -1
	for(var i = 0; i< text1.length - cauta.length; i+=1){
		var suntEgale = 1
		for(var j = 0; j< text2.length; j+=1){
		
			if(text2[j]!=text1[j+i]){
				suntEgale = 0
			}
		}
		if(suntEgale == 1){
			indiceAparitie = i
			break
		}
	}
	return indiceAparitie
}

var text = "cuvant de cauta este cuvant"
var cauta = 'uvant'

$('#lectie').append('Prima apartie a cuvantului "'+cauta+'" in cuvantul "'+text+'" este la positia:'+mySearch(text,cauta))

function aplusb(a,b){
	return a+b
}

cl('apelare functie cu diferiti parametrii')
cl(aplusb(3,4))
var a=2, b=4, c = 4;
cl(aplusb(3,b))
cl(aplusb(b,c))


var cautaDupa = 6

function f(){
	cl(a)
	a+=1
}




cl('schimbare variabile globale')
cl(a)
f()
cl(a)

cl(' variabile locale')

function g(){
	cl(a)
	var a  = 1;
	cl(a)
	return a
}

g()

function ale(){
	alert(1)
}
$('button').click(ale)

function sum(v){
	var s = 0
	for(var i=0;i<v.length;i++)
		s+=v[i]
	return s
}
var ve = [2,3,6,1]
console.log(['suma vector:',ve,sum(ve)])
cl(sum([3,7,8]))

/*Exercitii
1. creaza o functie care ia un vector ca parametru si intoarce maximul
2. creaza o functie care ia ca parametrii doua texte si intoarce cuvintele unite
3. creaza o functie care ia ca parametri id-ul unui div si un vector si creaza o lista cu elementele din vector in div
4. creaza un buton si cand apesi pe el sa se apeleze o functie care schimba culoarea textului din pagina in rosu


*/

