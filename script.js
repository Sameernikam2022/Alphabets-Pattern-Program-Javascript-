//print character AtoZ
// for (let i = 65; i <= 90; i++) {
//   console.log(String.fromCharCode(i));
// }

//Print Alphabet Pattern In Javascript
// A
// A B
// A B C
// A B C D
// A B C D E
//  let n = 5;
// let string = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 0; j < i; j++) {
//     string += String.fromCharCode(j + 65);
//   }
//   string += "\n";
// }
// console.log(string);

// A
// B B
// C C C
// D D D D
// E E E E E
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += String.fromCharCode(i - 1 + 65);
//   }
//   string += "\n";
// }
// console.log(string);

// A
// B C
// D E F
// G H I J
// K L M N O
// let n = 5;
// let string = "";
// let count = 0;
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += String.fromCharCode(count + 65);
//     count++;
//   }
//   string += "\n";
// }
// console.log(string);

// ABCDE
// ABCD
// ABC
// AB
// A
// let n = 5;
// let string = "";
// for (let i = 0; i <= n; i++) {
//   for (let j = 0; j < n - i + 1; j++) {
//     string += String.fromCharCode(j + 65);
//   }
//   string += "\n";
// }
// console.log(string);

// EDCBA
// EDCB
// EDC
// ED
// E
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i + 1; j++) {
//     string += String.fromCharCode(n - 1 - j + 65);
//   }
//   string += "\n";
// }
// console.log(string);

//EDCBA
// DCBA
// CBA
// BA
// A

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i + 1; j++) {
//     string += String.fromCharCode(n - i - j + 65);
//   }
//   string += "\n";
// }
// console.log(string);

// A
// ABC
// ABCDE
// ABCDEFG
// ABCDEFGHI
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += String.fromCharCode(k + 65);
//   }
//   string += "\n";
// }
// console.log(string);

// A
// BCD
// EFGHI
// JKLMNOP
// QRSTUVWXY
// let n = 5;
// let string = "";
// let count = 0;
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += String.fromCharCode(count + 65);
//     count++;
//   }
//   string += "\n";
// }
// console.log(string);

// ABCDEFGHI
//  ABCDEFG
//   ABCDE
//    ABC
//     A
// let n = 5;
// let string = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * (n - i + 1) - 1; k++) {
//     string += String.fromCharCode(k + 65);
//   }
//   string += "\n";
// }
// console.log(string);

// A
// ABC
// ABCDE
// ABCDEFG
// ABCDEFGHI
// ABCDEFG
// ABCDE
// ABC
//  A
// let n = 5;
// let string = "";
// // Pyramid
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j < n - i + 1; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += String.fromCharCode(k + 65);
//   }
//   string += "\n";
// }
// // Reverse Pyramid
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 1; j < i + 1; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * (n - i) - 1; k++) {
//     string += String.fromCharCode(k + 65);
//   }
//   string += "\n";
// }
// console.log(string);

// ABCDEFGHI
//  ABCDEFG
//   ABCDE
//    ABC
//     A
//    ABC
//   ABCDE
//  ABCDEFG
// ABCDEFGHI
// let n = 5;
// let string = "";
// Reverse Pyramid
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j < i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * (n - i + 1) - 1; k++) {
//     string += String.fromCharCode(k + 65);
//   }
//   string += "\n";
// }
// // Pyramid
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 1; j < n - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * (i + 1) - 1; k++) {
//     string += String.fromCharCode(k + 65);
//   }
// string += "\n";
//}
//console.log(string);

// A
// AB
// ABC
// ABCD
// ABCDE
// ABCD
// ABC
// AB
// A
let n = 5;
let string = "";
// Pyramid
for (let i = 1; i <= n; i++) {
  for (let k = 0; k < i; k++) {
    string += String.fromCharCode(k + 65);
  }
  string += "\n";
}
// Reverse Pyramid
for (let i = 1; i <= n - 1; i++) {
  for (let k = 0; k < n - i; k++) {
    string += String.fromCharCode(k + 65);
  }
  string += "\n";
}
console.log(string);
