
function cl(a){//functie pentru a afisa
	console.log(a)
}

var a = [5, 3, 7, 2]

//sortare vector
for(var i = 0; i<a.length - 1; ++i){
	for(var j=i+1; j<a.length; j++){// i este mai mic ca j
		if(a[i] > a[j]){//daca un element din dreapta este mai mare ca un element din stanga
			var x = a[i]
			a[i] = a[j]
			a[j] = x
			//schimbam cu locul elementele
		}
	}
}
cl('vector sortat')
cl(a)

var b = []
var nr = 0

$('#add').click(function(){
	var text = $('#textLectie').val()
	console.log(text)
	if (text.length > 1){
		nr += 1
		var persoana = {'id':nr, nume:text}
		b.push(persoana)
		$('#textLectie').val("")
	}
})

$('#show').click(function(){
	console.log(b)
	$('#lectie').html('<p>persoane:</p><ul id="listapersoane"></ul>')
	for (var i in b){
		$('#lectie ul').append('<li id="persoana-'+b[i].id+'">'+b[i].nume+'</li>')
	}
	$('#listapersoane li').click(function(){
		var id = $(this).attr('id')
		var t = id.split('persoana-')
		delete b[parseInt(t[1])-1]// asha stergi un element din vector
		console.log(b)
		alert('am sters persoana persoana cu id:'+t[1])
	})
})


/*Exercitii
1. creaza o functie care ia ca parametru un vector si il sorteaza
2. afiseaza doar persoane la care numele se incepe cu 'ma'
3. creaza un textbox si un buton cauta , cand apesi pe cauta se vor afisa persoanele in div-ul rezolvare care contin in nume textul din textbox
4. mai adauga un textbox pentru ani si salveaza anii adaugand o proprietate obiectului ce reprezinta persoana
5. adauga un buton sterge care va sterge toate persoanele cu numele Ion

*/

