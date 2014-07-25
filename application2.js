$(document).ready(function(){
  window.dog = new DogView({el: 'body', collection: new DogCollection([])})
})

function DogView(bananas){
  this.$el = $(bananas.el)
  this.collection = bananas.collection
  this.template = function(){
    var html = "<div class='buttonRow'><button class='buy'>Buy Dog</button><button class='move'>Move</button><button class='bark'>Bark</button><button class='die'>Die</button></div><div class='dogBark'></div><div class='dogImg'>";
    $.each(this.collection.array, function(index, dog) {
      html += ('<img src="'+ dog.img +'">')
    })
    return html
  }
  this.render = function(){
    this.$el.html(this.template()) //this is the top level of my view - does not see outside
    return this
  }
  this.bindEvents = function(){
    this.$el.find('.die').on('click', this.collection.killAll.bind(this.collection))
    this.$el.find('.buy').on('click', this.collection.addDog.bind(this.collection))
    $(document).on('doggies:changed', this.render.bind(this))
    $(document).on('doggies:changed', this.bindEvents.bind(this))
  }
  this.bindEvents()
}

function DogCollection(collection){
  this.array = collection // [new Dog, new Dog, new Dog]
  this.killAll = function() {
    $.each(this.array, function(index, dog){
      dog.die()
    })
    this.stateChanged()
  }

  this.addDog = function() {
    this.array.push(new DogModel("http://www.justpuppies.net/images/maltishon3758.jpg"))
    this.stateChanged()
  }

  this.stateChanged = function() {
    var event = new CustomEvent('doggies:changed')
    document.dispatchEvent(event)
  }
}

function DogModel(img){
  this.img = img
  this.isAlive = true
  this.location = 0
  this.bark_count = 0
  this.isAlive = true
  this.bark = function(){
    if(this.isAlive){
      this.bark_count++;
    }
  }
  this.buy = function(){

  }
  this.move = function(){
    this.location = this.location + 10;
  }
  this.die = function() {
    this.isAlive = false;
    this.bark_count = 0;
    this.location = 0;
  }
}
