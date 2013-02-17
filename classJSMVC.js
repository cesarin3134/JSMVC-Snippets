//creo una clase Monster
$.Class('Monster',
/* @static */ 
//las propiedades estaticas son accesibles desde el interno de la misma clase
{
  count: 0
},
/* @prototype */
//la propiedades en el prototipo sono compartidas con todas las instancias de la clase
{
  init: function( name ) {

    // saves name on the monster instance
    this.name = name;

    // sets the health
    this.health = 10;    
    this.saludo = 'hola';

    // increments count
    this.constructor.count++;
  },
  eat: function( smallChildren ){
    this.health += smallChildren;
  },
  fight: function() {
    this.health -= 2;
  },
  resp : function() {
  this.saludo  = 'hola '+ this.name 
  }
});

/* extendiendo la clase mostro */
Monster('SeaMonster',{

    eat : function(smallChildren) {
        //con this.super llamo el metodo de la clase base en este caso el metodo eat
        this._super(smallChildren / 2);
    },
    fight : function() {
        this.health -= 1;
    }
});

var subMoster = new SeaMonster('cesar Monster');

subMostro.eat(10); // 15
subMostro.name; // cesar Monster
subMostro.health; // 15
subMostro.fight(); //14
subMostro.health; //14
