// Method forEach 

//forEach adalah salah satu method array yang berguna untuk melakukan iterasi (pengulangan) pada setiap elemen dalam array.


/*
Kegunaan:

Menjalankan fungsi tertentu pada setiap elemen array.
Memanipulasi nilai elemen tanpa harus menggunakan loop manual (for atau while).
Sintaksis Das
*/

Array.forEach(function(currentValue, index, arr) {
        // Kode yang akan di eksekusi pada setiap element
});

/*
Params

currentValue: Merupakan nilai dari elemen array saat ini.
index: (Opsional) Merupakan indeks dari elemen array saat ini ( dimulai dari 0 ).
arr: (Opsional) Merupakan referensi ke array asli.

*/



//contoh penggunaan 
const nama = ["Herdiyan", "Adam", "Putra"];

nama.forEach(function(nama){
        console.log(`Hallo perkenalkan nama saya ${nama}, salam kenal ya !`);
})

/*
    Hallo perkenalkan nama saya Herdiyan, salam kenal ya !
Hallo perkenalkan nama saya Adam, salam kenal ya !
Hallo perkenalkan nama saya Putra, salam kenal ya !
*/



/*
Kesimpulan 

Penting Diingat:

forEach tidak mengembalikan nilai baru (seperti map).
forEach hanya untuk iterasi, tidak untuk modifikasi permanen pada elemen array (gunakan method lain seperti map atau loop manual jika perlu modifikasi).
Kelebihan forEach:

Lebih ringkas dan mudah dibaca dibanding loop manual (for atau while) untuk iterasi sederhana.
Dapat mengakses nilai elemen (currentValue), indeks (index), dan array asli (arr) dalam fungsi callback.
Kesimpulan:

forEach adalah method yang efisien untuk melakukan iterasi pada setiap elemen array di JavaScript.  Gunakan forEach ketika Anda ingin menjalankan fungsi tertentu pada setiap elemen tanpa perlu memodifikasi permanen isi array.


*/





// contoh 
//Method forEach digunakan untuk memanggil setiap nilai di sebuah array secara berurutan. Di bawah ini adalah contoh cara mencetak setiap nilai dalam array numbers sesuai urutannya. Mari kita lihat lebih lanjut cara kerjanya pada slide berikutnya.

const numbers = [1,2,3]; 

numbers.forEach((number) =>
     {console.log(number)});

/*
1
2
3
*/






//Cara Kerja forEach 
//argument method forEach adalah Arrow Function yang telah kita pelajari dalam ES6 Study III. Dengan method forEach, setiap nilai array akan diberikan kepada argument arrow function, satu per satu, secara berurutan, dan code dalam arrow function akan diterapkan untuk setiap nilai tersebut. Catatan: sebagian besar method yang akan Anda pelajari dalam pelajaran ini digunakan dengan arrow function.
myArray = [elem1, elem2, elem3];

myArray.forEach((arguments) => {/* code*/});
               // arrow function 
    // Mengulangi code yang sama untuk setiap element dia array            






 // Cara Menggunakan forEach 
 /*
Berikut adalah contoh cara menggunakan method forEach.
Setiap nilai dalam array numbers diberikan untuk argument number dalam arrow function secara satu per satu. Lalu, code di dalam arrow function console.log(number) akan diulang untuk setiap nilai tersebut.
 */

const numbers = [1,2,3,4,5];
                            // arrow function
numbers.forEach((number) => {console.log(number)});
               //argument   //code yang diterapkan

/*
1
2
3
4
5

*/





//Callback function 
// Function yang ditulis sebagai argument di function lain yang dipanggil disebut callback function. Kita akan banyak menggunakan callback function di kursus ini, jadi pastikan untuk memahaminya.
const numbers = [1,2,3,4,5];

numbers.forEach((number) => {console.log(number)});
                            // Callback function






// Callback Function Beberapa Baris
//Saat Callback function ditempatkan dalam argument seperti dalam method forEach, code dapat menjadi terlalu panjang. Dalam kasus ini, lebih baik Anda menulis code seperti yang ditunjukkan di bawah ini. Menggunakan beberapa baris setelah { akan membuat code Anda lebih mudah dibaca dan dipahami.
const numbers = [1,2,3,4];

numbers.forEach(number) =>  { // callback function
        console.log(number);
}
/*
1
2
3
*/



//tugas akhir
const characters = ["Ninja Ken", "Baby Ben", "Guru Domba", "Birdie"];

// Cetak semua element di dalam array characters dengan menggunakan method forEach
characters.forEach((character) => {console.log(character) });

