/* DOM SELECTORS */
const canvas = document.querySelector('#canvas');
/* GAME STATE/CANVAS RENDERING*/
// set up the rendering
const ctx = canvas.getContext('2d');
//set canvas size to be the same as window
canvas.setAttribute('height', getComputedStyle(canvas)["height"]);
canvas.setAttribute('width', getComputedStyle(canvas)["width"]);
// console.log(ctx);

/* GAME FUNCTIONS */
// console.log(canvas);

// set the color property of the context
ctx.fillStyle = 'red';
//set line width
// ctx.lineWidth = 10 // always in pixels

// use a context rendering method
// (x position, y position, width, height)
ctx.fillRect(10, 10, 100, 100)