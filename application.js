$(document).ready( function(){
  initailzie()
})

function initailzie(){
  var my_dog = new Dog('http://www.justpuppies.net/images/maltishon3758.jpg')
  var my_view = new View($('.dogBark'), $('.dogImg') )
  my_controller = new Controller(my_view, my_dog)
  bindEvent(my_controller)
}

function bindEvent(controller){
  $('.bark').on('click', my_controller.dogBark.bind(controller))
  $('.buy').on('click', my_controller.displayDog.bind(my_controller))
  $('.move').on('click', my_controller.moveDogImages.bind(my_controller))
  $('.die').on('click', my_controller.killDog.bind(my_controller))
}

function Dog(img) {
  this.img = img
  this.died = false
}

Dog.prototype = {
  bark: function() {
    return "Woof!"
  },
  die:function() {
    return "Your dog is died!"
  }
}

function View(barkDiv, imageDiv) {
 this.barkDiv = barkDiv
 this.imageDiv = imageDiv
}

View.prototype = {
  displayText: function(text, div) {
    div.append($('<p>').text(text))
  },
  displayImg: function(img, div) {
    div.append($('<img>').attr('src', img))
  },
  moveImg: function(){
    $('img').css('float',"right")
  },
  removeText: function(){
    $('p').remove()
    $('img').remove()
  }
}

function Controller(view, dog) {
  this.view = view
  this.dog = dog
}

Controller.prototype = {
  dogBark: function(){
    var text = this.dog.bark()
    var textDiv = this.view.barkDiv
    this.view.displayText(text, textDiv)
  },
  displayDog: function() {
    var image = this.dog.img
    var div = this.view.imageDiv
    this.view.displayImg(image, div)
  },
  moveDogImages: function() {
    this.view.moveImg()
  },
  killDog: function() {
    this.dog.died = true
    this.view.removeText()
    var text = this.dog.die()
    var div = this.view.barkDiv
    this.view.displayText(text, div)
  }
}