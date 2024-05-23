// Argument: Merupakan nilai aktual yang diberikan saat memanggil fungsi. Nilai argument ini akan mengisi parameter yang telah ditetapkan di fungsi.
// Parameter: Merupakan variabel yang didefinisikan dalam tanda kurung saat mendeklarasikan fungsi. Parameter ini nantinya berfungsi sebagai tempat untuk menampung nilai yang akan diberikan saat fungsi dipanggil.


// mendefinisikan function dengan argumen t
/*
Mari kita definisikan function yang dapat menerima argument.
Nilai yang diteruskan saat Anda memanggil function disebut argument, namun variable yang tertulis dalam definisi disebut parameter.
Seperti yang ditampilkan di bawah ini, argument dapat diteruskan ke function dengan menuliskan nama parameter dalam tanda kurung, seperti ini (parameter) =>.
*/

const FunctionName = (parameter) =>  {
    // Code 
}



const introduce = (name) => {
    // Code
}


// exercise I 
function greet(name ){ // name adalah parameter 
    console.log("Hello, " + name + "!");
}

greet("Bapak Herdiyan"); // argument untuk parameter name
greet("Ibu Andriyani");  // argument untuk parameter name 

/*
Hello, Bapak Herdiyan!
Hello, Ibu Andriyani!
*/




// penggunaan arguments : 
function sumAll() { // parameter 
    let total = 0 
    //  // Loop melalui semua argumen yang diberikan dan menambahkannya ke total.

    for(let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total; // Mengembalikan total jumlah dari semua argumen.
}

// Memanggil fungsi sumAll dengan beberapa argumen.

const result1 = sumAll(1,2,3); // argument 
const result2 = sumAll(5,10,15,20,25);// argument 

console.log(result1);
console.log(result2);
/*
6
75
*/





// Memanggil function dengan argument 
// Untuk memanggil function yang menerima argument, tulis functionName (nilai). Function akan menerima nilai yang ditunjuk dan nilai tersebut akan diberikan untuk parameter. Pada gambar di sebelah kanan, nilai "Ninja Ken" diberikan untuk parameter name saat memanggil function introduce.
const FunctionName = (parameter) = > {
    // kode 
};

FunctionName(nilai);



// example I 
const introduce = (name) => {
    // code
    return `Halo, nama saya ${name}. Senang bertemu dengan anda!`;
};

console.log(introduce("Ninja Ken"));

//Halo, nama saya Ninja Ken. Senang bertemu dengan anda!







// Menggunakan Nilai Argument didalam function 
const introduce = (name) => {
    console.log("Hallo!");
    console.log(`Saya ${name}`);
    // paramater apat digunakan sebagai constant didalam function
};


introduce("Herdiyan Adam Putra"); // argument 1 
introduce("Andi Andriyani"); // argument 2 

/*
Hallo!
Saya Herdiyan Adam Putra
Hallo!
Saya Andi Andriyani
*/






// Tambahkan parameter name ke function
const greet = (name) => {
    // Cetak pesan "Halo, ____"
    console.log(`Halo, ${name}`);
    
  };
  
  // Panggil function greet dengan "Guru Domba" sebagai argument
  greet("Guru Domba");

  // Hallo guru domba 





  