// Async / Await pada Javascript
//Async/Await adalah fitur yang diperkenalkan pada ECMAScript 2017 (ES2017) untuk menangani operasi asynchronous di JavaScript dengan cara yang lebih mudah dibaca dan ditulis dibandingkan dengan callback atau Promise biasa.


/*

Konsep Dasar
JavaScript memiliki nature single-threaded, artinya JavaScript hanya bisa mengerjakan satu tugas pada satu waktu. Namun, JavaScript juga mendukung asynchronous operations, yaitu operasi yang tidak perlu menunggu selesai untuk melanjutkan eksekusi kode lainnya.

Async/Await dibangun di atas konsep Promise.  Async/Await menyediakan sintaks khusus untuk membuat kode asynchronous terlihat seperti kode synchronous (serentak).


Keyword async dan await
async: Keyword ini digunakan untuk mendeklarasikan sebuah fungsi sebagai asynchronous function. Fungsi asynchronous dapat mengembalikan sebuah Promise.
await: Keyword ini hanya bisa digunakan di dalam fungsi asynchronous. await digunakan untuk menunggu Promise yang dikembalikan oleh operasi asynchronous hingga selesai, sebelum melanjutkan eksekusi kode selanjutnya.
*/

async function getUser (userId) {
    // SIMULASI OPERASI ASYNCHRONOUS YANG MENGAMBIL DATA USER
    const response = await.fetch(`https://api.example.com/user${userId}`);
    const data = await response.json();
    return data;
}

async function main() {
    try {
            const user = await.getUser(123);
            console.log("User", user);

    } catch(error) {
        console.error("Error", error);
    }
}

main();
/*

Pada contoh tersebut, fungsi getUser dideklarasikan sebagai asynchronous function menggunakan keyword async. Di dalam fungsi getUser, keyword await digunakan untuk menunggu Promise yang dihasilkan oleh operasi fetch untuk mengambil data user. Eksekusi kode console.log("User:", user) akan ditunda hingga proses pengambilan data user selesai.

Fungsi main juga dideklarasikan sebagai asynchronous function. Di dalam fungsi main, await digunakan untuk menunggu Promise yang dihasilkan oleh fungsi getUser. Blok try...catch digunakan untuk menangani error yang mungkin terjadi selama proses pengambilan data user.
*/


/*
Kesimpulan 

Async/Await merupakan sintaks yang sangat membantu dalam penulisan kode asynchronous di JavaScript.  Dengan Async/Await, kode asynchronous menjadi lebih mudah dibaca, ditulis, dan dimaintain dibandingkan dengan menggunakan callback atau Promise biasa.




tune

share


more_vert


*/