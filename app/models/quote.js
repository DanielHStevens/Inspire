export default class Quote {
  constructor(data) {
    this.author = data.author
    this.body = data.body
  }
  get quoteTemplate() {
    return `
   		<p>${this.body}</p>
    <h4>-${this.author}</h4>
    `
  }
}