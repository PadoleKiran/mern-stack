// B3: Content → Article/Video
class Content {
  // TODO: constructor(title)
  constructor(title){
    this.title = title;
  }
  // TODO: details()
  details(){
    console.log("title is " + this.title);
  }
}

class Article extends Content {
  // TODO: constructor(title, wordCount)
  constructor(title, wordCount){
    super(title);
    this.wordCount = wordCount;
    
  }
  // TODO: details() // override
  details(){
    console.log("Title is " + this.title + " WordCount is " + this.wordCount);
  }
}

class Video extends Content {
  // TODO: constructor(title, durationSec)
  constructor(title, durationSec){
    super(title);
    this.durationSec = durationSec;
 
  }
  // TODO: details() // override
  details(){
    console.log("title is " + this.title + " durationSec is " + this.durationSec);
  }
}

// TODO: demo list of mixed contents

let c = new Content("gt stars");
c.details();

let a = new Article("gt stars 2", 500);
a.details();

let v = new Video("gt stars 3", 1000);
v.details();