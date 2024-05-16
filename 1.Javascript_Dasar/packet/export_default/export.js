//Statement export default disebut default export. Dengan export default, saat file di-import, export default value akan secara otomatis di-import. Karena itu, nama nilai saat meng-export dan meng-import code dapat berbeda.


// dogData.js
const dog = new Dog("Dendi", 56, "Head IT");

export default dog;



// script.js 
import doggy from "./dogData.js"; // import dogData.js
    doggy.info();





//Catatan tentang export Default 

//dogData.js
const dog1 = new Dog("Reza", 32, "Selingkuh");
const dog2 = new Dog("Bagast", 28, "Manja");

export default dog1; // error
export default dog2; // error 



//export bernama 
//Seperti yang dapat Anda lihat di bawah ini di sebelah kiri, export bernama di-export dengan menuliskan nama di dalam {} (tanda kurung kurawal) tanpa menuliskan default. Saat meng-import nilai export bernama, tentukan nama export tersebut di file yang akan menerimanya. Nilai yang Anda import dapat ditentukan dengan menulis import { valueName } from "./fileName" menggunakan {}.

//dogData.js
const dog1 = new Dog ("Miftah", 30, "Gembel");
export {dog1;



//script.js 
import {dog1} from "./dogData";
dog1.info();



//export Bernama 
//Tidak seperti export default, export bernama dapat meng-export beberapa nilai. Seperti yang ditunjukkan di sebelah kiri, menulis export { name1, name2 } akan memungkinkan Anda membuat beberapa export bernama dari satu file. Beberapa import juga dapat dibuat bersamaan dengan menggunakan koma untuk memisahkan nilai-nilai tersebut.

// dogData.js
const dog1 = new Dog("Regar", 7, "Manipulatif");
const dog2 = new Dog("Dendi", 56, "Pelit");

export {dog1, dog2};



//script.js
import {dog1, dog2} from "./dogData";

console.log("======================");
dog.info();

console.log("=======================");
dog2.info();
