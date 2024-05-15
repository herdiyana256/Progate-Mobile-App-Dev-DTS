// overriding adalah  dalam JavaScript adalah proses mendefinisikan ulang method yang sudah ada di class turunan (subclass) untuk menggantikan implementasi method yang didefinisikan di class induk (superclass). Hal ini memungkinkan class turunan untuk memberikan implementasi yang lebih spesifik atau berbeda untuk method yang sama.
class Hewan {
    constructor(nama) {
      this.nama = nama;
    }
  
    bersuara() {
      console.log(`${this.nama} bersuara.`);
    }
  }
  
  class Kucing extends Hewan {
    constructor(nama) {
      super(nama);
    }
  
    bersuara() {
      super.bersuara(); // Mengakses implementasi dari class induk
      console.log("Meow!");
    }
  }
  
  const kucing = new Kucing("Garfield");
  kucing.bersuara(); // Output: Garfield bersuara. Meow!



  // Method dengan nama yang sama 
  //Kita telah mempelajari bahwa class anak dapat menggunakan method dalam class induk dan class anak. Namun, apa yang terjadi bila method dengan nama yang sama seperti method dalam class Animal (class induk) dideklarasikan dalam class Dog (class anak)? Method manakah yang dipanggil?
  const dog = new Dog ("Regar", 54);

  dog.info();





//ilustrasi 
class Animal {
        info() {
                // code 
        }
}


class Dog extends Animal{
        info(){
            // code 
        }
}






// Overriding (timpa)
//Bila method dengan nama yang sama seperti method dalam class induk didefinisikan dalam class anak, maka method class anak yang akan digunakan. Ini karena method class anak menimpa method class induk, hal ini disebut overriding.

const dog = new Dog("Elvin", 43);

dog.info();




//Ilustrasi 
class Animal  {
        info() {
                // code 
        }
}

class Dig extends Animal {
        info() {// method info memiliki class child yang akan di panggil 
}

}






// Overriding Method info
//Di sini, mari kita cetak usia anjing dalam usia manusia menggunakan method info dari class Dog. Dengan method getHumanAge yang Anda deklarasikan pada halaman sebelumnya, tulis ulang method seperti yang ditunjukkan di bawah ini.
class Dog extends Animal  {
        info() {
            this.greet();
            console.log(`Nama saya adalah ${this.name}`);
            console.log(`Saya berusia ${this.age}tahun`);


            const humanAge = this.getHumanAge();
            console.log(`Saya berusia ${humanAge} tahun dalam umur manusia.`);

        }
}



// Method Induk dan Anak
//Dengan menggunakan gambar di bawah ini sebagai referensi, tebak, method apa yang dapat digunakan dalam class Dog (class anak)?

method greet -> method greet
                    method getHumanAge


                    method info // override 









                    // example final

                    class Animal {
                        constructor(name, age) {
                          this.name = name;
                          this.age = age;
                        }
                        
                        greet() {
                          console.log("Halo");
                        }
                        
                        info() {
                          this.greet();
                          console.log(`Nama saya adalah ${this.name}`);
                          console.log(`Saya berusia ${this.age} tahun`);
                        }
                      }
                      
                      class Dog extends Animal {
                        // Tambahkan method info
                        info() {
                          this.greet();
                          console.log(`Nama saya adalah ${this.name}`);
                          console.log(`Saya berusia ${this.age} tahun`);
                          
                          const humanAge = this.getHumanAge();
                          console.log(`Saya berusia ${humanAge} tahun dalam umur manusia`);
                        }
                        
                        getHumanAge() {
                          return this.age * 7;
                        }
                      }
                      
                      const dog = new Dog("Leo", 4);
                      dog.info();

  /*
  Halo
Nama saya adalah Leo
Saya berusia 4 tahun
Saya berusia 28 tahun dalam umur manusia
  */







//Overriding Constructor 
//onstructor dapat ditimpa dengan cara yang sama seperti method. Misalnya, Anda ingin menambahkan property ke class anak. Untuk melakukan overriding constructor, Anda harus menambahkan super() di baris pertama constructor penimpa. Mari kita pelajari hal ini lebih lanjut dalam slide berikutnya.
class ParentClass {
        constructor () {
            // code 
        }
}


// di override 
class ChildClass extends ParentClass {
    constructor() {
            // code

            super() {
                // dibutuhkan dibaris pertama constructor 
                // code untuk constructor milik class anak 
            }
    }
}




// example code
//Code super() dalam constructor class anak akan memanggil constructor class induk. Karena itu, kita harus memberikan argument di antara () milik super(), sehingga constructor class induk dapat menerima argument tersebut. Sekarang, setelah memanggil constructor class milik induk, property breed akan ditambahkan
class Animal {
    constructor(name, age) {
            this.name = name;
            this.age = age;
    }

        // menjalankan constructor milik class indul 
}


//di override menjadi 
class Dog extends  Animal {
        constructor(name, age, breed) {
                super(name, age);

                this.breed= breed;
                // Menjalankan construtor milik class anak 
        }
}





// final test
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("Halo");
    }
    
    info() {
      this.greet();
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya berusia ${this.age} tahun`);
    }
  }
  
  class Dog extends Animal {
    // Tambahkan constructor untuk inisialisasi properti breed
      constructor(name, age, breed) {
          super(name, age);
          
          this.breed = breed;
      }
    
    
    info() {
      this.greet();
      console.log(`Nama saya adalah ${this.name}`);
      // Cetak 「Saya adalah seekor ____」
      console.log(`Saya adalah seekor ${this.breed}`);
      
      console.log(`Saya berusia ${this.age} tahun`);
      const humanAge = this.getHumanAge();
      console.log(`Saya berusia ${humanAge} tahun dalam umur manusia`);
    }
    
    getHumanAge() {
      return this.age * 7;
    }
  }
  
  // Tetapkan "Chihuahua" sebagai nilai argument
  const dog = new Dog("Leo", 4, "Chihuahua");
  dog.info();
 /*
  Halo
Nama saya adalah Leo
Saya adalah seekor Chihuahua
Saya berusia 4 tahun
Saya berusia 28 tahun dalam umur manusia

 */