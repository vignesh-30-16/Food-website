// document.addEventListener("DOMContentLoaded", function (e) {
  // e.preventDefault()
  let scrollimg = document.getElementById("carouselItems");
  let modelimg = document.getElementById("dishGrid");
  let content = document.getElementById("wrapper");
  let load=document.getElementById("loader")
  let all = ['All'];
  
  // Get method
  function getmethod() {
   
    let load=document.getElementById("loader")
  
    load.style.display="block"
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=87d2995f1c51459eb9d7413a1be769b5&number=20`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
          // Scroll image
          load.style.display="none"
          data.recipes.forEach((scroll) => {
              let img = document.createElement("img");
              img.src = scroll.image;
              img.classList.add("scroll-image");
              scrollimg.appendChild(img);
            });
      
      })
    }
  
  getmethod();
  // View more button
  let loadmore=document.getElementById("loadMore")
  loadmore.addEventListener("click",(e)=> {  
    
    e.preventDefault()
    // getmethod()
    // items()
    // getmethod()
    load.style.display="block"
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=87d2995f1c51459eb9d7413a1be769b5&number=20`
    )
    .then((response) => response.json())
    .then((data) => {
      load.style.display="none"
        let recipes = data.recipes;
  
        // Clear previous dishes
        // modelimg.innerHTML = "";
  
        // Display new dishes
        recipes.forEach((recipe) => {
            let dishCard = document.createElement("div");
            dishCard.classList.add("dish-card");
  
            let img = document.createElement("img");
            img.src = recipe.image;
            img.alt = recipe.title;
            img.classList.add("recipe-img");
  
            let p = document.createElement("p");
            p.textContent = recipe.title;
            p.classList.add("recipe-title");
  
            dishCard.appendChild(img);
            dishCard.appendChild(p);
            modelimg.appendChild(dishCard);
  
        })
      })
})
  function items(cuisine) {
    // // let load = document.getElementById("loader");
    let filterbtn = document.getElementById("filter-buttons");
    let modelimg = document.getElementById("dishGrid");
  
    // // load.style.display = "block"; // Show loader
  load.style.display="block"
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=87d2995f1c51459eb9d7413a1be769b5&number=20&cuisine=${cuisine}`
    )
    .then((response) => response.json())
    .then((data) => {
      load.style.display="none"
        let recipes = data.recipes;
  
        // Clear previous dishes
        modelimg.innerHTML = "";
  
        // Display new dishes
        recipes.forEach((recipe) => {
            let dishCard = document.createElement("div");
            dishCard.classList.add("dish-card");
  
            let img = document.createElement("img");
            img.src = recipe.image;
            img.alt = recipe.title;
            img.classList.add("recipe-img");
  
            let p = document.createElement("p");
            p.textContent = recipe.title;
            p.classList.add("recipe-title");
  
            dishCard.appendChild(img);
            dishCard.appendChild(p);
            modelimg.appendChild(dishCard);
  
            img.addEventListener("click", () => {
              // load.style.display="block"
              

                // load.style.display="none"
                let content = document.getElementById("wrapper");
                let maindiv = document.createElement("div");
                maindiv.classList.add("modal-overlay");
                maindiv.classList.add("show"); 
      
                let seconddiv = document.createElement("div");
                seconddiv.classList.add("modal-content");
      
                let fullimg = document.createElement("img");
                fullimg.src = recipe.image;
                fullimg.alt = recipe.title;
                fullimg.classList.add("image-one");
      
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
                  maindiv.remove();
                });
                // load.style.display="none"
      
                seconddiv.appendChild(fullimg);
                seconddiv.appendChild(title);
                seconddiv.appendChild(veg);
                seconddiv.appendChild(summary);
                maindiv.appendChild(closeButton);
                maindiv.appendChild(seconddiv);
                content.appendChild(maindiv);
              });
            });
        // Update filter buttons only if new cuisines are found
        recipes.forEach((recipe) => {
            recipe.cuisines.forEach((elemen) => {
                if (!all.includes(elemen)) {
                    all.push(elemen);
                }
            });
        });
  
        // Clear and re-add filter buttons
        filterbtn.innerHTML = ""; 
        all.forEach((valueitem) => {
            let valueItem = document.createElement("button");
            valueItem.textContent = valueitem;
            valueItem.onclick = () => items(valueitem);
            filterbtn.appendChild(valueItem);
        });
  
        // // load.style.display = "none"; // Hide loader
    })
  
  }
  
items()
  
  
  // Search bar 
  let searchBtn = document.getElementById("searchbutton");
  
  function searchdiv() {
    // load.style.display="block"
    // load()
    
    let searchValue = searchBox.value.trim().toLowerCase();
    let menuTitles = document.getElementsByClassName("recipe-title");
  
    for (let i = 0; i < menuTitles.length; i++) {
      let foodItem = menuTitles[i].textContent.toLowerCase();
      let parentDish = menuTitles[i].parentElement;
  
      if (foodItem.includes(searchValue)) {
        
        parentDish.style.display = "block";
    
      
        console.log("yes items is avalib;e");
      } else {
        parentDish.style.display = "none";
        // parentDish.textContent="Food Not found"
        console.log("fwefwefewfwe");
      }
      // load.style.display="none"
    }
  }
  // Search bar button event
  searchBtn.addEventListener("click", function (e) {
    e.preventDefault();
  
  
    searchdiv();
    // load1()
    
  });
  
  

