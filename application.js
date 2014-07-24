$(document).ready( function(){
  $('.bark').on('click', my_dog.bark)
  $('.buy').on('click', my_dog.buy)
  $('.move').on('click', my_dog.move)
  $('.die').on('click', my_dog.die)
})

function removeWords(){
  $('p').remove()
}

var my_dog = new Dog('http://www.justpuppies.net/images/maltishon3758.jpg')

function Dog(img){
  this.location = 0
  this.img = img;
  ///add image sorce here
}

Dog.prototype.bark = function() {
  $('.dogBark').append('<p>Woof!</p>')
};

Dog.prototype.buy = function() {
  $('.dogImg').append("<img src='http://www.justpuppies.net/images/maltishon3758.jpg'>")
    removeWords()
};

Dog.prototype.move = function(){
  $('img').css('float',"right");
}

Dog.prototype.die = function(){
  removeWords()
  $('img').remove()
  $('.dogBark').append('<p>Your dog is died!</p>')
}