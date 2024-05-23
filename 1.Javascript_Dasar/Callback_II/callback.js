//Callback ->  jika kita menggunakan sebuah function sebagai parameter di function lain, maka itu disebut Callback. Callback bisa juga digunakan untuk proses asynchronous.

const printer = (data) => {
    console.log(data);
}

const power = (a, b, callback) => {
    setTimeout(() => {
        const result = a ** b;
        callback(result);
}, 1000);
}

    power(3, 5, printer); //243

    // note : Dalam contoh ini, function power menerima 3 parameter, yaitu huruf a, huruf b dan sebuah callback. callback ini merupakan sebuah function, yang akan berjalan setelah mendapatkan hasil dari operasi a ** b.


    //==============================================
    power(3,2 (result1) => {
        power(result1, 2.,(result2) => {
            power(result2, 2, printer)

        })
    })
    //6561


    


    //cara lama

    power(3, 2, (result1) => {
        power(result1, 2, (result2) => {
          power(result2, 2, (result3) => {
            power(result3, 2, (result4) => {
              power(result4, 2, (result5) => {
                power(result5, 2, printer)
              })
            })
          })
        })
      })