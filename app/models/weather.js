export default class Weather {
  constructor(data) {
    // debugger
    //console.log('[RAW WEATHER API DATA]', data);
    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.city || data.name
    this.kelvin = data.kelvin || data.main.temp
    this.sky = data.sky || data.weather[0].icon
  }
  get weaTemplate() {
    return `
   		<h5>${this.kelvin} K</h5>
<img src="http://openweathermap.org/img/w/${this.sky}.png" alt="">
    `
  }
}