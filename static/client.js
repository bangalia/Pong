const color_box = document.getElementById('color-box')

const color1 = document.getElementById('color1')
color1.style.color = "red";
const color2 = document.getElementById('color2')
color2.style.color = "green";
const color3 = document.getElementById('color3')
color3.style.color = "blue";
const current_color = 'red';

// document.getElementByID('red').addEventListener('click', function (e) {
//     color_box.style.backgroundColor = "red"
//     if (red.value) {
//         socket.emit("color change", red.value)
//     }
// })  

// document.getElementByID.addEventListener('click', function(){
//     color_box.style.backgroundColor = "green"
// })

// blue.addEventListener('click', function(){
//     color_box.style.backgroundColor = "blue"
// })

// // socket.on('color change', function() )

// $(document).on('click', '.color_box', (e) => {
//     let newColor = e.target.textContent;
//     socket.emit('user changed color', newColor);
// })

// socket.on('color change', function (new_color) {
//     let item = document.createElement('li')
//     item.textContent = `${color_box}: ${new_color}`
// })

// socket.on('connection', function () {
//     let item = document.createElement("li")
//     item.textContent = `New site visitor`
//     messages.appendChild(item)
//     window.scrollTo(0, document.body.scrollHeight)
//   })


// when user clicks buttons, color_box's color changes 

color1.addEventListener('click', function(){
    colorText = color1.innerText
    color_box.style.backgroundColor = colorText;
    current_color = colorText;
})

color2.addEventListener('click', function(){
    colorText = color2.innerText
    color_box.style.backgroundColor = colorText;
    current_color = colorText;
})

color3.addEventListener('click', function(){
    colorText = color3.innerText
    color_box.style.backgroundColor = colorText;
    current_color = colorText;
})

// Pagination code 

const page1 = document.getElementById('page1')
const page2 = document.getElementById('page2')
const page3 = document.getElementById('page3')
const current_page = 1;

page1.addEventListener('click', function(){
    const colors = httpGet('http://localhost:3000/colors1')
    console.log(colors)
    color1.innerText = colors[0];
    color1.style.color = colors[0];
    color2.innerText = colors[1];
    color2.style.color = colors[1];
    color3.innerText = colors[2];
    color3.style.color = colors[2];
})

page2.addEventListener('click', function(){
    const colors = httpGet('http://localhost:3000/colors2')
    console.log(colors)
    color1.innerText = colors[0];
    color1.style.color = colors[0];
    color2.innerText = colors[1];
    color2.style.color = colors[1];
    color3.innerText = colors[2];
    color3.style.color = colors[2];
})

page3.addEventListener('click', function(){
    const colors = httpGet('http://localhost:3000/colors3')
    console.log(colors)
    color1.innerText = colors[0];
    color1.style.color = colors[0];
    color2.innerText = colors[1];
    color2.style.color = colors[1];
    color3.innerText = colors[2];
    color3.style.color = colors[2];
})

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}
