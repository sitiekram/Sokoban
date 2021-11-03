function PrintBoard(tileMap)
{
    var tb1Board= document.getElementById('tb1Board');
    var strHTML='';
    for(let x=0; x<tileMap.width;x++)
    {
        strHTML+="<tr>";
        for(let y = 0; y<tileMap.height;y++)
        {
            strHTML+="<td>";
            if(tileMap.mapGrid[x,y]=="W")
              {
                  strHTML +="<img src='./img/brick-wall.png' width='50' height='50'>";
              }
            else if(tileMap.mapGrid[x,y]==" ")
              {
                tb1Board.classList.add(Space);
              }
            else if(tileMap.mapGrid[x,y]=="B")
            {
                strHTML +="<img src='./img/box.png' width='50' height='50'>";
            }
            else if(tileMap.mapGrid[x,y]=="G")
            {
                strHTML +="<div class='Goal'><span class='Circle'></span></div>";
            }
            strHTML+="</td>";   
        }
        strHTML+="</tr>";
    }
    tb1Board.innerHTML=strHTML;
}
PrintBoard(tileMap01);