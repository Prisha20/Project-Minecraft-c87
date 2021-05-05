var canvas = new fabric.Canvas('canvas10');

var block_image_width = 30;
var block_image_height = 30;

var player_x = 10;
var player_y = 10;

var player_objects = "";
var block_image

function player_update()
{
    fabric.Image.fromURL("finalFairy.jpg", function(Img)
    {
        player_object = Img;

        player_object.scaleToWidth(140);
        player_object.scaleToHeight(150);
        player_object.set(
            {
                top: player_y,
                left: player_x,
            });

            canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img)
    {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set(
            {
                top: player_y,
                left: player_x,
            });

            canvas.add(block_image_object);
    });
}

window.addEventListeren("keydown", keyClick)

keyPressed == e.keyCode

function keyClick()
{
    if (e.shift == true && keyPressed == '80')
    {
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height; 
        console.log ("The keys shift and p are pressed together.");
    }

    if (e.shift == true && keyPressed == '80')
    {
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height; 
        console.log ("The keys shift and p are pressed together.");
    }

    if (keyPressed == '70')
    {
        new_image('fairyHead.png');
        console.log ("The f key is pressed.");
    }

    if (keyPressed == '66')
    {
        new_image('fairyBody.png');
        console.log ("The b key is pressed.");
    }

    if (keyPressed == '76')
    {
        new_image('fairyFromKnees.png');
        console.log ("The l key is pressed.");
    }

    if (keyPressed == '82')
    {
        new_image('fairyRightHand.png');
        console.log ("The r key is pressed.");
    }

    if (keyPressed == '72')
    {
        new_image('fairyLeftHand.png');
        console.log ("The h key is pressed.");
    }

    if (keyPressed == '75')
    {
        new_image('fairyTillKnees.png');
        console.log ("The k key is pressed.");
    }

    if (keyPressed == '38')
    {
        up();
        console.log ("The up arrow key is pressed.");
    }

    if (keyPressed == '40')
    {
        down();
        console.log ("The down arrow key is pressed.");
    }

    if (keyPressed == '37')
    {
        left();
        console.log ("The left arrow key is pressed.");
    }

    if (keyPressed == '39')
    {
        right();
        console.log ("The right arrow key is pressed.");
    }
}
