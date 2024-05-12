// Switch 
//Pernyataan switch dalam JavaScript digunakan untuk mengeksekusi blok kode tertentu berdasarkan nilai dari sebuah ekspresi.

//Mirip dengan if dan else if, switch mengecek kondisi, namun kondisinya berupa perbandingan nilai dengan beberapa kemungkinan.

switch (nilai kondisional) {
        // variable, constant, etc..


} // titik koma tidak di perlukan 


// exercise I - penulisan basic
const colour = "red";

switch(color) {
    // Jalankan kode yang berbeda sesuai dengan nilai constant colour 
}



// exercise II - penulisan II
switch(nilai kondisional) {\
    case value1 :
        // ketika nilai kondisional sama dengan nilai1

        break;
}// tambahkan case untuk setiap nilai yang di harapkan




// exercise II - code 
const color1 = "Merah";

switch(color1) {
    case "Merah":
        console.log("Berhenti"); // true 
        break; // dijalankan ketika constant color bernilai "merah"
}





// exercise III - Penulisan III 
switch(nilai kondisional) {
    case nilai1 :
        // ketika nilai kondisional sama dengan nilai1

        break;

    case nilai2 :
        // ketika nilai kondisional sama dengan nilai2
        break;
}

// tambahkan case untuk setiap kondisi 



// exercise III - code 
const warna = "hijau";

switch(warna) {
    case "hijau":
    console.log("Jalan!"); // true 
    break;

    case "Kuning":
        console.log("Hati-Hati");
    break;
    case "Merah":
        console.log("Berhenti!");
        break;
        default:
            console.log("Tidak ada");

    }



    // Point of view about switch statement 
    // break adalah perintah untuk mengakhiri setiap case di statement switch. Jika tidak ada break, code dari case berikutnya yang cocok juga akan terpanggil. Jangan lupa dengan break saat menggunakan statement switch.
    const warna = "hijau";

    switch(warna) {
        case "hijau":
        console.log("Jalan!"); // true 
        // break;
    
        case "Kuning":
            console.log("Hati-Hati");
        // break;
        case "Merah":
            console.log("Berhenti!");
            // break;
            default:
                console.log("Tidak ada");
    
        }




        // exampe final
        const rank = 2;

switch (rank) {
  case 1:
    console.log("Anda meraih medali emas!");
    break;

  // Tambahkan case ketika rank adalah 2
 case 2:
   console.log("Anda meraih medali perak!"); // true 
  break;
  // Tambahkan case ketika rank adalah 3
  case 3:
    console.log("Anda meraih medali perunggu!");
    break;
  
  
}

