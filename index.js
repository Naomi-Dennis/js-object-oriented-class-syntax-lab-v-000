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

  }
  function sayHi(){

  }
  function sayHello(){
    return `Hi, my name is ${name}. I am from <homestate>, and I was trained in <training>.`
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
