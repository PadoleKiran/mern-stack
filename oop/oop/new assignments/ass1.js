class  Storage {
    save(data) {
        console.log("saving : " + data);
    }
}

class MemoryStoraage extends Storage {
    constructor() {
        super();
        this.items = [];

        save(data){
            this.items.push(data);
            console.log("save in memory", this.items.length );
        }
    }
}

class FileStorage extends Storage {
    save(data) {
        console.log("savedd in file " + data);
    }
}


let storage = []