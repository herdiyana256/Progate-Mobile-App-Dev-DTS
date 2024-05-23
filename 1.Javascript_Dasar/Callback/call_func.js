//Argument callback functiom 
function greetAfterTwoSeconds(name, callback) {
    setTimeout(()=> {
            console.log(`Halo ${name}`);
            callback && callback(name); // Panggil callback yang disediakan jika ada
            
    }, 2000); // simulasikan penundaan 2 detik
}

function handlerGreeting(name) {
        console.log(`Senang mendengar kabar darimu, ${name}`);
}

greetAfterTwoSeconds(`Alice`. handlerGreeting); // lewatkan handleGreeting

/*

Penjelasan:

greetAfterTwoSeconds menerima dua argumen: name (orang yang ingin disapa) dan callback (fungsi opsional).
Ini menggunakan setTimeout untuk mensimulasikan penundaan 2 detik sebelum menjalankan callback.
Di dalam fungsi timeout, console.log mencetak salam dan kemudian memanggil callback jika disediakan.
Dalam panggilan ke greetAfterTwoSeconds, handleGreeting dilewati sebagai callback.
Ketika timeout selesai, handleGreeting dieksekusi, mencetak respons terhadap salam Alice.
*/





// Meneruskan argument  - function normal 
const introduce(name) => {
        console.log(name);
};

introduce("Herdiyan Adam Putra"); // Herdiyan Adam Putra



// Meneruskan argument - callback function 
const introduce = (callback) => {
        callback("PT Bina Anjing Ventura");
};

    introduce((name) => {
        console.log(name);
    }); // PT Bina Anjing Ventura 








    // Meneruskan Beberapa argument - function normal
    const introduce = (name, age) => {
        console.log(`${name} berusia ${age} Tahun.`);
    };

    introduce("Herdiyan", 28);
    //Herdiyan berusia 28 Tahun.

//================================================

    //Meneruskan Beberapa argument - callback function
    const introduce = (callback) => {
        callback("Herdiyan", 28);
    };

    introduce((name, age) => {
        console.log(`${name} berusia ${age} Tahun.`);
    });     //Herdiyan berusia 28 Tahun.


//====================================================
    //example II
    const call = (callback) => {
        callback("Ninja Ken", 14);
      };
      
      // Tambahkan sebuah function yang menerima dua argument di dalam argument call
      call((name, age) => {
        console.log(`${name} berusia ${age} tahun.`);
      });
      
      