const fetchQuote = async () => {
  const res = await fetch('https://api.quotable.io/random')
  const data = await res.json()
  return data
}

export const QuoteComponent = async (quoteElement: HTMLDivElement) => {
  const quoteContentLabel = document.createElement('p')
  const quoteAuthorLabel = document.createElement('p')
  const nextQuoteButton = document.createElement('button')
  
  nextQuoteButton.id = 'next-quote'
  nextQuoteButton.textContent = 'Siguiente nota'
  quoteContentLabel.id = "content"
  quoteAuthorLabel.id = "author"
  
  const renderQuote = (data: { author: 'string'; content: 'string' }) => {
    quoteAuthorLabel.textContent = `— ${data.author}`
    quoteContentLabel.textContent = `"${data.content}"`
    
    quoteElement.replaceChildren(quoteContentLabel, quoteAuthorLabel, nextQuoteButton)
  }
  
  nextQuoteButton.addEventListener('click', async () => {
    quoteElement.innerHTML = '<p id="content">Cargando...</p>' 
    renderLoading()
  })

  const renderLoading = async () => {
    quoteElement.innerHTML = '<p id="content">Cargando...</p>' 
    fetchQuote().then(renderQuote)
  }
  
  renderLoading()
}