class zombie {
    constructor(path, x, y) 
  {
    this.path = path;
    this.x = x;
    this.y = y;
}

getX()
{
    return this.x;
}

getY()
{
    return this.y;
}

idle()
{
  image(zombieObjects[i], x, y, 100, 200);

  i += 1;
  if (i >= zombieObjects.length) {
      i = 0;
  }
}
 movement()
 {
  if(keyIsPressed)
    {
        if(key == "w")
        {
            y-=10
        }
        else if(key == "a" )
        {
            x-=10
        }
        else if(key == "s")
        {
            y+=10
        }
        else if (key == "d")
        {
            x+=10
        }
        else
        {
            image(boyZombie[i], zombieObjects[i].getX(), zombieObjects[i].getY());
        }
 }
}
run()
{

    j += 1;

    if (j >= zombieRunArray.length) 
    {
        j = 0;
    }
}
}

class iceCream
{
constructor()

}
