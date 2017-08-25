

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
$('#btn').click(ale)

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
function max(vector){// ex 1
	var maxim =0;
	for(i=0; i<vector.length; i++){
		if(vector[i]>maxim){
			maxim=vector[i];
		} 
	}
	return maxim
}

var vector =[7,8,3,10,27,0]
alert('cifra maxima este: '+max(vector));


function doi(text1,text2){ // ex 2
	var indiceAparitie=-1;
	for(var i=0;i<text1.length-cauta.length; i+=1){
		var suntEgale= 1;
		for (var j=0;j<text2.length; j+=1){
			if(text2[j]!=text1[j+i]){
				suntEgale =0;
			}
		}
		if(suntEgale==1){
			indiceAparitie=i;
			break
		}
	}
	return indiceAparitie
} 

var text = 'Afara ninge si ninge'
var cuvintul= 'ninge'
$('#lectie').append('<p>Prima apartie a cuvantului "'+cuvintul+'" in textul "'+text+'" este la positia:'+doi(text,cuvintul)+'</p>')

$('#div1').before('<p> ex 3 </p>')

function lista(id, vector){ // ex 3
	$('#'+id).html('<ul></ul>');
	for(var i=0; i<vector.length; i+=1){
	$('#'+id+' ul').append('<li>'+vector[i]+'</li>')
	}
}
var vector1 =['mar','par','prun','cires']
lista('div1',vector1)

function culoare(id,div1){ // ex 4
    $('#'+id).click(function(){
		$(''+div1).css({'color':'red'})
	})
}
culoare ('id12','div')


