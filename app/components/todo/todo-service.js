import Todo from "../../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/daniel/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get TodoError() {
		return _state.error
	}

	get TodoItem() {
		return _state.todos.map(to => new Todo(to))
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {
		// console.log("Getting the Todo List")
		todoApi.get()
			.then(res => {
				console.log(res)
				let apiTodos = res.data.data
				// every element in the apiTodos needs to be turned into an instance of a Todo
				let todoList = apiTodos.map(d => new Todo(d))
				_setState('todos', todoList)
			})
			.catch(err => _setState('error', err))
	}

	addTodo(todo) {
		/**
		 * { description: 'whatever the user enetered'}
		 */
		todoApi.post('', todo)
			.then(res => {
				this.getTodos()
			})
			.catch(err => _setState('error', err))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		// Be sure to change the completed property to its opposite
		todo.completed = !todo.completed /*<-- THIS FLIPS A BOOL*/




		todoApi.put(todoId, todo)
			.then(res => {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.catch(err => _setState('error', err))
	}

	removeTodo(todoId) {
		todoApi.delete(todoId)
			.then(response => {
				this.getTodos()
			})
	}


}
