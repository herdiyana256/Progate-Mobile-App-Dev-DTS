//Pengembangan Tim dengan Git

//git init-> singkatan dari initialize 


/*
Peranan GIT

3 Langkah pada pengembangan tim -> 
1. step 1 : Buat perubahan ke file 
2. step 2 : Persiapan untuk membagikan perubahan 
3. step 3 : Bagikan perubahan 


*/



// 1. melakukan perubahan pada file yang akan di bagikan -> git add latihan.html

// $ git add latihan.html -> File dengan perubahan 





// 2. Selanjutnya, Merekam File yang di pilih -> git add 

/*

$ git commit -m "create latihan.html"

untuk merekan file yang di pilih dengan perintah git commit -m "pesan"

*/

// Workflow Pengembangan Tim

// dengan git add dan git commit, 2 commant ini sudah siap untuk berbagi file.

//alur kerja git 

/*

Step 1 : Buar perubahan ke file 
Step 2 : Persiapan untuk membagikan perubahan 
Step 3 : Bagikan perubahan

*/



//3 . Proses Berbagi -> unggah , unduh 
//Git menggunakan sesuatu yang disebut remote (atau remote repository) untuk menyimpan file-file yang dibagikan.
//Pengembang membagikan file dengan mengunggah ke dan mengunduh dari remote.



// Mengatur Remote -> a.menambah remote
// $ git remote add origin  https://prog-8.com/mysite.git -> sample 
// $ git remote add remote_name_url -> origin adalah nama remote, https..xxxx adalah URL Remote 



//4. Mengunggah File ke remote
// $ git push origin master  -> mengunggah file ke remote master 




//5. Mengunduh File dari Remote 
// $ git pull origin master -> mengunduh file dari remote master




//Berlatih Alur kerja pengembangan tim 
/*
pull
add 
commit 
push 

*/





// 6. Mengenai file-file yang di modifikasi 
// $ git status -> menampilkan daftar  file file yang sudah di modifikasi




// 7. Mengenali Perubahan-Perubahan Konten 
// $ git diff -> melihat perubahan konten (biasanya berwarna hijau), sedangkan code yang sebelumya / belum diubah berwarna (merah).





//8. Mengecek file file yang ditambahkan 
// $ git status (file yang telah di tambahkan berwarna hijau), sedangkan file yang telah di modifikasi namun belum ditambahkan berwarna merah.





//9. Menulis Pesan Commit yang baik 
// note :  menulis pesan commit yang deskriptif sehingga jika seseorang melihatnya, mereka bisa mengerti dengan mudah perubahan apa yang sudah dibuat.




//10/ Git log 
// kamu atau orang lain dapat melihat commit-commit.

// $ git log -p -> melihat perubahan perubahan lengkap





/*
Persiapan Environment Local Git (Windows)
1. Menginstal Git -> git bash 
2. Pengaturan git bash ->  
$ git config --global user.name "username"
$ git config --global user.email "email address"

*/





// A. Mempersiapkan Github
/*
1.Membuat sebuah repository remote baru

*/


//B . Mengatur SSH dengan Github 
//Menambahkan Sebuah Key SSH ke Sebuah Akun GitHub

/*
1. cek dulu -> $ ls ~/.ssh 
2. apabila tidak ada maka kita create baru -> 
ssh -keygen -t ed25519 -C "alamat email yang digunakan untuk Github"
3. enter, lalu cek kembali $ ls ~/.ssh 

*/

//C. Menambahkan sebuah key SSH kesbuah akun Github
/*
Langkah-langkah Mengatur SSH dengan GitHub
Berikut adalah panduan singkat untuk mengatur SSH key dengan GitHub:

Membuat SSH Key:

bash
Copy code
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
Gantilah your_email@example.com dengan email Anda yang terdaftar di GitHub. Tekan Enter untuk menyimpan key di lokasi default, dan masukkan passphrase jika diinginkan.

Menyalin SSH Key ke Clipboard:

bash
Copy code
cat ~/.ssh/id_rsa.pub
Salin seluruh output dari perintah ini.

Menambahkan SSH Key ke GitHub:

Buka GitHub dan masuk ke akun Anda.
Klik ikon profil Anda di sudut kanan atas, kemudian pilih Settings.
Di menu sebelah kiri, pilih SSH and GPG keys.
Klik tombol New SSH key.
Isi kolom Title dengan sesuatu yang deskriptif, misalnya Laptop Work atau Desktop Home.
Tempelkan SSH key yang telah Anda salin ke dalam kolom Key.
Klik Add SSH key.
Menghubungkan dengan GitHub:

Uji koneksi dengan GitHub:
bash
Copy code
ssh -T git@github.com
Jika Anda melihat pesan seperti ini, koneksi Anda sudah berhasil:
plaintext
Copy code
Hi your_username! You've successfully authenticated, but GitHub does not provide shell access.
Dengan langkah-langkah ini, Anda telah berhasil mengatur SSH key untuk digunakan dengan GitHub. Sekarang, Anda dapat melakukan operasi git tanpa memasukkan kredensial setiap kali, yang akan meningkatkan efisiensi dan keamanan dalam bekerja dengan repositori GitHub.







===========================================================================
Berikut adalah beberapa manfaat utama dari menggunakan SSH dengan GitHub:

Keamanan:

Enkripsi: SSH (Secure Shell) menyediakan koneksi yang terenkripsi antara komputer Anda dan server GitHub, memastikan bahwa data yang dikirimkan tidak dapat disadap oleh pihak ketiga.
Otentikasi: SSH key digunakan untuk mengautentikasi pengguna, yang lebih aman daripada menggunakan kata sandi. Ini membuat akses ke repositori Anda lebih aman.
Kemudahan Penggunaan:

Tanpa Kata Sandi: Setelah Anda mengatur SSH key, Anda tidak perlu lagi memasukkan nama pengguna dan kata sandi setiap kali melakukan operasi git seperti git push atau git pull. Ini menghemat waktu dan mengurangi kerepotan.
Otomatisasi: SSH key memungkinkan Anda untuk mengotomatiskan skrip dan proses yang berinteraksi dengan GitHub, seperti deployment dan continuous integration, tanpa memerlukan input manual untuk autentikasi.
Akses yang Stabil:

Akses Tetap: SSH key yang sudah diatur akan tetap berlaku hingga Anda sendiri yang menghapusnya atau menggantinya. Tidak perlu memperbarui atau mengulang proses autentikasi secara berkala.
Pengelolaan Akses:

Kontrol Akses: Anda dapat membuat beberapa SSH key untuk berbagai perangkat atau layanan dan mengelola akses dengan mudah dari pengaturan GitHub. Jika salah satu perangkat hilang atau tidak lagi digunakan, Anda dapat mencabut akses SSH key terkait tanpa mempengaruhi perangkat lain.


*/




// B. PUSH KE GITHUB
/*
CONTOH
1.Mempersiapkan Untuk Menggunakan Git
mkdir mysite
cd mysite
git init
git remote add origin <URL> -> ada di github reponya
git remote -v
touch index.html
git add index.html
git commit -m "Create index.html"
git push origin main


*/




//C. Menghilangkan keharusan untuk memasukan passphrase
/*
etiap kali kamu ingin menggunakan SSH seperti push atau perintah git lain, kamu diharuskan memasukkan pasphrase. Jika kamu menambahkan pengaturan yang dijelaskan di bagian ini, kamu dapat mengilangkan keharusan untuk memasukkan passphrase.
Ini sedikit rumit, tetapi untuk kamu yang ingin menghilangkan keharusan memasukkan passphrase setiap saat, mari kita ambil tantangan untuk mengaturnya.





Mempersiapkan sebuah file .bashrc
.bashrc adalah sebuah file konfigurasi yang saat kamu menyiapkan itu, pengaturan yang ditulis di dalam file akan otomatis dibaca saat Git Bash dinyalakan. Pertama, mari periksa dan lihat apakah file .bashrc sudah ada. Untuk mencetak isi dari file, gunakan perintah berikut:
Langkah-langkah Menghilangkan Keharusan Memasukkan Passphrase
1. Membuat atau Memeriksa File .bashrc
.bashrc adalah file konfigurasi yang dieksekusi setiap kali sesi shell interaktif dimulai. Kita akan menambahkan pengaturan untuk menjalankan ssh-agent dan menambahkan kunci SSH ke dalamnya.

Periksa apakah file .bashrc sudah ada:

bash
Copy code
cat ~/.bashrc
Jika file tersebut ada, Anda akan melihat isinya. Jika tidak ada keluaran atau pesan bahwa file tidak ditemukan, Anda dapat membuatnya.

2. Menambahkan Konfigurasi ssh-agent ke .bashrc
Tambahkan baris berikut ke file .bashrc. Ini akan memastikan ssh-agent dijalankan setiap kali Anda membuka terminal dan kunci SSH Anda ditambahkan secara otomatis.

Edit atau buat file .bashrc:

bash
Copy code
nano ~/.bashrc
atau gunakan editor teks favorit Anda seperti vi, vim, atau gedit.

Tambahkan skrip berikut ke dalam file .bashrc:

bash
Copy code
# Start ssh-agent in the background
eval "$(ssh-agent -s)"

# Add your SSH private key
ssh-add ~/.ssh/id_rsa
Simpan perubahan dan keluar dari editor.
Di nano, Anda dapat menyimpan perubahan dengan menekan Ctrl+O, lalu tekan Enter untuk mengonfirmasi. Keluar dengan Ctrl+X.

3. Memuat Ulang File .bashrc
Agar perubahan di .bashrc diterapkan tanpa harus membuka terminal baru, muat ulang file .bashrc dengan perintah berikut:

bash
Copy code
source ~/.bashrc
4. Menambahkan Kunci SSH ke ssh-agent
Setelah Anda memuat ulang .bashrc, kunci SSH akan secara otomatis ditambahkan ke ssh-agent setiap kali Anda membuka terminal baru. Anda dapat menguji ini dengan menjalankan perintah berikut:

bash
Copy code
ssh-add -l
Jika kunci Anda telah ditambahkan, Anda akan melihat output yang menampilkan fingerprint dari kunci SSH Anda.

5. Menguji Koneksi SSH dengan GitHub
Terakhir, uji koneksi SSH ke GitHub untuk memastikan semuanya berfungsi dengan benar:

bash
Copy code
ssh -T git@github.com
Anda seharusnya melihat pesan seperti ini:

plaintext
Copy code
Hi your_username! You've successfully authenticated, but GitHub does not provide sh
*/



