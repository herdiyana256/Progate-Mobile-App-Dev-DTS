//callback function adalah sebuah fungsi yang dipass sebagai argumen ke dalam fungsi lain. Fungsi yang dipanggil ini kemudian dieksekusi setelah fungsi utama selesai dijalankan. Callback function memungkinkan Anda untuk membuat kode yang asynchronous dan modular, sehingga meningkatkan fleksibilitas dan maintainability kode Anda.

function mainFunction(callbackFunction) {
        // lakukan beberapa operasi


        // Panggil callback function 
        callbackFunction();
}

//Definisikan callback function 
function callbackFunction() {
        //Lakkan operasi setelah mainFunction selsai
}

// Panggil mainFunction dengan callback function 
mainFunction(callbackFunction);

/*
Pada contoh diatas, mainFunction menerima callbackFunction sebagai argumen.
mainFunction melakukan beberapa operasi terlebih dahulu.
Setelah selesai, mainFunction memanggil callbackFunction.
callbackFunction kemudian melakukan operasi setelah mainFunction selesai.

*/



//Contoh Penggunaan 
function loadUserData(callback) {
    // Lakukan permintaan HTTP untuk memuat data pengguna dari server
    // ...

    // Setelah data dimuat, panggil callback function dengan data pengguna
    callback(userData);


}

function displayUserData(userData) {
    // Tampilkan data pengguna di halaman web 
    // ....
}

// Panggil loadUserData dengan callback function
loadUserData(displayUserData);







// example code
const printKen = () => {
    console.log("Ninja Ken");
  };
  
  const printMaster = () => {
    console.log("Guru Domba");
  };
  
  const call = (callback) => {
    console.log("Memanggil function callback.");
    callback();
  };
  
  // Ketik ulang argument ini sebagai printMaster dan konfirmasikan output-nya
  call(printMaster);
  




  //Apa yang Dimaksud dengan Callback Function?

  //Jenis Argument 

  /*
Dalam JavaScript, function dapat diteruskan sebagai argument.
Function yang diteruskan sebagai argument disebut callback function.
  

function(argument); => string, integer, boolean 
argumens = function


Function yang di teruskan sebagai argument disebut callback function 

*/





//Meneruskan Callback Function
const call = (parameterName) => {
    // code 
};
 
call(functionName); // teruskan function sebagai argument






//example full code 
const printKen =() => {

};

const call = (callback) => { // function printKen telah di tetapkan

};


call(printKen);
//teruskan function printKen sebagai argument 







//Memanggil dan Meneruskan function
//Function dipanggil dengan menempatkan () setelah nama function. Tanpa (), function hanya akan menunjukkan definisinya. Karena itu, seperti yang dapat Anda lihat di kedua gambar di bawah, memanggil dan meneruskan function ditulis secara berbeda.
printKen() -> Memanggil function 

printKen -> mereferensikan / meneruskan function tersebut 



//example full code 
const printDam = () => {
        console.log("Herdiyan");
};

const call = (callback) => {
    console.log("Memanggil callback function.");
        callback();
};


call(printDam)// jangan tambahkan () ketika meneruskan call back function 
/*
Memanggil callback function.
Herdiyan

*/






//Alur Callback Funcrion 
//Mari kita lihat proses pemanggilan function printKen, yang diteruskan sebagai argument function call.
const printDam = () =>  {
        console.log("Pinjol Ilegal");
};

const call = (callback) =>  { // printDam  ditetapkan ke callback
        console.log("Memanggil callback function");
        callback();
}; // function `callback` di panggil


call (printDam);
// Teruskan printDam sebagai argument dan panggil function call 

/*

Memanggil callback function
Pinjol Ilegal
*/




// example code 1 
const printKen = () => {
    console.log("Ninja Ken");
  };
  
  // Tambahkan parameter callback ke function call
  const call = (callback) => {
    console.log("Memanggil function callback.");
    // Panggil callback function
    callback();
  };
  
  // Teruskan printKen sebagai argument dan jalankan function call
  call(printKen);
  