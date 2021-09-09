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



// Selecting the ID tag from HTML. #forID, .forclass
const pokeContainer = document.querySelector('#poke-container')


// looping through the data of pokemons. and pass the listOfPokemons to another function
pokemons.forEach(function(listOfPokemons){
    renderPokemon(listOfPokemons);
});

function renderPokemon(character){
    const pokeCard = document.createElement('div')
    pokeCard.id = `poke-${character.id}`
    pokeCard.className = "poke-card"

    const pokeImg = document.createElement('Img')
    pokeImg.src = character.img

    pokeCard.appendChild(pokeImg)
    pokeContainer.appendChild(pokeCard)
}

