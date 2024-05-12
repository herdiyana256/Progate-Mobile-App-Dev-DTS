// Pernyataan switch - default 
//perti yang telah Anda pelajari, jika nilai kondisi switch cocok dengan nilai untuk kasus tertentu, bagian code itu akan berjalan. Namun, jika nilai tidak cocok dengan kondisi apa pun, case default akan dipanggil. Default mirip dengan else yang digunakan untuk statement if.


switch(nilai kondisional) {
    case nilai1 :
        //....
        // break 

        case nilai2 : 
        // ....
        // break


        case nilai3 : 
        // ....
        // break

        default : 
        // other value not exist / available
        // when value conditional not same with nilai1 , nilai2, nilai3

}




// Pernyataan switch default menggunakan if dan else if
 
// menggunakan if 
if (kondisi1) {
    // Kode 

} else if (kondisi2) {
    // kode 
} else {
    // kode 
}



// menggunakan switch
switch(nilai kondisional) {
    case nilai1:
        // code 
        break;
        case nilai2:
        // code 
        case nilai3 :
            // code 
        break;
        default:
             // value not available in this const param
}


// final example
const rank = 5;

switch (rank) {
  case 1:
    console.log("Anda meraih medali emas!");
    break;
  case 2:
    console.log("Anda meraih medali perak!");
    break;
  case 3:
    console.log("Anda meraih medali perunggu!");
    break;
  // Tambahkan default
  default:
  console.log("Semoga sukses dikesempatan berikutnya");
  break;
  
}

//Semoga sukses dikesempatan berikutnya