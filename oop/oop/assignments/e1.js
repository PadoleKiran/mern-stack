// E1: Storage Family
class Storage {
  // Base method (can be overridden by subclasses)
  save(data) {
    console.log("Saving data:", data);
  }
}

class MemoryStorage extends Storage {
  constructor() {
    super();
    this.data = []; // internal array to hold saved items
  }

  // Override save() to store in memory
  save(data) {
    this.data.push(data);
    console.log(`Saved "${data}" to memory storage`);
  }
}

class FileStorage extends Storage {
  // Simulate saving to a file
  save(data) {
    console.log(`Saved "${data}" to file storage`);
  }
}

// ✅ Demo: mixed storages saving "hello"
let storages = [new MemoryStorage(), new FileStorage()];

for (let s of storages) {
  s.save("hello");
}
