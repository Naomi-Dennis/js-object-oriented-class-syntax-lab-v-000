class BoardMember{
  constructor(name, homeState, training){
      this.name = name
      this.homeState = homeState
      this.training = training
  }

  function veto(){

  }

  function approve(){

  }

  function doCharity(){

  }

  function releasePressStatement(){
    return "You will see great things from Scuber."
  }
  function sayHello(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  }
  function sayHi(){
    this.sayHello()
  }

}

class Ceo extends BoardMember{
  constructor(name, homeState, training){
    super(name, homeState, training)
  }
  function hireEmployee(){
    return "Welcome aboard!"
  }
}
