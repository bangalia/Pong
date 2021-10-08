const { Socket } = require("socket.io");

const color_box = document.getElementById('color-box')
const red = document.getElementById('red')
const green = document.getElementById('green')
const blue = document.getElementById('blue')
const current_color = 'red';

document.getElementByID('red').addEventListener('click', function (e) {
    color_box.style.backgroundColor = "red"
    if (red.value) {
        socket.emit("color change", red.value)
    }
})  

document.getElementByID.addEventListener('click', function(){
    color_box.style.backgroundColor = "green"
})

blue.addEventListener('click', function(){
    color_box.style.backgroundColor = "blue"
})

//socket.on('color change', function() )

// $(document).on('click', '.color_box', (e) => {
//     let newColor = e.target.textContent;
//     socket.emit('user changed color', newColor);
// })

socket.on('color change', function (new_color) {
    let item = document.createElement('li')
    item.textContent = `${color_box}: ${new_color}`
})

socket.on('connection', function () {
    let item = document.createElement("li")
    item.textContent = `New site visitor`
    messages.appendChild(item)
    window.scrollTo(0, document.body.scrollHeight)
  })