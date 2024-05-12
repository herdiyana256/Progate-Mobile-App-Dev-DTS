// Apa itu constant ?
//Constant mirip dengan variable, tetapi tidak dilakukan deklarasi dengan let. Cara menentukan constant adalah dengan menggunakan kata kunci const. Lihat lebih lanjut perbedaan antara keduanya pada slide berikutnya.

const name = "Herdiyan";
console.log(name); //Herdiyan



const pi = 3.186;
console.log(pi); // output :3.186

pi = 3.14;// Error : Assignment to constant variable  -> tidak bisa ubah 



//Mendeklarasikan variabel const untuk array
const numbers = [1,2,3,4,5,6];
console.log(numbers); 

numbers[0] = 10; // nilai array dapat diubah 
console.log(numbers); //[ 10, 2, 3, 4, 5, 6 ]

numbers = [6,7,8,9,10]; // Error : Assignment to constant variable 