import text from "./export";






// Memisahkan deklarasi 
//eperti yang dapat Anda lihat di sebelah kanan, kita akan memindahkan deklarasi instance Dog dari script.js ke file yang baru, yakni dogData.js. Meskipun code ini sangat singkat dan manfaat yang diperoleh dari memisahkan filenya tidak banyak, ini merupakan langkah yang baik untuk membuat code Anda lebih rapi.

/*
    script.js 

    dogData.js 


    dog.js


    animal.js


*/

// script.js 
const dog = new Dog("Leo", 4 , "Chihuahua");
dog.info();




//mengexport instance Dog


//script.js
import Dog from "./dog";
const dog = new Dog("Leo", 4, "Chihuahua");
dog.info();






//dogData.js 
import Dog from "./dog";
const dog = new Dog("Regar", 54, "Bina Artha Ventura");
    export default dog;



    // script.js
    import dog from "./dogData";

    dog.info()