import Quote from "../../models/quote.js";

// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quote: []
}

let _subscribers = {
	quote: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}

export default class QuoteService {
	get Quoty() {
		return new Quote(_state.quote)
	}

	getQuote() {
		_quoteApi.get().then(things => {
			_setState('quote', new Quote(things.data.quote))
		})
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}
}
