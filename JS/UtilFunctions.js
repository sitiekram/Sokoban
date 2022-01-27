function drawMap(tileMap)
{
    // debugger;
    for(let x = 0; x < tileMap.height; x++)
    {
        for(let y = 0; y < tileMap.width; y++)
        {
            if(tileMap.mapGrid[x][y] == "W")
            {
                let img = document.createElement('img');
                img.src = 'img/Wall.jpg';
                document.getElementById(x + "," + y).appendChild(img);
            }
            else if(tileMap.mapGrid[x][y] == "B")
            {
                let = document.createElement('img');
                let.src = 'img/Block.jpg';
                document.getElementById(x + "," + y).appendChild(let);
            }
            else if(tileMap.mapGrid[x][y] == "G")
            {
                let = document.createElement('img');
                let.src = 'img/Goal.jpg';
                document.getElementById(x + "," + y).appendChild(let);
            }
            else if(tileMap.mapGrid[x][y] == "P")
            {
                let = document.createElement('img');
                let.src = 'img/Player.jpg';
                document.getElementById(x + "," + y).appendChild(let);
            }
            else
            {
                let = document.createElement('img');
                let.src = 'img/Background.jpg';
                document.getElementById(x + "," + y).appendChild(let);
            }
            console.clear;
            console.log("x:" + x + " y:" + y);
            console.log(tileMap.mapGrid[x][y]);
        }
    }
}
drawMap(tileMap01);

let isGoal = false;
document.onkeydown = function arrowKeys(e) {
    let xComp;
    let yComp;
    switch (e.keyCode) {
        //move left
        case 37:
            xComp = 0;
            yComp = -1;
            move(xComp, yComp)
            break;
        //move up
        case 38:
            xComp = -1;
            yComp = 0;
            move(xComp, yComp)
            break;
        //move right
        case 39:
            xComp = 0;
            yComp = 1;
            move(xComp, yComp)
            break;
        //move down
        case 40:
            xComp = 1;
            yComp = 0;
            move(xComp, yComp)
            break;
    }
};

function move(xComp, yComp)
{
    event.preventDefault();
    let once = true;
    for(let x = 0; x < tileMap01.height; x++)
    {
        for(let y = 0; y < tileMap01.width; y++)
        {
            if(tileMap01.mapGrid[x][y] == "P" && tileMap01.mapGrid[x+xComp][y+yComp] != "W" && once)
            {
                // debugger;
                if((tileMap01.mapGrid[x+xComp][y+yComp] == "B"
                || tileMap01.mapGrid[x+xComp][y+yComp] == "BG")
                && (tileMap01.mapGrid[x+xComp+xComp][y+yComp+yComp] == "W"
                || tileMap01.mapGrid[x+xComp+xComp][y+yComp+yComp] == "B"
                || tileMap01.mapGrid[x+xComp+xComp][y+yComp+yComp] == "BG"))
                {
                    break;
                }
                
                //Move a Block
                if(tileMap01.mapGrid[x+xComp][y+yComp] == "B" 
                || tileMap01.mapGrid[x+xComp][y+yComp] == "BG"
                && tileMap01.mapGrid[x+xComp+xComp][y+yComp+yComp] != "W"
                && tileMap01.mapGrid[x+xComp+xComp][y+yComp+yComp] != "B")
                {
                    if(tileMap01.mapGrid[x+xComp+xComp][y+yComp+yComp] == "G")
                    {
                        //Move Block and change to BlockInGoal color
                        let imgBlock = document.createElement('img');
                        imgBlock.src = 'img/BlockInGoal.jpg';
                        document.getElementById((x+xComp+xComp) + "," + (y+yComp+yComp)).children[0].replaceWith(imgBlock);    
                        tileMap01.mapGrid[x+xComp+xComp][y+yComp+yComp] = ["BG"];
                        isGoal = false;

                        if(tileMap01.mapGrid[x+xComp][y+yComp] == "BG" && (yComp == 0))
                        {
                            //Replace element with Goal
                            let imgGoal = document.createElement('img');
                            imgGoal.src = 'img/Goal.jpg';
                            document.getElementById(x + "," + y).children[0].replaceWith(imgGoal);    
                            tileMap01.mapGrid[x][y] = ["G"];

                        }
                        else
                        {
                            //Replace element with Background
                            let imgBackground = document.createElement('img');
                            imgBackground.src = 'img/Background.jpg';
                            document.getElementById(x + "," + y).children[0].replaceWith(imgBackground);
                            tileMap01.mapGrid[x][y] = [" "];
                        }
                        
                        //Move Player
                        let imgPlayer = document.createElement('img');
                        imgPlayer.src = 'img/Player.jpg';
                        document.getElementById((x + xComp) + "," + (y + yComp)).children[0].replaceWith(imgPlayer);
                        tileMap01.mapGrid[x+xComp][y+yComp] = ["P"];
                        once = false;
                    }
                    else if(tileMap01.mapGrid[x+xComp][y+yComp] == "BG" 
                    || tileMap01.mapGrid[x+xComp][y+yComp] == "B" 
                    && tileMap01.mapGrid[x-xComp][y-yComp] == "G"  
                    && tileMap01.mapGrid[x-xComp-xComp][y-yComp-yComp] == "W" )
                    {
                        //Move Block
                        let imgBlock = document.createElement('img');
                        imgBlock.src = 'img/Block.jpg';
                        document.getElementById((x+xComp+xComp) + "," + (y+yComp+yComp)).children[0].replaceWith(imgBlock);    
                        tileMap01.mapGrid[x+xComp+xComp][y+yComp+yComp] = ["B"];
                        isGoal = true;
                        
                        //Move Player
                        let imgPlayer = document.createElement('img');
                        imgPlayer.src = 'img/Player.jpg';
                        document.getElementById((x + xComp) + "," + (y + yComp)).children[0].replaceWith(imgPlayer);
                        tileMap01.mapGrid[x+xComp][y+yComp] = ["P"];
                        once = false;

                        //Replace element with Goal
                        let imgGoal = document.createElement('img');
                        imgGoal.src = 'img/Goal.jpg';
                        document.getElementById(x + "," + y).children[0].replaceWith(imgGoal);    
                        tileMap01.mapGrid[x][y] = ["G"];                        
                    }
                    else
                    {
                        //Move Block
                        let imgBlock = document.createElement('img');
                        imgBlock.src = 'img/Block.jpg';
                        document.getElementById((x+xComp+xComp) + "," + (y+yComp+yComp)).children[0].replaceWith(imgBlock);    
                        tileMap01.mapGrid[x+xComp+xComp][y+yComp+yComp] = ["B"];
                        isGoal = false;

                        //Replace element with Background
                        let imgBackground = document.createElement('img');
                        imgBackground.src = 'img/Background.jpg';
                        document.getElementById(x + "," + y).children[0].replaceWith(imgBackground);
                        tileMap01.mapGrid[x][y] = [" "];

                        //Move Player
                        let imgPlayer = document.createElement('img');
                        imgPlayer.src = 'img/Player.jpg';
                        document.getElementById((x + xComp) + "," + (y + yComp)).children[0].replaceWith(imgPlayer);
                        tileMap01.mapGrid[x+xComp][y+yComp] = ["P"];
                        once = false;
                    }

                }

                //Only move Player
                else if(tileMap01.mapGrid[x+xComp][y+yComp] == " "
                && tileMap01.mapGrid[x-1][y] != "G" && tileMap01.mapGrid[x-1][y] != "BG"
                && tileMap01.mapGrid[x+1][y] != "G" && tileMap01.mapGrid[x+1][y] != "BG")
                {
                    //Move Player
                    let imgPlayer = document.createElement('img');
                    imgPlayer.src = 'img/Player.jpg';
                    document.getElementById((x + xComp) + "," + (y + yComp)).children[0].replaceWith(imgPlayer);
                    tileMap01.mapGrid[x+xComp][y+yComp] = ["P"];
                    once = false;

                    //Replace element with Background
                    let imgBackground = document.createElement('img');
                    imgBackground.src = 'img/Background.jpg';
                    document.getElementById(x + "," + y).children[0].replaceWith(imgBackground);
                    tileMap01.mapGrid[x][y] = [" "];                    
                }
                else if(tileMap01.mapGrid[x+xComp][y+yComp] == "G" 
                || tileMap01.mapGrid[x-xComp][y-yComp] == "G"
                || tileMap01.mapGrid[x-xComp][y-yComp] == "BG")
                {
                    if(tileMap01.mapGrid[x][y+1] == "B")
                    {
                        isGoal = false;
                    }
                    if(isGoal 
                        || tileMap01.mapGrid[x][y+1] == "BG"
                        || tileMap01.mapGrid[x][y+1] == "W"
                        || tileMap01.mapGrid[x][y-1] != " ")
                    {
                        //Replace element with Goal
                        let imgGoal = document.createElement('img');
                        imgGoal.src = 'img/Goal.jpg';
                        document.getElementById(x + "," + y).children[0].replaceWith(imgGoal);    
                        tileMap01.mapGrid[x][y] = ["G"];
                    }
                    else
                    {
                        //Replace element with Background
                        let imgBackground = document.createElement('img');
                        imgBackground.src = 'img/Background.jpg';
                        document.getElementById(x + "," + y).children[0].replaceWith(imgBackground);
                        tileMap01.mapGrid[x][y] = [" "];
                    }
                    if(tileMap01.mapGrid[x + xComp][y + yComp] == "G")
                    {
                        isGoal = true;
                    }
                    else
                    {
                        isGoal = false;
                    }
                    //Move Player
                    let imgPlayer = document.createElement('img');
                    imgPlayer.src = 'img/Player.jpg';
                    document.getElementById((x + xComp) + "," + (y + yComp)).children[0].replaceWith(imgPlayer);
                    tileMap01.mapGrid[x+xComp][y+yComp] = ["P"];
                    once = false;
                }
            }
        }
    }
}
