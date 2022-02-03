/* DOM SELECTORS */
const canvas = document.querySelector("#canvas");
/* GAME STATE/CANVAS RENDERING*/
// set up the rendering
const ctx = canvas.getContext("2d");
//set canvas size to be the same as window
canvas.setAttribute("height", getComputedStyle(canvas)["height"]);
canvas.setAttribute("width", getComputedStyle(canvas)["width"]);
// set up the game loop
const gameLoopInterval = setInterval(gameLoop, 60) // run every 60 milliseconds

// console.log(ctx);

/* GAME FUNCTIONS */
// console.log(canvas);

// // set the color property of the context
// ctx.fillStyle = "red";

// // use a context rendering method
// // (x position, y position, width, height)
// ctx.fillRect(10, 10, 100, 100);

// //set line width
// ctx.lineWidth = 30; // always in pixels
// ctx.strokeStyle = "green";
// // (x position, y position, width, height)
// ctx.strokeRect(300, 300, 100, 100);

// // encapsulate square drawing into function
// function drawBox(x, y, width, height, color) {
//     ctx.fillStyle = color;
//     ctx.fillRect(x, y, width, height);
// }

// drawBox(150, 150, 30, 30, 'purple');
// drawBox(200, 150, 45, 60, '#FFFFFF');

// data and functions to update the game element
const hero = {
    x: 10,
    y: 10,
    width: 20,
    height: 20,
    color: 'hotpink',
    render: () => {
        ctx.fillStyle = hero.color
        ctx.fillRect(hero.x, hero.y, hero.width, hero.height)
    }
};
const ogre = {};

function gameLoop() {

}