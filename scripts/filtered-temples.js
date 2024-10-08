const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');
const templesContainer = document.querySelector('#temples');
const homeButton = document.querySelector('#homeButton');
const oldButton = document.querySelector('#oldButton');
const newButton = document.querySelector('#newButton');
const largeButton = document.querySelector('#largeButton');
const smallButton = document.querySelector('#smallButton');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
	{
    templeName: "Recife Brazil",
    location: "Recife, Pernambuco, Brazil",
    dedicated: "2000, December, 15",
    area: 37200,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/recife-brazil/400x250/recife-brazil-temple-lds-700211-wallpaper.jpg"
  },
	{
    templeName: "São Paulo Brazil",
    location: "São Paulo, São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 59246,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
  },
	{
    templeName: "Fortaleza Brazil",
    location: "Fortaleza, Ceará, Brazil",
    dedicated: "2019, June, 2",
    area: 36000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fortaleza-brazil/400x250/1-Fortaleza-Temple-Photo-2233938.jpg"
  },
];

createTempleCard(temples);

homeButton.addEventListener('click', () => {
	createTempleCard(temples);
});

oldButton.addEventListener('click', () => {
	createTempleCard(temples.filter(temple => temple.dedicated < "1900"));
});

newButton.addEventListener('click', () => {
createTempleCard(temples.filter(temple => temple.dedicated > "2000"));
});

largeButton.addEventListener('click', () => {
	createTempleCard(temples.filter(temple => temple.area > 90000));
});

smallButton.addEventListener('click', () => {
	createTempleCard(temples.filter(temple => temple.area < 10000));
});

function createTempleCard(filteredTemples) {
	document.querySelector('#temples').innerHTML = "";
	filteredTemples.forEach(temple => {
		const card = document.createElement('section');
		const name = document.createElement('h3');
		const location = document.createElement('p');
		const dedication = document.createElement('p');
		const area = document.createElement('p');
		const img = document.createElement('img');
	
		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
		dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `$temple.imageUrl`);
		img.setAttribute("loading", "lazy");
	
		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);
		card.setAttribute("class", "temple-card");
		
		templesContainer.appendChild(card);
	})
}