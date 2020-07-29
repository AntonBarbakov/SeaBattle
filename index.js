let StartPosition = 0;
const BACKGROUND_COLOR = "white";
const FIELD_SIZE = 25;
const ROWS_NUMBER = 10;
const COLUMS_NUMBER = 10;
const FIELD_COLOR = "blue";
const FIELD_COLOR_HIT = "white";
const SHIP_COLOR = "orange";
const SHIP_COLOR_PC = "blue";
const SHIP_COLOR_HIT = "black";
const GENERATION_TIME = 50;
const ROWS = 10;
const Columns = 10;
let colorTime = 1;
let shipHit = 0;
let compHit = 0;
let yourTurn = true;
let compHitArray = [[],[],[],[],[],[],[],[],[],[]];


/* Create Player Field */
let map = [];
/* Create Computer Field */
let compMap = [];


for (let y = 0; y < ROWS; y++) {
    const row = []

    for (let x = 0; x < Columns; x++) {
        row.push(0);
    }

    map.push(row);
}


for (let y = 0; y < ROWS; y++) {
    const row = []

    for (let x = 0; x < Columns; x++) {
        row.push(0);
    }

    compMap.push(row);
}

/*Player Field settings */
const PFcanvas = document.getElementById('PlayerField');
const PFcontext = PFcanvas.getContext('2d');
PFcanvas.width = FIELD_SIZE * COLUMS_NUMBER;
PFcanvas.height = FIELD_SIZE * ROWS_NUMBER;

/*Comp Field settings */
const CFcanvas = document.getElementById('CompField');
const CFcontext = CFcanvas.getContext('2d');
CFcanvas.width = FIELD_SIZE * COLUMS_NUMBER;
CFcanvas.height = FIELD_SIZE * ROWS_NUMBER;

precondition();

function precondition() {
    clearCanvas();
    getColorField();
    setCompShip();
}
function start() {
    if (StartPosition === 3) {
        document.getElementById("exit").style.visibility = "visible";
        document.getElementById("CompField").style.visibility = "visible";

        clearCanvas();

        getColorField();
        getCompColorField();
        requestAnimationFrame(tick);
    }
    else {
        alert("You can`t start before all ships are not prepeare to battle")
    }
}

function tick(timespamp) {

    if (timespamp > GENERATION_TIME * colorTime) {
        getColorField();
        getCompColorField()
    }


    requestAnimationFrame(tick);
}

function clearCanvas() {
    PFcontext.fillStyle = BACKGROUND_COLOR;
    PFcontext.beginPath();
    PFcontext.rect(0, 0, PFcanvas.width, PFcanvas.height)
    PFcontext.fill()

    CFcontext.fillStyle = BACKGROUND_COLOR;
    CFcontext.beginPath();
    CFcontext.rect(0, 0, CFcanvas.width, CFcanvas.height)
    CFcontext.fill()
}


function getColorField() {
    for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < Columns; x++) {
            if (getField(x, y) === 0) {
                PFcontext.fillStyle = FIELD_COLOR;
                PFcontext.lineWidth = 1;
                PFcontext.strokeStyle = "black";
                PFcontext.stroke();
                PFcontext.beginPath();
                PFcontext.rect(x * FIELD_SIZE, y * FIELD_SIZE, FIELD_SIZE, FIELD_SIZE)
                PFcontext.fill()
            } else if (getField(x, y) === 1) {
                PFcontext.fillStyle = FIELD_COLOR_HIT;
                PFcontext.lineWidth = 1;
                PFcontext.strokeStyle = "black";
                PFcontext.stroke();
                PFcontext.beginPath();
                PFcontext.rect(x * FIELD_SIZE, y * FIELD_SIZE, FIELD_SIZE, FIELD_SIZE)
                PFcontext.fill()
            } else if (getField(x, y) === true) {
                PFcontext.fillStyle = SHIP_COLOR;
                PFcontext.lineWidth = 1;
                PFcontext.strokeStyle = "black";
                PFcontext.stroke();
                PFcontext.beginPath();
                PFcontext.rect(x * FIELD_SIZE, y * FIELD_SIZE, FIELD_SIZE, FIELD_SIZE)
                PFcontext.fill()
            } else {
                PFcontext.fillStyle = SHIP_COLOR_HIT;
                PFcontext.lineWidth = 1;
                PFcontext.strokeStyle = "black";
                PFcontext.stroke();
                PFcontext.beginPath();
                PFcontext.rect(x * FIELD_SIZE, y * FIELD_SIZE, FIELD_SIZE, FIELD_SIZE)
                PFcontext.fill()
            }
        }
    }
    colorTime++;
}


function getCompColorField() {
    for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < Columns; x++) {
            if (getFieldCP(x, y) === 0) {
                CFcontext.fillStyle = FIELD_COLOR;
                CFcontext.lineWidth = 1;
                CFcontext.strokeStyle = "black";
                CFcontext.stroke();
                CFcontext.beginPath();
                CFcontext.rect(x * FIELD_SIZE, y * FIELD_SIZE, FIELD_SIZE, FIELD_SIZE)
                CFcontext.fill()
            } else if (getFieldCP(x, y) === 1) {
                CFcontext.fillStyle = FIELD_COLOR_HIT;
                CFcontext.lineWidth = 1;
                CFcontext.strokeStyle = "black";
                CFcontext.stroke();
                CFcontext.beginPath();
                CFcontext.rect(x * FIELD_SIZE, y * FIELD_SIZE, FIELD_SIZE, FIELD_SIZE)
                CFcontext.fill()
            } else if (getFieldCP(x, y) === true) {
                CFcontext.fillStyle = SHIP_COLOR_PC;
                CFcontext.lineWidth = 1;
                CFcontext.strokeStyle = "black";
                CFcontext.stroke();
                CFcontext.beginPath();
                CFcontext.rect(x * FIELD_SIZE, y * FIELD_SIZE, FIELD_SIZE, FIELD_SIZE)
                CFcontext.fill()
            } else {
                CFcontext.fillStyle = SHIP_COLOR_HIT;
                CFcontext.lineWidth = 1;
                CFcontext.strokeStyle = "black";
                CFcontext.stroke();
                CFcontext.beginPath();
                CFcontext.rect(x * FIELD_SIZE, y * FIELD_SIZE, FIELD_SIZE, FIELD_SIZE)
                CFcontext.fill()
            }
        }
    }
    colorTime++;
}

function getMousePosition() {
    if (yourTurn == true) {
        var x = Math.floor(event.offsetX / FIELD_SIZE);
        var y = Math.floor(event.offsetY / FIELD_SIZE);

        if (getFieldCP(x, y) === 0) {
            setFieldCP(x, y, 1);
        } else if (getFieldCP(x, y) === true) {
            setFieldCP(x, y, false);
            shipHit++
        }

        if (shipHit == 6) {
            alert("You Won!!!!");
        }
        yourTurn = false;
    }
    setTimeout(() => {
        var x = Math.floor(Math.random() * Math.floor(10));
        var y = Math.floor(Math.random() * Math.floor(10));
        

        while(compHitArray[y].includes(x)){
            y = Math.floor(Math.random() * Math.floor(10));
            x = Math.floor(Math.random() * Math.floor(10));
        }


        if (getField(x, y) === 0) {
            setField(x, y, 1);
        } else if (getField(x, y) === true) {
            setField(x, y, false);
            compHit++
        }
        compHitArray[y].push(x);
        console.log(compHitArray);

        if (compHit == 6) {
            alert("You Lose!!!!");
        }
        yourTurn = true;
    }, 1000)

}


function getField(x, y) {
    if (x < 0 || x >= Columns || y < 0 || y >= ROWS) {
        return false;
    }

    return map[y][x];
}

function setField(x, y, value) {
    if (x < 0 || x >= Columns || y < 0 || y >= ROWS) {
        return value;
    }

    return map[y][x] = value
}

function getFieldCP(x, y) {
    if (x < 0 || x >= Columns || y < 0 || y >= ROWS) {
        return false;
    }

    return compMap[y][x];
}

function setFieldCP(x, y, value) {
    if (x < 0 || x >= Columns || y < 0 || y >= ROWS) {
        return value;
    }

    return compMap[y][x] = value
}

