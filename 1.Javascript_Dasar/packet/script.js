// Pindahkan pendefinisian class Animal ke animal.js dan hapus code dibawah

// Pindahkan pendefinisian class Dog ke dog.js dan hapus code dibawah

// Code dibawah jangan diganggu karena bukan bagian dari class Animal ataupun Dog
const dog = new Dog("Leo", 4, "Chihuahua");
dog.info();



// Mengapa terjadi kesalahan ?

//Dalam latihan sebelumnya, kesalahan terjadi setelah Anda memisahkan file. Hal ini terjadi karena nilai yang diperlukan untuk file dihapus saat Anda melakukan pembagian code ke file yang berbeda. Dalam contoh di bawah ini, pesan error ditampilkan karena class Animal tidak ada di dalam dog.js.






// lalu bagaimana ?Memisahkan File (2)
//Kesalahan saat membagi file dapat diselesaikan dengan menautkan setiap file dan meneruskan nilai yang diperlukan ke file tersebut. Dalam kasus ini, Anda harus memperbolehkan class Animal untuk digunakan di dalam dog.js, dan memperbolehkan class Dog agar dapat digunakan di dalam script.js. Di slide berikutnya, mari kita lihat cara menautkan file.
script.js    dog.js      animal.js






// export 
//Pertama, mari kita buat agar class Animal dalam animal.js dapat digunakan dalam file lain. Setelah mendefinisikan class, tulis export default ClassName untuk meng-export class dan memungkinkannya untuk diteruskan ke file yang berbeda
class Animal {
    // 
}

export default Animal; // Memperbolehkan class Animal digunakan di file lain