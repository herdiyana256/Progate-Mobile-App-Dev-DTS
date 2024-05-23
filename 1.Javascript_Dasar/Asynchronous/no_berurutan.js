//Asynchronous 
/*
Pada proses asynchronous, code dijalankan dengan konsep "non-blocking".
Hal itu berarti tidak perlu menunggu sebuah proses asynchronous selesai dijalankan untuk dapat menjalankan proses selanjutnya.
Sebagai contoh, kita akan membuat proses asynchronous dengan menggunakan perintah setTimeout. setTimeout akan menunda proses eksekusi code selama waktu tertentu.
*/

console.log("Halo")
// menunda eksekusi selama 500 detik /ms / 0.5 detik
setTimeout(() => { console.log("Javascript")}, 500)
console.log("Basic");

/*
Halo
Basic
Javascript
*/