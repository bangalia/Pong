const color_box = document.getElementById('color-box')
const red = document.getElementById('red')
const green = document.getElementById('green')
const blue = document.getElementById('blue')
const current_color = 'red';

red.addEventListener('click', function(){
    color_box.style.backgroundColor = "red"
})

green.addEventListener('click', function(){
    color_box.style.backgroundColor = "green"
})

blue.addEventListener('click', function(){
    color_box.style.backgroundColor = "blue"
})