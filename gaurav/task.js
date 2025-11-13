function firstChar(text) {
  // your code here
	let v = text.trim();
	if(v.length == 0){
		console.log("");
	}
	else {
		 console.log(v[0]);
	}
}

firstChar("  Hello");
firstChar("");
firstChar("  Hello");