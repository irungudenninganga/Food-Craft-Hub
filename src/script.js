const mealDbURL='https://themealdb.com/api/json/v1/1/categories.php'
const appendEl = document.getElementById('appendChild')
let mealsEl=document.getElementById('meals')


document.addEventListener('DOMContentLoaded', ()=> {
    fetch(mealDbURL)
    .then(res => res.json())
    .then(data => {
        console.log(data)
       console.log(data['categories'])

       for (arr of data['categories']) {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.width = '18rem';
    
        card.innerHTML = `
            <div class="card-body">
                <h4>${arr.strCategory}</h4> 
                <img src="${arr.strCategoryThumb}" class="card-img-top category-img" alt="food category">  
            </div> 
        `;
       // const img = document.querySelectorAll('img')
        appendEl.appendChild(card);
        //console.log(appendEl)
        console.log(`${arr.strCategory}`)
        
    }
    
    // Add a single event listener to the parent element (appendEl)

    })
    
})
let second = 'https://themealdb.com/api/json/v1/1/random.php'

addSecond()
function addSecond(){
    fetch(second)
      .then(res =>(res.json()))
      .then(data => {
        
        for(meal of data['meals'] ){
            console.log(meal)
            mealsEl.innerHTML+=`
            <img class="img-meal" src=${meal.strMealThumb}>
            <h4 >${meal.strMeal}</h4>
            `
            let imgMeal=document.querySelector('.img-meal')
            imgMeal.addEventListener('click', ()=> {
                // alert('clicked')
                console.log(imgMeal)
                mealsEl.innerHTML+=`
                    <p><b>Category</b> : ${meal.strCategory}</p>
                    <p><b>Area</b> : ${meal.strArea}</p>
                    <p id="para"><b>Recipe</b> : ${meal.strInstructions}</p>
                    
                    
                `

            })
            
            
        }
      })
}

 
