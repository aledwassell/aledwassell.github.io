const popUp = {};

popUp.import image from ('image directory');

let popUp.target = document.getElementById('popUp');

popUp.promise('image')
  .then(magnificPopup({type: 'image'}))
  .then(this.target.append())
