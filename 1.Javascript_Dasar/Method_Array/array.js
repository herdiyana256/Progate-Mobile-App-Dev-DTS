//Array merupakan struktur data fundamental dalam JavaScript yang digunakan untuk menyimpan koleksi nilai. JavaScript menyediakan berbagai method array untuk memanipulasi dan mengelola data dalam array. Berikut beberapa method array yang umum digunakan beserta contoh kodenya:


// Method Array - push()
//Digunakan untuk menambahkan elemen baru ke akhir array.
const angka = [1,2,3,4];

angka.push(5); // Menambahkan element 5 ke akhir array 
console.log(angka);

//[ 1, 2, 3, 4, 5 ]








// Method Array - Pop()
//Menghapus dan mengembalikan elemen terakhir dari array.
const angka = [1,2,3];
const terakhir = angka.pop(); // Menghapus dan mengembalikan elemen 3

console.log(angka);
console.log(terakhir);

/*
[ 1, 2 ]
3
*/




//Shift()
//Menghapus dan mengembalikan elemen pertama dari array.

const angka = [1,2,3];
const pertama = angka.shift(); // Menghapus dan Mengembalikan element 1 
console.log(angka); // output : [2,3]
console.log(pertama); // 1




// Unshift()
//Menambahkan elemen baru ke awal array.
const angka = [1,2,3];
angka.unshift(0); // Menambahkan element 0 ke awal array 
console.log(angka); // Output : [0,1,2,3];



//Slice()
//Membuat array baru dengan elemen yang diekstrak dari array yang sudah ada.
const angka = [1, 2, 3, 4, 5];
const irisan = angka.slice(2, 4); // Mengekstrak elemen dari indeks 2 hingga 3 (tidak termasuk elemen ke-4)
console.log(irisan); // Output: [3, 4]




//Splice()
//Memotong, menambahkan, atau menghapus elemen dari array.
const angka = [1, 2, 3, 4, 5];
angka.splice(2, 2, 6, 7); // Menghapus 2 elemen dari indeks 2, dan menambahkan elemen 6 dan 7
console.log(angka); // Output: [1, 2, 6, 7, 5]



//Join()
//Menggabungkan elemen array menjadi string dengan pemisah yang ditentukan.
const nama = ["Adam", "Putra", "Herdiyan"];
const gabungan = nama.join(", ");
console.log(gabungan);
//Adam, Putra, Herdiyan




//Reverse
//Membalikkan urutan elemen dalam array.
const angka = [1,2,3,4,5];
angka.reverse(); 
console.log(angka);
//[ 5, 4, 3, 2, 1 ]

const nama = ["Herdiyan", "Adam", "Putra"];
nama.reverse();
console.log(nama);
//[ 'Putra', 'Adam', 'Herdiyan' ]




//Sort()
//Mengurutkan elemen array secara ascending (naik) atau descending (turun).
const angka = [6,5,4,3,2,1];
angka.sort(); // Mengurutkan secara ascending(naik)
console.log(angka);  // [1,2,3,4,5,6]


angka.sort((a - b) => b -a); // Mengurutkan secara descending
console.log(angka); // [6,5,4,3,2,1]



//Filter()
//Membuat array baru yang berisi elemen yang memenuhi kondisi tertentu.
const angka = [1,2,3,4,5,6,7];
const genap = angka.filter(x => x % 2 === 0)// Memilih element genap 
console.log(genap); // Output : 2,4




// Map()
//Membuat array baru dengan hasil transformasi dari setiap elemen array.
const angka = [1,2,3,4,5,6,7];
const kuadrat = angka.map(x => x * x ); // Menghitung kuadrat setiap element
console.log(kuadrat)
/*
[
   1,  4,  9, 16,
  25, 36, 49
]
*/