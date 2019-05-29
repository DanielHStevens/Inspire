import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	//WHAT IS MY PURPOSE?
	let _todos = _todoService.TodoItem
	let template = ''
	for (let i = 0; i < _todos.length; i++) {
		let _todo = _todos[i];
		template += _todo.TodoTemplate
	}
	document.getElementById('todos').innerHTML = template
}

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('error', _drawError)
		_todoService.getTodos()
		// Don't forget to add your subscriber
		_todoService.addSubscriber('todos', _drawTodos)
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			description: form.doitem.value,
		}
		_todoService.addTodo(todo)
	}

	toggleTodoStatus(todoId) {

		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}

}