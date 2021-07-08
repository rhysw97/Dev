
//creates variable to allow me to select the canvas
const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

class MultiColouredGrid {
    constructor(){
        this._colour = 0
    }
    
    get colour(){
        return this._colour;
    }

    set colour(value){
        if(value === 'number'){
            this._colour = value;
        } else {
            console.log('Invalid Input')
        }
    }

    drawHexagon(x, y, r) {
       
        const a =  2 * Math.PI / 6;
        
        ctx.beginPath()
       
        ctx.strokeStyle = `hsl(${this._colour}, 100%, 50%)`
        
       
        for(let i = 0; i < 6; i++) {
            ctx.lineTo ( x + r * Math.cos(a * i), y + r * Math.sin(a * i));
        }
        ctx.stroke();
        ctx.closePath();
       
    }
    changeColour() {
        this._colour += 1;
    }


    drawRow(x, y, r) {
        let i = 0;
        while (x <= canvas.width + r){
            const a =  2 * Math.PI / 6;
            this.drawHexagon(x, y, r);
            if (i % 2 === 0) {
                x += r + r * Math.cos(a);
                y += r * Math.sin(a);
            } else {
                x += r + r * Math.cos(a);
                y -= r * Math.sin(a); 
            }
            i++
        }
}

    drawGrid() {
        let hexX = 1;
        let hexY = 1;
        let hexR = 50;

        while(hexY <= canvas.height){
            this.drawRow(hexX, hexY, hexR);
            hexY += 86;
        }
    }



    displayGrid(){
        
        this.drawGrid()
    }

}

const hexGrid = new MultiColouredGrid();




function animate(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //I want the hue of the grid to change over time

  

    hexGrid.colour += 1;
    if (hexGrid.colour > 360) {
        hexGrid.colour = 0
    }
    hexGrid.displayGrid();
   
    requestAnimationFrame(animate, 1000)
    console.log(hexGrid.colour);
}
animate();

//overtime i want the grid to change colour