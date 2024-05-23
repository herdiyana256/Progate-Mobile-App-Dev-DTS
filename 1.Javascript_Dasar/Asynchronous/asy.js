// Fungsi 'printer' menerima satu parameter 'data' dan mencetaknya ke konsol
const printer = (data) => {
    console.log(data);
}

// Fungsi 'power' menerima dua parameter 'a' dan 'b', menghitung 'a' pangkat 'b', dan mengembalikan hasilnya
const power = (a, b) => {
    const result = a ** b; // Menghitung 'a' pangkat 'b' menggunakan operator eksponensiasi (**)
    return result; // Mengembalikan hasil perhitungan
}

// Memanggil fungsi 'power' dengan argumen 3 dan 2, menyimpan hasilnya ke dalam variabel 'result'
const result = power(3, 2);

// Memanggil fungsi 'printer' dengan argumen 'result', yang akan mencetak hasil 9 ke konsol
printer(result); // 9






// kita asumsikan bahwa proses memakan waktu seperti saat berkomunikasi dengan sebuah server dan menunda proses dengan menggunakan setTimeout.
const printer = (data) => {
    console.log(data);

}


const power = (a,b) => {
    setTimeout(() => {
        const result = a ** b;
        return result;

    }, 1000);
}

const result = power (3,2)
printer(result) //undefined

//Dengan code ini, tidak ada yang akan tercetak sebab baris printer(result) berjalan sebelum eksekusi dari const result = power(3,2) berakhir.




