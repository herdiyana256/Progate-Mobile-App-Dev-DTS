// Latihan Akhir 
/*
Di latihan ini kita akan membuat function yang benama getMax, yang berfungsi untuk menemukan nilai tertinggi/maksimum.
Seperti contoh di bawah, function getMax menerima tiga angka sebagai argument-nya dan me-return nilai maksimum dari ketiga angka tersebut.
*/

const getMax = (a,b,c) => {
    return Math.max(a,b,c);
};
// Deklarasikan getMax function 

const max = getMax(3,7,5); // teruskan 3 argument 

console.log(`Nilai maksimun adalah ${max}`);

//Nilai maksimun adalah 7






// tugas
const number1 = 103;
const number2 = 72;
const number3 = 189;

// Ketik sebuah function getMax untuk mendapatkan nilai maksimum
const getMax = (a, b, c) => {
let max = a;

if(b > max){
  max =b;
}

if(c > max){
  max = c;
}

return max;

};

// Cetak "Nilai maksimum adalah __"
const max = getMax(number1, number2, number3);
console.log(`Nilai maksimum adalah ${max}`);

// Nilai maksimum adalah 189