C(*)
Router (controller) {
  routes:
    '/': 'indexView'
    '/music': 'musicShowView'

  this.musicShowView = function() {
    new MusicShowView({el: 'body', model: new MusicModel()})
  }

  this.indexView = function() {
    new IndexView({el: 'body', collection: new MusicCollection})
    new NavBarView({el: 'nav', model: new NavBarModel})
  }
}


$(document).ready(function() {
  new Router()
})


V
ItemView
CollectionView
  - top level element
  - render (takes a template; injects into top level element)
  - events
    - handling
  - initialize
  - template(string to be injected into the top level element usually taking into account the views model/collection)
  - model/collection

function DogView(options) {
  this.el = options.el
  this.$el = $(options.el)
  this.model = options.model
  this.initialize = function() {
    ...(setting event listeners)
    $('ul').on('click', this.addDog.bind(this)
    $('ul').on('click', this.addDog.bind(this)
    $('ul').on('click', this.addDog.bind(this)
    $('ul').on('click', this.addDog.bind(this)
    $('ul').on('click', this.addDog.bind(this)
    $(this.model).on('change', this.render)
  }

  this.addDog = function() {
    this.model.addDog()
  }

  this.render = function() {
    this.$el.html(this.template(this.model.attributes()))
  }

  this.template = function(attributes) {
    '<h1>' + attributes.title + '</h1>'
  }

  this.initialize()
}

new DogView({el: '.container', model: new DogModel()})


M
Model        - state, methods

function DogModel(options) {
  this.type = options.type
  this.bark = function() {
    console.log('woof')
  }

  this.attributes = function()
}
// class Dog
//   def initialize(options)
//     @type = options[:type]
//   end

//   def bark
//     p 'woof'
//   end
// end
// dog = Dog.new(type: 'Terrier')
// dog.type #=> 'Terrier'
// dog.bark #=>  'woof'

var dog = new DogModel({type: 'Terrier'})
dog.type
# => 'Terrier'
dog.bark()
# => 'woof'


Collection   - array of models

function DogCollection() {
  this.collection = []
  this.addDog = function() {
    this.collection.push(new DogModel)
  }
  this.barkAll = function() {
    $.each(this.collection, function(index, dog) {
      dog.bark()
    })
  }
}

new DogCollection()




html
  body
    div class=container     .container # top level element
      ul
        li
      div class=bananas





DOM       VIEW         MODEL
e ->      captured    ->handle
DOM <-    capture     <-  e
