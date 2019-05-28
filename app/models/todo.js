export default class Todo {
  constructor(data) {
    this.doitem = data.doitem
    this.response = data.response
    this._id = this._id
  }
  get TodoTemplate() {
    return `
    	<p><input class="form-check-input" type="checkbox" value="" id="unconnected">${this.doitem}<button
					onclick="app.controllers.todo-controller.removeTodo('${this._id}')">X</button></p>
    `
  }
}