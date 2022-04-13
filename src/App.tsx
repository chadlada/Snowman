import React, { useState } from 'react'
import step0 from './images/step_0.png'
import step1 from './images/step_1.png'
import step2 from './images/step_2.png'
import step3 from './images/step_3.png'
import step4 from './images/step_4.png'
import step5 from './images/step_5.png'
import step6 from './images/step_6.png'
import step7 from './images/step_7.png'
import words from './wordlist.json'

export function App() {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]

  // randomized word
  const randomWord = words[Math.floor(Math.random() * words.length)]
  const [guessedLetters, setGuessedLetters] = useState([''])
  const [secretWord, setSecretWord] = useState(randomWord)
  const [currentWord, setCurrentWord] = useState('_______')
  const [numberOfCorrectLettersGuessed, setNumberOfCorrectLettersGuessed] =
    useState(0)
  console.log(secretWord)

  // ----------------------------------------FUNCTIONS----------------------------------------

  function _newGame() {
    setSecretWord(randomWord)
    setCurrentWord('_______')
    setGuessedLetters([''])
    setNumberOfCorrectLettersGuessed(0)
  }
  function _clickLetter(letter: string) {
    // const newValueGuessedLetter = `${guessedLetters}${letter}`

    setGuessedLetters([...guessedLetters, letter])

    if (secretWord.includes(letter)) {
      setNumberOfCorrectLettersGuessed(numberOfCorrectLettersGuessed + 1)
      console.log(setNumberOfCorrectLettersGuessed)
      let newCurrentWord = ''
      for (let index = 0; index < secretWord.length; index++) {
        if (secretWord[index] === letter) {
          newCurrentWord = newCurrentWord.concat(letter)
        } else {
          newCurrentWord = newCurrentWord.concat(currentWord[index])
        }
      }

      setCurrentWord(newCurrentWord)
    }
  }

  function snowmanPictures() {
    switch (numberOfCorrectLettersGuessed) {
      case 0:
        return step0
      case 1:
        return step1
      case 2:
        return step2
      case 3:
        return step3
      case 4:
        return step4
      case 5:
        return step5
      case 6:
        return step6
      case 7:
        return step7
    }
  }

  return (
    <main>
      <header>
        <h1>Do you want to build a snowman?</h1>
      </header>

      <section className="instructions">
        <strong>Instructions: </strong> Select a letter from the options below.
        Each correct letter will then build a piece of your snowman. <br></br>
      </section>
      <p className="instructions1"> Ready, Set, Snow!</p>
      <section className="snowman-image">
        <img src={snowmanPictures()} width="300" className="mrsnowman" />
      </section>

      <section className="word-display">
        <ul>
          <li>{currentWord}</li>
        </ul>
      </section>

      <p className="guessed_letters">Guessed Letters: {guessedLetters}</p>
      <section className="alphabet_buttons">
        {alphabet.map(function (letter) {
          return (
            <button
              key={letter}
              onClick={function () {
                _clickLetter(letter)
              }}
              disabled={guessedLetters.includes(letter)}
            >
              {letter}
            </button>
          )
        })}
        <button className="new-game" onClick={_newGame}>
          New Game
        </button>
      </section>
      <br></br>
      <footer>Built with ♥ : CL</footer>
    </main>
  )
}
