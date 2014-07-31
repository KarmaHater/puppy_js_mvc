$(document).ready( function(){
  initialize()
})

function initialize() {
  var my_view = new View($('.dogImg'), $('.dogBark') )
  var my_dog = new Dog('http://www.justpuppies.net/images/maltishon3758.jpg')
  my_controller = new Controller(my_dog, my_view)
  bindEvents(my_controller)
}

function bindEvents(controller){
  $('.bark').on('click', controller.makeDogBark.bind(controller))
  $('.buy').on('click', controller.displayDogImage.bind(controller))
  $('.move').on('click', controller.moveDogs.bind(controller))
  $('.die').on('click', controller.killDog.bind(controller))
}

function Dog(img) {
  this.img = img
}

Dog.prototype = {
  bark: function() {
    return "Woof!"
  },
  die: function(){
    return "Your dog is died!"
  }
}

function View(imgDiv, textDiv){
  this.imgDiv = imgDiv
  this.textDiv = textDiv
}

View.prototype = {
  displayDog: function(img){
   this.imgDiv.append($('<img>').attr('src', img))
  },
  displayText: function(text, div) {

    div.append($('<p>').text(text))
  },
  removeText: function(){
    $('p').remove()
    $('img').remove()
  },
  moveImages: function(){
    $('img').css('float',"right");
  }
}

function Controller(dog, view){
  this.dog = dog
  this.view = view
}

Controller.prototype = {
  makeDogBark:function(){
    var barkText = this.dog.bark()
    this.view.displayText(barkText, this.view.textDiv)
  },
  killDog:function(){
    var dieText = this.dog.die()
    this.view.displayText(dieText, this.view.textDiv)
    this.view.removeText()
  },
  moveDogs: function(){
    this.view.moveImages()
  },
  displayDogImage: function(){
    var dogImage = this.dog.img
    this.view.displayDog(dogImage)
  }
}
// function removeWords(){
//   $('p').remove()
// }

// var my_dog = new Dog('http://www.justpuppies.net/images/maltishon3758.jpg')

// function Dog(img){
//   this.location = 0
//   this.img = img;
//   ///add image sorce here
// }


// Dog.prototype.bark = function() {
//   $('.dogBark').append('<p>Woof!</p>')
// };

// Dog.prototype.buy = function() {
//   $('.dogImg').append("<img src='http://www.justpuppies.net/images/maltishon3758.jpg'>")
//     removeWords()
// };

// Dog.prototype.move = function(){
//   $('img').css('float',"right");
// }

// Dog.prototype.die = function(){
//   removeWords()
//   $('img').remove()
//   $('.dogBark').append('<p>Your dog is died!</p>')
// }