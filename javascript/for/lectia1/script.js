
//caut numerele egale cu zece intr-un vector

var v = [1,3,44,10,2]
var indice = []
var nrEgaleCuZece = 0
elemente = ''

console.log(v.length)//ne spune cate elemente are vecotul v

console.log(10 % 2)// a%b este restul impartii a la b. restul impartirii 10 la 2 este 0, 11 la 2 este 1

for(var i=0;i<v.length;i++){
	if(v[i]==10){
		nrEgaleCuZece += 1;
		// a += 1 este la fel ca a=a+1	
		indice.push(i)	
 	}

	if(i>0){
		//punem virgula numai intre elemente
		elemente += ',';
	}

	if(v[i]%2 == 1){
		console.log(v[i])//numere impare din vector
	}

	elemente += v[i];
}
$('#output').append('numarul de elemente egale cu 10 din vectorul v cu elementele:' + elemente + ' sunt ' + nrEgaleCuZece)

console.log(indice)//indicele elementelor egale cu 10

/*Exercitii

1. scrie elementele din vector in ordine inversa in div'ul cu id'ul output
2. scrie elementele cu indicele pare din vector in div'ul cu id'ul output
3. scrie indicele elementelor pare in div'ul cu id'ul output
4. scrie suma numerele in div'ul cu id'ul output
5. scrie cate numere sunt mai mici ca 5 in div'ul cu id'ul output

daca sunt intrebari le scrii in sectiune issues.
rezolvarile le faci in acest fisier, apoi le faci commit apoi push pe github.

*/

//rezolvare


