const mealDbURL='https://themealdb.com/api/json/v1/1/categories.php'
const appendEl = document.getElementById('appendChild')
let arrs={}

document.addEventListener('DOMContentLoaded', ()=> {
    fetch(mealDbURL)
    .then(res => res.json())
    .then(data => {
        console.log(data)
       console.log(data['categories'])

        
       for(arr of data['categories'] ){
       console.log(arr)
       appendEl.innerHTML+=`
            <img src=${arr.strCategoryThumb}>
            <h3 >${arr.strCategory}</h3>
            <p > ${arr.strCategoryDescription}</p>

       `

        
        

        }
    })
})


 
