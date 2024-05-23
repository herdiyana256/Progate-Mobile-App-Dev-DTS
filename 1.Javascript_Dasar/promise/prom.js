// Promise adalah objek yang merepresentasikan hasil dari operasi asynchronous. Operasi asynchronous adalah operasi yang membutuhkan waktu untuk diselesaikan, seperti memuat data dari server atau membaca file.


/*
Pending: State awal dari promise, menandakan bahwa operasi asynchronous belum selesai.
Fulfilled: State yang menunjukkan bahwa operasi asynchronous telah selesai dengan sukses dan menghasilkan nilai.
Rejected: State yang menunjukkan bahwa operasi asynchronous telah selesai dengan gagal dan menghasilkan alasan penolakan.

*/


const promise = new Promise((resolve, reject) => {
    // operasi asynchronous disini
    if(kondisi sukses) {
        resolve(nilai);// Promise terpenuhi dengan value//nilai
    } else {
        reject(reason);// Promise ditolak dengan alasan 
    }
});





/*
Menangani Promise dengan then dan catch

Promise dapat ditangani dengan menggunakan method then dan catch. Method then digunakan untuk menangani hasil dari promise yang terpenuhi, sedangkan method catch digunakan untuk menangani alasan penolakan dari promise yang ditolak.


*/
promise 
    .then(nilai => {
        // Menangani hasil dari promise yang terpenuhi
        console.log("Promise terpenuhi:", nilai);
    });
    .catch(reason => {
        // Menangani alasan penolakan dari promise yang di tolak 
        console.log("Promise di tolak :", reason);
    });





    /*
Chaining Promise

Chaining promise adalah teknik untuk menghubungkan beberapa promise secara berurutan. Chaining promise memungkinkan pengembang untuk menjalankan operasi asynchronous secara berurutan, di mana hasil dari promise sebelumnya digunakan sebagai input untuk promise berikutnya.

    */

const promise1 = new Promise((resolve, reject) => {
    // Operasi asynchronous 1
    resolve('Hasil promise 1');
  });
  
  const promise2 = promise1.then(hasil => {
    // Operasi asynchronous 2 dengan input dari promise 1
    return new Promise((resolve, reject) => {
      resolve(hasil + ' - Hasil promise 2');
    });
  });
  
  const promise3 = promise2.then(hasil => {
    // Operasi asynchronous 3 dengan input dari promise 2
    console.log('Hasil akhir:', hasil);
  });







  // Contoh penggunaan Promise  - memuat data dari server
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(todo => {
            console.log("Todo", todo);
    })
   
    .catch(error => {
            console.log("Error", error);
    });