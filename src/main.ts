import { QuoteComponent } from './components/quote'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Una pequeña aplicación de notas</h1>
    <div id="quote"></div>
    <div class="card">
      <p id="nota"></p>
    </div>
  </div>
`
const divQuoteElement: HTMLDivElement = document.querySelector('#quote')!
QuoteComponent(divQuoteElement)