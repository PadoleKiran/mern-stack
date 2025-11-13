// E2: Media Playlist
class Media {
  constructor(title) {
    this.title = title;
  }

  play() {
    console.log(`Playing media: ${this.title}`);
  }
}

class Song extends Media {
  constructor(title) {
    super(title); // call parent constructor
  }

  play() {
    console.log(`Playing song: ${this.title}`);
  }
}

class Video extends Media {
  constructor(title) {
    super(title);
  }

  play() {
    console.log(`Playing video: ${this.title}`);
  }
}

// ✅ Demo: playlist array → loop → play()
const playlist = [
  new Song("Shape of You"),
  new Video("Avengers Trailer"),
  new Song("Blinding Lights"),
  new Video("Nature Documentary")
];

for (const media of playlist) {
  media.play(); // polymorphic behavior
}
