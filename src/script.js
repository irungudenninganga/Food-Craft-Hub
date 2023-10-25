const mealDbURL='https://themealdb.com/api/json/v1/1/categories.php'
const appendEl = document.getElementById('appendChild')
let mealsEl=document.getElementById('meals')
let arrs={}

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
    
        appendEl.appendChild(card);
    }
    
    // Add a single event listener to the parent element (appendEl)
    appendEl.addEventListener('click', function (event) {
        if (event.target.classList.contains('category-img')) {
            addSecond()
            //alert('clicked')
        }
    });
 
    })
    
})
let second = 'https://themealdb.com/api/json/v1/1/filter.php?i=beef'


function addSecond(){
    fetch(second)
      .then(res =>(res.json()))
      .then(data => {
        console.log(data['meals'])

        for(meal of data['meals'] ){
            console.log(meal)
            mealsEl.innerHTML+=`
                <img src=${meal.strMealThumb}>
                <h4>${meal.strMeal}</h4>
            `

        }
      })
}

 
