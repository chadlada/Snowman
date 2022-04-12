import React, { useState } from 'react'
// import step0 from './images/step_0.png'
// import step1 from './images/step_1.png'
// import step2 from './images/step_2.png'
// import step3 from './images/step_3.png'
// import step4 from './images/step_4.png'
// import step5 from './images/step_5.png'
// import step6 from './images/step_6.png'
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

  const randomWord = Math.floor(Math.random() * words.length)
  console.log(randomWord)

  const [guessedLetters, setGuessedLetters] = useState('')

  function _clickLetter(letter: string) {
    const newValueGuessedLetter = `${guessedLetters}${letter}`

    setGuessedLetters(newValueGuessedLetter)

    console.log('clicked')
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
        <img src={step7} width="300" className="mrsnowman" />
        <br></br>
      </section>
      <br></br>
      <section className="word-display">_*_*_*_*_*_*_*</section>

      <br></br>
      <br></br>

      <br></br>

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
      </section>

      <footer>Made by Chad Lada</footer>
    </main>
  )
}
