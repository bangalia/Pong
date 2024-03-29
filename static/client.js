
//Connect to the socket.io server
const socket = io().connect();

const color_box = document.getElementById('color-box')

const color1 = document.getElementById('color1')
color1.style.color = "red";
const color2 = document.getElementById('color2')
color2.style.color = "green";
const color3 = document.getElementById('color3')
color3.style.color = "blue";
const current_color = 'red';

socket.on('color change', colorText => {
    color_box.style.backgroundColor = colorText;
    console.log('Other user change the color box to: ' + colorText)
})


// when user clicks buttons, color_box's color changes 

color1.addEventListener('click', function(){
    colorText = color1.innerText
    color_box.style.backgroundColor = colorText;
    socket.emit('color change', colorText)
    // io.emit('color change', colorText)
})

color2.addEventListener('click', function(){
    colorText = color2.innerText
    color_box.style.backgroundColor = colorText;
    socket.emit('color change', colorText)
    // io.emit('color change', colorText)
})

color3.addEventListener('click', function(){
    colorText = color3.innerText
    color_box.style.backgroundColor = colorText;
    socket.emit('color change', colorText)
    // io.emit('color change', colorText)
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

function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}




