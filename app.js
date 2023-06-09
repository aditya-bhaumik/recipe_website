const app_id = "0ade1f85";
const app_key = "61b1e54dc7a0806f00790ea7b6698407";

var button = document.querySelector("button");
console.log(button);

const get_recipe = async () => {
  var input = document.querySelector("input");

  console.log(input);
  const response = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${input.value}&app_id=${app_id}&app_key=${app_key}`
  );
  var data = await response.json();

  
  console.log(data);
  //   data = data.hits;
  var cards = document.querySelector(".Cards-section");
  cards.innerHTML = "";
  for (let i = 0; i < data.hits.length; i++) {
    cards.innerHTML += `
  <div class="card">
  <div class="card__body">
    <img
      src="${data.hits[i].recipe.image}"
      alt=""
      class="card__image"
    />
    <h2 class="card__title">${data.hits[i].recipe.label}</h2>
    <p class="card__description">
Want to impress your friends, relatives and collegues. Try making this wonderful dish which will help you in becoming a better cook.
    </p>
  </div>
  <a href="${data.hits[i].recipe.url}" class="card__btn">View Recipe</a>
</div>
  `;
  }
};

button.addEventListener("click", get_recipe);

var typed= new Typed(".multiple-text",{
  strings:["Baked Chicken", "Chicken Vesuvio","Catalan Chicken","Mattar Paneer","Chilli Paneer","Palak Paneer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop:true
})

