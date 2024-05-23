// Promise adalah sebuah alternatif dari callback. Silakan lihat code di bawah ini.
const printer = (data) => {
    console.log(data);
  }
  
  const power = (a, b) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = a ** b;
        resolve(result);
      }, 1000);
    })
  }
  
  power(3, 2)
  .then(res => {
    return power(res, 2);
  })
  .then(res => {
    return power(res, 2);
  })
  .then(res => {
    printer(res);
    return power(res, 2);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    console.log('Promise telah selesai!');
  })
  
  
  /*
  Output:
  
  6561
  Promise telah selesai!
  
  */

  

  /*

Dalam menjalankan Promise dengan code return new Promise((resolve, reject) => {, kita bisa mendapatkan output dari sebuah proses asynchronous dengan perintah .then() atau .catch().
.then() mendapatkan hasil dari proses asynchronous ketika proses berjalan dengan sukses dan .catch() melakukannya ketika proses gagal.
.then() menerima sebuah parameter yang dikirim dengan perintah resolve.
.catch() juga menerima parameter yang dikirim dengan perintah reject.
.finally() berjalan setelah proses asynchronous selesai, baik itu berhasil ataupun error.
Dalam contoh di atas, hasil proses asynchronous dimasukkan ke dalam resolve(result) dan nilai result diteruskan ke res dari code berikut.
.then(res => {
  return power(res, 2);
})

Kita juga bisa menjalankan proses asynchronous berikutnya dengan menggunakan .then() lebih dari satu.
power(3, 2)
.then(res => {
  return power(res, 2);
})
.then(res => {
  return power(res, 2);
})

Code terlihat lebih teratur dan lebih mudah dipahami!

Formatnya disebut "chaining", dan kita menghindari penggunaan callback hell.

Terakhir, izinkan saya untuk meringkas tahapan Promise.
Promise memiliki 3 stage, yaitu:
Pending - kondisi awal ketika Promise dibuat.
Resolved - kondisi ketika sebuah proses asynchronous berhasil dijalankan.
Rejected - kondisi ketika terdapat error di sebuah proses asynchronous.
  


  */