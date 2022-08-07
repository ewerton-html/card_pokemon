const card = document.querySelector(".card");
const buttonGo = document.getElementById("right");
const buttonGoBack = document.querySelector("#left");
const maxIndex = cards.length;
let index = 0;

function createrCard(Card) {
  const cardPokemon = document.createElement("li");
  cardPokemon.classList.add("front_card");
  cardPokemon.id = Card.id;
  cardPokemon.classList.add("front_card");
  cardPokemon.style.backgroundImage = `url("${Card.backgroundImg}")`;

  const cardMain = document.createElement("div");
  cardMain.classList.add("card_contents");

  const cardPokemonTop = document.createElement("div");
  cardPokemonTop.classList.add("card_contents_top");

  const h2 = document.createElement("h2");
  h2.innerText = Card.name;

  const span = document.createElement("span");
  span.innerText = "HP " + Card.hp;

  const cardPokemonCentro = document.createElement("div");
  cardPokemonCentro.classList.add("card_contents_center");

  const pokemonImage = document.createElement("img");
  pokemonImage.src = Card.pokemonImg;
  pokemonImage.alt = Card.name;

  const cardPokemonBottom = document.createElement("div");
  cardPokemonBottom.classList.add("card_contents_bottom");

  const h3 = document.createElement("h3");
  h3.classList.add("description");
  h3.innerText = "Discrição";

  const p = document.createElement("p");
  p.classList.add("description_text");
  p.innerText = Card.description;

  cardPokemonTop.append(h2, span);
  cardPokemonCentro.append(pokemonImage);
  cardPokemonBottom.append(h3, p);

  cardMain.append(cardPokemonTop, cardPokemonCentro, cardPokemonBottom);

  cardPokemon.append(cardMain);

  return cardPokemon;
}

[buttonGo, buttonGoBack].forEach((event) => {
  event.addEventListener("click", (e) => {
    const elementHTML = e.target;
    const nameElement = elementHTML.id;
    console.log(nameElement);
    animationCard(nameElement);
  });
});

function changingCard(element) {
  if (element == "right") {
    index = index + 1;
    index = checkIndex(index);

    let cardSelect = createrCard(cards[index]);
    card.appendChild(cardSelect);
  } else {
    index = index - 1;
    index = checkIndex(index);

    let cardSelect = createrCard(cards[index]);
    card.appendChild(cardSelect);
  }
}

//animação

function animationCard(name) {
  const cardPokemon = document.querySelector("li");
  cardPokemon.classList.add("animation");
  cardPokemon.classList.add(name);

  window.setTimeout(() => {
    card.innerHTML = "";
    changingCard(name);
  }, 1500);
}

//limitando o index

function checkIndex(i) {
  if (i > maxIndex - 1) {
    i = 0;
  } else if (i < 0) {
    i = maxIndex - 1;
  }
  return i;
}

//help for mobile
const fade = document.querySelector(".fade");
const modalHelp = document.querySelector(".help_modal");
const modal = [fade, modalHelp];

function hideModal() {
  modal.forEach((element) => {
    element.classList.add("hide");
  });
}

modal.forEach((element) => {
  element.addEventListener("click", () => {
    hideModal();
  });
});

//click for mobile

function clickChangingCard() {
  document.addEventListener("click", (event) => {
    if (event.clientX > 240) {
      animationCard("right");
    } else {
      animationCard("left");
    }
  });
}

const screen = 480;
window.addEventListener("resize", resizeHandler());
function resizeHandler() {
  const iw = window.innerWidth;
  if (iw <= screen) {
    clickChangingCard();
  }
}
