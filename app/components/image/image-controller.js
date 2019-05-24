import ImageService from "./image-service.js";

const _is = new ImageService()

function drawImage() {
  console.log("Image?", _is.Imager)
  let bgImage = _is.Imager.url
  document.getElementById('bg-image').style.backgroundImage = `url(${bgImage})`
}

export default class ImageController {
  constructor() {
    _is.addSubscriber('image', drawImage)
    _is.getbgImg()
  }

}

