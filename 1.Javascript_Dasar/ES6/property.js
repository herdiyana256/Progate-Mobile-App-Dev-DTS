//Property length
//Untuk mendapatkan jumlah element dalam array, Anda dapat menggunakan arrayName.length seperti gambar di bawah. Selain itu, dengan length, kita dapat merubah aturan loop for dari latihan sebelumnya ke kondisi di gambar sebelah kanan. Penulisan seperti ini sangat umum digunakan pada saat menangani array dalam loop

const fruits = ["apel", "jeruk", "pisang", "anggur"];

console.log(fruits.length); // 4





const buah = ["semangka", "jambu", "alpukat", "melon"];

for(let i = 0; i <  buah.length; i++){
    console.log(buah[i]);
}
/*
semangka
jambu
alpukat
melon
*/





const animals = ["anjing", "kucing", "domba", "kelinci", "monyet", "harimau", "beruang", "gajah"];

// Gunakan property length untuk mencetak jumlah element di array
console.log(animals.length);

// Gunakan property length untuk mengubah kondisi di bawah
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

/*
8
anjing
kucing
domba
kelinci
monyet
harimau
beruang
gajah

*/

