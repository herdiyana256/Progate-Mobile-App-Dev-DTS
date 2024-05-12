// Object sebagai element array 
//Selanjutnya, mari kita pelajari tentang array yang memiliki object sebagai element. Element array tidak harus berupa string, integer atau boolean, namun bisa juga sebagai object. Berkat karakteristik ini, array seperti dalam gambar di kiri dapat dibuat. Di sini, untuk mencegah code menjadi terlalu panjang, setiap element sebaiknya dimulai di baris baru.

[{property1: nilai1...},{property2: nilai2...}]
   // object                      object 
                    // array 





const items = [
    {nama: "firaun", umur: 100},
    {nama: "dajjal", umur: 3000}
];
    console.log(items[0]);
    console.log(items[1]);
/*
{ nama: 'firaun', umur: 100 }
{ nama: 'dajjal', umur: 3000 }

*/





// mendapatkan nilai object didalam array 
const barang = [
    {name: "gundam", price: 300000},
    {name: "robot", price: 200000}
];

console.log(barang[0].price);
console.log(barang[1].name);
console.log(barang[1].price);
console.log(barang[0].name);

/*
300000
robot
200000
gundam
*/





const characters = [
    {name: "Ninja Ken", age: 14},
    {name: "Guru Domba", age: 1000}
  ];
  
  // Cetak element pertama milik array characters
  console.log(characters[0]);
  
  // Print nilai milik property name dari element array character kedua 
  console.log(characters[1].name);
  

  /*
{ name: 'Ninja Ken', age: 14 }
Guru Domba

  */