//object dalam javascript -> menyimpan koleksi data terstruktur

//Objek adalah konsep penting dalam JavaScript yang digunakan untuk menyimpan koleksi data terstruktur.  Berbeda dengan tipe data primitif (seperti angka atau string) yang hanya menyimpan satu nilai, objek dapat menyimpan banyak pasangan key-value.


/*
Konsep Dasar Objek
Properti: Merupakan pasangan key-value yang berisi informasi tentang objek. Key bertindak sebagai label unik untuk mengidentifikasi nilai (value) yang terkait. Nilai tersebut bisa berupa tipe data primitif lain, objek lain, atau bahkan fungsi.
Metode: Merupakan fungsi yang terkait dengan objek. Metode digunakan untuk melakukan tindakan atau operasi tertentu pada objek tersebut.

*/



// literal object 
const mahasiswa = {
    nama : "herdiyan",
    jurusan : "teknik informatika",
    ipk : 3.35
};




// keyword 
function Mahasiswa (nama, jurusan, semester){
    this.nama = nama;
    this.jurusan = jurusan;
    this.semester = semester;
}

const herdiyan = new Mahasiswa("Herdiyan", "Teknik Informatika", 8);





// Mengakses Properti dan Metode 
// dot notation(.) = mengakses properti object menggunakan titik (.)
console.log(mahasiswa.nama);
console.log(mahasiswa.jurusan);
console.log(mahasiswa.semester);





// braket notation
// digunakan untuk mengakses properti menggunakan nama property yang di simpan dari variabel atau kondisi tertentu.
const key = "jurusan";
console.log(mahasiswa[key]); // Teknik informatika 

//Untuk memanggil metode pada objek, gunakan dot notation diikuti nama metode dan tanda kurung ().




//Misalnya object mahasiswa memilikiki metode ambilKrs(), maka pemanggilan nya:
mahasiswa.ambilKrs();




// Membuat Object 






// apa yang dimaksut dengan object 
// seperti array, digunakan untuk mengelompokkan dan mengelola beberapa nilai. Bila array mengatur nilai secara berurutan berdasarkan index, objects mengelola nilai dengan memberikannya nama yang disebut property.

// Array 
["nilai1", "nilai2", "nilai3"]

//Object 
{property1: nilai1, property2: nilai2}
//Object dibuat seperti berikut: {property1: nilai1, property2: nilai2}. Bila element array ditempatkan dalam tanda kurung petak [], object harus ditempatkan dalam tanda kurung kurawal {}. Selanjutnya, setiap property dan nilai object harus dihubungkan dengan tanda titik dua (:), dan seperti array, setiap elementnya harus dipisahkan dengan koma


{nama: "herdiyan", profesi: "IT Web Developer"}




// Memberikan Object untuk Constant 
// Object juga dapat diberikan untuk constant, selain itu console.log(constantName) ditulis (seperti yang ditujukkan digambar kiri), object dapat dicetak diconsole.

const item = {name: "shuriken", price: 30};

console.log(item);
//{ name: 'shuriken', price: 30 }





// example 1
// Deklarasikan constant character dan berikan object yang sudah disediakan
const character = {name: "Ninja Ken", age: 14};


// Cetak nilai character
console.log(character);
//{ name: 'Ninja Ken', age: 14 }





// Mendapatkan Nilai Objecy 
// untuk mendapatkan nilai dari object, gunakan objectName.propertyName dengan nama object dan property yang sesuai.
const item = {name: "herdiyan", age: 28};
console.log(item.name);
console.log(item.age);
/*
herdiyan
28

*/




// Mengupdate Nilai Object 
//Menulis objectName.propertyName = nilai baru akan mengupdate nilai yang disimpan dalam object.

const item = {name: "PINJOL JAHANAM", description: "ILEGAL & MENJERAT"};
item.name = "Bina Artha Ventura";
item.description = "Menjerat masyarakat kecil dengan cicilan berkelanjutan";

console.log(item.name);
console.log(item.description);
/*
Bina Artha Ventura
Menjerat masyarakat kecil dengan cicilan berkelanjutan
*/



//example
const character = {name: "Ninja Ken", age: 14};

// Cetak nilai property name milik character
console.log(character.name); //Ninja Ken


// Ganti nilai age milik character ke 20 
character.age =20;

// Cetak constant character ke console
console.log(character); //{ name: 'Ninja Ken', age: 20 }


