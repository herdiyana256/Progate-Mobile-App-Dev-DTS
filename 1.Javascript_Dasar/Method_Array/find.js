/*


Dalam JavaScript, method find pada array digunakan untuk mencari elemen pertama yang memenuhi kondisi tertentu.

Sintaksis:

JavaScript
array.find(callbackFunction(currentValue, index, arr))
Gunakan kode dengan hati-hati.
content_copy
array: Array yang akan dicari elemennya.
callbackFunction: Fungsi yang mengembalikan true jika elemen memenuhi kondisi, dan false jika tidak.
currentValue: Elemen yang sedang diproses dalam iterasi.
index (opsional): Indeks dari elemen yang sedang diproses.
arr (opsional): Array yang sedang diiterasi.
Penjelasan:

Method find akan memanggil callbackFunction untuk setiap elemen dalam array.

Jika callbackFunction mengembalikan true untuk suatu elemen, maka elemen tersebut akan dikembalikan oleh find.

Jika tidak ada elemen yang memenuhi kondisi, find akan mengembalikan undefined.

Contoh:

JavaScript
const angka = [1, 3, 5, 7, 9];

// Mencari angka genap pertama
const genapPertama = angka.find(angka => angka % 2 === 0);
console.log(genapPertama); // Output: 2

// Mencari angka lebih dari 5 (hanya mengembalikan yang pertama)
const lebihDariLima = angka.find(angka => angka > 5);
console.log(lebihDariLima); // Output: 7

// Mencari elemen yang tidak ada (akan mengembalikan undefined)
const tidakAda = angka.find(angka => angka === 10);
console.log(tidakAda); // Output: undefined
Gunakan kode dengan hati-hati.
content_copy
Catatan:

find hanya mengembalikan elemen pertama yang memenuhi kondisi.
Jika Anda ingin mencari semua elemen yang memenuhi kondisi, gunakan method filter sebagai gantinya.



tune

share


more_vert


*/




//example
array.find(callbackFunction(currentValue, index, arr))
/*
array: Array yang akan dicari elemennya.
callbackFunction: Fungsi yang mengembalikan true jika elemen memenuhi kondisi, dan false jika tidak.
currentValue: Elemen yang sedang diproses dalam iterasi.
index (opsional): Indeks dari elemen yang sedang diproses.
arr (opsional): Array yang sedang diiterasi.

*/



//example code 
const angka = [1,2,3,4,5,6,7];


// Mencari angka genap pertama 
const genapPertama = angka.find(angka => angka % 2 === 0);
console.log(genapPertama); //2 


// Mencari angka lebih dari 5 (hanya mengembalikan yang pertama)
cont lebihDariLima = angka.find(angka => angka > 5);
console.log(lebihDariLima); // 7 


//Mencari element yang tidak ada (akan mengembalikan undefined)
const tidakAda = angka.find(angka => angka === 10);
console.log(tidakAda); // undefined 






//find
//Method find akan mengembalikan nilai pertama dari sebuah array yang sesuai dengan ekspresi bersyarat yang ditetapkan. Seperti contoh di bawah, nilai pertama yang lebih besar dari 3, dalam kasus ini adalah 5, akan diberikan ke foundNumber, dan akan dicetak ke console. Kita akan mempelajari mengenai hal ini di slide berikutnya.
const numbers = [1,3,5,7,12,25];

const foundNumber = numbers.find((number) => {
    return number > 3;
});

console.log(foundNumber); //5





//Cara menggunakan find
//Berikut ini adalah contoh penggunaan method find. Untuk setiap element dari array numbers, nilainya akan ditetapkan pada argument number kemudian dilakukan perulangan code. Baris code { return syarat } akan menghasilkan nilai return pertama yang sesuai dengan syarat. find akan berhenti ketika nilai yang sesuai telah ditemukan dan hanya akan menghasilkan return dari nilai tersebut.
const numbers = [1,2,3,4,5,6,7];

const foundNumber = numbers.find((number) => { // callback function 
        return number > 5; // condition
})

console.log(foundNumber); 





//cara menggunakan find
//Anda juga dapat menggunakan method find dengan array object. Seperti yang ditunjukkan di bawah ini, property object dapat digunakan ketika menerapkan syarat. Dalam kasus ini, find menghasilkan nilai return berupa seluruh object yang berisi property yang sesuai.
const characters = [
        {id:1, name: "Herdiyan"},
        {id:2, name: "IT Developer"}
];
                                       // Object 
const foundCharacter = characters.find((characters) => {
        return characters.id === 1 ;     
        // Property object
});





console.log(foundCharacter);

//{ id: 1, name: 'Herdiyan' }





// end example
const numbers = [1, 3, 5, 7, 9];

// Temukan kelipatan 3 dari array numbers dengan menggunakan method find
// dan tetapkan hasilnya ke constant foundNumber 
const foundNumber  = numbers.find((number) => {
  return number % 3 === 0;
});



// Cetak foundNumber
console.log(foundNumber);


const characters = [
  {id: 1, name: "Ninja Ken", age: 6},
  {id: 2, name: "Baby Ben", age: 2},
  {id: 3, name: "Guru Domba", age: 100},
  {id: 4, name: "Birdie", age: 21}
];

// Temukan object dengan id = 3 dari constant characters,
// dan tetapkan nilainya ke constant foundCharacter
const foundCharacter =  characters.find((character) => {
    return character.id === 3;
});

// Cetak foundCharacter
console.log(foundCharacter);

/*
3
{ id: 3, name: 'Guru Domba', age: 100 }
*/