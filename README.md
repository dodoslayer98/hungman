# **Countryman, formerly called Hungman**

##### A country-themed version of hangman for one player is a word-guessing game where the player must guess the name of a country by guessing individual letters of the word. The game is played by displaying a series of blank spaces representing the letters in the name of the country, and the player guesses letters one at a time. For each incorrect guess, a part of a hangman figure is drawn. The game ends when the player either successfully guesses the word or the hangman figure is fully drawn. 
######
######
######

## [GAME](https://dodoslayer98.github.io/hungman/)

### Start Screen
![Alt text](https://i.imgur.com/KEidYs9.png "")


### New puzzle is loaded
![Alt text](https://i.imgur.com/Gj7BXXh.png "")

### Correct guesses show up on the tiles
![Alt text](https://i.imgur.com/9oDv3G7.png "")


### Wrong guesses lead to stickman drawing
![Alt text](https://i.imgur.com/sYkaMOd.png "")


### Prompt when a used letter is inputted again
![Alt text](https://i.imgur.com/BhpHDvX.png "")

### Prompt when you fail to guess the puzzle
![Alt text](https://i.imgur.com/ejkVw19.png "")

### Prompt when you win
![Alt text](https://i.imgur.com/0outtp0.png "")


### **How it was made** 
##### The HTML file contains the basic structure of the web page, including the game title, an input textbox for entering a letter, and two buttons to start the game and submit a letter. It also has a status bar to show the current status of the game.

##### The CSS file is used to style the web page and create the visuals of the game. It has the styles for the game title, input textbox, buttons, and status bar. It also has styles for the Hangman figure that appears if the user enters an incorrect letter.

##### The JavaScript file contains the logic for the game. When the user clicks on the play button, a random country is selected from the list, and a row of squares is created to represent the letters of the country. The user can then input a letter and click on the guess button to check if the letter is in the country's name. If the letter is in the name, the square(s) with the letter will be revealed, and the letter is added to the list of correctly guessed letters. If the letter is not in the name, a part of the Hangman figure will appear, and the incorrect letter will be added to the list of used letters.

##### The game will continue until the user has guessed all the letters in the country's name or has made five incorrect guesses. If the user has guessed all the letters, the game will declare the user the winner, and if the user has made five incorrect guesses, the game will declare the user the loser and reveal the name of the country. The user can then click on the play button to start a new game.

### **Icebox Items**

- Finish Wheel of Fortune
- Add a dynamic list of puzzles with various topics
- Add a roating spin wheel