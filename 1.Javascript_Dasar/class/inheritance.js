// Inheritance adalah Inheritance adalah kemampuan sebuah objek untuk mewarisi properti dan method dari objek lain. Objek yang diwarisi disebut child object (objek anak), sedangkan objek yang mewariskan properti dan method disebut parent object (objek parent). Inheritance membantu dalam menciptakan hierarki objek yang terstruktur dan mengurangi kode duplikasi.

//dengan kata lain Inheritance adalah cara membuat class baru berdasarkan class yang sudah ada. Misalnya, bila class Dog diwariskan dari class Animal, class Dog juga akan memiliki semua method yang didefinisikan dalam class Animal.

class animal -> mewariskan -> class Cat 



//Cara menggunakan inheritance 
//aat membuat class menggunakan inheritance, gunakan extends. Agar class Dog dapat menerima warisan data dari class Animal, tulis class Dog extends Animal seperti gambar di bawah. Untuk terminologi pemrograman, class yang digunakan sebagai dasar disebut class induk (di sini adalah class Animal), sedangkan class penerima warisan data disebut class anak (class Dog)

class Cat extends Animal {
        // diwariskan dari class animal 
}




// example code 
class Animal {
        constructor (name, age) {
                this.name = name;
                this.age = age;
        }

        greet() {
                console.log("Hallo, Rescue!");
        }

        info() {
            this.greet();
            console.log(`Nama saya adalah ${this.name}`);
            console.log(`Saya berumur ${this.age}`);
        }
}

// definisikan class dog agar dapat menerima warisan dari class animal
class Dog extends Animal{

}


const animal = new Animal("Regar", 53);
animal.info();
/*
Hallo, Rescue!
Nama saya adalah Regar
Saya berumur 53
*/







//Method yang diwarsikan 
//Class Dog akan mewarisi semua method class Animal. Karena itu, meskipun tidak ada method yang dideklarasikan dalam class Dog, class ini dapat menggunakan method info yang didefinisikan dalam class Animal.
class artis {

    info() {
        this.greet() {
            console.log(`hello everyone perkenalkan saya adalah ${this.name}, salam kenal ya!`);
            console.log(`saya tinggal di ${this.location}, dan saat ini tinggal bersama dengan keluarga`);
        }
    }

    class family extends artis {

    }
}



// Kode lengkap nya 
class Artis {
    constructor(name, location) { // Constructor untuk class Artis dengan parameter name dan location
        this.name = name; // Menginisialisasi properti name dengan nilai dari parameter name
        this.location = location; // Menginisialisasi properti location dengan nilai dari parameter location
    }

    greet() { // Method greet untuk mencetak pesan perkenalan
        console.log(`Hello everyone, perkenalkan saya adalah ${this.name}, salam kenal ya!`); // Mencetak pesan perkenalan dengan menggunakan nilai dari properti name
        console.log(`Saya tinggal di ${this.location}, dan saat ini tinggal bersama dengan keluarga.`); // Mencetak lokasi tinggal dengan menggunakan nilai dari properti location
    }
}

class Family extends Artis { // Class Family yang mewarisi class Artis
    constructor(name, location) { // Constructor untuk class Family dengan parameter name dan location
        super(name, location); // Memanggil constructor class Artis dengan menggunakan nilai name dan location
    }
}

// Contoh penggunaan:
const artis = new Artis("John", "Jakarta"); // Membuat instance baru dari class Artis dengan nama "John" dan lokasi "Jakarta"
artis.greet(); // Memanggil method greet() dari instance artis

const family = new Family("Smith", "Bandung"); // Membuat instance baru dari class Family dengan nama "Smith" dan lokasi "Bandung"
family.greet(); // Memanggil method greet() dari instance family







// example other 
class Animal {
    // info() {
        greet() {
            console.log(`Hallo nama saya ${this.name}`);
            console.log(`Saya berusia ${this.age}`);
        }
    }

    class Cat extends Animal{

        constructor(name, age) {
            super();
            this.name = name;
            this.age = age;
        }
    }


const cat = new Cat ("Nemo", 4);
cat.greet();
/*
Hallo nama saya Nemo
Saya berusia 4
*/







// example other 
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
  }
  
  // Terapkan instance class Dog ke constant dog
  const dog = new Dog("Leo", 4);
    
  
  
  // Panggil method info dari constant dog
  dog.info();

  /*
  Halo
Nama saya adalah Leo
Saya berusia 4 tahun
  */









// Method Class Anak 
//Method dapat ditambahkan ke class yang dibuat menggunakan inheritance dengan cara yang sama seperti class normal. Di bawah ini, Anda dapat melihat method getHumanAge yang dapat mengkonversikan umur anjing ke umur manusia.
class Cat extends Animal {
    getHumanAge () {
        // definisi Method
    }
}

//Nilai Return dalam Method 
/*
Dalam method, nilai return dapat digunakan sama seperti function.
Di bawah ini, nilai return method getHumanAge diberikan untuk constant humanAge.
*/
class Cat extends Animal { 
    getHumanAge() {
        return this.age * 7;
        // Metgod juga dapat menggunakan nilai return 
    }
}

const cat = new Cat("Nemo", 4);

const humanAge = cat.getHumanAge();

console.log(humanAge);





// code lengkap - Method class anak 
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}. `);
    }
}  

class Cat extends Animal{
        getHumanAge() {
            return this.age * 7; // mengembalikan usia manusia dengan mengalihkan usia kucing dengan 7
        }
}

const cat = new Cat("Nemo", 4);

const humanAge = cat.getHumanAge();

console.log(humanAge); // 28









//Mengakses Method Class Anak
//Method yang hanya didefinisikan dalam class anak tidak dapat dipanggil dari class induk. Seperti yang dapat Anda lihat di bawah ini, hal tersebut akan menyebabkan kesalahan saat Anda mencoba memanggil method getHumanAge dengan instance dari class Animal

class Dog extends Animal {
    getHumanAge() {
        return this.age * 7;
    }
}




const animal = new Animal ("Dendi", 58);

const humanAge = animal.getHumanAge(); // error akan muncul karena method getHumanAge hanya dapat digunakan di class Dog 




// Kode lengkap
class Animal {
    constructor(name, age) { // Constructor untuk inisialisasi properti name dan age
      this.name = name;
      this.age = age;
    }
    
    greet() { // Method greet untuk memberi salam
      console.log("Halo");
    }
    
    info() { // Method info untuk menampilkan informasi hewan
      this.greet(); // Memanggil method greet
      console.log(`Nama saya adalah ${this.name}`); // Menampilkan nama hewan
      console.log(`Saya berusia ${this.age} tahun`); // Menampilkan usia hewan
    }
  }
  
  class Dog extends Animal {
    // Tambahkan method getHumanAge untuk menghitung usia manusia dari usia anjing
    getHumanAge() {
          return this.age * 7; // Mengalikan usia anjing dengan 7 untuk mendapatkan usia manusia
      }
  }
  
  const dog = new Dog("Leo", 4); // Membuat instance dog dengan nama "Leo" dan usia 4 tahun
  dog.info(); // Memanggil method info untuk menampilkan informasi dog
  
  // Panggil method getHumanAge milik instance dog
  const humanAge = dog.getHumanAge(); // Mengambil usia manusia dari dog
  
  // Cetak 「Saya berusia __ tahun dalam umur manusia」
  console.log(`Saya berusia ${humanAge} tahun dalam umur manusia`);

/*
Halo
Nama saya adalah Leo
Saya berusia 4 tahun
Saya berusia 28 tahun dalam umur manusia
*/
  