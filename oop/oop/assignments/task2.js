// A2: Thermostat
class Thermostat {
  // TODO: #temp = 24

  #temp = 24;

  // TODO: increase()
  increase(){
    this.#temp += 1;
  }

  // TODO: decrease()
  decrease(){
    this.#temp -= 1;
  }

  // TODO: setTemp(v) // only 16..30
  setTemp(v){
    if(typeof v !== "number"){
        console.log("invalid input");
    }
    this.#temp = v;
  }

  // TODO: current()

  current(){
    return this.#temp;
  }
}

// TODO: demo: change temp, invalid set, log current
let Ter = new Thermostat();
Ter.increase();

console.log(Ter.current());