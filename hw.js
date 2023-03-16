const pokemonForm = document.querySelector('.pokemonForm')
const pokemonCard = document.querySelector('.pokemonCard')
console.log(pokemonForm)
pokemonForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const pokemonName = pokemonForm.name.value
  console.log(pokemonName)
  pokemonData(pokemonName)
} )


async function pokemonData(name){
  url = `https://pokeapi.co/api/v2/pokemon/${name}`
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
  const pokemonPic = data.sprites.front_shiny
  pokemonCard.innerHTML = `
<div class="card" style="width: 18rem;">
<img class="card-img-top" src="${pokemonPic}" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">${name}</h5>
  <p class="card-text">This is ${name}</p>
</div>
</div>`
}