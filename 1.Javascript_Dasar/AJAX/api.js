//2. Mengambil Data dari API

//Untuk membuat permintaan AJAX, browser memberi Kamu metode bawaan yang disebut XMLHttpRequest. Untuk menjalankan XMLHttpRequest, kita perlu melakukan hal-hal berikut:


//1. Membuat object XMLHttpRequest
const xhttp = new XMLHttpRequest();


//2. Membuat sebuah Callback function
xhttp.onload = function() {
    // apa yang kita lakukan ketika response telah tersedia
    console.log(this.responseText);
} 
//Callback function disini berisi code yang akan dijalankan ketika response dari API diterima. Pada contoh kali ini, kita akan menampilkan response yang kita terima dari API pada console.



//3. Mengirim request ke server
xhttp.open("<HTTP_METHOD>", "<URL>");
xhttp.send();



//Ini adalah code untuk mengakses titik akhir PokeApi.
<html lang="en">

    <head>
        <meta charset="UTF-8">
            <title>Progate</title>
    </head>

    <body>
    <h1>Mulai Menggunakan AJAX</h1>

    <button type="button" onclick="fetchData()">Fetch data</button>


    <script>
        function fetchData() {
            const xhttp = new XMLHttpRequest();
            const url = 
            "https://pokepi.co/api/v2/pokemon?limit=10";
            const httpMethod = "GET";
            xhttp.onload = function() {
                console.log(this.responseText);
            }
            xhttp.open(httpMethod, url);
            xhttp.send();
        }


    </script>


    </body>


</html>