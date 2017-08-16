

var vector1 = [3,9,4,7,90]
var vector2 = [1,3,5,7,8,9]
var vector3 = []//elemente ce sunt in primul vector si nu sunt in al doilea
var vector4 = [] //elemente ce sunt in ambii vectori
var vector5 = [] //elemente ce sunt in al doilea vector dar nu sunt in primul
var vector6 = []

for(var i=0;i<vector1.length;i=i+1){//pentru fiecare indece din vector1
	var ok = 1;//variabila care este 1 daca vector1[i] nu este in vector2, si 0 altfel
	for(var j=0;j<vector2.length;j++){//pentru fiecare indice din vector2
		if(vector1[i] == vector2[j]){
			ok = 0; // am gasit numere egale
			vector4.push(vector1[i]) // adauga eamentele ce sunt in ambii vectori Ex 1
			break;// oprim for'ul cu j 
		}
	}
	if(ok == 1){
		vector3.push(vector1[i])//adaugam elementul in vector3
	}
}
$('#output').append('<p> ex 1: elemente ce sunt in ambii vectori:'+vector4+'</p>'); //Ex 1
console.log(vector3)

//schimbarea valorilor a doua variabile
var a=2
var b = 6
var x = 0//variabila ajutatoare

console.log([a,b])

x=a
a=b
b=x

console.log([a,b])

/*Exercitii
1. afiseaza in divul #output care elemente sunt in ambii vectori
2. afiseaza in divul #output care elemente sunt in al doilea vector si nu in primul
3. schimba valoarea celui mai mare numar din vector1 cu cel mai mic element din vector2 si afiseaza vector1 in div #output

*/

for(var j=0;j<vector2.length;j++){ //ex 2
    var ok = 1;
	for(var i=0;i<vector1.length;i=i+1){
		if(vector2[j] == vector1[i]){
			ok = 0;
			break;	
		}	
	}
	if(ok == 1){
		vector5.push(vector2[j])
	}
}	
$('#output').append('<p> ex 2: elemente ce sunt in al doilea vector si nu sunt in primul:'+vector5+'</p>');


 var max = 0;
indiceMaxim = 0;	
for(var i=0;i<vector1.length;i=i+1){
	if(vector1[i]>max){ //afla nr. maxim din vector1
		max=vector1[i];
		indiceMaxim=i;
	}
}
console.log(vector1[indiceMaxim]);


indiceMinim = 0;	
 var min = 10000;
for(var j=0;j<vector2.length;j=j+1){
	if(vector2[j]<min){ // afla nr. minim din vector2
		min = vector2[j]
		indiceMinim=j;
	}
}
console.log(vector2[indiceMinim]);

console.log(vector1)
vector1[indiceMaxim] = vector2[indiceMinim];//schimba nr. maxim din vector1 cu nr. minim din vector2
console.log(vector1)
$('#output').append('<p>ex3: vector schimbat</p>')//afiseaza vector1 cu nr maxim schimbat pe cel mai mic nr din vector2
for(var jll=0;jll<vector1.length;jll=jll+1)
	$('#output').append('<p>element nr:'+(jll+1)+' este '+vector1[jll]+'</p>');








			
				
			
			
			
			
		