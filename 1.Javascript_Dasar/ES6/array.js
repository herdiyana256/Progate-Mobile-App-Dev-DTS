// arrays dan loop for 
//Seperti gambar di kiri, array fruits memiliki 3 element, untuk mencetak semua nilainya kita memerlukan tiga code console.log(). Bandingkan dengan penggunaan loop for di gambar kanan, hasil yang sama dapat dicapai dengan lebih efisien. Harap diingat bahwa urutan array dihitung dari 0, karena itulah kondisi loop dimulai dengan i = 0.

// manual
const fruits = ["anggur", "manggis", "cerry"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);




// cara menggunakan for 
const fruit = ["pepaya", "blackberry", "quldi"];

for(let i = 0; i < 3; i++){
    console.log(fruit[i]);
}
/*
pepaya
blackberry
quldi
*/




const animals = ["anjing", "kucing", "domba"];

// Gunakan loop for untuk mencetak nilai animals di console secara berurutan
for(let i = 0; i < 3; i++){
  console.log(animals[i]);
}

/*

anjing
kucing
domba
*/
