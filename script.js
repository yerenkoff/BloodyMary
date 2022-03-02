let c = document.getElementById("c");
let ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
let drops = [];
let size = 10;
console.log(document.body.clientHeight);

// let dropsInterval;
function makeDrop(e) {
    console.log(e.pageY);
    // let x = e.offsetX;
    // let y = e.offsetY;
    // setTimeout(() => {
        // c.style.pointerEvents = "none";
        if (Math.random() > 0.94) {
            drops.push({x: e.clientX, y: e.clientY})
            
        }
        // c.style.pointerEvents = "auto";
        
    // }, 1000);
    // let dropsInterval = setInterval(() => {
    //     console.log(e);
    //     ctx.clearRect(0, 0, c.width, c.height);
    //     ctx.beginPath();

    //     ctx.arc(x, y, 40, 0, 2 * Math.PI);
    //     ctx.fillStyle = "red";
    //     ctx.fill();
    //     // ctx.closePath()
    //     ctx.beginPath();
    //     ctx.moveTo(x + 39, y - 10);
    //     ctx.lineTo(x, y - 100);
    //     ctx.lineTo(x - 39, y - 10);
    //     // ctx.lineTo(0, y+0);
    //     // ctx.rotate(Math.PI/180);
    //     // ctx.rect(100, y, 200, 200)
    //     ctx.fillStyle = "red";
    //     ctx.fill();
    //     // ctx.closePath()
    //     y += 10;
    //     if (y > 300) {
    //         clearInterval(dropsInterval);
    //         ctx.clearRect(0, 0, c.width, c.height);

    //     }
    // }, 1000);
}

let dropsInterval = setInterval(() => {
    ctx.clearRect(0, 0, c.width, c.height);
    for (let i = 0; i < drops.length; i++) {
        ctx.beginPath();
        let x = drops[i].x;
        let y = drops[i].y;
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fillStyle = "#961d1d";
        ctx.fill();
        // ctx.closePath()
        ctx.beginPath();
        ctx.moveTo(x + size, y - size/4);
        ctx.lineTo(x, y - 3*size);
        ctx.lineTo(x - size, y - size/4);
        // ctx.lineTo(0, y+0);
        // ctx.rotate(Math.PI/180);
        // ctx.rect(100, y, 200, 200)
        ctx.fillStyle = "#961d1d";
        ctx.fill();
        drops[i].y += 10;
        if (drops[i].y > 2000) {
            drops.splice(i,1);
        }
    }
    // console.log(drops);
    
    // ctx.closePath()
    // y += 10;
    // if (y > 300) {
    //     clearInterval(dropsInterval);
    //     ctx.clearRect(0, 0, c.width, c.height);

    // }
}, 50);

// c.onclick = (e) => {
//     makeDrop(e);
// }