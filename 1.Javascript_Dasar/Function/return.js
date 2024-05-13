//Kata kunci return dalam JavaScript digunakan untuk mengembalikan nilai dari sebuah fungsi. Nilai yang dikembalikan ini dapat digunakan oleh kode yang memanggil fungsi tersebut.


//Selanjutnya, kita akan mempelajari cara menggunakan hasil function di tempat function tersebut dipanggil. Nilai yang dihasilkan setelah function dipanggil, disebut nilai return. Sebagian besar function digunakan untuk mengirim nilai return kembali ke tempat function tersebut dipanggil. Di bawah ini, function add akan menerima 3 dan 7, lalu nilai return 10 akan dihasilkan


//Contoh 1: Fungsi Penjumlahan
function add(a,b) {
    const sum = a + b; 
    return sum;
}

const result = add(5,10);
console.log(result);


// fungsi pemeriksaan nilai ganjil / genap 
function isEven(number) {
    if(number % 2 === 0) {
        return true;

    } else {
        return false;
    }
}

const isTenEven = isEven(10); 
console.log(isTenEven); // Menampilkan true(karena 10 genap)


const isElevenEven = isEven(11);
console.log(isElevenEven); // Menampilkan false (karena 11 ganjil)








// Function dengan Nilai Return 
//Anda dapat mengembalikan nilai dengan menempatkan statement return di dalam function dengan menulis nilai return. Hal ini akan memungkinkan function menghasilkan output sebagai nilai return.
const FunctionName = ()=> {
    return nilai;
}



// example I
const add = (a, b) => {
    return a + b;
    // penjumlahan a dan b akan di kembalikan dimana function di panggil
}




// Menggunakan Nilai return 
/*
Jika function memiliki nilai return, pemanggilan function akan digantikan oleh nilai return setelah function selesai dijalankan.
Seperti yang ditampilkan di bawah ini, Anda juga dapat memberikan pemanggilan function untuk constant.
*/

const add = function(a, b) {
    return a + b;
};

const sum = add(1,3); // pemanggilan function dan di tetapkan 


console.log(sum);




// salary total 
const salary  = function(salary1, salary2){
    return salary1 + salary2;

};

const totalSalary = salary(500000,1750000);

console.log(totalSalary); // 2250000






// example II 
const half = (number) => {
    // Return nilai dari variable number dibagi 2
    return  number / 2;
  };
  
  // Defenisikan constant result
  const result = half(130);
  
  
  // Cetak pesan "Separuh dari 130 adalah ____"
  console.log(`Separuh dari 130 adalah ${result}`);

  //Separuh dari 130 adalah 65




  // Jenis Nilai Return 
  /*
eperti halnya argument, Anda dapat menggunakan jenis nilai yang berbeda untuk nilai return. Misalnya, nilai boolean (true atau false)
akan dikembalikan (return) jika anda menggunakan pernyataan bersyarat. Ini sama seperti kondisi di pernyataan if.
  */

// Fungsi check mengambil satu argumen, yaitu sebuah angka, dan mengembalikan nilai boolean.
// Nilai baliknya adalah true jika angka tersebut genap (habis dibagi 2 tanpa sisa), dan false jika tidak.
const check = (number) => {
    return number % 2 === 0;
};

// Memanggil fungsi check dengan angka 6. Karena 6 adalah bilangan genap, hasilnya adalah true.
console.log(check(6)); // Menampilkan true

// Memanggil fungsi check dengan angka 7. Karena 7 adalah bilangan ganjil, hasilnya adalah false.
console.log(check(7)); // Menampilkan false








// Mengakhiri function dengan return 
/*
Mari kita pelajari secara lebih terperinci tentang pernyataan return.
Anda juga dapat menggunakan return untuk keluar dari sebuah function. Namun, penting diketahui bahwa code dalam tanda kurung kurawal yang sama {}, yang terletak setelah return tidak akan dijalankan.

*/

const add = (a,b) => {
    return a + b; // menghentikan code disini 
    console.log("Hasil"); // tidak di eksekusikan 
}






// tambahkan statement if didalam function 
const check = (number) => {
    // periksa apakah number adalah kelipatan dari 3 dan return hasilnya
    return number % 3 === 0;
  };
  
  // Panggil function check dalam kondisi statement if
  if ( check(123) ) {
    console.log("Multiple of 3");
  } else {
    console.log("Not a multiple of 3");
  }
// Multiple of 3 
  