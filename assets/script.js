const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let position = 0; 
const numberOfSlide = slides.length;

createCaroussel(position);

// les constent pour séléctionné les éléments

const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');

// console log de left / right pour vérifier que je pointe bien l'élément
console.log(left);
console.log(right);


// La fonction pour crée le caroussel

function createCaroussel(position){
  	const element = slides[position];
		console.log(element);
		const img = document.querySelector(".banner-img");
		img.setAttribute("src" , "./assets/images/slideshow/"+ element.image);
		const p = document.querySelector(".banner-txt");
}

// les addEventListener

left.addEventListener("click", function () {
	console.log("addEventListener click left");
    if (position == 0) {
        position = numberOfSlide - 1;
    }
    else {
        position--;
    }
        createCaroussel(position);
});

right.addEventListener("click", function () {
	console.log("addEventListener click right");
    if (position == numberOfSlide - 1) {
        position = 0;
    } else {
            position++;
    }
    createCaroussel(position);
});