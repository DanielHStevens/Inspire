import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawQuote() {
  //console.log("Quote?", _qs.Quoty)
  let qtplace = _qs.Quoty
  // let template = ''
  // qtplace.forEach(qot => template = qot.quoteTemplate)
  // document.getElementById('quote-box').innerHTML = template
  document.getElementById('quote-box').innerHTML = _qs.Quoty.quoteTemplate
}

export default class QuoteController {
  constructor() {
    _qs.addSubscriber('quote', drawQuote)
    _qs.getQuote()
  }

}