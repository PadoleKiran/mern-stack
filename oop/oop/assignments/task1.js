// A1: Wallet (Encapsulation)
class Wallet {
  // TODO: #amount = 0

  #amount = 0;

  // TODO: addCash(value)

  addCash(value){
    this.#amount = this.#amount + value;
  }

  // TODO: spend(value)
  spend(value){
    // this.#amount 
    if(typeof value !=  number || value <= 0){
        console.log("invalid ammount");
        return;
    }

    if(value > this.#amount){
        console.log("invalid input");
    }

    this.#amount -= value;
  }

  // TODO: balance()
  balance(){
    return this.#amount;
  }
}

// TODO: demo code (create, add, spend, print balance)
// NOTE: Do not access private field directly.
