const countPokemons = document.querySelector('[data-js="count-pokemons"]');


listingPokemons('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0');


let countPagination = 10;


// SLIDE HERO
var slide_hero = new Swiper(".slide-hero", {
  effect: 'fade',
  pagination: {
    el: '.slide-hero .main-area .area-explore .swiper-pagination',
  },
  autoplay:{
    delay: 5000,
    disableOnInteraction: false
  }
});


// Select custom
const btnDropDownSelect = document.querySelector('[data-js="open-select-custom"]');


btnDropDownSelect.addEventListener('click', () => {
  btnDropDownSelect.parentElement.classList.toggle('active');
});


// Fetch Pokémons
const areaPokemons = document.querySelector('[data-js="list-pokemons"]');


// Set first letter in Capitalize
function fisrtLetterCapitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}


// Create card Pokémon
function createCardPokemon(id, types, name, image){
  let card = document.createElement('button');
  card.classList = `card-pokemon ${types}`;
  card.setAttribute("id-pokemon", id);
  card.setAttribute("data-js", "open-details-pokemon");
  areaPokemons.appendChild(card);

  let imageElement = document.createElement('div');
  imageElement.classList = 'image';
  card.appendChild(imageElement);

  let imageSrc = document.createElement('img');
  imageSrc.className = 'thumb-img';
  imageSrc.setAttribute('src', image);
  imageElement.appendChild(imageSrc);

  let infoCardPokemon = document.createElement('div');
  infoCardPokemon.classList = 'info';
  card.appendChild(infoCardPokemon);

  let infoTextPokemon = document.createElement('div');
  infoTextPokemon.classList = 'text';
  infoCardPokemon.appendChild(infoTextPokemon);

  let codePokemon = document.createElement('span');
  codePokemon.textContent = (id < 10) ? `#00${id}` : (id < 100) ? `#0${id}` : `#${id}`;
  infoTextPokemon.appendChild(codePokemon);

  let namePokemon = document.createElement('h3');
  namePokemon.textContent = fisrtLetterCapitalize(name);
  
  infoTextPokemon.appendChild(namePokemon);

  let areaIcon = document.createElement('div');
  areaIcon.classList = 'icon';
  infoCardPokemon.appendChild(areaIcon);

  let imgType = document.createElement('img');
  imgType.setAttribute('src', `img/icon-types/${types}.svg`);
  areaIcon.appendChild(imgType);
};


function listingPokemons(urlApi){
  axios({
    method: 'GET',
    url: urlApi
  })
  .then((response) => {
    const {results, next, count} = response.data;

    countPokemons.innerText = count;

    results.forEach((pokemon) => {
      let urlApiDetails = pokemon.url;

      axios({
        method: 'GET',
        url: `${urlApiDetails}`
      })
      .then((response) => {
        const {name, id, sprites, types} = response.data;

        const infoCard = {
          name: name,
          id: id,
          image: sprites.other.dream_world.front_default,
          types: types[0].type.name
        }
        
        createCardPokemon(infoCard.id, infoCard.types, infoCard.name, infoCard.image);

        const cardPokemon = document.querySelectorAll('[data-js="open-details-pokemon"]');

        cardPokemon.forEach((card) => {
          card.addEventListener('click', openDetailsPokemon);
        });
      });
    });
  });
}
// MODAL
const btnClose = document.querySelector('[data-js="close"]');


if(btnClose){
  const cardPokemon = document.querySelectorAll('[data-js="open-details-pokemon"]');
  
  function openDetailsPokemon(){
    let tagHtml = document.documentElement;
    tagHtml.classList.add('open-modal');

    let idPokemon = this.getAttribute('id-pokemon');
    let imagePokemon = this.querySelector('.thumb-img');
    let iconTypePokemon = this.querySelector('.info .icon img');
    let namePokemon = this.querySelector('.info h3');
    let idStringPokemon = this.querySelector('.info span');

    const modalDetails = document.querySelector('[data-js="typePokemonModal"]');
    const imgPokemonModal = document.querySelector('[data-js="image-pokemon-modal"]');
    let iconTypePokemonModal = document.querySelector('[data-js="image-type-modal"]');
    let namePokemonModal = document.querySelector('[data-js="name-pokemon-modal"]');
    let idPokemonModal = document.querySelector('[data-js="id-pokemon-modal"]');
    let heightPokemonModal = document.querySelector('[data-js="height-pokemon"]');
    let weightPokemonModal = document.querySelector('[data-js="weight-pokemon"]');
    let mainHabilitiesPokemonModal = document.querySelector('[data-js="main-abilities"]');

    imgPokemonModal.setAttribute('src', imagePokemon.getAttribute('src'));
    modalDetails.setAttribute('typePokemonModal', this.classList[1]);
    iconTypePokemonModal.setAttribute('src', iconTypePokemon.getAttribute('src'));


    namePokemonModal.textContent = namePokemon.textContent;
    idPokemonModal.textContent = idStringPokemon.textContent;


    axios({
      method: 'GET',
      url: `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
    })
    .then(response => {
      let data = response.data;

      let infoPokemon = {
        mainAbilities: fisrtLetterCapitalize(data.abilities[0].ability.name),
        types: data.types,
        weight: data.weight,
        height: data.height,
        abilities: data.abilities,
        stats: data.stats,
        urlType: data.types[0].type.url,
      }

      function listingTypesPokemon(){
        const areaTypesModal = document.querySelector('[data-js="types-pokemon"]');
        areaTypesModal.innerHTML = '';

        let arrayTypes = infoPokemon.types;

        arrayTypes.forEach(itemType => {
          let itemList = document.createElement('li');
          areaTypesModal.appendChild(itemList);

          let spanList = document.createElement('span');
          spanList.classList = `tag-type ${itemType.type.name}`;
          spanList.textContent = fisrtLetterCapitalize(itemType.type.name);
          itemList.appendChild(spanList);
        });
      }

      function listingWeaknesses(){
        const areaWeak = document.querySelector('[data-js="area-weak"]');

        areaWeak.innerHTML = '';

        axios({
          method: 'GET',
          url: `${infoPokemon.urlType}`
        })
        .then(response => {
          let weaknesses = response.data.damage_relations.double_damage_from;
          
          weaknesses.forEach(itemType => {
            let itemListWeak = document.createElement('li');
            areaWeak.appendChild(itemListWeak);

            let spanList = document.createElement('span');
            spanList.classList = `tag-type ${itemType.name}`;
            spanList.textContent = fisrtLetterCapitalize(itemType.name);
            itemListWeak.appendChild(spanList);
          });

        })

      }

      heightPokemonModal.textContent = `${infoPokemon.height / 10}m`;
      weightPokemonModal.textContent = `${infoPokemon.weight / 10}kg`;
      mainHabilitiesPokemonModal.textContent = infoPokemon.mainAbilities;

      const statsHp = document.querySelector('[data-js="stats-hp"]');
      const statsAttack = document.querySelector('[data-js="stats-attack"]');
      const statsDefense = document.querySelector('[data-js="stats-defense"]');
      const statsSpAttack = document.querySelector('[data-js="stats-sp-attack"]');
      const statsSpDefense = document.querySelector('[data-js="stats-sp-defense"]');
      const statsSpeed = document.querySelector('[data-js="stats-speed"]');

      statsHp.style.width = `${infoPokemon.stats[0].base_stat}%`;
      statsAttack.style.width = `${infoPokemon.stats[1].base_stat}%`;
      statsDefense.style.width = `${infoPokemon.stats[2].base_stat}%`;
      statsSpAttack.style.width = `${infoPokemon.stats[3].base_stat}%`;
      statsSpDefense.style.width = `${infoPokemon.stats[4].base_stat}%`;
      statsSpeed.style.width = `${infoPokemon.stats[5].base_stat}%`;

      listingTypesPokemon();
      listingWeaknesses();
    });

  }
  
  function closeDetailsPokemon(){
    let tagHtml = document.documentElement;
    tagHtml.classList.remove('open-modal');
  }
  
  cardPokemon.forEach((card) => {
    card.addEventListener('click', openDetailsPokemon);
  });
  
  btnClose.addEventListener('click', closeDetailsPokemon);
}


// List sidebar types
const arreaTypes = document.querySelector('[data-js="type-area"]');
const arreaTypesMobile = document.querySelector('[data-js="dropdown-select"]');


axios({
  method: 'GET',
  url: 'https://pokeapi.co/api/v2/type'
}).then((response) => {
  const {results} = response.data;

  results.forEach((type, index) => {
  if(index < 18){
      let itemType = document.createElement('li');
      arreaTypes.appendChild(itemType);
  
      let buttonType = document.createElement('button');
      buttonType.classList = `type-filter ${type.name}`;
      buttonType.setAttribute('id-type', index + 1);
      itemType.appendChild(buttonType);
  
      let iconType = document.createElement('div');
      iconType.classList = 'icon';
      buttonType.appendChild(iconType);
  
      let srcType = document.createElement('img');
      srcType.setAttribute('src', `img/icon-types/${type.name}.svg`);
      iconType.appendChild(srcType);
      
      let nameType = document.createElement('span');
      nameType.textContent = fisrtLetterCapitalize(type.name);
      buttonType.appendChild(nameType);

      // Select mobile types
      let itemTypeMobile = document.createElement('li');
      arreaTypesMobile.appendChild(itemTypeMobile);
  
      let buttonTypeMobile = document.createElement('button');
      buttonTypeMobile.classList = `type-filter ${type.name}`;
      buttonTypeMobile.setAttribute('id-type', index + 1);
      itemTypeMobile.appendChild(buttonTypeMobile);
  
      let iconTypeMobile = document.createElement('div');
      iconTypeMobile.classList = 'icon';
      buttonTypeMobile.appendChild(iconTypeMobile);
  
      let srcTypeMobile = document.createElement('img');
      srcTypeMobile.setAttribute('src', `img/icon-types/${type.name}.svg`);
      iconTypeMobile.appendChild(srcTypeMobile);
      let nameTypeMobile = document.createElement('span');
      nameTypeMobile.textContent = fisrtLetterCapitalize(type.name);
      buttonTypeMobile.appendChild(nameTypeMobile);

      const allTypes = document.querySelectorAll('.type-filter');

      allTypes.forEach((btn) => {
        btn.addEventListener('click', filterByTypes);
      });
    }
  });
});


// Load More
const btnLoadMore = document.querySelector('[data-js="btn-load-more"]');


function showMorePokemon(){
  listingPokemons(`https://pokeapi.co/api/v2/pokemon?limit=9&offset=${countPagination}`);

  countPagination += 9;
}


btnLoadMore.addEventListener('click', showMorePokemon);


// Filter Pokémons by types
function filterByTypes(){
  let idPokemon = this.getAttribute('id-type');

  const areaPokemons = document.querySelector('[data-js="list-pokemons"]');
  const btnLoadMore = document.querySelector('[data-js="btn-load-more"]');
  
  const allTypes = document.querySelectorAll('.type-filter');
  
  const countPokemonsType = document.querySelector('[data-js="count-pokemons"]');

  
  areaPokemons.innerHTML = '';
  btnLoadMore.style.display = 'none';

  const sectionPokemons = document.querySelector('.s-all-info-pokemons');
  const topSection = sectionPokemons.offsetTop;

  notFound.classList.remove('active');

  window.scrollTo({
    top: topSection + 288,
    behavior: 'smooth'
  });

  allTypes.forEach(type => {
    type.classList.remove('active');
  });

  this.classList.add('active');

  if(idPokemon){
    axios({
      method: 'GET',
      url: `https://pokeapi.co/api/v2/type/${idPokemon}`
    })
    .then(response => {
      const {pokemon} = response.data;
      countPokemonsType.textContent = pokemon.length;
      pokemon.forEach(pok => {
        const {url} = pok.pokemon;
  
        axios({
          method: 'GET',
          url: `${url}`
        })
        .then(response => {
          const {name, id, sprites, types} = response.data;
  
          const infoCard = {
            name: name,
            id: id,
            image: sprites.other.dream_world.front_default,
            types: types[0].type.name
          }
  
          if(infoCard.image){
            createCardPokemon(infoCard.id, infoCard.types, infoCard.name, infoCard.image);
          }
          
          const cardPokemon = document.querySelectorAll('[data-js="open-details-pokemon"]');
  
          cardPokemon.forEach((card) => {
            card.addEventListener('click', openDetailsPokemon);
          });
        })
      });
    });
  } else {
    areaPokemons.innerHTML = '';

    listingPokemons('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0');

    btnLoadMore.style.display = 'block';
  }
}


// Seach Pokémon
const btnSearch = document.querySelector('[data-js="btn-search"]');
const inputSearch = document.querySelector('[data-js="input-search"]');
const notFound = document.querySelector('.not-found');
const btnNotFound = document.querySelector('[data-js="btnNotFound"]');

btnNotFound.addEventListener('click', filterByTypes);

btnSearch.addEventListener('click', searchPokemon);
inputSearch.addEventListener('keyup', (event) => {
  if(event.code === 'Enter'){
    searchPokemon();
  }
});

function searchPokemon(){
  let valueInput = inputSearch.value.toLowerCase();
  const typeFilter = document.querySelectorAll('.type-filter');

  typeFilter.forEach(type => {
    type.classList.remove('active');
  });

  axios({
    method: 'GET',
    url: `https://pokeapi.co/api/v2/pokemon/${valueInput}`
  })
  .then(response => {
    
    const countPokemons = document.querySelector('[data-js="count-pokemons"]');
    areaPokemons.innerHTML = '';
    btnLoadMore.style.display = 'none';
    countPokemons.textContent = 1;

    const {name, id, sprites, types} = response.data;
    const infoCard = {
      name: name,
      id: id,
      image: sprites.other.dream_world.front_default,
      types: types[0].type.name
    }

    if(infoCard.image){
      createCardPokemon(infoCard.id, infoCard.types, infoCard.name, infoCard.image);
      notFound.classList.remove('active');
    }
    
    const cardPokemon = document.querySelectorAll('[data-js="open-details-pokemon"]');

    cardPokemon.forEach((card) => {
      card.addEventListener('click', openDetailsPokemon);
    });
  })
  .catch((error) => {
    areaPokemons.innerHTML = '';
    btnLoadMore.style.display = 'none';
    countPokemons.textContent = 0;
    
    notFound.classList.add('active');

    console.log(error);
  });
}