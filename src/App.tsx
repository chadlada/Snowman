import React from 'react'
// import step0 from './images/step_0.png'
// import step1 from './images/step_1.png'
// import step2 from './images/step_2.png'
// import step3 from './images/step_3.png'
// import step4 from './images/step_4.png'
// import step5 from './images/step_5.png'
// import step6 from './images/step_6.png'
import step7 from './images/step_7.png'
import word from './wordlist.json'

export function App() {
  function _buttonClick() {
    console.log('clicked')
  }

  const secretWord = word[0]
  console.log(secretWord)

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
      <br></br>
      <section className="snowman-image">
        <img src={step7} width="300" />
        <br></br>
      </section>
      <br></br>
      <section className="word-display">_*_*_*_*_*_*_*</section>

      <br></br>
      <br></br>
      <section className="alphabet-buttons">
        <button onClick={_buttonClick}>a</button>
        <button>b</button>
        <button>c</button>
        <button>d</button>
        <button>e</button>
        <button>f</button>
        <button>g</button>
        <button>h</button>
        <button>i</button>
        <button>j</button>
        <button>k</button>
        <button>l</button>
        <button>m</button>
        <button>n</button>
        <button>o</button>
        <button>p</button>
        <button>q</button>
        <button>r</button>
        <button>s</button>
        <button>t</button>
        <button>u</button>
        <button>v</button>
        <button>w</button>
        <button>x</button>
        <button>y</button>
        <button>z</button>
      </section>
      <br></br>

      <p className="guessed-letters">Guessed Letters:</p>

      <footer>Made by Chad Lada</footer>
    </main>
  )
}
