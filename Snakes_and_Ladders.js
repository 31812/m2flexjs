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

let gameState = gamestate_start;
let ingamegameState = ingamestate_start;

let images = {};

function imagesLoaded(){
    initgame()
    draw()
}

function loadImages()
{
    let sources = [
        "img/dice1.png", "img/dice2.png", "img/dice3.png", "img/dice4.png", "img/dice5.png", "img/dice6.png",
        "img/pawn0.png", "img/pawn1.png", "img/pawn2.png", "img/pawn3.png", 
        "img/snakes.png", 
        "img/trophy.png", 
        "img/window.png", 
    ];
    
    let scope = this;

    let loaded = 0;
    for (let i = 0; i < sources.length; i++)
    {
        let img = new Image();


        img.onload = function ()
        {
            loaded++;
            if (loaded == sources.length)
            {
                imagesLoaded();
            }
        };
        img.src = sources[i];

        images[ sources[i].replace("img/","")] = img;
    }
}


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

function initgame(){
    createBoardPositions()

    for (let index = 0; index < 4; index++) {
        let button = createRect(uiWindow.x+5 +(index*50),uiWindow.y+50,50,50);
        playerAmountButtons.push(button)
        button.playerAmount=index+1;
    }
}


function drawGameStart() {
    for (let i = 0; i < playerAmountButtons.length; i++) {
        let button = playerAmountButtons[i];
        g.fillStyle = "#004400";
        g.fillRect(button.x, button.y, button.w, button.h);
        g.fillStyle = "#FFFFFF";
        g.fillText(button.playerAmount + "", button.x, button.y + 20);
        g.drawImage(images["pawn"+i+".png"],button.x,button.y,button.w,button.h)
    }
}

function drawIngame() {
    for (let i = 0; i < boardPositions.length; i++) {
        let pos = boardPositions[i];
        g.fillStyle = "#004400";
        g.fillRect(pos.x, pos.y, pos.w, pos.h);
        g.fillStyle = "#FFFFFF";
        g.fillText((i + 1) + "", pos.x, pos.y + 20);
    }
}

function draw(){
    clearCanvas();
    
    if(gameState = gamestate_ingame){
    drawGameStart();
    }
    
    if(gameState = gamestate_start){
    drawIngame()
    }
}

loadImages()