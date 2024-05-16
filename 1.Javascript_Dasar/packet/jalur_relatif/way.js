// Jalur Relatif

//Sejauh ini, Anda telah menggunakan ./fileName untuk menentukan file yang mau di-import. Code ini disebut jalur relatif karena fungsinya adalah untuk menunjukkan jalur yang dapat menghubungkan satu file ke file yang lain. Seperti yang dapat Anda lihat di sebelah kanan, jalur menuju ke file "./dogData" sudah dideklarasikan. Jalur relatif ini menunjukkan posisi menuju dogData.js dari posisi script.js.


/*
Structur direktori / file 

script.js 


dogData.js 

dog.js 


animal.js

*/



// script.js 

import {dog1, dog2} from "./dogData";
// Sebuah relatif Path yang menunjukan jalan ke file dogData.js dari script.js 












//File dalam direktori yang sama 
//Tanda jalur relatif ./ dengan satu titik berarti kita membuat jalur untuk keluar selangkah ke direktori dimana file yang memiliki jalur relatif tersebut disimpan. Seperti contoh di kanan bawah. Jika kita menulis "./dogData" di file script.js, maka kita membuat jalur relatif yang mengarahkan code untuk keluar selangkah dari script.js ke direktori src, dan kemudian masuk ke file dogData.js.


// script.js 
import {dog1, dog2} from "./dogData";
                         // ./ : direktori saat ini
                        // dogData : spesifikasi file 






// Menentukan File dalam Direktori Berbeda 
//Untuk latihan jalur relatif, mari kita coba untuk mengubah struktur direktori yang telah kita gunakan sejauh ini. Seperti yang ditunjukkan di gambar sebelah kiri, mari kita lihat jalur relatif saat meng-import dogData.js dari direktori data ke file script.js.


// script.js 
import {dog1, dog2} from "./data/dogData";
// ./data/ : pindah ke direktori data di dalam direktori yang sama 
// dogData : spesifikasi dogData.js 




//Jalur Relatif 
//Jika Anda mau keluar dari satu direktori, gunakan "../" dengan dua titik. Pelajari gambar di kiri, saat meng-import "dog.js" dari direktori class ke "dogData.js" di direktori data, seperti di gambar kiri. Untuk peng-codeannya bisa dipelajari dari gambar sebelah kanan.


/*
import dog.js ke dogData.js 

src -> script.js 
    data -> dogData.js 
    class -> dog.js


*/

// example
// dogData.js 
import Dog from "../class.dog";
// ../ : keluar satu direktori /diatas 
// class / : pindah ke direktori class
// dog / : spesifikasi dog.js