const gamestate_start = 0
const gamestate_ingame = 1
const gamestate_gameover = 2

const ingamestate_start = 0
const ingamestate_roll = 1
const ingamestate_end = 2

let boardPositionSize= 50;
let pawnPositions = []; let boardPositions=[];
let playerAmountButtons = [];

let canvas = document.getElementById("canvas")
let g = canvas.getContext("2d")

let uiWindow = createRect(600, 200, 300, 300);

let gameState = gamestate_start
let ingamegameState = ingamestate_start

function createRect(x,y,w,h)
{
    let rectangle = {
        x:x,
        y:y,
        w:w,
        h:h
    };
    return rectangle
}

function clearCanvas(){
    g.fillStyle = "lightlategray";
    g.fillRect(0,0, canvas.width, canvas.height);
}

function draw()
{
    clearCanvas();
    for(let i =0 ; i<boardPositions.length;i++)
    {
        let pos = boardPositions[i];

        g.fillStyle  = "#004400";
        //we gebruiken hier de x en y van het rectangle object
        // vul bij de ??? ook de h & w in, net als bij de x en y gedaan is!
        g.fillRect(pos.x,pos.y,pos.w,pos.h);
        g.fillStyle  = "#FFFFFF";
        g.fillText((i+1)+"",pos.x,pos.y+20);
    }
}

function createBoardPositions()
{
    let x= 0;
    let y = canvas.height-boardPositionSize;
    let path = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1] ;

    for(let i =0 ; i<path.length;i++)
    {

        if(path[i] == 1)//gaan naar rechts
        {
            //bedenk hier wat je met de x moet doen
            x += boardPositionSize
        }
        else if(path[i] == 3)//gaan naar links
        {
            // bedenk hier wat je met de x moet doen
            x -= boardPositionSize
        }
        else if(path[i] == 0)//gaan hier naar boven
        {
            //bedenk hier wat je met de y moet doen
            y -= boardPositionSize
        }
        boardPositions.push(createRect(x,y,boardPositionSize,boardPositionSize));
    }
}

function drawGameStart(){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
}

function initgame(){
    
    for (let index = 0; index < 4; index++) {
        let button = createRect(uiWindow.x+5 +(index*50),uiWindow.y+50,50,50);
        playerAmountButtons.push(button)
        button.playerAmount=i+1;
    }
    createBoardPositions()
}


function drawGameStart(){
    for(let i=0; i<playerAmountButtons.length; i++)
    {
        let pos = playerAmountButtons[i];
        g.fillstyle = "#004400";
        g.fillRect(pos.x, pos.y, pos.w, pos.h);
        g.fillstyle = "#FFFFFF";
        g.fillText((i+1)+"",pos.x, pos.y+20);
    }
}

function drawIngame()
{
    for(let i=0; i<boardPositions.length; i++)
    {
        let pos = boardPositions[i];
        g.fillstyle = "#004400";
        g.fillRect(pos.x, pos.y, pos.w, pos.h);
        g.fillstyle = "#FFFFFF";
        g.fillText((i+1)+"",pos.x, pos.y+20);
    }
}

function drawGameOver(){
    clearCanvas()
    drawGameStart()
    drawIngame()
}

initgame()
draw()