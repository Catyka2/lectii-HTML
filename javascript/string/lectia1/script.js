
function cl(a){//functie pentru a afisa
	console.log(a)
}

var text = 'aa,bb,dd,f'//text
var a = "text scris intro variabila"//text
var b = "10"//text
var c = 3//numar
elemente = ''
 texthtml=''

var v = text.split(',')//desparte textul in bucati dupa virgula
console.log(v)
console.log(a.split(' '))//desparte textul in bucati dupa spatiu

var d = b+c // cand adunam text cu numar se transforma numarul in text si se uneste
console.log(d)

cl(c+4)//numar cu numar

cl(text+" text")//text cu text


var n = parseInt(b)// transforma textul in numar
cl(n+c)// numar + numar

var tt = text.replace(',','-')//inlocuieste primul , cu -
console.log(tt)

console.log(text.search('aa'))//find gaseste un text in altul si intoarce positia primei aparitii
console.log(text.search('dd'))
console.log(text.search('bbb'))//apare -1 cand nu este in text

/*Exercitii
1. afiseaza in divul #output textul din variabila text cu punct in loc de , in doua moduri
2. creaza o lista cu elementele ce au id'ul o cifra, atunci cand apesi pe un element sa apara suma dintre id si 10
3. creaza un textbox si un buton, cand apesi pe buton sa ia textul scris in textbox si sa gaseasca:
	a. cate virgule sunt in text sa se afiseze in consola
	b. daca in text este scris cuvantul 'catia' sa se afiseze cu alert sau console
	c. daca este o cifra sa se adune cu 13 si sa se afiseza

*/
$('#output').append(text.replace(/,/gi,'.'));//exer. 1
for( var i=0;i<v.length; i++){//mai mic sau mai mare!!!
	elemente+=v[i];
	    if(i=>0){
			elemente += '.';
		}
}
$('#output').append('<br>',elemente);

$('.lista').click(function(){ //exer. 2
	var id = $(this).attr('id');
	var nrid=parseInt(id)
	cl(nrid+10)
})

$('#btn').click(function() { //exer.3
    texthtml = $('#textare').val();	//preia textul din textbox
		if(texthtml.search('catia')!=-1){ //punctul b
			alert('este scris cuvintul catia'); 
		}
		var vectorFaraVirgula = texthtml.split(',')
		console.log(vectorFaraVirgula)//a
		console.log(vectorFaraVirgula.length - 1)//a
		if(!isNaN(parseInt(texthtml)))//isNaN verifica sa aiba valoare
			console.log(parseInt(texthtml)+13)//c
		
    	
        	
})




















