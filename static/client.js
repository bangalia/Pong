// var UP    = 'UP',
//     LEFT  = 'LEFT',
//     DOWN  = 'DOWN',
//     RIGHT = 'RIGHT';

// socket.connect();

// socket.on('message', function(msg) {
//     if(msg == 'UP') {
//         player.moveUP();
//     } else if(msg == 'LEFT') {
//         player.moveLEFT();
//     } else if(msg == 'DOWN') {
//         player.moveDOWN();
//     } else if(msg == 'RIGHT') {
//         player.moveRIGHT();
//     } else {

//     }
// });

const player1_rect = document.getElementById("player1-rect")
const player2_rect = document.getElementById("player2-rect")
const game_box = document.getElementById("game-box")

document.addEventListener('keydown', changeRectY);

// const player1_rect_pos; 
// const player2_rect_pos; 
// const ball_pos;
// const ball_direct;

function changeRectY(e) {
    e = e || window.event;
    console.log(e.keyCode)

    const player1_rect_bot = getComputedStyle(player1_rect)
    
    if (e.keyCode == '38') {
        //up arrow
        player1_rect.style.bottom = player1_rect_bot + 10
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
}
