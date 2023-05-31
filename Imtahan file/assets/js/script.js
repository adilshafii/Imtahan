const manyCards_mainDiv = document.querySelector(".manyCards_mainDiv");

fetch("  http://localhost:3000/information")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      const manyCards__cards = document.createElement("div");
      manyCards__cards.classList.add("manyCards__cards");
      manyCards_mainDiv.appendChild(manyCards__cards);

      const img = document.createElement("img");
      img.src = data[i].png;
      manyCards__cards.appendChild(img);

      const manyCards__cards__likeDiv = document.createElement("div");
      manyCards__cards__likeDiv.classList.add("manyCards__cards__likeDiv");
      manyCards__cards.appendChild(manyCards__cards__likeDiv);

      const esprit = document.createElement("p");
      esprit.classList.add("esprit");
      esprit.innerText=data[i].Ad
      manyCards__cards__likeDiv.appendChild(esprit);

      const manyCards__cards__Price = document.createElement("p");
      manyCards__cards__Price.classList.add("manyCards__cards__Price");
      manyCards__cards__Price.innerText=data[i].Yash
      manyCards__cards.appendChild(manyCards__cards__Price);

    }
  });
