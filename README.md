# PROJECT-1
welcome to the memory game project!

This memory game was created using HTML, CSS, AND JAVASCRIPT

It is a turn based card matching game.

I started by creating the card array and within the array I created objects. Those objects within the array represent the actual cards. Since the point of the game is to match two identical cards, there are two of each icons.

after the array was created and the objects were stored, I created the grid where I wanted the cards to show up and the spaces for the results to keep score for both player 1 and player 2.

I then created two arrays to store the card choices of both player 1 and player 2.

the first function i created was to actually create the grid. Within this function we are actually placing the images in the grid by first creating the element and then retrieving the images and appending them to the actual grid.

The next function I created was in order to check if the cards chosen matched or not. If you chose matching cards, you would get a point. If you chose cards that didnt match, it would be the next player's turn and would automatically switch to the next player after a half second. If you chose the same image twice you'll get an alert. Cards that are correctly matched get pushed into an array respective of each player.

I created a function to highlight who the current player is by using if else statements.

Lastly I created a flip card function that would would reveal the image beneath when a tile was clicked.

future improvements I can make for this project would be having matched card spaces turn invisible and reveal the background rather a blank white image because the white color seems a little off putting in comparison to the rest of the design. Another improvement I can make is to randomize where the images spawn within the grid in order to increase the overall difficulty of the game. Also, rather than having the player continue their turn if they match cards correctly, I can make it so that regardless of wether there is a match or not, the player will still switch from player 1 to player 2 and vice versa. Also I need to add the source that I got my images from. 


temmz4.github.io/PROJECT-1
