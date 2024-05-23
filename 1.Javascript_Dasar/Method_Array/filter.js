// Method Filter
// Untuk mendapatkan semua nilai yang sesuai dengan syarat tertentu, gunakan method filter. Method ini membuat dan menghasilkan array baru dengan semua nilai yang sesuai. Contoh di bawah ini menunjukkan cara mendapatkan semua nilai dari array numbers yang "lebih besar dari 3".

const numbers = [1,2,3,4,5,6];

const filterNumbers = numbers.filter((number) => {
    return number > 3;
});

console.log(filterNumbers); //[ 4, 5, 6 ]




const namas = ["Bina Anjing Ventura"];

const filterNama = namas.filter((nama) => {
    return nama.length > 10; 
});

console.log(filterNama); //[ 'Bina Anjing Ventura' ]






//cara Menggunakan filter 
//Dalam contoh berikut, nilai dari array numbers diberikan untuk argument number. Selanjutnya, nilai tersebut akan diperiksa oleh method filter dengan syarat "angka lebih besar dari 3". Lalu, nilai yang sesuai akan diberikan untuk constant filteredNumbers dalam bentuk array.
const angkas = [1,2,3,4,5,6];
                                        // callvback function 
const filteredNumbers = angkas.filter((angka) => {
    return angka > 3; // condition 
            // code 
});

console.log(filteredNumbers); // array baru dengan semua element yang memenuhi kondisi 
//[ 4, 5, 6 ]







// Cara menggunakan 2 
const characters = [
        {nama: "Herdiyan", age: 28},
        {nama: "Helmi", age: 21},
        {nama: "Mimi", age: 54},
        {nama: "Ajis", age: 56}
];

const filteredCharacters = characters.filter((character) => {
    return character.age > 25;
});

console.log(filteredCharacters);
/*

[
  { nama: 'Herdiyan', age: 28 },
  { nama: 'Mimi', age: 54 },
  { nama: 'Ajis', age: 56 }
]
*/



//end example
const numbers = [1, 2, 3, 4];

// Dapatkan semua nomor genap dari array numbers dengan menggunakan method filter,
// dan tetapkan hasilnya ke constant evenNumbers 

const evenNumbers = numbers.filter((number) => { return number % 2 === 0 });
// Cetak nilai evenNumbers
console.log(evenNumbers);



const characters = [
  {id: 1, name:"Ninja Ken", age: 14},
  {id: 2, name:"Baby Ben", age: 5},
  {id: 3, name:"Guru Domba", age: 100}
];

// Dapatkan characters berumur lebih muda dari 20,
// dan tetapkan hasilnya ke constant underTwenty 
const underTwenty = characters.filter((character) => {
  return character.age < 20
});

// Cetak nilai underTwenty
console.log(underTwenty);
