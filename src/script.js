//Api ur; to get the category of the meals
const mealDbURL='https://themealdb.com/api/json/v1/1/categories.php'
 // initializing the random url to the Api 
 let randomMeal = 'https://themealdb.com/api/json/v1/1/random.php'
const form=document.getElementById('form')
let inputEl=document.getElementById('input')
const appendEl = document.getElementById('appendChild')
let mealsEl=document.getElementById('meals')
const comment=document.getElementById('form-comment')

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
    
    

    })
    searchBar()
    addSecond()
    addComment()
    
})

// calling out our addSecond element which is the random meal


// this function is used to make the second application
function addSecond(){
    // making a get request tp get random meal
    fetch(randomMeal)
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
// this function is used to make the search request
 function searchBar(){
    
    // adding a submit event listner to the form that holds the search section
    form.addEventListener('submit', (e)=> {
        // this e.preventDefault() is used to remove the defult behavoiur of the form
        e.preventDefault()
        
        console.log(inputEl.value)
    let search=`https://themealdb.com/api/json/v1/1/search.php?s=${inputEl.value}`
    fetch(search)
    .then(res => res.json())
    .then(result => {
        console.log(result['meals'][0])
        mealsEl.innerHTML=`
            <img src=${result['meals'][0]['strMealThumb']}>
            <h4> ${result['meals'][0]['strMeal']}</h4>
            <p><b>Category</b> : ${result['meals'][0]['strCategory']}</p>
                    <p><b>Area</b> : ${result['meals'][0]['strArea']}</p>
                    <p id="para"><b>Recipe</b> : ${result['meals'][0]['strInstructions']}</p>
                    
        `
        // console.log(meal.strCategory)

    })
    inputEl.value=''
    })
    // return "Try another food"
 }

 // this addComment() is used to add the comment section on the DOM
function addComment(){
    const commentInput=document.getElementById('comment')
    const commentAdded= document.getElementById('comment-added')
    // event listner for the submit comment
    comment.addEventListener('submit', (e)=> {
         // this e.preventDefault() is used to remove the defult behavoiur of the form
        e.preventDefault()
        //console.log(commentInput)
        commentAdded.innerHTML+=`
            <li>${commentInput.value}</li> <br>
        `

    })
}