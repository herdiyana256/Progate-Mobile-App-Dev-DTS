// Apa yang di maksud dengan iterasi 
/*
Selanjutnya, mari kita pikirkan cara mencetak angka dari 1 hingga 100!
Seperti pada halaman sebelumnya, kita dapat menulis code yang sama sebanyak 100 kali, namun hal tersebut akan sangat membosankan. Dalam kasus ini, menggunakan iterasi akan memudahkan Anda untuk melakukannya. Mari kita lihat cara kerja iterasi pada slide berikutnya.
*/



for(let i = 1; i++ <= 100; i++) {
    console.log(i)
}
//asalah terjadi karena Anda menggunakan operator peningkatan (++) dalam kondisi loop for. Pada setiap iterasi, nilai i ditingkatkan sebelum kondisi dievaluasi. Ini mengakibatkan nilai yang dievaluasi oleh kondisi loop bukan nilai asli i, tetapi nilai i setelah peningkatan.




