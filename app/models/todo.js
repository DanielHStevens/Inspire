export default class Todo {
  constructor(data) {
    this.description = data.description
    this.completed = data.completed
    this._id = data._id
  }
  get TodoTemplate() {
    let checked = ''
    if (this.completed) {
      // change the value of checked
      checked = 'checked'
    }
    return `
    	<p><input class="form-check-input" type="checkbox" ${checked} onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">${this.description}<button
          onclick="app.controllers.todoController.removeTodo('${this._id}')"><i class="fas fa-trash"></i></button></p>
    `
  }
}