// Function 
//unction adalah kumpulan instruksi. Seperti contoh di bawah ini, function dengan nama introduce memiliki dua operasi yang dapat mencetak Halo dan Menyebut nama. Mari kita pelajari cara membuat function di slide berikutnya.

console.log("Halo");
console.log("Nama saya Herdiyan Adam Putra");


//Mendefinisikan Function
//Untuk membuat function, Anda harus mendefinisikannya. Untuk mendefinisikan function, ketik function(), lalu tulis hal yang Anda ingin function tersebut lakukan didalam {} (tanda kurung kurawal). Kita akan mempelajari lebih dalam tentang definisi function ke depannya.

const FunctionName = function() {
    // code 
};



// Memanggil Function
//Definisi function itu penting, namun Anda harus memanggil function untuk benar-benar menggunakannya. Untuk memanggil function dalam contoh di bawah ini, tulis introduce();. Anda dapat melihat cara kerjanya dengan menulis code Anda sendiri dalam latihan ini.
const introduce = function() {
    console.log("Halo,");
    console.log("Naya adalah herdiyan adam putra");
};

introduce();
/*
Halo,
Naya adalah herdiyan adam putra
*/





const greet = function() {
    console.log("Halo!");
    console.log("Ayo belajar function!");
  };
  
  // Panggil function greet di bawah
  greet();
/*
Halo!
Ayo belajar function!
*/




// Menetapkan function 
const introduce = function() {
    console.log("Hallo");
    console.log("Nama saya adalah herdiyan adam putra");
}

introduce();
/*
Hallo
Nama saya adalah herdiyan adam putra
*/







// Tetapkan function ke constant hello
const hello = function() {
    console.log("Halo!");
    console.log("Saya Herdiyan ");
  }
  
  
  // Panggil function yang ditetapkan di constant hello
  hello();
  