// Operator Ternary 
// perator ternary (?:) adalah cara ringkas untuk mencetak ekspresi bersyarat dalam satu baris. Berikut strukturnya:

// kondisi ? nilai_benar : nilai_salah;


//JavaScript menyediakan berbagai cara untuk mencetak ekspresi bersyarat, memungkinkan Anda untuk menampilkan konten yang berbeda berdasarkan kondisi tertentu. Berikut beberapa metode umum yang dapat digunakan:

// example
const isLoggedIn = true;
const message = isLoggedIn ? "Selamat Datang ": "Silahkan Login";
console.log(message);
// Selamat Datang


// Pernyataan if :
if(kondisi) {
    // Blok kode yang di eksekusi jika kondisi benar
} else {
    // Blok kode yang di eksekusi jika kondisi salah 
}


// Menampilkan diskon 10% jika total belanjaan lebih dari Rp 100,000
const total = 120000;
const discount = total > 100000 ? 0.1 : 0;
const finalPrice = total - (total * discount);
console.log(`Total : Rp ${total}, Diskon: ${discount * 100}%`);
console.log(`Harga akhir: Rp${finalPrice}`);

/*
Total : Rp 120000, Diskon: 10%
Harga akhir: Rp108000
*/


// Perntataan switch 
switch(nilai) {
    case value1:
        // Blok kode untuk value1
        break;
        case value2:
            // Blok kode untuk value2
            break;
            default:
                // Blok kode default jika tidak ada kasus yang cocok
}


// Misalnya untuk menampilkan hari dalam seminggu berdasarkan nomor hari
// Contoh penggunaan
const dayNumber = 3;

switch (dayNumber) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jumat");
    break;
  case 6:
    console.log("Sabtu");
    break;
  case 7:
    console.log("Minggu");
    break;
  default:
    console.log("Hari tidak valid");
}