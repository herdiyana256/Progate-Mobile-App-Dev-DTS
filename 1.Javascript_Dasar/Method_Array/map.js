//Method Map 
//Dalam Javascript, method map() merupakan fungsi bawaan yang sangat berguna untuk memetakan elemen-elemen dari sebuah array ke elemen-elemen baru dalam array baru. Fungsi ini memungkinkan Anda untuk mengubah setiap elemen dalam array asli menjadi elemen baru dengan menerapkan fungsi tertentu. Kelebihan method ini adalah tidak mengubah array asli, melainkan menghasilkan array baru yang telah dipetakan.


const newArray = originalArray.ao(callbackFn);

/*
Aturan : 

originalArray: Array yang ingin Anda petakan.
callbackFn: Fungsi yang dipanggil untuk setiap elemen dalam originalArray. Fungsi ini menerima elemen sebagai argumen dan harus mengembalikan nilai yang akan menjadi elemen baru dalam array yang dipetakan.


parameter callbackFn

Fungsi callbackFn menerima dua parameter:

element: Elemen saat ini dari originalArray yang sedang diproses.
index (opsional): Indeks elemen saat ini dalam originalArray.
*/



//Penggunaan 
const angka = [1,2,3,4,5,6];


//1. Mengubah Angka Menjadi Kuadratnya
//Anda dapat menggunakan map() untuk membuat array baru yang berisi kuadrat dari setiap angka dalam angka:


const kuadratAngka = angka.map(function(element) {
        return element * element;
});
console.log(kuadratAngka);
//[ 1, 4, 9, 16, 25, 36 ]

/*

Penjelasan 
Fungsi callbackFn mengalikan element (angka saat ini) dengan dirinya sendiri (element * element) untuk mendapatkan kuadratnya.
Nilai kembalian fungsi (element * element) menjadi elemen baru dalam array kuadratAngka.

*/





//2.Mengubah Nama Menjadi huruf besar
const nama = ["Adam", "Putra", "Herdiyan", "CEO"];

const namaBesar = nama.map(function(element)  {
        return element.toUpperCase();
});
console.log(namaBesar);
//[ 'ADAM', 'PUTRA', 'HERDIYAN', 'CEO' ]





//3,Menggunakan Arrow Function
const pangkatDua = angka.map(element => 
        element ** 2
);

console.log(pangkatDua);
//Method map() adalah alat yang ampuh untuk memetakan elemen-elemen dalam array dan menghasilkan array baru dengan elemen-elemen yang telah diubah sesuai dengan fungsi yang Anda terapkan. Dengan pemahaman yang baik tentang sintaks dan penggunaannya, Anda dapat memanipulasi data dalam array Javascript Anda dengan mudah dan efisien.





//Cara Kerja Map 
const numbers = [1,2,3];

const doubledNumbers = numbers.map((number) => {
        return number * 2;
});

console.log(doubledNumbers); // 2,4,6







//Menggunakan Method Map 
// Pelajari gambar di bawah, setiap nilai di dalam array numbers dimasukkan ke argument number secara bergantian. Setelah itu, code return "number * 2" di dalam method map akan dijalankan pada setiap nilai tersebut. Kemudian, hasil perkalian tersebut akan diberikan ke constant doubledNumbers sebagai array. Di dalam function map, Anda harus memasukkan { nilai return }.
const numbers = [1,2,3,4];

const doubledNumbers = numbers.map((number) => {
        return number * 2;
});
console.log(doubledNumbers); //[ 2, 4, 6, 8 ]





// Menggunakan Method map
//Seperti method yang lainnya, Anda juga dapat menggunakan map dengan array object. Dalam contoh di bawah ini, code dalam function map akan menggabungkan property firstName dan lastName (nilai string) menggunakan method map.
const names = [
    {firstName: "Herdiyan", lastName: "Adam"},
    {firstName: "Herdiyan", lastName:"Putra"}
];

const fullNames = names.map((name) => {
    return name.firstName + " "  + name.lastName; // property object 
});
console.log(fullNames); //[ 'Herdiyan Adam', 'Herdiyan Putra' ]





// end test 
const numbers = [1, 2, 3, 4];

// Buatlah array baru di constant numbers dengan menggunakan method map,
// dan tetapkan hasilnya ke constant doubledNumbers 
const doubledNumbers = numbers.map((number) => {
    return number * 2;
});

// Cetak constant doubledNumbers
console.log(doubledNumbers);


const names = [
  {firstName: "Kate", lastName: "Jones"},
	{firstName: "John", lastName: "Smith"},
	{firstName: "Dennis", lastName: "Williams"},
	{firstName: "David", lastName: "Black"}
];

// Buatlah array baru di dalam constant names dengan menggunakan method map,
// dan tetapkan sebagai constant fullNames
const fullNames = names.map((name) => {
    return name.firstName  + " " + name.lastName
});
// Cetak constant fullNames
console.log(fullNames);


/*
[ 2, 4, 6, 8 ]
[ 'Kate Jones', 'John Smith', 'Dennis Williams', 'David Black' ]

*/