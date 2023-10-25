//Api ur; to get the category of the meals
const mealDbURL='https://themealdb.com/api/json/v1/1/categories.php'
 // initializing the random url to the Api 
 let second = 'https://themealdb.com/api/json/v1/1/random.php'

const appendEl = document.getElementById('appendChild')
let mealsEl=document.getElementById('meals')

// 1st event listner for dom content loaded
document.addEventListener('DOMContentLoaded', ()=> {
    // making a get request to the Api
    fetch(mealDbURL)
    .then(res => res.json())
    .then(data => {
       // console.log(data)
       //console.log(data['categories'])
        // iterating over the object
       for (arr of data['categories']) {
        // creating a new element to hold the card
        const card = document.createElement('div');
        card.className = 'card';
        card.style.width = '18rem';
        // assigning content to the card
        card.innerHTML = `
            <div class="card-body">
                <h4>${arr.strCategory}</h4> 
                <img src="${arr.strCategoryThumb}" class="card-img-top category-img" alt="food category">  
            </div> 
        `;
       // const img = document.querySelectorAll('img')
        appendEl.appendChild(card);
        //console.log(appendEl)
        //console.log(`${arr.strCategory}`)
        
    }
    
    // Add a single event listener to the parent element (appendEl)

    })
    
})

// calling out our addSecond element which is the random meal
addSecond()

// this function is used to make the second application
function addSecond(){
    // making a get request tp get random meal
    fetch(second)
      .then(res =>(res.json()))
      .then(data => {
        // iterating over an object 
        for(meal of data['meals'] ){
            //console.log(meal)
            // adding context of mealsEl in the DOM
            mealsEl.innerHTML+=`
            <img class="img-meal" src=${meal.strMealThumb}>
            <h4 >${meal.strMeal}</h4>
            `
            // getting the image to be able to manipulate and give functionality to the image
            let imgMeal=document.querySelector('.img-meal')
            // adding eventListner to the image when clicked to display some additional info to the DOM
            imgMeal.addEventListener('click', ()=> {
               
                // adding context of mealsEl in the DOM
                mealsEl.innerHTML+=`
                    <p><b>Category</b> : ${meal.strCategory}</p>
                    <p><b>Area</b> : ${meal.strArea}</p>
                    <p id="para"><b>Recipe</b> : ${meal.strInstructions}</p>`
        })
            
        }
    })
}

 
