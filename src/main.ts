import './style.css'

import { setupCounter } from './counter.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>CONTADOR</h1>
    <h2>heavy duty builders</h2>
    <div>
    <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      haz click en el contador y sumara 2
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
