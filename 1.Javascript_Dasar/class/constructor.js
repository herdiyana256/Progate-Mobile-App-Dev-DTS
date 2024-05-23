/*
onsep Dasar Constructor di Javascript

Sebuah constructor adalah metode khusus dalam sebuah class yang dieksekusi secara otomatis saat membuat instance (objek) dari class tersebut. Constructor bertanggung jawab untuk menginisialisasi nilai properti (atribut) dan menyiapkan objek untuk digunakan.

Membuat Constructor di Javascript

Untuk mendefinisikan constructor dalam class Javascript, gunakan kata kunci constructor diikuti dengan tanda kurung dan blok kode yang berisi instruksi inisialisasi. Berikut contohnya:

JavaScript
class Mobil {
  constructor(merk, warna, tahun) {
    this.merk = merk;
    this.warna = warna;
    this.tahun = tahun;
  }
}
Gunakan kode dengan hati-hati.
content_copy
Dalam contoh diatas, constructor menerima tiga parameter: merk, warna, dan tahun. Parameter ini digunakan untuk menginisialisasi nilai properti yang sesuai dengan nama parameternya.

Fitur Constructor Javascript:

Inisialisasi Properti: Constructor ideal untuk mengatur nilai awal properti objek.
Validasi Data: Anda dapat menggunakan constructor untuk memvalidasi data input dan mencegah nilai yang tidak valid.
Enkapsulasi: Constructor membantu menyembunyikan detail implementasi internal class, mempromosikan enkapsulasi.
Tipe Constructor Javascript:

Constructor Default: Jika tidak didefinisikan secara eksplisit, Javascript secara otomatis membuat constructor default kosong.
Constructor Parameterized: Menerima parameter untuk menginisialisasi properti objek.
Constructor Overloading: Memungkinkan beberapa constructor dengan parameter berbeda dalam satu class.
Contoh Penggunaan Constructor:

JavaScript
class Buku {
  constructor(judul, penulis, genre) {
    this.judul = judul;
    this.penulis = penulis;
    this.genre = genre;
  }

  getDetail() {
    return `Judul: ${this.judul}, Penulis: ${this.penulis}, Genre: ${this.genre}`;
  }
}

const buku1 = new Buku("Seratus Tahun Kesunyian", "Gabriel Garcia Marquez", "Fiksi");
const buku2 = new Buku("Laskar Pelangi", "Andrea Hirata", "Young Adult");

console.log(buku1.getDetail()); // Output: Judul: Seratus Tahun Kesunyian, Penulis: Gabriel Garcia Marquez, Genre: Fiksi
console.log(buku2.getDetail()); // Output: Judul: Laskar Pelangi, Penulis: Andrea Hirata, Genre: Young Adult
Gunakan kode dengan hati-hati.
content_copy
Kesimpulan

Constructor merupakan elemen penting dalam pemrograman berorientasi objek Javascript, memungkinkan inisialisasi dan konfigurasi objek dengan tepat. Memahami dan menggunakan constructor secara efektif membantu membangun aplikasi Javascript yang terstruktur dan mudah dipelihara.
*/


class Mobil {
        constructor(merek, warna, tahun) {
            this.merek = merek;
            this.warna = warna;
            this.tahun = tahun;
        }//Parameter ini digunakan untuk menginisialisasi nilai properti yang sesuai dengan nama parameternya.
}




//Contoh Penggunaan Constructor:
class Buku  {
    constructor(judul, penulis, genre) {
        this.judul = judul;
        this.penulis = penulis;
        this.genre = genre;
    }
    getDetail() {
        return `Judul: ${this.judul}, Penulis: ${this.penulis}, Genre: ${this.genre}`;  
}

}

const buku1 = new Buku("Seratus Kesunyian", "Adam Jordan", "Fiksi");
const buku2 = new Buku("Cuek untuk santai", "Radyartol", "horror");

console.log(buku1.getDetail()); // 
console.log(buku2.getDetail());

/*
Judul: Seratus Kesunyian, Penulis: Adam Jordan, Genre: Fiksi
Judul: Cuek untuk santai, Penulis: Radyartol, Genre: horror
*/





console.log("========================================");




// Code didalam Constructor 
//Seperti yang ditunjukkan di gambar di bawah ini, instruksi dan code juga dapat ditulis di dalam {} constructor. Code yang ditulis di sana akan dipanggil saat instance dibuat. Hal penting untuk diingat adalah code akan dipanggil untuk setiap instance. Karena new Animal() dipanggil dua kali dalam gambar di bawah ini, konten dalam constructor akan dipanggil untuk keduanya.
class Animal {
    constructor () {
        console.log("Hello Pinjol!");

    }// code ini akan dijalankan setelah instance di buat
}

const animal1 = new Animal();
const animal2 = new Animal();

/*
Hello Pinjol!
Hello Pinjol!
*/



// Summary exercise I 
class Animal {
    // Tambahkan constructor
    constructor () {
        console.log("Membuat instance baru");
    }
  }
  
  const animal = new Animal();
  






