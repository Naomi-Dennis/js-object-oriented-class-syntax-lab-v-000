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
}

class Ceo extends BoardMember{
  constructor(name, homeState, training){
    super(name, homeState, training)
  }
}
