$(document).ready( function(){
  my_controller.bindListeners()
})

function Controller() {
}



var my_dog = new Dog()
var my_controller = new Controller()
// var View = {
//   removeWords(): function(){
//     $('p').remove()
//   }
// }

function removeWords(){
  $('p').remove()
}



function Dog(img){
  this.location = 0;
  this.img = img;
  this.bark_count = 0;
  this.isAlive = true
  ///add image sorce here
}

Dog.prototype.bark = function(){
  console.log(this.isAlive)
  if (this.isAlive){
    this.bark_count = this.bark_count + 1;
    $('.dogBark').append('<p>Woof!</p>')
  }
};

Dog.prototype.buy = function(){
  this.isAlive = true;
  $('.dogImg').append("<img src='http://www.justpuppies.net/images/maltishon3758.jpg'>")
    removeWords()
};

Dog.prototype.move = function(){
   this.location = this.location + 10;
  $('img').css('float',"right");
}

Dog.prototype.die = function(){
  debugger
  removeWords();
  $('img').remove();
  $('.dogBark').append('<p>Your dog is died!</p>');
  this.isAlive = false;
  this.bark_count = 0;
  this.location = 0;
}

Controller.prototype.bindListeners = function(){
  $('.bark').on('click', my_dog.bark.bind(my_dog))
  $('.buy').on('click', my_dog.buy.bind(my_dog))
  $('.move').on('click', my_dog.move.bind(my_dog))
  $('.die').on('click', my_dog.die.bind(my_dog))
}
