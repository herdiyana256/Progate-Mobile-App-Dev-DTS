// Method adalah sebuah fungsi yang terkait dengan object 




// mendefinisikan method yaitu : menggunakan function declaration , arrow function(ES6)



// mendefinisikan Method -> menggunakan function declaration 
const person = {
    name: "Herdiyan Adam Putra",
    age: 28,
    greet: function() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years`);
    }
};

person.greet();
//Hello, my name is Herdiyan Adam Putra, I am 28 years





// Menggunakan Arrow Function(ES6)
const person = {
    name: "Herdiyan",
    age: 28,
    greet: ()=> {
        console.log(`Hi ! I'm ${person.name}, Salam kenal ya!`);
        console.log(`Hi! I'm ${person.age} age`);
    }
}


person.greet(); 
/*
Hi ! I'm Herdiyan, Salam kenal ya!
Hi! I'm 28 age
*/





// Contoh Method Menghitung Luas Persegi
const persegi = {
    sisi: 5,
    hitungLuas : function() {
        return this.sisi * this.sisi;
    }
};

const luasPersegi  = persegi.hitungLuas();
console.log(`Luas persegi: ${luasPersegi}`); //Luas persegi: 25






//Memformat Tanggal
const tanggal = {
    tahun: 2024,
    bulan: 4,
    tanggal: 15,
    formatTanggal: function() {
        return `${this.tanggal}/ ${this.bulan}/${this.tahun}`;

    }
};

const formattedDate = tanggal.formatTanggal();
console.log(`Tanggal: ${formattedDate}`);
//Tanggal: 15/ 4/2024





// Apa yang dimaksut dengan method 
//Function yang berada di dalam sebuah class disebut Method. Method bisa dibilang seperti "aksi" milik sebuah instance. Jika data seperti name dan age dapat ditambahkan menggunakan property, method dapat mengekspresikan seluruh kumpulan instruksi seperti memberikan salam dan menghitung nilai.

//sapaan : nama , umur 

// aksi : jalan, menyapa





//Mendefinisikan Methid
/*
Method dideklarasikan dalam class dengan menulis methodName() { }.
Sama seperti function, code dalam method harus dituliskan di dalam {}.
*/

class ClassName {
    constructor() {
        // code
    }

    methodName () {
        // Code yang akan dijalankan di method....
    }
}





//Cara menggunakan Method - complex
// Method dipanggil untuk instance yang dibuat di dalam class. Misalnya, dengan menuliskan instance.methodName() seperti contoh di bawah ini, method greet di dalam object Animal akan dipanggil dan dijalankan untuk instance animal.
class Employee {
    constructor(name, position, salary){
        // Tetapkan nilai ke properti
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    
    greet() {
        console.log("Halo!");
    }
}

const employee = new Employee("Adam", "CEO", 100000000);
employee.greet();

// Menampilkan detail employee
console.log(`Name: ${employee.name}`);
console.log(`Position: ${employee.position}`);
console.log(`Salary: ${employee.salary}`);
/*
Halo!
Name: Adam
Position: CEO
Salary: 100000000
*/



//contoh method - simple
class family {
    constructor(name, address){
        this.name = name;
        this.address = address;
}
    greet() {
        console.log("Hallo!");
    }

}
    const Family = new family ("Herdiyan", "Jalan Griya Utama Mandiri No.2");
    Family.greet(); //Hallo


    console.log(`perkenalkan saya adalah ${Family.name} dan saya tinggal di ${Family.address}`);

/*
Hallo!
perkenalkan saya adalah Herdiyan dan saya tinggal di Jalan Griya Utama Mandiri No.2
*/






// end example
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    // Tambahkan method greet
    greet() {
          console.log("Halo");
    }
    
  }
  
  const animal = new Animal("Leo", 3);
  
  console.log(`Nama: ${animal.name}`);
  console.log(`Usia: ${animal.age}`);
  
  // Panggil method greet milik instance animal
  animal.greet();

  // nama : Leo 
  // usia : 3 
  // Hallo 






  // Menggunakan Nilai dalam Method 
  //Selanjutnya, dengan menggunakan nilai name, ayo kita buat method untuk mencetak string Nama saya adalah ____. Saat Anda ingin menggunakan nilai instance di dalam method, tulis this.propertyName, menggunakan nilai khusus this.

  class Fruit {
    // 
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    info() {
            console.log(`ini adalah buah ${this.name}`);
    }
  }

    const fruit = new Fruit ("Mangga", "Hijau");
  fruit.info();
  //ini adalah buah Mangga



  // contoh 2 
  class Animal {
    //code 
    constructor(name, age) {
    this.name= name;
    this.age = age;

    }

    info(){
        console.log(`Nama saya adalah ${this.name}`);
    }
  }

  const animal = new Animal("Leo", 3);
  animal.info();
  //Nama saya adalah  Leo







  // final exercise I 
  class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("Halo");
    }
    
    // Tambahkan method info
    info(){
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya berusia ${this.age} tahun`);
    }
    
  }
  
  const animal = new Animal("Leo", 3);
  animal.greet();
  
  // Panggil method info menggunakan constant animal
  animal.info();

// Halo 
// Nama saya adalah Leo 
// Saya berusia 3 tahun










//Menggunakan Method dalam Method 
/*
Anda juga dapat memanggil method dalam method lain.
Seperti contoh di bawah ini, method lain dalam class yang sama dapat digunakan dengan menuliskan this.methodName() dalam method tersebut.
*/


class Animal {
        greet() {
            console.log("Hallo!"); // Method greet() mencetak pesan "Hallo!"
        }
        info() {
            this.greet(); // Memanggil method greet() dari instance kelas Animal
        }
}

//tambahan
const animal = new Animal(); // Membuat instance baru dari kelas Animal
animal.info(); // Memanggil method info() dari instance animal












// code lengkap nya 
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("Halo");
    }
    
    info() {
      // Panggil method greet
      this.greet();
      
      
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya berumur ${this.age} tahun`);
    }
  }
  
  const animal = new Animal("Leo", 3);
  // Hapus baris di bawah
  animal.info();
  
