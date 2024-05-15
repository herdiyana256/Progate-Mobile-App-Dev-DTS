// Object dan Function
// Nilai object juga dapat berupa function. Cara menuliskannya ditunjukkan gambar di bawah ini. Selain itu, cara untuk memanggil function, tulis constantName.propertyName(). Perhatikan bahwa Anda memerlukan tanda () setelah nama property untuk mengindikasikan bahwa nilai adalah function.

const constantName = {
    propertyName : () => { // tetapkan nilai property sebagai function
        // Code 
    }
};

constantName.propertyName();// memanggil function





// Object dan Function 
//Mari kita lihat contohnya! Di gambar kiri bawah, arrow function digunakan untuk memanggil greet property milik object user. Dengan menuliskan user.greet(), Anda dapat memanggil function tersebut dan mencetak nilainya ke console.
const user = {
    name: "Herdiyan",
    position : "IT Web Developer",
    greet: () => {
        console.log(`Hallo, ${user.name}`);
        console.log(`kamu sekarang bekerja disini sebagai ${user.position}`);
    }
};

user.greet(); // memanggil function 
/*
Hallo, Herdiyan
kamu sekarang bekerja disini sebagai IT Web Developer
*/





// Tugas 
// Definisikan constant animal
const animal = {
    name : "Leo",
    age : 3,
    greet: () => {
      console.log("Halo");
    }  
    
  }
  
  // Cetak property name milik constant animal
  console.log(animal.name);
  
  // Panggil greet method property milik animal
  animal.greet();

/*
Leo 

Halo

*/






// Membuat Object secara Efiesien 
//Object, seperti yang kita buat sebelumnya, biasanya digunakan saat membuat situs web. Misalnya, layanan web yang memerlukan fungsi login, seperti Progate, menggunakan object untuk membuat data pengguna. Bayangkan jika kita harus membuat ini dari awal setiap permintaan login, tidak efisien kan? Oleh sebab itu, Anda akan mempelajari cara membuat data yang serupa dengan mudah.

const user1 = {name : "Herdiyan Adam Putra", greet: ...};

const user2 = {name: "Andi Andriyani", greet: ...};

const user100 = {name: "Helmi Rhama Putra", greet: ...};
// Membuat banyak objek yang mirip sangatlah merepotkan 





//Blueprint Object 
// Untuk membuat object secara efisien, kita harus membuat "blueprint" (kerangka) object tersebut. Misalnya, saat membuat data pengguna, data dapat dibuat dan disusun berdasarkan "blueprint pengguna" yang telah disiapkan sebelumnya.

// class(seperti blueprint) -> data user (membuat instance)



// class (blueprint)
//lueprint yang disebut dalam slide sebelumnya disebut class dalam JavaScript. Dengan menulis class ClassName, seperti yang ditunjukkan di bawah ini, class baru dapat dibuat. Nama class biasanya diawali dengan huruf kapital.
class User {
    // nama class adalah User
}





// Membuat Instance
// Karena kita sudah menyiapkan blueprint object, mari kita coba untuk membuat object dari blueprint tersebut. Untuk membuat object dari class, tulis new ClassName(), seperti yang ditunjukkan di bawah ini. Object dibuat dari class yang disebut instance. Instance dari class "Animal" disebut "instance Animal".
class Animals {
    // nama class adalah Animals    
}

const animal = new Animal();// instance Animal 

// analogi -> class Animal (blueprint) -> baru -> instance Kosong(benda atau object)






// Memeriksa Instance 
//Di pelajaran ini, mari kita cetak instance Animal yang dibuat dari class Animal ke console untuk memastikan bahwa instance adalah object kosong seperti yang ditunjukkan di bawah ini. Jangan khawatir tentang nama class "Animal" yang dicetak sebelum tanda kurung kurawal {}
class Animal  {

}

const animal = new Animal();
console.log(animal);


// Animal{} -> object kosong 





// Menambahkan kontent ke blue print 
//Sejauh ini, Anda telah mempelajari cara membuat instance berdasarkan blueprint (class). Namun, karena kita belum menambahkan konten apa pun ke class, blueprint ini masih kosong. Selanjutnya, kita akan menambahkan konten ke blueprint.
class Animal {
    // kode ini akan merubah blue print
}




// apa yang dimaksut dengan constructor ?
//lass sering memiliki method khusus yang disebut constructor. constructor digunakan untuk memberikan nilai awal ke instance baru. Untuk menambahkan constructor ke class, tulis constructor() { } di dalam tanda kurung kurawal {} class Animal seperti yang ditunjukkan di bawah ini.
class Animal {
    constructor() {
    }
} // tambahkan constructor kedalam class 