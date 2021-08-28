
let selectedColor = 'blue'


const painting = document.querySelector('.painting')




painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor;
})


const blue = document.querySelector('#blue')

const red = document.querySelector('#red')
const yellow = document.querySelector('#yellow')
const green = document.querySelector('#green')

blue.addEventListener('click', function(){
    selectedColor = 'blue';
})

red.addEventListener('click', function(){
    selectedColor = 'red';
})

yellow.addEventListener('click', function(){
    selectedColor = 'yellow';
})


green.addEventListener('click', function(){
    selectedColor = 'green';
})



