/*
NESTED OBJECT 
Objek Bersarang dalam JavaScript
Objek bersarang (nested object) adalah struktur data di JavaScript yang memungkinkan Anda untuk menyimpan data yang kompleks dengan cara yang terorganisir dan mudah dipahami. Dalam objek bersarang, satu objek dapat berisi objek lain sebagai propertinya. Hal ini memungkinkan Anda untuk mengelompokkan data terkait dan membuat hierarki informasi yang kaya.

Contoh 1: Data Mahasiswa
Berikut adalah contoh objek bersarang yang menyimpan data mahasiswa:

JavaScript
const mahasiswa = {
  nama: "Budi",
  nim: "123456789",
  alamat: {
    jalan: "Jalan Merdeka",
    kota: "Semarang",
    provinsi: "Jawa Tengah"
  },
  matakuliah: [
    "Matematika",
    "Fisika",
    "Pemrograman"
  ]
};
Gunakan kode dengan hati-hati.
content_copy
Dalam contoh ini, objek mahasiswa memiliki tiga properti:

nama: Menyimpan nama mahasiswa
nim: Menyimpan nomor induk mahasiswa
alamat: Objek bersarang yang menyimpan informasi alamat mahasiswa, termasuk jalan, kota, dan provinsi
matakuliah: Array yang menyimpan daftar mata kuliah yang diambil oleh mahasiswa
Untuk mengakses data dari objek bersarang, Anda dapat menggunakan operator titik (.) dan tanda kurung siku ([]).

JavaScript
console.log(mahasiswa.nama); // Output: Budi
console.log(mahasiswa.alamat.jalan); // Output: Jalan Merdeka
console.log(mahasiswa.matakuliah[1]); // Output: Fisika
Gunakan kode dengan hati-hati.
content_copy
Contoh 2: Data Toko Online
Contoh berikut menunjukkan bagaimana objek bersarang dapat digunakan untuk menyimpan data produk di toko online:

JavaScript
const toko = {
  nama: "Toko Online ABC",
  produk: [
    {
      id: 1,
      nama: "Laptop",
      harga: 7000000,
      stok: 10
    },
    {
      id: 2,
      nama: "Handphone",
      harga: 3000000,
      stok: 5
    },
    {
      id: 3,
      nama: "Televisi",
      harga: 4000000,
      stok: 2
    }
  ]
};
Gunakan kode dengan hati-hati.
content_copy
Dalam contoh ini, objek toko memiliki dua properti:

nama: Menyimpan nama toko online
produk: Array yang menyimpan objek produk, masing-masing dengan informasi seperti ID, nama, harga, dan stok
Untuk mengakses data produk tertentu, Anda dapat menggunakan kombinasi operator titik dan tanda kurung siku.

JavaScript
console.log(toko.produk[0].nama); // Output: Laptop
console.log(toko.produk[1].harga); // Output: 3000000
console.log(toko.produk[2].stok); // Output: 2
Gunakan kode dengan hati-hati.
content_copy
Manfaat Menggunakan Objek Bersarang
Objek bersarang menawarkan beberapa manfaat dalam pemrograman JavaScript, termasuk:

Memudahkan Pengorganisasian Data: Objek bersarang memungkinkan Anda untuk mengelompokkan data terkait secara logis, membuat kode lebih terstruktur dan mudah dipahami.
Meningkatkan Efisiensi Memori: Menyimpan data terkait dalam satu objek bersarang dapat menghemat memori dibandingkan dengan menyimpan data dalam beberapa objek terpisah.
Memudahkan Akses Data: Operator titik dan tanda kurung siku memungkinkan Anda untuk mengakses data dari objek bersarang dengan cara yang mudah dan intuitif.
Objek bersarang merupakan alat penting dalam pemrograman JavaScript dan dapat digunakan untuk berbagai aplikasi, seperti menyimpan data pengguna, mengelola inventaris produk, dan membangun struktur data yang kompleks.
*/



// EXAMPLE
const employee = {
    name: "nela",
    age: 33,
    
    position; {
        department: "HR",
        title: "staff HR Recruitment",
    },
};




// Mengakses Object 
//Object sejenis ini dapat diakses dengan syntax objectName.propertyNameA.propertyNameB. Contohnya, untuk mendapatkan nilai food di dalam object yang disimpan dalam object constant character, tulis character.favorite.food. Perhatikan bahwa penulisannya dimulai dari nama object yang terluar.
const employee = {
    name: "vivi",
    positon: "CHRO",
    age: 43,

    favorite: {
        color: "black",
        hoby: "traveling",
    },
};

console.log(employee.favorite);
console.log(employee.favorite.color);
console.log(employee.name);

/*
{ color: 'black', hoby: 'traveling' }
black
vivi
*/




// tugas 
const cafe = {
    name: "Progate Cafe",
    businessHours: {
      // Tetapkan object yang sudah disediakan untuk businessHours
     opening : "10:00",
     closing : "20:00",
      
      
    },
  };
  
  // Cetak "Nama: ____"
  console.log(`Nama :${cafe.name}` );
  
  
  // Cetak "Jam: Dari jam ____ sampai jam ____"
  console.log(`Jam: Dari jam ${cafe.businessHours.opening} sampai jam ${cafe.businessHours.closing}`);

/*
Nama :Progate Cafe
Jam: Dari jam 10:00 sampai jam 20:00
*/




// Latihan akhir 
//Terakhir, kita akan menambahkan informasi tentang menu populer di kafe. Seperti yang dapat Anda lihat dalam contoh di bawah ini, Anda dapat menggunakan array sebagai nilai dalam object
const name = {
    name: "adam",
    age: 28,

    foods: ["Jengkol", "ketoprak", "nasi uduk"];
}; 

// aray juga dapat digunakan ketika 1 property memiliki beberapa nilai




// latihan akhir II 
const cafe = {
    name: "Progate Cafe",
    businessHours: { 
      opening: "10:00",
      closing: "20:00"
    },
    // Tambahkan property menu dan berikan array yang sudah disediakan
    menu : ["Kopi", "Teh", "Kue Cokelat"]
    
  };
  
  console.log(`Nama: ${cafe.name}`);
  console.log(`Buka dari Jam: Dari jam ${cafe.businessHours.opening} sampai jam ${cafe.businessHours.closing}`);
  console.log("Hari kiamat libur!")
  console.log(`----------------------------`);
  console.log("Menu Rekomendasi");
  
  // Gunakan loop for untuk mencetak nilai array menu 
  for (let i = 0;  i< cafe.menu.length; i++ ){
     console.log(cafe.menu[i]);
  }

  

  /*
Nama: Progate Cafe
Buka dari Jam: Dari jam 10:00 sampai jam 20:00
Hari kiamat libur!
----------------------------
Menu Rekomendasi
Kopi
Teh
Kue Cokelat
  */