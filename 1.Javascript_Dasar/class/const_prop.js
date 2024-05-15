// Menambahkan Properti dan nilai untuk javascript pada constructor

class ClassName  {
    constructor (parameter1. parameter2, ...) {
        // Inisiaslisasi property disini
    }
}

//ClassName adalah nama kelas yang Anda buat.
//parameter1, parameter2, ... adalah parameter yang dapat Anda berikan ke constructor saat membuat objek.
//Di dalam constructor, gunakan keyword this untuk mengakses property kelas.





//2. Menambahkan Property dan Nilai:
class Person {
    constructor(name, age) {
      this.name = name; // Inisialisasi property 'name' dengan nilai 'name'
      this.age = age;  // Inisialisasi property 'age' dengan nilai 'age'
    }
  }



  //3. Membuat Objek dan Mengakses Property:
  const person1 = new Person('Alice', 30);
  console.log(person1.name); // Output: Alice
  console.log(person1.age);   // Output: 30






//4. Constructor dengan Parameter Default:
class Product {
    constructor(name = 'Default Product', price = 0) {
      this.name = name;
      this.price = price;
    }
  }




  //5. Contoh Penggunaan Parameter Default:
  const product1 = new Product(); // Tanpa argumen, gunakan nilai default
  console.log(product1.name);  // Output: Default Product
  console.log(product1.price); // Output: 0
  
  const product2 = new Product('Laptop', 1200); // Menyediakan argumen
  console.log(product2.name);  // Output: Laptop
  console.log(product2.price); // Output: 1200




  // MENAMBAHKAN PROPERTY DAN NILAI 
  //Dalam constructor, mari kita tambahkan informasi terkait instance yang dibuat. Untuk menambahkan property dan nilai kedalam constructor, tulis this.property = nilai.
  class Animal {
    constructor() {
      this.name = "Herdiyan";
      // nama property nilai 
    }
  }




  // Membuah instance dari class
  const mobilku = new Mobil('Toyota', 'Silver', 2024);


  // Menagakses Property Instance 
  console.log(`Merek mbil saya: ${mobilku.merek}`);
  console.log(`Warna Mobil saya: ${mobilku.warna}`);
  console.log(`Tahun mobil saya: ${mobilku.tahun}`);





  // Memanggil Method Instance 
  mobilku.tampilkanSpesifikasi();




  //Properti dan Method Statis
  class Mobil {
    // Properti dan Method statis
    static getKereta() {
      return  `Kereta adalah kendaraan roda baja yang berjalan diatas rel `;
    }

    constructor(merek, warna, tahun) {
      this.merek = merek;
      this.warna = warna;
      this.tahun = tahun;
    }

    tampilkanSpesifikasi() {
      console.log(`Mobil ini bermerek ${this.merek}, berwarna ${this.warna}, dan dibuat tahun ${this.tahun}`);
    }
  }

  console.log(Mobil.getKereta()); // Mengakses Properti statis
  //Kereta adalah kendaraan roda baja yang berjalan diatas rel 







// Instance dan Property 
class Animal {
    constructor () {
        this.name = "Singa";
    }
}

const animal = new Animal(); //Singa

console.log(animal.name); // gunakan nilai yang ditentukan di constructor 









// example other 
class Employee {
  constructor () {
    // tatapkan nilai string adam 
    this.name = "adam";

    // tatapkan nilai 28 untuk age 
    this.age = 28;
  }
}

const employee = new Employee();

// cetak nama 
console.log(`Nama: ${employee.name}`);

console.log(`Usia: ${employee.age}`);
/*
Nama: adam
Usia: 28
*/





// Mengubah nilai untuk smua instance 
//Dengan menambahkan constructor, instance baru akan diberi nilai awal saat dibuat. Namun, code di bawah ini akan memberi semua instance nilai yang sama, yakni, "Leo" dan "3", saat instance tersebut dibuat. Mari kita pelajari cara mengubah nilai untuk setiap instance secara bebas di slide berikutnya!
class staff  {
  constructor () {
    this.name = "Herdiyan";
    this.position = "IT Developer";
  } // Nilai nilai ini akan selalu sama -> kami sarankan untuk memberikan nilai yang berbeda untuk setiap instance 
}

const Staff = new staff();

console.log(`Halo perkenalkan saya ${Staff.name}, saya bekerja sebagai ${Staff.position} `);
//Halo perkenalkan saya Herdiyan, saya bekerja sebagai IT Developer 




// Argument Constructor 
//ama seperti function, constructor juga dapat menerima argument. Dengan menulis nama argument di dalam tanda kurung () setelah constructor, argument yang ditetapkan dapat digunakan di dalam proses pemanggilan constructor terkait.
class operation {
  constructor(business, revenue) { // menerima argument
    // 
  }
}



// Argument Construtor 
class Operation  {
  constructor(business, revenue) {
    this.business = business;
    this.revenue = revenue;

  }
}
  const Operation = new operation("IL", 0);

  console.log(operation);
//Operation { business: 'IL', revenue: 0 }




// example code other
class operation {
  constructor (name, revenue) {
    this.name = "Il";
    this.revenue = 0;
  }
}

const operation = new Operation();


console.log(`diberitakan bahwa untuk business ${Operation.name}, memberikan revenue sebesar ${Operation.revenue}`);
//diberitakan bahwa untuk business Il, memberikan revenue sebesar 0





// final example
class company {
  constructor(name, address){

    this.name = name;
    this.address = address;
  }
}

const Company = new company("PT Bina SDM Rendah", "Jalan Graha niaga thamrin");

console.log(`Name: ${Company.name}, alamat: ${Company.address}`);
//Name: PT Bina SDM Rendah, alamat: Jalan Graha niaga thamrin
