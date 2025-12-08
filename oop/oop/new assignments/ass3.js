// D3: DoorLock
class DoorLock {
  // TODO: #pin = ""

  #pin = "";

  // TODO: setPin(pin) // require 4 chars (string)
  setPin(pin){
    this.#pin = pin;
    // console.log(this.#pin);
  }

  // TODO: unlock(tryPin) // compare with #pin
  unlock(tryPin){
    if(this.#pin === tryPin){
        console.log("Door lock opend");
    }
    else{
        console.log("Not able to open Door lock");
    }
  }
}

// TODO: demo: set pin, try wrong & correct pin; avoid direct access

let doorLock = new DoorLock();

doorLock.setPin("123");

doorLock.unlock("123");