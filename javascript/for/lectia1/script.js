
//caut numerele egale cu zece intr-un vector
var vector1 = []
var v = [1,3,44,10,2]
var indice = []
var nrEgaleCuZece = 0
elemente = ''
elemente2 = ''
var suma = 0;
var maiMiciCaCinci =0;
elemente3 =0;

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

for( var i=v.length; i>=0; i=i-1){ //elementele in ordine inversa
	vector1.push(v[i]);
}
	$('#output').append ('<p>elementele din vector in ordine inversa:'+vector1+'</p>')
	
for(var i=0;i<v.length;i++){
    suma=suma+v[i]; // suma numerelor din vector
	if(v[i]%2 == 0){ //elementele cu numere pare
		console.log(v[i]);
	elemente2 += v[i];
	}
	
	if(v[i]<5){
		maiMiciCaCinci++; //nr. mai mici ca cinci
	}
	if(i%2==0){
		console.log(i);
		elemente3 += i;
	}
}
$('#output').append ('<p>elementele cu indice pare sunt:'+elemente2+'</p>')
$('#output').append ('<p>suma numerelor este:'+suma+' numere mai mici ca cinci sunt:'+maiMiciCaCinci+'</p>')
	
	
	
	