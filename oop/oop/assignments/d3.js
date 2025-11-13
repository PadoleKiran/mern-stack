// D3: DoorLock
class DoorLock {
  // TODO: #pin = ""
    #pin = "";

  // TODO: setPin(pin) // require 4 chars (string)
  setPin(pin){
    // this.pin = this.pin+pin;
    if(pin.length == 4){
        this.#pin = ""+pin;
        console.log("pin set succesfully");
    }
    else{
        console.log("pin must be 4 char");
    }
  }

  // TODO: unlock(tryPin) // compare with #pin
  unlock(tryPin){
        if(tryPin == this.#pin){
            console.log("unlock");
        }
        else{
            console.log("incorrect");
        }
  }
}

// TODO: demo: set pin, try wrong & correct pin; avoid direct access
let d = new DoorLock();
d.setPin("abcd");
d.unlock("abcd");