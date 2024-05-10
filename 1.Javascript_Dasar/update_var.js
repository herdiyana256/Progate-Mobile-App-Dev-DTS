// Mengupdate variable 

//Anda dapat mengupdate nilai variable Anda. Ketika Anda menetapkan nilai baru ke variable yang telah Anda berikan nilainya, nilai baru tersebut akan menggantikan nilai yang lama. Untuk memberikan nilai baru, Anda tidak perlu menggunakan let, cukup dengan menulis variableName=nilai.



//Mengubah nilai variabel string


let name = "Herdiyan";
name = "Adam";
console.log(name)



// Mengubah nilai variabel numerik
let angka = 10; // deklarasi variabel angka dengan nilai awal 10

angka = 20; // Mengubah nilai variabel "angka" menjadi 20 

console.log(angka); // Menampilkan nilai variabel "angka" yang baru 



// Mengubah nilai variabel boolean 
let isAktif = true; // Deklarasi variabel "isAktif" dengan nilai awal true

isAktif = false; // Mengubah nilai variabel "isAktif" menjadi false

console.log(isAktif); // Menampilkan nilai variabel "isAktif" yang baru



// Mengubah nilai variabel array 
let data = [1, 2, 3]; // Deklarasi variabel "data" dengan nilai awal array [1, 2, 3]

data[0] = 4; // Mengubah nilai elemen pertama array "data" menjadi 4

console.log(data); // Menampilkan nilai variabel "data" yang baru



let orang = {
    nama: "Herdi",
    umur: 27,
    pekerjaan: "IT"
}; // Deklarasi variabel orang dengan nilai awal object

orang.pekerjaan = "CEO"; // Mengubah nilai properti "pekerjaan" object "orang" menjadi "Dokter"


console.log(orang); // Menampilkan nilai variabel "orang" yang baru

/*
Adam
20
false
[ 4, 2, 3 ]
{ nama: 'Herdi', umur: 27, pekerjaan: 'CEO' }
*/







// Summary 


/*
Cara Mengupdate Variable
Lihat gambar proses pembaruan nilai variable di bawah.
Code akan dipanggil secara berurutan dari atas, jadi nilai variable akan diupdate dengan nilai yang ditetapkan paling akhir.
*/


let number = 7;
// Nilai number menjadi 7 

number = 9;
// Nilai number menjadi 9 

number = 10;
// Nilai number menjadi 10




// Assigment 
let name = "Ninja Ken";
console.log(name);

// Update nilai variable ke "Birdie"
name = "Birdie";

// Cetak nilai dari variable name
console.log(name);
