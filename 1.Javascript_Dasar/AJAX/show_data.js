/*
3. Menampilkan Data di Halaman Web

Terakhir, mari tunjukkan data yang Kamu dapatkan dari API di halaman web Kamu.
Setelah mendapatkan data dari API, tentunya kita tidak hanya ingin menampilkan output-nya di console. Tetapi juga perlu menampilkan data tersebut di halaman web kita.
Pertama-tama kita akan membuat sebuah <div> untuk menampilkan data yang kita terima dari API.
<div id="result">
	// tempat untuk menampilkan data response
</div>
Kemudian kita akan memasukkan data kita ke <div> tersebut.
Kita bisa memilih <div> tersebut dengan perintah document.getElementById("<nama_id>") dan mengganti nilainya dengan perintah .innerHTML.
document.getElementById("result").innerHTML = this.responseText;
Dengan code tersebut, kita akan menampilkan seluruh data yang kita terima dari API di halaman web kita.

Tapi, tentunya kita tidak mau hanya menampilkan teks yang kita terima apa adanya. Kita akan melakukan looping data Pokemon dan menampilkan hanya setiap nama Pokemon.
Ubah format response dari API menjadi format JavaScript object dengan printah JSON.parse() .
Ambil data aktual yang dibutuhkan. Dalam contoh ini, data Pokemon ada di dalam key results dengan tipe data array.
Lakukan looping dan mengambil setiap nama Pokemon dan menampilkannya dalam element HTML <p>.
const response = JSON.parse(this.responseText);
const results = response.results;

let data = '';
for (let i = 0; i < results.length; i++) {
  data = data + `<p>${results[i].name}</p>`;
}
Jika kita menggabungkan semua bagian code kita, akan menjadi seperti ini:
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Progate</title>
</head>
<body>
  <h1>Mulai menggunakan AJAX</h1>

  <button type="button" id="button" onclick="fetchData()">Fetch data</button>
  <div id="progate"></div>

  <script>
    function fetchData() {
      const xhttp = new XMLHttpRequest();
      const url = "https://pokeapi.co/api/v2/pokemon?limit=10";
      const httpMethod = "GET";
      xhttp.onload = function() {
        const response = JSON.parse(this.responseText);
        const results = response.results;

        let data = ''
        for (i = 0; i < results.length; i++) {
          data = data + `<p>${results[i].name}</p>`;
        }

        document.getElementById("progate").innerHTML = data;
      }
      xhttp.open(httpMethod, url);
      xhttp.send();
    }
  </script>
</body>
</html>
Kita akan menjalankan aplikasi ini kembali, dan melihat perubahan jika kita menekan tombol "Fetch data".

Periksa
Apakah Kamu berhasil menampilkan di halaman web Kamu?

*/



// 1. Pertama-tama kita akan membuat sebuah <div> untuk menampilkan data yang kita terima dari API.

<div id="result">

        // tempat untuk menampilkan data response
</div>

//Kemudian kita akan memasukkan data kita ke <div> tersebut.


//Kita bisa memilih <div> tersebut dengan perintah document.getElementById("<nama_id>") dan mengganti nilainya dengan perintah .innerHTML.
document.getElementById("result").innerHTML = this.responseText;


//Dengan code tersebut, kita akan menampilkan seluruh data yang kita terima dari API di halaman web kita.



/*
api, tentunya kita tidak mau hanya menampilkan teks yang kita terima apa adanya. Kita akan melakukan looping data Pokemon dan menampilkan hanya setiap nama Pokemon.
Ubah format response dari API menjadi format JavaScript object dengan printah JSON.parse() .
Ambil data aktual yang dibutuhkan. Dalam contoh ini, data Pokemon ada di dalam key results dengan tipe data array.
Lakukan looping dan mengambil setiap nama Pokemon dan menampilkannya dalam element HTML <p>.

*/
const response = JSON.parse(this.responseText);
const result = response.results;

let data = "",
for(let i = 0; i < results.length; i++) {
    data = data + ``<p>${results[i].name</p>}`;
    
}

