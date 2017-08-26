
function cl(a){//functie pentru a afisa
	console.log(a)
}

var m = [[1,2,3],
	 [4,5,6],
	 [5,4,3]]
cl(m)
cl('parcurgere pe randuri')
for(var i=0; i<m.length;++i){
	var t = ''
	for(var j=0;j<m[i].length;++j){
		if(j>0)
			t = t + ','
		t += m[i][j];
	}
	cl(t)
}
cl('parcurgere pe coloane')
for(var i=0; i<m[0].length;++i){
	var t = ''
	for(var j=0;j<m.length;++j){
		if(j>0)
			t = t + ','
		t += m[j][i];
	}
	cl(t)
}
cl('parcurgere pe coloane din 2 in 2')
for(var i=0; i<m[0].length;i+=2){
	var t = ''
	for(var j=0;j<m.length;++j){
		if(j>0)
			t = t + ','
		t += m[j][i];
	}
	cl(t)
}
cl('parcurgere pe coloane invers')
for(var i=m[0].length-1;i>=0;--i){
	var t = ''
	for(var j=0;j<m.length;++j){
		if(j>0)
			t = t + ','
		t += m[j][i];
	}
	cl(t)
}

/*Exercitii
1. gaseste minimul, maximul, suma pe coloane, pe randuri, din toata matrices
2. sorteaza randurile
3. sorteaza coloanele

*/

