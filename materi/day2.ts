/* 
    ========== IF STATEMENT ==========

    if(condition){
        code block
    }
*/

const age: number = 10;

if (age >= 17) {
  console.log("Anda bisa buat KTP");
}

/* 
========== ELSE STATEMENT ==========
backup plan dari if statement
*/

const age2: number = 20;

if (age2 >= 17) {
  console.log("Anda bisa buat KTP");
} else {
  console.log("Anda belum bisa buat KTP");
}

/* 
========== ELSE IF STATEMENT ==========
backup plan dari if statement
*/

const grade: string = "F";

if (grade === "A") {
  console.log("Nilai Bagus");
} else if (grade === "B") {
  console.log("Nilai Lumayan");
} else if (grade === "C") {
  console.log("Nilai Buruk");
} else {
  console.log("Nilai tidak diketahui");
}

/* 
========== SWITCH CASE ==========

switch(value){
    case value1:
        logic
        break;
    case value2:
        logic
        break;
    .....
}
*/

const day: string = "senin";

switch (day) {
  case "senin":
    console.log("Hari senin");
    break;
  case "selasa":
    console.log("Hari selasa");
    break;
  case "rabu":
    console.log("Hari rabu");
    break;
  default:
    console.log("Hari tidak diketahui");
    break;
}

/* 
========== LOGICAL OPERATOR ==========
&& -> and
|| -> or
! -> not
*/

// AND -> harus kedua kondisinya bernilai true agar menghasilkan nilai true
const umur: number = 10;
const punyaSIM: boolean = true;

if (umur >= 17 && punyaSIM) {
  console.log("Boleh bawa kendaraan");
} else {
  console.log("Belum boleh bawa kendaraan");
}

// OR -> kalau salah satu ada yang nilainya true, akan menghasilkan nilai true
const car: string = "civic";

if (car === "bmw" || car === "mercy") {
  console.log("Mobil eropa");
} else {
  console.log("Mobil jepang");
}

// NOT -> membalikkan nilai boolean
const isSunny: boolean = false;
const isRaining: boolean = !isSunny;

console.log("isSunny", isSunny);
console.log("isRaining", isRaining);

/* 
========== TERNARY OPERATOR ==========
shortcut untuk if else condition

condition ? true : false
*/

const str: string = "javascript";

// cara panjang
if (str === "javascript") {
  console.log("javascript");
} else {
  console.log("Not javascript");
}

// cara pendek
console.log(str === "javascript" ? "javascript" : "Not javascript");

/* 
========== LOOP STATEMENT (perulangan) ==========
rangkaian instruksi yang dilakukan berulangkali hingga kondisinya tidak terpenuhi

tipe loop: for loop, while loop, do while loop
*/

// FOR LOOP -> mempunyai 3 statement
// statement 1 : menginisialisasikan variable dari looping itu sendiri
// statement 2 : mendefine kondisi dari looping tersebut
// statement 3 : kode yang dieksekusi diakhir setiap iterasi

/* 
    for(statement1;statement2;statement3){
        code block yang akan diulang
    }
*/

for (let i = 0; i < 10; i++) {
  console.log("hello world");
}

// nested loop
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log("hello world");
  }
}

/* 
========== WHILE LOOP ==========

while(condition){
    code block yang akan diulang
}
*/

let i: number = 1;

while (i < 10) {
  console.log("Hello world -> while loop");

  i++;
}

/* 
========== DO WHILE LOOP ==========

do {
    code block yang akan diulang
} while(condition);

*/

let count: number = 1;

do {
  console.log("ini iterasi ke : " + count);
  count++;
} while (count <= 5);

/* 
========== BREAK ==========
menghentikan loop
*/

let sum: number = 1;

while (true) {
  console.log(sum);

  if (sum >= 5) {
    break;
  }

  sum++;
}

/* 
========== CONTINUE ==========
melakukan skip pada looping
*/

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}

console.log("TEST");
