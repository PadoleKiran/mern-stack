// // regex in js
// // flag: 'g' for global, 'i' for case-insensitive, 'm' for multiline
// // let regex = /hello/i; // case-insensitive match for "hello" 
// // let str = "Hello world! hello everyone!";
// // let matches = str.match(regex);
// // console.log(matches); // ["Hello", index: 0, input: "Hello world! hello everyone!", groups: undefined]
// // console.log(str.search(regex)); // 0, index of the first match
// // console.log(str.replace(regex, "hi")); // "hi world! hello everyone!"
// // console.log(str.split(regex)); // ["", " world! ", " everyone!"]
// // console.log(str.matchAll(regex)); // Iterator of all matches
// // console.log(Array.from(str.matchAll(regex))); // Convert iterator to array of matches
// // console.log(str.match(/hello/gi)); // ["Hello", "hello"], global and case-insensitive match
// // console.log(str.replace(/hello/gi, "hi")); // "hi world! hi everyone

// // console.log(str.split(/hello/gi)); // ["", " world! ", " everyone!"]
// // console.log(str.search(/hello/gi)); // 0, index of the first match
// // console.log(str.match(/hello/gi).length); // 2, number of matches
// // console.log(str.replace(/hello/gi, "hi").length); // Length of the string after replacement
// // console.log(str.split(/hello/gi).length); // 3, number of parts after


// // // anchor: ^ for start of string, $ for end of string
// // let anchorRegex = /^Hello/; // matches if "Hello" is at the start of the string
// // console.log(anchorRegex.test(str)); // true, "Hello" is at the start    

// // anchorRegex = /everyone!$/; // matches if "everyone!" is at the end of the string
// // console.log(anchorRegex.test(str)); // true, "everyone!" is at the end  

// // // character classes: \d for digits, \w for word characters, \s for whitespace
// // let charClassRegex = /\d/; // matches any digit
// // console.log(charClassRegex.test("abc123")); // true, contains digits


// // // quantifiers: * for zero or more, + for one or more, ? for zero or one
// // let quantifierRegex = /a*/; // matches zero or more 'a's    
// // console.log(quantifierRegex.test("aaa")); // true, contains 'a's

// // quantifierRegex = /a+/; // matches one or more 'a's
// // console.log(quantifierRegex.test("aaa")); // true, contains 'a's

// // quantifierRegex = /a?/; // matches zero or one 'a'
// // console.log(quantifierRegex.test("aaa")); // true, contains 'a's



// // quantifiers with numbers: {n} for exactly n, {n,} for n or more, {n,m} for between n and m
// let quantifierNumRegex = /a{2}/; // matches exactly two 'a's
// console.log(quantifierNumRegex.test("aa")); // true, contains exactly two 'a's

// quantifierNumRegex = /a{2,}/; // matches two or more 'a's
// console.log(quantifierNumRegex.test("aaa")); // true, contains two or more '
// // a's
// quantifierNumRegex = /a{2,4}/; // matches between two and four 'a's
// console.log(quantifierNumRegex.test("aaaa")); // true, contains between two and four 'a's


// // set and range: [abc] for any character in the set, [a-z] for any character in the range
// let setRangeRegex = /[abc]/; // matches any 'a', 'b', or 'c'
// console.log(setRangeRegex.test("a")); // true, contains 'a' 



// // predefined character classes: \d for digits, \w for word characters(letter, digit, underscore), \s for whitespace
// let predefCharClassRegex = /\d/; // matches any digit
// console.log(predefCharClassRegex.test("123")); // true, contains digits


// // dot character: . matches any character except newline
// let dotCharRegex = /a.b/; // matches 'a', any character, and 'b'
// console.log(dotCharRegex.test("a1b")); // true, matches 'a1b


// // grouping: (abc) for grouping, (?:abc) for non-capturing group
// let groupingRegex = /(abc)/; // matches 'abc'
// console.log(groupingRegex.test("abc")); // true, contains 'abc'
// groupingRegex = /(?:abc)/; // non-capturing group for 'abc'
// console.log(groupingRegex.test("abc")); // true, contains 'abc'

// // lookahead and lookbehind: (?=abc) for positive lookahead, (?!abc) for negative lookahead, (?<=abc) for positive lookbehind, (?<!abc) for negative lookbehind
// let lookaheadRegex = /a(?=b)/; // matches 'a' followed by 'b'
// console.log(lookaheadRegex.test("ab")); // true, 'a' is followed by 'b'
// lookaheadRegex = /a(?!b)/; // matches 'a' not followed by 'b'
// console.log(lookaheadRegex.test("ac")); // true, 'a' is not followed by 'b'
// lookaheadRegex = /(?<=b)a/; // matches 'a' preceded by 'b'
// console.log(lookaheadRegex.test("ba")); // true, 'a' is preceded by 'b'
// lookaheadRegex = /(?<!b)a/; // matches 'a' not preceded by 'b'
// console.log(lookaheadRegex.test("ca")); // true, 'a' is not preceded by 'b' 



// // sets and ranges: [abc] for any character in the set, [a-z] for any character in the range
// let setRangeRegex2 = "cat";
// let pattern = /c[aeiou]t/;
// console.log(pattern.test(setRangeRegex2)); // true, 'cat' matches the pattern 'c[aeiou]t'

// // negative character set [^abc] for any character not in the set
// let negCharSetRegex = /[^abc]/; // matches any character not 'a', 'b', or 'c'
// console.log(negCharSetRegex.test("d")); // true, 'd' is not 'a', 'b', or 'c'

// let negCharSetRegex2 = /[^aeiou]/; // matches any character not a vowel
// console.log(negCharSetRegex2.test("cdt")); // true, 'c' and 'd' are not vowels




// // predefined character classes: \d for digits, \w for word characters, \s for whitespace

// let text = "abc123";
// console.log(/\d/.test(text)); // true, contains digits
// console.log(/\w/.test(text)); // true, contains word characters (letters, digits, underscores)
// console.log(/\s/.test(text)); // false, no whitespace in "abc123"   
// console.log(/\D/.test(text)); // true, contains non-digit characters
// console.log(/\W/.test(text)); // true, contains non-word characters (not letters, digits, underscores)
// console.log(/\S/.test(text)); // true, contains non-whitespace characters

// console.log(/\d/.exec(text)); // ["1", index: 3, input: "abc123", groups: undefined]
// console.log(/\w/.exec(text)); // ["a", index: 0, input: "abc123", groups: undefined]
// console.log(/\s/.exec(text)); // null, no whitespace in "abc123"
// console.log(/\D/.exec(text)); // ["a", index: 0, input: "abc123", groups: undefined]
// console.log(/\W/.exec(text)); // ["a", index: 0, input: "abc123", groups: undefined]
// console.log(/\S/.exec(text)); // ["a", index: 0, input: "abc123", groups: undefined]


// // $// anchors: ^ for start of string, $ for end of string
// let anchorStartRegex = /^abc/; // matches if "abc" is at the start  
// let anchorEndRegex = /123$/; // matches if "123" is at the end
// console.log(anchorStartRegex.test(text)); // true, "abc" is at the start
// console.log(anchorEndRegex.test(text)); // true, "123" is at the end



let tex =  "cat is a cat";

console.log(tex.replace(/cat/g,"dog"));

let text = "user123";

console.log(text.match(/\d/g));

text = "hello";
console.log(text.match(/^hello/))

text = "red,green,blue";
console.log(text.split(/,/));

text = "HELLO";

console.log(text.match(/hello/i));

console.log((/c[aeiou]t/).test(text));

let num = "12345";
console.log((/^\d+$/).test(num));

let a = "aaa";

console.log(/a{3}/.test(a));

text = "hhaha";
let pattern = /h/g;

console.log(pattern.exec(text));
console.log(pattern.exec(text));
console.log(pattern.exec(text));
console.log(pattern.exec(text));

text = "the end";

console.log(/\bthe\b/.test(text));

text = "A1b2";
console.log(/[a-z]/g.test(text));

text = "k@gmail.com";
console.log(/@gmail.com$/.test(text));


// escape sequences characters
text = "Hello\nWorld";
console.log(text.replace(/\n/g, " ")); // Replace newline with space


num = +917894561230;

console.log(/[0-9]{10}/.exec(num));

text = 'passu78';
console.log(/^[a-zA-Z]{0,6}\d{1}/.test(text));