// Menambahkan kondisi
const number = 90;

if(number >= 85) {
    console.log("Great"); //Great
} else if(number >= 75) {
    console.log("awesome");
} else if(number >= 50) {
    console.log("Better");
} else {
    console.log("Stupid")
}


//Menulis statement else if 
// if(kondisi) {
//     // ketika kondisi1 true
// } else if(kondisi2) {
//     // ketola kondisi1 false dan kondisi2 true
// } else {
//     // ketika tidak ada kondisi yang true
// }


// exercise I 
const number1 = 7;

if(number1 > 10){
    console.log("Number lebih besar dari 10");
} else if(number > 5){
    console.log("Number lebih besar dari 5"); // true
    //Number lebih besar dari 5
} else {
    console.log("Number lebih kecil atau sama dengan 5");
}



// exercise II 
const age = 17;

/* Ketika age lebih besar atau sama dengan 10, cetak:
"Saya berusia di bawah 18 tahun, namun di atas 9 tahun" */
if (age >= 18) {
  console.log("Saya di atas 18 tahun");
} else if (age >= 10){
  console.log("Saya berusia di bawah 18 tahun, namun di atas 9 tahun");
}
// TRUE

 else {
  console.log("saya di bawah 10 tahun");
}

