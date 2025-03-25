
  let ScrollImg = document.getElementById("carouselItems");
  let ModelImg = document.getElementById("dishGrid");
  let Content = document.getElementById("wrapper");
  let Load=document.getElementById("Loader")
  let All = ['All'];
  
  // Get method
  function GetMethod() {
   
    // let Load=document.getElementById("Loader")
  
    Load.style.display="block"
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=87d2995f1c51459eb9d7413a1be769b5&number=20`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
          // Scroll image
          Load.style.  display="none"
          data.recipes.forEach((scroll) => {
              let img = document.createElement("img");
              img.src = scroll.image;
              img.classList.add("scroll-image");
              ScrollImg.appendChild(img);
            });
      
      })
    }
  
  GetMethod();
  // View more button
  let Loadmore=document.getElementById("loadMore")
  Loadmore.addEventListener("click",(e)=> {  
    
    e.preventDefault()

    Load.style.display="block"
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=87d2995f1c51459eb9d7413a1be769b5&number=20`
    )
    .then((response) => response.json())
    .then((data) => {
      Load.style.display="none"
        let recipes = data.recipes;
  

        recipes.forEach((recipe) => {
            let DishCard = document.createElement("div");
            DishCard.classList.add("dish-card");
  
            let img = document.createElement("img");
            img.src = recipe.image;
            img.alt = recipe.title;
            img.classList.add("recipe-img");
  
            let p = document.createElement("p");
            p.textContent = recipe.title;
            p.classList.add("recipe-title");
  
            DishCard.appendChild(img);
            DishCard.appendChild(p);
            ModelImg.appendChild(DishCard);
  
        })
      })
})
  function Items(cuisine) {

    let CountryBtn = document.getElementById("filter-buttons");
    let ModelImg = document.getElementById("dishGrid");
  
   
  Load.style.display="block"
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=87d2995f1c51459eb9d7413a1be769b5&number=20&cuisine=${cuisine}`
    )
    .then((response) => response.json())
    .then((data) => {
      Load.style.display="none"
        let recipes = data.recipes;
  
        
        ModelImg.innerHTML = "";
  
     
        recipes.forEach((recipe) => {
            let DishCard = document.createElement("div");
            DishCard.classList.add("dish-card");
  
            let img = document.createElement("img");
            img.src = recipe.image;
            img.alt = recipe.title;
            img.classList.add("recipe-img");
  
            let p = document.createElement("p");
            p.textContent = recipe.title;
            p.classList.add("recipe-title");
  
            DishCard.appendChild(img);
            DishCard.appendChild(p);
            ModelImg.appendChild(DishCard);
  
            img.addEventListener("click", () => {
   
                let Content = document.getElementById("wrapper");
                let MainDiv = document.createElement("div");
                MainDiv.style.backgroundColor="grey"
                MainDiv.classList.add("modal-overlay");
                MainDiv.classList.add("show"); 
      
                let SceondDiv = document.createElement("div");
                SceondDiv.classList.add("modal-content");
      
                let img = document.createElement("img");
                img.src = recipe.image;
                img.alt = recipe.title;
                img.classList.add("image-one");
      
                let title = document.createElement("h2");
                title.textContent = recipe.title;
      
                let veg = document.createElement("p");
                veg.textContent = recipe.vegetarian ? "Vegetarian" : "Non-Vegetarian";
      
                let summary = document.createElement("p");
                summary.innerHTML = recipe.summary;
      
                let closeButton = document.createElement("h1");
                closeButton.textContent = "X";
                closeButton.classList.add("modal-close");
                closeButton.addEventListener("click", () => {
                  MainDiv.remove();
                });

      
                SceondDiv.appendChild(img);
                SceondDiv.appendChild(title);
                SceondDiv.appendChild(veg);
                SceondDiv.appendChild(summary);
                MainDiv.appendChild(closeButton);
                MainDiv.appendChild(SceondDiv);
                Content.appendChild(MainDiv);
              });
            });

        recipes.forEach((recipe) => {
            recipe.cuisines.forEach((elemen) => {
                if (!All.includes(elemen)) {
                    All.push(elemen);
                }
            });
        });
  
   
        CountryBtn.innerHTML = ""; 
        All.forEach((valueitem) => {
            let valueItem = document.createElement("button");
            valueItem.textContent = valueitem;
            valueItem.onclick = () => Items(valueitem);
            CountryBtn.appendChild(valueItem);
        });
  
       
    })
  
  }
  
Items()
  
  
  // Search bar 
  let SearchBtn = document.getElementById("searchbutton");
  
  function SearchDiv() {

    
    let SearchValue = searchBox.value.trim().toLowerCase();
    let MenuTitles = document.getElementsByClassName("recipe-title");
  
    for (let i = 0; i < MenuTitles.length; i++) {
      let FoodItem = MenuTitles[i].textContent.toLowerCase();
      let ParentDish = MenuTitles[i].parentElement;
  
      if (FoodItem.includes(SearchValue)) {
        
        ParentDish.style.display = "block";
    
      
        console.log("yes Items is avalib;e");
      } else {
        ParentDish.style.display = "none";
        
        console.log("fwefwefewfwe");
      }
 
    }
  }
 
  SearchBtn.addEventListener("click", function (e) {
    e.preventDefault();
  
  
    SearchDiv();
    
    
  });
  
  

