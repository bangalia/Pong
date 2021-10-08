# Color Box

Click on the colors below the color box to change the color of the box!
(The name Pong comes from the initial idea for the project but we switch last minute)

### Team: 

- Anita Bangali
- Johnny Quinn

## App Description

Color Box is an app in which clicking the names of different colors changes the color of the box. This project was built with Node, Express, and Socketio.

## App Mockup

User clicks button element on frontend -> event listener triggers socket.emit(‘color change’) to backend server -> backend server detects color change then triggers io.emit(‘color change’) to frontend -> frontend detects with socket.on(‘color change’) and executes code to change color of box

## Justification for using Websockets

When one user clicks a color to change the color of the box, it does so for all other users. In order to change the color of the 
box in other users' clients the implementation of Websockets is necessary. 

## How to download  

`git clone https://github.com/bangalia/Pong.git`

## How to run server 

In terminal within the main directory: 
`npm run dev`
