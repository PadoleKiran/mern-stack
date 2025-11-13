// C1: Notifier Polymorphism
class Notifier {
  // TODO: notify(msg)
  nofify(msg){
    console.log(msg);
  }
}
class EmailNotifier extends Notifier {
  // TODO: notify(msg) // override
  nofify(msg){
    console.log(msg);
  }
}
class SMSNotifier extends Notifier {
  // TODO: notify(msg) // override
  nofify(msg){
    console.log(msg);
  }
}

// TODO: demo: array of notifiers, call notify in a loop

// let n = new Notifier();
// n.nofify("nandu and gt");

// let e = new EmailNotifier();
// e.nofify("gt still waiting ?");

// let s = new SMSNotifier();
// s.nofify("nandu still waiting ?");

var list = [new Notifier(), new EmailNotifier(), new SMSNotifier()];

for(var i=0;i<list.length;i++){
    list[i].nofify("Gt and nandu");
}