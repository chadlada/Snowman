Do you wanna build a snowman?

Requirements

We're going to build a sort of reverse hangman. The player can't lose; they just get to build a snowman by adding parts each time they guess a letter correctly. You will need to download these files and add them to your project:

    Word List
    Snowman Images (Unzip these before adding to your project)

Explorer Mode

    Selects a random word from the list and display a number of blank spaces (or underscores) equal to the word length.
    Display a list of letters, A through Z as clickable buttons.
    When the player guesses a letter (clicks the button):
        All instances of that letter are revealed at their corresponding positions in the word.
        The button becomes disabled, as it has already been guessed.
        Display the snowman image that corresponds with the number of letters revealed in the word.

HTML Static Implementation

Need 7 spaces for characters
Need 7 images
Need 26 buttons for A-Z letter options

Functionality

word list - https://raw.githubusercontent.com/suncoast-devs/handbook/master/assignments/assets/words.jsonreact-project-template

When the player guesses a letter (clicks the button):
All instances of that letter are revealed at their corresponding positions in the word.
The button becomes disabled, as it has already been guessed.
Display the snowman image that corresponds with the number of letters revealed in the word.
