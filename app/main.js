import WeatherController from "./components/weather/weather-controller.js";
import TodoController from "./components/todo/todo-controller.js";
import ImageController from "./components/image/image-controller.js";
import QuoteController from "./components/quote/quote-controller.js";

class App {
  constructor() {
    this.controllers = {
      imageController: new ImageController(),
      quoteController: new QuoteController(),
      weatherController: new WeatherController(),
      todoController: new TodoController(),
    }
  }
}

window['app'] = new App()  