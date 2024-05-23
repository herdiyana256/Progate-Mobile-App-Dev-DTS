// Git & Version Control 

/*

1. Mengenal Branch pada Git
Sebelumnya kamu sudah tahu cara untuk membuat repository dan melakukan commit. Jika diperhatikan lagi, yang Kamu lakukan ialah melakukan commit pada branch utama yaitu branch main.
Branch main merupakan branch yang dibagikan kepada programmer lain dan merupakan branch utama dari seluruh branch yang ada. Nantinya semua branch yang dibuat oleh setiap programmer akan digabungkan ke branch main tersebut.
Dalam menggunakan Git sebagai alat untuk berkolaborasi bersama programmer lain, biasanya setiap programmer akan membuat branchnya masing-masing untuk menghindari terjadinya conflict pada perubahan yang dikirimkan terhadap branch utama.
Misalnya, Kamu melakukan perubahan pada file readme.md dan programmer lain juga melakukan hal sama namun dengan perubahan yang berbeda, maka nantinya di Git akan terjadi conflict karena terdapat 2 perubahan yang terjadi dalam 1 file yang sama.


fitur baru -> main -> perbaikan 

*/


//1 Membuat Branch Pribadi 
$ git branch nama-branch 
$ git checkout menambahkan readme -> menambahkan readme maksutnya ini perintah text yang dimasukan untuk didalam pesan branch main (pesan yang baru dibuat)
git branch -> cek branch 
touch README.md -> buat file baru 
ls -> cek apakah file sudah berhasil di buat 
$ git add  .
$ git commit -m "menambahkan file readme"
$ git push --set-upstream origin menambahkan-readme
//Perintah --set-upstream digunakan untuk mengatur nilai default branch dari git, sehingga nantinya Kamu tidak perlu menuliskan kembali nama branch yang diinginkan.

$ git push origin menambahkan-readme
$ git push --set-upstream origin menambahkan-readme
$ git push




//2.Membuat pull request 
/*
a. Tekan tombol Compare & Pull Request untuk membuat Pull Request baru. (di github repo)
note : Pull Request merupakan permintaan untuk menggabungkan (merge) code yang kita modifikasi dengan repositori utama atau repositori lain.
Berikan judul dan deskripsi yang jelas pada pull request agar nantinya lebih mudah dalam memahami tujuan dari perubahan tersebut, jika sudah cukup tekan Create Pull Request.


note : 
Hapus branch yang sudah tidak terpakai, pada dialog ini Kamu harus menekan delete branch untuk menghapusnya.

*/




//3. Mengambil Perubahan dari Remote repository

// $ git checkut main 

//git pull -> git pull digunakan saat Kamu akan mengambil perubahan dari repository remote, misalnya programmer melakukan merge pull request pada branch main. Maka Kamu dapat melakukan git pull untuk mengambil perubahan itu dan menyatukannya pada git local Kamu.
// Untuk memastikan bahwa kamu sudah mengambil perubahan terbaru yaitu dengan melakukan kembali git pull, jika hasilnya seperti dibawah ini maka data sudah sama dengan yang terdapat pada remote repository.



/*
Hapus branch bernama menambahkan-readme dengan perintah berikut:
git branch --delete menambahkan-readme
atau versi lebih singkatnya:
git branch -d menambahkan-readme

Itulah alur bagaimana cara Kamu melakukan perubahan dalam git, mulai dari local sampai ke remote repository.

*/




