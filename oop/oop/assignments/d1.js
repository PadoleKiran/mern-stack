// D1: WashingMachine (Abstraction)
class WashingMachine {
  // TODO: start() → call private steps in order

  start(){
    this.#fillWater();
    this.#wash();
    this.#rinse();
    this.#spin();

  }
  // TODO: #fillWater()
  #fillWater(){
    console.log("#fillWater() !");
  }

  // TODO: #wash()
  #wash(){
    console.log("#wash() !")
  }

  // TODO: #rinse()
  #rinse(){
    console.log("#rinse() !");
  }

  // TODO: #spin()
  #spin() {
    console.log("#spin() !");
  }
}

// TODO: demo: call start(); keep commented line calling a private method

let W = new WashingMachine();
W.start();