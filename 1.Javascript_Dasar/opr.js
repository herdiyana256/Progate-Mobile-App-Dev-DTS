// Operator  perbandingan dalam javascript 
console.log(10== "10");
console.log(10 === "10"); 
/*
true 
false 
*/


// Sama dengan dan tipe data sama (===)
//Operator === digunakan untuk membandingkan apakah dua nilai sama dan memiliki tipe data yang sama.


console.log(10 === '10'); // Output : False 
console.log(true === 1); // Output : false 




// Tidak sama dengan != 
//Operator != digunakan untuk membandingkan apakah dua nilai tidak sama. Operator ini tidak mempertimbangkan tipe data.


console.log(10 != "10"); // output : fa;se
console.log(10 !== "10"); // outpur : true 



// tidak sam dengan dan tipe data sama !== 
//Operator !== digunakan untuk membandingkan apakah dua nilai tidak sama dan tidak memiliki tipe data yang sama.

console.log(10 !== "10"); // Output : true 
console.log(true !== 1); // Output : true 



// Lebih besar dari > 
//Operator > digunakan untuk membandingkan apakah nilai pertama lebih besar dari nilai kedua.

console.log(10 > 5); // Output: true
console.log("abc" > "xyz"); // Output: false



//Lebih kecil dari (<)
//Operator < digunakan untuk membandingkan apakah nilai pertama lebih kecil dari nilai kedua.
console.log(5 > 10); // Output: false
console.log("xyz" < "abc"); // Output: true





// Lebih besar dari atau sama dengan (>=)
//Operator >= digunakan untuk membandingkan apakah nilai pertama lebih besar dari atau sama dengan nilai kedua.
console.log(10 >= 10); // Output: true
console.log(5 >= 10); // Output: false


// Lebih kecil dari atau sama dengan (<=)
//Operator <= digunakan untuk membandingkan apakah nilai pertama lebih kecil dari atau sama dengan nilai kedua.
console.log(10 <= 10); // Output: true
console.log(10 <= 5); // Output: false



// example ii : 
onst angka1 = 10;
const angka2 = 5;

if (angka1 > angka2) {
  console.log(angka1 + " lebih besar dari " + angka2);
} else if (angka1 < angka2) {
  console.log(angka1 + " lebih kecil dari " + angka2);
} else {
  console.log(angka1 + " sama dengan " + angka2);
}




// exercise 
const password = "ninjaken";

// Ketika nilai password adalah "ninjaken", cetak "Berhasil log in"
if (password === "ninjaken") {
  console.log("Berhasil log in");
}

// Ketika nilai password bukan "ninjaken", cetak "Password salah"
if (password !== "ninjaken") {
  console.log("Password salah");
}



