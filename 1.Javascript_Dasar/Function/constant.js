// Constant didalam function 
//Argument dari function dan constant yang didefinisikan di dalam sebuah function hanya dapat digunakan di dalam function tersebut. Dalam contoh di bawah ini, constant name hanya dapat digunakan di dalam function introduce karena name didefinisikan di dalam function tersebut. Jika Anda mencoba menggunakan constant name di luar functionnya, error akan terjadi.

const introduce = () =>  {
    const name = "Herdiyan Adam";
    // constant name dapat digunakan dalam scope ini
}

// constant name tidak dapat digunakan diluar scope diatas 







// constant di luar function 
//Jika constant didefinisikan di luar function, constant dapat digunakan di dalam dan di luar function. Dalam contoh di bawah ini, constant name didefinisikan di luar function introduce, sehingga dapat digunakan di dalam dan di luar function.
const name = "Herdiyan";
const introduce = () => {
    // constant name dapat digunakan dalam scope ini
};

// constant name dapat digunakan dalam scope ini 




// example code 
const name = "Adam";
const introduce = ()=> {
    // kontanta name dapat digunakan didalam fungsi introduce
    return `Halo, nama saya ${name}`;
};


// memanggil fungsi introduce dan menampilkan hasilnya 
console.log(introduce());
// Halo, nama saya Adam




// // Fungsi membangun objek pengguna

// Kontanta employee didefinisikan di luar fungsi introduce 
const employee = {
    name : "Herdiyan",
    position : "Software Engineer",
    departement: "IT"
};

//// Fungsi introduceEmployee menerima objek employee sebagai argumen dan mengembalikan pesan pengenalan.
const introduceEmployee = (employee) => {
    // Mengakses properti dari objek employee yang diberikan sebagai argumen.
    return `Halo, saya ${employee.name}, bekerja sebagai ${employee.position} di departement ${employee.departement}`;
};


// Memanggil fungsi introduceEmployee dengan objek employee dan  menampilkan hasilnya.
console.log(introduceEmployee(employee)); //// Menampilkan: "Halo, saya John Doe, bekerja sebagai Software Engineer di departemen Engineering."

//Halo, saya Herdiyan, bekerja sebagaiSoftware Engineer di departement IT





// other example 
//Jika constant didefinisikan di luar function, constant dapat digunakan di dalam dan di luar function. Dalam contoh di bawah ini, constant name didefinisikan di luar function introduce, sehingga dapat digunakan di dalam dan di luar function.
const name = "bina anjing";

const brand = () => {
    // constant name dapat digunakan dalam scope ini
}


// contant name dapat digunakan dalam scope ini 






// Scope sebuah constant 
//Setiap constant memiliki bagian yang dapat diakses, dan bagian constant ini kita sebut sebagai constant scope.
if (kondisi) {
    const name = "the king of zhalim";
    // constant name dapat digunakan dalam scope ini
}

// contant name tidak dapat digunakan diluar scope 



// Scipe sebuah constant
while(kondisi) {
    const name = "the king of zhalim";
    // contant name dapat digunakan dalam scope ini
}

// contant name tidak dapat digunakan diluar scope diatas 








// example other 
const name = "miftah";

const employee = (name) => {
    console.log(`Saya zhalim kepada yang bernama ${name}`);
};


employee("Herdiyan adam putra");


console.log(name);
/*
Saya zhalim kepada yang bernama Herdiyan adam putra
miftah

*/



