function PrintBoard(tileMap)
{
    for(let x = 0; x < tileMap.height; x++)
    {
        for(let y = 0; y < tileMap.width; y++)
        {
            if(tileMap.mapGrid[x][y][0] == "W")
            {
                var img = document.createElement('img');
                img.src = 'img/Wall.jpg';
                document.getElementById("x"+x + "y" + y).appendChild(img);
            }
            else if(tileMap.mapGrid[x][y][0] == "B")
            {
                var img = document.createElement('img');
                img.src = 'img/Block.jpg';
                document.getElementById("x"+x + "y" + y).appendChild(img);
            }
            else if(tileMap.mapGrid[x][y][0] == "G")
            {
                var img = document.createElement('img');
                img.src = 'img/Goal.jpg';
                document.getElementById("x"+x + "y" + y).appendChild(img);
            }
            else if(tileMap.mapGrid[x][y][0] == "P")
            {
                var img = document.createElement('img');
                img.src = 'img/Player.jpg';
                img.classList.add("MyCssClass");
                document.getElementById("x"+x + "y" + y).appendChild(img);

            }
            else
            {
                var img = document.createElement('img');
                img.src = 'img/Background.jpg';
                document.getElementById("x"+x + "y" + y).appendChild(img);
            }
        }
    }
}
PrintBoard(tileMap01);
 document.addEventListener('keydown', arrowKeys)
function arrowKeys(event)
{ 
    let xChange;
    let yChange;
    switch(event.which)
    {
      case 37:
          xChange=0;
          yChange= -1;
          //move left
          move(xChange,yChange);
          break;
      case 38:
          xChange = -1;
          yChange = 0;
          //move up
          move(xChange,yChange);
          break;
      case 39:
          xChange = 0;
          yChange = 1;
          //move right
          move(xChange,yChange);
          break;
      case 40:
          xChange = 1;
          yChange = 0;
          //move down
          move(xChange,yChange);
          break;
    }
}
let isGoal = false;
function move(xChange, yChange)
{
    event.preventDefault();
    let done = false;
    for(let x = 0; x < tileMap01.height; x++)
    {
        for(let y = 0; y < tileMap01.width; y++)
        {
            if(tileMap01.mapGrid[x][y] == "P" && tileMap01.mapGrid[x+xChange][y+yChange] != "W" && !done)
            
            { 
                console.log("true");
                if(tileMap01.mapGrid[x+xChange][y+yChange] == "G" 
                || tileMap01.mapGrid[x-xChange][y-yChange] == "G"
                || tileMap01.mapGrid[x-xChange][y-yChange] == "BG")
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
                        document.getElementById("x" + x + "y" + y).children[0].replaceWith(imgGoal);    
                        tileMap01.mapGrid[x][y] = ["G"];
                    }
                    else
                    {
                        //Replace element with Background
                        let imgBackground = document.createElement('img');
                        imgBackground.src = 'img/Background.jpg';
                        document.getElementById("x" + x + "y" + y).children[0].replaceWith(imgBackground);
                        tileMap01.mapGrid[x][y] = [" "];
                    }
                    if(tileMap01.mapGrid[x + xChange][y + yChange] == "G")
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
                    document.getElementById("x" + (x + xChange) + "y" + (y + yChange)).children[0].replaceWith(imgPlayer);
                    tileMap01.mapGrid[x+xChange][y+yChange] = ["P"];
                    done = true;
                }

                //Only move Player
                else if(tileMap01.mapGrid[x+xChange][y+yChange] == " "
                && tileMap01.mapGrid[x-1][y] != "G" && tileMap01.mapGrid[x-1][y] != "BG"
                && tileMap01.mapGrid[x+1][y] != "G" && tileMap01.mapGrid[x+1][y] != "BG")
                {
                    //Move Player
                    let imgPlayer = document.createElement('img');
                    imgPlayer.src = 'img/Player.jpg';
                    document.getElementById("x" + (x + xChange) + "y" + (y + yChange)).children[0].replaceWith(imgPlayer);
                    tileMap01.mapGrid[x+xChange][y+yChange] = ["P"];
                    done = true;

                    //Replace element with Background
                    let imgBackground = document.createElement('img');
                    imgBackground.src = 'img/Background.jpg';
                    document.getElementById("x" + x + "y" + y).children[0].replaceWith(imgBackground);
                    tileMap01.mapGrid[x][y] = [" "];                    
                }

                //Move a Block
                else if(tileMap01.mapGrid[x+xChange][y+yChange] == "B" 
                || tileMap01.mapGrid[x+xChange][y+yChange] == "BG"
                && tileMap01.mapGrid[x+xChange+xChange][y+yChange+yChange] != "W"
                && tileMap01.mapGrid[x+xChange+xChange][y+yChange+yChange] != "B")
                {
                    if(tileMap01.mapGrid[x+xChange+xChange][y+yChange+yChange] == "G")
                    {
                        let imgBlock = document.createElement('img');
                        imgBlock.src = 'img/BlockInGoal.jpg';
                        document.getElementById("x" +(x+xChange+xChange) + "y" + (y+yChange+yChange)).children[0].replaceWith(imgBlock);    
                        tileMap01.mapGrid[x+xChange+xChange][y+yChange+yChange] = ["BG"];
                        isGoal = false;

                        if(tileMap01.mapGrid[x+xChange][y+yChange] == "BG" && (yChange == 0))
                        {
                            //Replace element with Goal
                            let imgGoal = document.createElement('img');
                            imgGoal.src = 'img/Goal.jpg';
                            document.getElementById("x"+ x + "y" + y).children[0].replaceWith(imgGoal);    
                            tileMap01.mapGrid[x][y] = ["G"];

                        }
                        else
                        {
                            //Replace element with Background
                            let imgBackground = document.createElement('img');
                            imgBackground.src = 'img/Background.jpg';
                            document.getElementById("x" + x + "y" + y).children[0].replaceWith(imgBackground);
                            tileMap01.mapGrid[x][y] = [" "];
                        }
                        //Move Player
                        let imgPlayer = document.createElement('img');
                        imgPlayer.src = 'img/Player.jpg';
                        document.getElementById("x" +(x + xChange) + "y" + (y + yChange)).children[0].replaceWith(imgPlayer);
                        tileMap01.mapGrid[x+xChange][y+yChange] = ["P"];
                        done = true;
                    }
                    
                    else if(tileMap01.mapGrid[x+xChange][y+yChange] == "BG" 
                    || tileMap01.mapGrid[x+xChange][y+yChange] == "B" 
                    && tileMap01.mapGrid[x-xChange][y-yChange] == "G"  
                    && tileMap01.mapGrid[x-xChange-xChange][y-yChange-yChange] == "W" )
                    {
                        //Move Block-+
                        let imgBlock = document.createElement('img');
                        imgBlock.src = 'img/Block.jpg';
                        document.getElementById("x" + (x+xChange+xChange) + "y" + (y+yChange+yChange)).children[0].replaceWith(imgBlock);    
                        tileMap01.mapGrid[x+xChange+xChange][y+yChange+yChange] = ["B"];
                        isGoal = true;
                        
                        //Move Player
                        let imgPlayer = document.createElement('img');
                        imgPlayer.src = 'img/Player.jpg';
                        document.getElementById("x" +(x + xChange) + "y" + (y + yChange)).children[0].replaceWith(imgPlayer);
                        tileMap01.mapGrid[x+xChange][y+yChange] = ["P"];
                        done = true;

                        //Replace element with Goal
                        let imgGoal = document.createElement('img');
                        imgGoal.src = 'img/Goal.jpg';
                        document.getElementById("x" + x + "y" + y).children[0].replaceWith(imgGoal);    
                        tileMap01.mapGrid[x][y] = ["G"];                        
                    }
                    else
                    {
                        //Move Block
                        let imgBlock = document.createElement('img');
                        imgBlock.src = 'img/Block.jpg';
                        document.getElementById("x" + (x+xChange+xChange) + "y" + (y+yChange+yChange)).children[0].replaceWith(imgBlock);    
                        tileMap01.mapGrid[x+xChange+xChange][y+yChange+yChange] = ["B"];
                        isGoal = false;

                        //Replace element with Background
                        let imgBackground = document.createElement('img');
                        imgBackground.src = 'img/Background.jpg';
                        document.getElementById("x" +x + "y" + y).children[0].replaceWith(imgBackground);
                        tileMap01.mapGrid[x][y] = [" "];

                        //Move Player
                        let imgPlayer = document.createElement('img');
                        imgPlayer.src = 'img/Player.jpg';
                        document.getElementById("x" + (x + xChange) + "y" + (y + yChange)).children[0].replaceWith(imgPlayer);
                        tileMap01.mapGrid[x+xChange][y+yChange] = ["P"];
                        done = true;
                    }

                }

                if((tileMap01.mapGrid[x+xChange][y+yChange] == "B"
                || tileMap01.mapGrid[x+xChange][y+yChange] == "BG")
                && (tileMap01.mapGrid[x+xChange+xChange][y+yChange+yChange] == "W"
                || tileMap01.mapGrid[x+xChange+xChange][y+yChange+yChange] == "B"
                || tileMap01.mapGrid[x+xChange+xChange][y+yChange+yChange] == "BG"))
                {
                    break;
                }
            }
        }
    }
} 



