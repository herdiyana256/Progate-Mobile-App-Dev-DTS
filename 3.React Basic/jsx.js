// JSX JSX (JavaScript Syntax Extension) adalah ekstensi sintaks JavaScript yang memungkinkan Anda untuk menulis kode HTML dalam file JavaScript Anda. Hal ini membuat pengembangan antarmuka pengguna (UI) React lebih mudah dan intuitif, karena memungkinkan Anda untuk menggunakan sintaks yang mirip dengan HTML yang sudah Anda kenal.

/*
anfaat JSX

Berikut adalah beberapa manfaat menggunakan JSX dalam React:

Membuat kode yang lebih mudah dibaca dan ditulis: JSX memungkinkan Anda untuk menulis kode HTML yang lebih terstruktur dan mudah dipahami. Hal ini dapat membantu Anda untuk meningkatkan produktivitas dan mengurangi kesalahan dalam kode Anda.
Mempermudah pengembangan UI: JSX memungkinkan Anda untuk menggunakan sintaks HTML yang sudah Anda kenal untuk membuat UI React. Hal ini dapat membantu Anda untuk menghemat waktu dan tenaga saat mengembangkan aplikasi React.
Meningkatkan keamanan: React secara default membersihkan nilai apa pun yang ditempatkan di dalam JSX sebelum merendernya. Hal ini membantu mencegah serangan injeksi.


Sintaks Dasar JSX

Sintaks JSX mirip dengan HTML, tetapi ada beberapa perbedaan penting. Berikut adalah beberapa hal yang perlu Anda ketahui tentang sintaks JSX:

Elemen JSX dimulai dengan tag pembuka dan diakhiri dengan tag penutup. Tag penutup dapat dihilangkan untuk elemen yang tidak memiliki anak.
Atribut elemen JSX ditulis dalam bentuk pasangan kunci-nilai. Kunci atribut harus ditulis dalam bentuk camelCase.
Anda dapat menggunakan ekspresi JavaScript di dalam JSX dengan menggunakan kurung kurawal ({ }). Hal ini memungkinkan Anda untuk membuat kode JSX yang lebih dinamis dan interaktif.

*/



//Contih JSX
function App() {
    return (
       <div>
    <h1>Hello Wolrd!</h1>
        <p>This is a React Application</p>
        </div>
    );
} //Berikut adalah contoh kode JSX yang sederhana:



//Contoh kode merender element HTML
<div>
    <h1>Hello World!</h1>
    <p>This is a React Application</p>


</div>





// Contoh kode komponent React  -Berikut adalah contoh komponen React yang sederhana:


function Greeting() {
        return (
            <div>
                <h1>Hello, {props.name}</h1>

            </div>
        );
} 




//Komponen Greeting dapat digunakan untuk merender salam yang dipersonalisasi:
<Greeting name="Herdiyan" />


//Conclusion : JSX adalah alat yang ampuh yang dapat membantu Anda untuk mengembangkan UI React yang lebih mudah dibaca, ditulis, dan dipelihara. Jika Anda belum pernah menggunakan JSX sebelumnya, saya sarankan Anda untuk mencobanya. Anda akan terkejut dengan betapa mudahnya menggunakannya.






// Menulis JSX -> dengan benar 
render () {
        return (
            <div>
                <h1>Heading h1 </h1>
                <h2>Heading h2 </h2>
                <h3>Heading h3 </h3>
                <p>text di tag p </p>

            </div>
        );
}





//Menulis JSX - yang salah 
render() {
    return (
        <h1>heading 1</h1>
        <h2>heading 2 </h2>
        <h3>heading 3</h3>
    )
} // tidak dikelompok dalam 1 tag -> div (. Jika Anda memiliki lebih dari satu element, gabungkan element-element tersebut ke dalam satu tag <div>)





//Komentar di JSX
//Ketika JSX diletakkan di antara simbol {/* dan */}, teks di dalamnya akan menjadi komentar. Komentar tidak akan ditampilkan di browser dan tidak akan mengubah hasil code Anda. Sebagian editor teks akan menunjukkan komentar dalam teks warna abu-abu.
render  () {
    return (
        <div>
                {/*ini adalah komentar */}
        </div>
    );
}






// Contoh lengkap nya -> App.js  (dicomponent)
import React from 'react';

class App extends React.Component {
    render (
        return (
            <div>
                {/* Komentar */}
                <h1> Hello Wolrd </h1>


                {/* Komentar */}
                <p>Ayo Belajar React </p>

            </div>
        )
    )
}




//Contoh lengkap nya -> di index.js  (diluar component)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'



//Contoh lengkap nya -> index.html (diluar src)
<html>
  <head>
    <link rel="stylesheet" href="stylesheet.css">
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="bundle.js"></script>
  </body>
</html>
