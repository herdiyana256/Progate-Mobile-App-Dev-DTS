// Arrow Function 
const namaFungsi - (parameter1, parameter2, ...) => {
    // kode yang akan dijalankan 
};


/*
Note:
Tidak menggunakan kata kunci function.
Diawali dengan definisi nama fungsi (opsional).
D diikuti tanda kurung untuk parameter (opsional).
Dilanjutkan dengan tanda panah =>.
Dapat berisi kode yang akan dijalankan di dalam blok kode (wajib).
*/


// tanpa parameter
const sayHi = () => console.log("Hai!");

sayHi();
 // Menampilkan Hai!


 // 1 param
 const greet = (name) => console.log("Hallo, " + name + "!");

 greet("Adam");
 //Hallo, Adam!



 // beberapa paramter
 const multiply = (x, y) => x  * y;
 const hasil = multiply(5, 3);

 console.log(hasil); //15 



 // fungsi dengan statement multi baris 
 const calculateArea = (length, width) => {
    const area = length * width;
    return area;
 };

 const totalArea = calculateArea(25,12);
 console.log(totalArea);

 // 300 




 // Materi arrow function 
 const introduce = () => { // meenetapkan function
    console.log("Herdiyan Adam");
 }

 introduce(); // memanggil function



 // Menggunakan function tradisional 
 const introduce = function() {
    console.log("Herdiyan Adam ")
 }
 


 // exercise I 
 // Tetapkan arrow function ke constant greet
const greet = () => {
    console.log("Halo!");
  }
  
  
  // Panggil function greet
  greet();
  
