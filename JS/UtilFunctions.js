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
                document.getElementById(x + "," + y).appendChild(img);
            }
            else if(tileMap.mapGrid[x][y][0] == "B")
            {
                var img = document.createElement('img');
                img.src = 'img/Block.jpg';
                document.getElementById(x + "," + y).appendChild(img);
            }
            else if(tileMap.mapGrid[x][y][0] == "G")
            {
                var img = document.createElement('img');
                img.src = 'img/Goal.jpg';
                document.getElementById(x + "," + y).appendChild(img);
            }
            else if(tileMap.mapGrid[x][y][0] == "P")
            {
                var img = document.createElement('img');
                img.src = 'img/Player.jpg';
                img.classList.add("MyCssClass");
                document.getElementById(x + "," + y).appendChild(img);

            }
            else
            {
                var img = document.createElement('img');
                img.src = 'img/Background.jpg';
                document.getElementById(x + "," + y).appendChild(img);
            }
        }
    }
}
PrintBoard(tileMap01);
 document.addEventListener('keydown', arrowKeys)
function arrowKeys(e)
{
    var position = document.getElementsByClassName("MyCssClass")[0].id;
    if(e.which==38)
    {
      position +=(0,-1);
      document.getElementsByClassName("MyCssClass")[0].id = position;
    }
    else if(e.which==37)
    {
      position +=(-1,0);
      document.getElementsByClassName("MyCssClass")[0].id = position;
    }
    else if(e.which==39)
    {
      position +=(1,0);
      document.getElementsByClassName("MyCssClass")[0].id = position;
    }
    else if(e.which==40)
    {
      position +=(0,1);
      document.getElementsByClassName("MyCssClass")[0].id = position;
    }
};
