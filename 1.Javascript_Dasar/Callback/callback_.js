// Mendeklarasikan Callback Function secara Langsung 


// Mendeklarasikan function dalam argument 
// Sebelumnya, kita sudah belajar cara meneruskan callback function yang telah didefinisikan, namun function juga dapat didefinisikan langsung di dalam argument
const printJol = () => {
        console.log("Bina Anjing Ventura");
};

const call = (callback) => {
        console.log("Jangan Menggunakan Pinjol Ilegal!");
        callback();
    };

    call(printJol);
    //cara mendefinisikan function 






    // mendeklrasikan function didalam argument 
    const pinjol = () => {
            console.log("Pinjol itu riba!");
    };


    const call = (callback) => {
            console.log("Jangan pakai Pinjol India");
            callback();
    };



    call() =>  {
            console.log("Pinjol itu riba");
    }








    // example
    const printKen = () => {
        console.log("Pinjol Anjing!");
    };

    const call = (callback) => {
        console.log("Jangan Pakai Pinjol Ilegal!");
        callback();
    };



    call(printKen);



    call(() => {
        console.log("Pinjol itu riba");
    });
    /*
Jangan Pakai Pinjol Ilegal!
Pinjol Anjing!
Jangan Pakai Pinjol Ilegal!
Pinjol itu riba

    */






//Meneruskan Argument-function normal
const introduce = (name) => {
        console.log(name);
};

introduce("Herdiyan Adam Putra"); //Herdiyan Adam Putra





//Meneruskan Argument - Callback function
const introduce = (callback) => {
                callback("Herdiyan Adam Putra");
};

introduce((name) => {
                console.log(name);
});
// Herdiyan Adam Putra




//Meneruskan Beberapa Argument callback function - normal
const introduce = (name, age) => {
        console.log(`${name} berusia ${age} tahun`);
};

introduce("Herdiyan", 28);
//Herdiyan berusia 28 tahun





// callback function 
const introduce = (callback) => {
        callback("Herdiyan", 28);
};
introduce((name, age) => {
        console.log(`${name} berusia ${age} tahun.`);

}); //Herdiyan berusia 28 tahun.




// hal hal yang perlu di perhatikan untuk argument
const introduce = (callback) => {
                callback("Herdiyan", "Co-Founder IslamiConnect");
};

        introduce((name, position) => {
                console.log(`${name} saat ini bekerja sebagai ${position}`);
        });