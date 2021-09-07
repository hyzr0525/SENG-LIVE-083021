const pokemons = [
  {
    id: 1,
    name: "bulbasaur",
    img: "https://static.wikia.nocookie.net/kingdom-keymasters-database/images/2/27/001Bulbasaur_XY_anime.png/revision/latest?cb=20160927122032",
    likes: 4,
  },
  {
    id: 2,
    name: "ivysaur",
    img: "https://static.wikia.nocookie.net/kingdom-keymasters-database/images/c/ca/002Ivysaur_XY_anime_2.png/revision/latest?cb=20161017212021",
    likes: 21,
  },
  {
    id: 3,
    name: "venusaur",
    img: "https://images.saymedia-content.com/.image/t_share/MTc2MjYwODQ5NTk2NTcyODYy/pokemon-venusaur-nicknames.png",
    likes: 7,
  },
  {
    id: 4,
    name: "charmander",
    img: "https://pixy.org/download/1207107/",
    likes: 20,
  },
  {
    id: 5,
    name: "charmeleon",
    img: "https://static.wikia.nocookie.net/pokemon-quest-adventures/images/a/a4/005Charmeleon_XY_anime_2.png/revision/latest?cb=20170313041459",
    likes: 11,
  },
];



//How do we start manipulating things?
//how do we access elements, select elements

//document.getElementById(), it accepts the id as an argument
//returns the first match

const pokeForm = document.getElementById('poke-form')
console.log(pokeForm)

// document.get ElementsByClassName()
// accepts class name as the argument
//returns multiple elements, as array

const label = document.getElementsByClassName('form-lable')
console.log(label)

// document.querySelector()***
// accepts different selectors: ids, class, tags.
// it returns the first value that matches the provided selector

const goalsDiv = document.querySelector('#lecture-goals')
console.log(goalsDiv)

// document.querySelectorAll() ***
//returns a collection of elements that match the selector
// .forEach can be used on this collection
// returns a NodeList


const allDivs = document.querySelectorAll('div')
console.log(allDivs)


// Creating elements
const pokeCardContainer = document.querySelector(#poke-container)

pokemons.forEach(function(pokemon){
  renderPokemon(pokemon)
})

function renderPokemon(character){
  // create elements that display our characters properties to the DOM
  // create a div
  const pokeCard = document.createElement('div')
  pokeCard.id = `poke-${character.id}`
  pokeCard.className = "poke-card"

  const pokeImg = doucment.createElement('Img')
  pokeCard.src = character.img

  pokeCardContainer.appendChild(pokeCard)

  //adding pokeCard to pokeCont ainer
}

// document.createElement()
  //creates nodes
// .innerHTML
// creats strings that represent the element

//* updating elements

// Remove elements from our DOM
// .remove() called on the targeted element

document.querySelector('#lecture-goals')
lectureGoals.remove()

// document.querySelector('#lecture-goals').remove()

