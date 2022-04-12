import React from 'react'
import step0 from './images/step_0.png'

export function App() {
  return (
    <main>
      <header>
        <h1>Do you want to build a snowman?</h1>
      </header>
      <body>
        <section className="instructions">
          <strong>Instructions:</strong>jkjkljlkjlkjk
        </section>
        <section className="snowman-image">
          <img src={step0} width="300" />
          <br></br>
        </section>
        <br></br>
        <section className="word-display">_*_*_*_*_*_*_*</section>
        <br></br>
        <section className="alphabet-buttons">
          <button>a</button>
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
      </body>
      <footer>Made by Chad Lada</footer>
    </main>
  )
}
