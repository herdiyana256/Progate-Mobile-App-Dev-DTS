// Struktur dasar pernyataaan if 
if (kondisi) {
    // Blok kode yang di eksekusi jika kondisi bernilai true 
} else {
    // Blok kode yang di eksekusi jika kondisi bernilai false
}

/*
1.Kondisi: Merupakan ekspresi yang dievaluasi menghasilkan nilai true atau false.
2.Blok Kode: Bagian kode yang akan dieksekusi jika kondisi bernilai true.
3.Klausa else (opsional): Bagian kode yang akan dieksekusi jika kondisi bernilai false.
*/

let usiaPengguna = prompt("Masukan Usia Anda:");

if(usiaPengguna >= 18) {
    console.log("Anda cukup umur untuk mengakses konten ini. ");
} else {
    console.log("Maaf, Anda tidak cukup umur mengakses konten ini.")
}



// Menghitung Nilai Mutlak 
let angka = prompt ("Masukkan angka: ");

if(angka >= 0) {
    console.log("Nilai mutlak dari", angka, "adalah", angka);
} else {
    console.log("Nilai mutlak dari", angka, -angka);
}


// Variasi Pernyataan if 
let nilai = prompt("Masukan nilai Anda:");

if(nilai >= 90){
    console.log("Nilai Anda A!");

} else if (nilai >= 80) {
    console.log("Nilai Anda B!");
} else if (nilai >= 70) {
    console.log("Nilai Anda C!");
} else {
    console.log("Nilai Anda D!");
}


//2. Operator Ternary (?:)


let status = (usiaPengguna >= 18) ? "dewasa" : "anak-anak";
console.log("Pengguna tersebut adalah", status);