$.Class('Foo', 
{
  aStaticValue: 'a static value',
  aStaticFunction: function() {
    return this.aStaticValue;
  }
}, 
{
  aPrototypeValue: 'a prototype value',
  aPrototypeFunction: function() {
    alert(this.aPrototypeValue); // alerts 'a prototype value'
    alert(this.aStaticValue); // alerts 'undefined'
    alert(this.constructor.aStaticValue); // alerts 'a static value'
  }
});

alert(Foo.aStaticFunction()); // alerts 'a static value'
var f = new Foo();
alert(f.aPrototypeValue); // alerts 'a prototype value'
f.aPrototypeFunction();
