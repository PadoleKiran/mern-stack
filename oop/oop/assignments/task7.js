// C2: Transport Fare
class Transport {
  // TODO: fare(km) // default
  fare(km){
    console.log(km);
  }
}
class Bus extends Transport {
  // TODO: fare(km) // per km
  fare(km){
    console.log(km);
  }
}
class Taxi extends Transport {
  // TODO: fare(km) // base + per km
  fare(km){
    let base = 10 + Number(km);
    console.log(base);
  }
}
class Metro extends Transport {
  // TODO: fare(km) // slab rules
  fare(km){
    console.log(km);
  }
}

// TODO: demo: mixed transports + km array → loop → log fare
// let t = new Transport();
// t.fare(10);

let list = [new Transport(), new Bus(), new Taxi(), new Metro()];

for(let i of list){
    i.fare("50");
}