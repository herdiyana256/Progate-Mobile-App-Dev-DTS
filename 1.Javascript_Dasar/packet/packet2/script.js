// Menerima Nilai dari Console
//Terakhir, mari kita gunakan paket yang akan memungkinkan Anda memasukkan nilai dari console. Seperti yang ditunjukkan di gambar di bawah ini, kita akan membuat agar instance class Dog dapat dibuat bergantung pada nilai yang dimasukkan.



//Cara Menggunakan readline-sync 
//Dengan mengimport paket readline-sync, Anda akan dapat memasukkan nilai ke dalam console dan menggunakan nilai tersebut dalam program Anda. Caranya, import paket seperti yang ditunjukkan di gambar sebelah kiri, lalu tulis readlineSync.question(pertanyaan). Saat pertanyaan dicetak, code akan berhenti hingga nilai yang berupa string dimasukkan.

import readlineSync from "readline-sync";

readlineSync.question("Masukan nama:");




//Menggunakan Nilai Input 
// Nilai input dapat diberikan untuk constant dan variable dalam program Anda. Seperti yang dapat Anda lihat di gambar sebelah kiri, code readlineSync.question dapat diberikan untuk constant, sehingga nilai input akan disimpan ke constant tersebut. Dalam kasus ini, nilai input akan disimpan dalam constant name.
import readlineSync from "readline-sync";

const name = readlineSync.question("Masukan nama:");

console.log(`${name}dimasukkkan`)



//Memasukkan Integer
//eadlineSync juga dapat menerima nilai integer. Untuk menerima nilai integer, Anda dapat menggunakan readlineSync.questionInt(). Untuk memasukkan nilai usia di dalam latihan yang telah kita kerjakan, Anda hanya perlu untuk membuat instance Dog menggunakan code ini!
const name = readlineSync.question("Masukkan nama:");

const age = readlineSync.questionInt("Masukkan umur:");
                // ketika memasukan integer, gunakan questionInt.

                