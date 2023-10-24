const mealDbURL='https://themealdb.com/api/json/v1/1/list.php?c=list'
const appendEl = document.getElementById('appendChild')
let arrs={}

document.addEventListener('DOMContentLoaded', ()=> {
    fetch(mealDbURL)
    .then(res => res.json())
    .then(data => {
       console.log(data)
       
    })
})


 
