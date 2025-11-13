// E3: UserAuth
class UserAuth {
  // Private field
  #passwordHash = "";

  // Method to set password (store hashed version)
  setPassword(plain) {
    // simple "hash" simulation using Base64
    this.#passwordHash = Buffer.from(plain).toString("base64");
    console.log("Password set successfully.");
  }

  // Method to check password
  checkPassword(plain) {
    const tryHash = Buffer.from(plain).toString("base64");
    if (tryHash === this.#passwordHash) {
      console.log("Access granted ✅");
    } else {
      console.log("Access denied ❌");
    }
  }
}

// ✅ Demo: set, check right/wrong
let user = new UserAuth();
user.setPassword("abcd1234"); // set password

user.checkPassword("wrongpass"); // ❌ Access denied
user.checkPassword("abcd1234");  // ✅ Access granted

// ❌ Uncommenting this line will cause an error because #passwordHash is private
// console.log(user.#passwordHash); // SyntaxError: Private field '#passwordHash' must be declared in an enclosing class
