// D2: FileCompressor
class FileCompressor {
  // TODO: compress(fileName) → orchestrate private steps
  compress(fileName) {
    this.#readFile();
    this.#pack();
    this.#writeArchive();
  }

  // TODO: #readFile()
  #readFile(){
    console.log("#readFile() !");
  }

  // TODO: #pack()
  #pack(){
    console.log("#pack() !");
  }

  // TODO: #writeArchive()
  #writeArchive() {
    console.log("#writeArchive() !");
  }
}

// TODO: demo: compress("report.pdf")
let F = new FileCompressor();
F.compress();