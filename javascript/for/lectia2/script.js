

$('#lectieButon').click(function(){
	console.log($('#ul1 li').length)//observam ca exista mai multe obiecte pe care le obtinem cu interogarea #ul1 li

	$('#ul1 li').each(function(index){ //pentru fiecare element din lista
		console.log(index+":"+$(this).html())
		//$(this) reprezinta elementul curent 
		//html() obtine html din element, html('<p>lo</p>') - inlocuieste html din element
		if($(this).attr('class') == 'clasa-1'){
			console.log('elementul :' + index + ' are clasa clasa1')
			$(this).html('Text schimbat din cauza clasei cu javascript')		
		}
	})
})


var vector1 = ['mar','pruna','cirese','rosii']
var vector2 = ['mar','cirese','rosii','abricoase', 'pere']

/*Exercitii
1. creaza o lista html cu elementele primului vector in divul rezolvare
2. creaza o lista html cu elementele al doiles vector in divul rezolvare
3. gaseste in lista ul1 ce element are id id-1 si scrie in divul output
4. cand apesi pe buton rezolvareButon schimba textul din buton cu "bine"
5. adauga la fiecare al doilea element din a doua lista culoarea rosie
6. cand apesi pe un element din prima lista sterge-l 

*/
$('#ul2').append('<p>ex.1-6</p>');
for(i=0; i<vector1.length; i++){ // ex 1
	$('#ul2').append('<li>'+vector1[i]+'</li>')
}
$('#ul2').append('<p>ex.2-5</p>');
for(j=0; j<vector2.length; j++){ // ex 2
	$('#ul3').append('<li>'+vector2[j]+'</li>')
}
$('#output').append('<p>ex.3</p>');
$('#ul1 li').each(function(){ // ex 3
	if($(this).attr('id') == 'id-1'){
		$('#output').append($(this).html());
	}
})

$('#rezolvareButon').before('<p>ex.4</p>');
$('#rezolvareButon').click(function(){ // ex 4
	$(this).text('bine');
})

$('#ul3 li').each(function(index){ // ex 5
	if(index%2==1){
		$(this).css({'color':'red'});
	}
})

$('#ul2 li').click(function(){ //ex 6
	$(this).remove()
})





