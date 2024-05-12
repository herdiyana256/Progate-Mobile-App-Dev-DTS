// Undefined (tidak didefinisikan)

/*
Seperti yang ditunjukkan di bawah ini, bila Anda mencoba mendapatkan element dengan nomor index yang tidak ada di dalam array, atau bila Anda mencoba mendapatkan element dengan property yang tidak dimiliki oleh object, maka undefined akan dicetak.
undefined adalah nilai khusus yang berarti nilai tidak bisa didefinisikan.


*/

const characters = [
    {name: "Ninja Ken", age: 14},
    {name: "Guru Domba", age: 100},
    {name: "Baby Ninja Ben", age: 5},
    // Tambahkan element di bawah
    {name: "Birdie"}
  ];
  
  for (let i = 0; i < characters.length; i++) {
    console.log("--------------------");
    
    const character = characters[i];
    
    console.log(`Nama saya adalah ${character.name}`);
    console.log(`Saya berumur ${character.age} tahun`);
  }

  /*
  Nama saya adalah Ninja Ken
Saya berumur 14 tahun
--------------------
Nama saya adalah Guru Domba
Saya berumur 100 tahun
--------------------
Nama saya adalah Baby Ninja Ben
Saya berumur 5 tahun
--------------------
Nama saya adalah Birdie
Saya berumur undefined tahun

  */
  







// Mencegah undefined
// Dalam latihan terakhir ini, bila nilai yang tidak ada ingin kita cetak, maka "undefined tahun" akan dicetak, seperti yang ditunjukkan dalam contoh di bawah ini. Sebagai gantinya, mari kita pastikan jika hal ini terjadi maka "Usia saya rahasia!"-lah yang akan dicetak.


const characters = [
    {name: "Herdiyan", age: 28},

    {name: "Adam"} // properti age tidak ada

];


for(let i = 0; i < characters.length; i++) {
    const character = characters[i];

    console.log(`${character.age}`);
}

/*
28
undefined
*/






// statement undefined dan if 
/*
Mari kita gunakan undefined dalam beberapa statement kondisional (if dan else).
Kita akan memiliki kontrol terhadap alur pada saat nilai character.age adalah undefined atau tidak.
*/

const characters = [
    {name: "herdiyan", position: "IT Developer"},
    {name: "andi", position: "Assistant manager OPR"}
]

for(let i = 0; i < characters.length; i++) {
    const character = characters[i];
    if(character.age === undefined) {
        // jalankan code ini ketika nilai age adalah undefined
        console.log(`perkenalkan saya adalah ${character.name} saya berusia ${character.age}`);
    } else {
        // jalankan kode ini ketika nilai age sudah didefinisikan 

        console.log(`posisi saya disini adalah  ${character.position} saya berusia ${character.age} `);
    }
}
/*
perkenalkan saya adalah herdiyan saya berusia undefined
perkenalkan saya adalah andi saya berusia undefined
*/