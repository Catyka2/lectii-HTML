

var vector1 = [3,9,4,7,90]
var vector2 = [1,3,5,7,8,9]
var vector3 = []//elemente ce sunt in primul vector si nu sunt in al doilea

for(var i=0;i<vector1.length;i=i+1){//pentru fiecare indece din vector1
	var ok = 1;//variabila care este 1 daca vector1[i] nu este in vector2, si 0 altfel
	for(var j=0;j<vector2.length;j++){//pentru fiecare indice din vector2
		if(vector1[i] == vector2[j]){
			ok = 0; // am gasit numere egale
			break;// oprim for'ul cu j 
		}
	}
	if(ok == 1){
		vector3.push(vector1[i])//adaugam elementul in vector3
	}
}

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

