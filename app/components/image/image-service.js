import Image from "../../models/image.js";

const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	image: {}
}

let _subscribers = {
	image: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}

export default class ImageService {
	get Imager() {
		return new Image(_state.image)
	}

	getbgImg() {
		imgApi.get().then(stuff => {
			_setState('image', new Image(stuff.data))
		})
	}
	addSubscriber(prop, fn) {

		_subscribers[prop].push(fn)
	}

}
