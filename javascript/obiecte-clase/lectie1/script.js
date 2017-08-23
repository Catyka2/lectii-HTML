
function cl(a){//functie pentru a afisa
	console.log(a)
}


//primul mod de creare a unui obiect

function Point(x, y) { // aceasta este clasa/obiect
	// this este obiectul, this.x este variabila, x este parametru
	this.x = x
	this.y = y
	
	this.suma = function(){ //suma este o methoda a clasei Point (e o functie, care ceva cu variabilele)
		return this.x + this.y
	}
	
	this.setY =  function(y){
		this.y = y
	}

}

var punct1 = new Point(1,2) // creem un punct cu coordonatele 1,2
var punct2 = new Point(4,-2)

function distanta(p1, p2){ //aceasta e functie
	return Math.sqrt((p1.x-p2.x)*(p1.x-p2.x) + (p1.y-p2.y)*(p1.y-p2.y))
}

cl('afisam clasa')
console.log(punct1)

cl('afisam variabile')
console.log(punct1.y)
console.log(punct1['y'])//la fel ca mai sus


console.log(distanta(punct1,punct2))
console.log(punct1.suma())//apelam o metoda a clasei

punct1.setY(7)//apelam o metoda care schimba o variabila in clasa
console.log(distanta(punct1,punct2))



//al doilea mod de creare a unui obiect
cl('a doua metoda')

var punct3 = {x:3,y:5,suma:function(){return this.x + this.y}}

console.log(punct3.suma())//apelam o metoda a clasei

console.log(distanta(punct3,punct2))

// atreia metoda
cl('a 3 metoda')
var punct4 = {}
punct4['x'] = 5
punct4['y'] = 4

console.log(distanta(punct4,punct2))


//putem forma vectori cu obiecte

var vector = [punct1,punct2,punct3]
vector.push(punct4)

for(var i in vector){// i va fi cheia/indexul (0,1,2,3) pentru ca avem patru elemente in vector
	$('#lectie').append('<p> Puntul '+i+": x-"+vector[i].x+",y-"+vector[i]['y']+'</p>')//sau vector[i]['x']
}

/*
Exercitii:
1. creaza o clasa Persoana cu variabilele nume, prenume, ani
2. creaza trei textboxuri pentru nume prenume si ani. Apoi un button, cand apesi pe buton se creaza o clasa Persoana cu textul din textboxuri si se adauga persoana creata intrun vector
3. creaza un buton afiseaza care va afisa toate persoanele din vector in divul rezolvare (nume prenume, ani)
4. creaza o metoda anulNaterii pentru persoana ca sa calculeze anul nasterii
*/

