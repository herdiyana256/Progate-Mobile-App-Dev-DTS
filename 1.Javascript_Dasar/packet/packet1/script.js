//Mengimport Paket 
// Untuk meng-import paket dalam program Anda sendiri, gunakan kata import. Saat meng-import paket, tentukan nama paket, bukan nama file. Contoh di bawah, menunjukan bagaimana cara untuk meng-import paket yang disebut chalk.

// import ConstanName from ""packageName";


import chalk from "chalk";



//cara menggunakan paket chalk 
/*
Setelah meng-import, Anda akan dapat menggunakan paket dalam file.
Paket chalk memungkinkan Anda mengubah warna teks. Seperti yang ditunjukkan di sebelah kiri, Anda dapat mengubah warna teks dengan mudah dengan meneruskan string ke method paket seperti chalk.yellow() dan chalk.bgCyan().
*/


import chalk from "chalk";

console.log(chalk.yellow("Hello Pinjol!"));

console.log(chalk.bgCyan("Hello Riba Company!"))
