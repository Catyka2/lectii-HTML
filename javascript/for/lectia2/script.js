

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

