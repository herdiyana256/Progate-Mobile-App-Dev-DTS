/*

Component dan Props
Pendahuluan

React adalah pustaka JavaScript yang digunakan untuk membangun antarmuka pengguna (UI) yang dinamis dan interaktif. Salah satu konsep penting dalam React adalah component. Component adalah blok kode yang dapat digunakan kembali untuk membangun UI. Component dapat terdiri dari elemen HTML, JavaScript, dan component lain.

Apa itu Component?

Bayangkan UI aplikasi web Anda sebagai sebuah bangunan. Bangunan ini tersusun dari berbagai bagian, seperti tembok, pintu, jendela, dan atap. Masing-masing bagian ini dapat dianggap sebagai component dalam React.

Component memiliki beberapa keunggulan, antara lain:

Memudahkan pengembangan UI: Component memungkinkan Anda untuk membagi UI menjadi bagian-bagian yang lebih kecil dan mudah dikelola.
Meningkatkan reusability: Component dapat digunakan kembali di berbagai tempat dalam aplikasi Anda.
Membuat kode yang lebih terstruktur: Component membantu Anda membuat kode yang lebih terstruktur dan mudah dipahami.
Apa itu Props?

Props adalah cara untuk meneruskan data dari satu component ke component lain. Props seperti parameter yang dilewatkan ke fungsi.

Bayangkan Anda memiliki component Button yang ingin menampilkan teks yang berbeda-beda. Anda dapat meneruskan teks yang ingin ditampilkan ke component Button menggunakan props.

JavaScript
// Component Button
function Button(props) {
  return <button>{props.text}</button>;
}

// Penggunaan component Button
<Button text="Klik Saya!" />
<Button text="Kirim" />
Gunakan kode dengan hati-hati.
content_copy
Dalam contoh di atas, props text digunakan untuk meneruskan teks "Klik Saya!" dan "Kirim" ke component Button.

Jenis-jenis Component

Ada dua jenis utama component dalam React:

Functional Component: Component yang didefinisikan sebagai fungsi JavaScript.
Class Component: Component yang didefinisikan menggunakan kelas JavaScript.
Contoh Component

Berikut adalah contoh sederhana dari component functional:

JavaScript
import React from 'react';

function App() {
  return (
    <div>
      <h1>Judul Halaman</h1>
      <p>Paragraf teks.</p>
    </div>
  );
}

export default App;
Gunakan kode dengan hati-hati.
content_copy
Contoh ini mendefinisikan component bernama App yang menampilkan judul halaman dan paragraf teks.

Kesimpulan

Component dan props adalah konsep fundamental dalam React yang membantu Anda membangun UI yang dinamis dan interaktif. Dengan memahami konsep-konsep ini, Anda dapat mulai membangun aplikasi React yang kompleks dan menarik.

Tips:

Latihanlah membangun component dan props sederhana untuk memahami cara kerjanya.
Gunakan component dan props untuk modularisasi kode Anda dan membuatnya lebih mudah dikelola.
Eksplorasi berbagai jenis component dan props yang tersedia di React.
Sumber Daya Tambahan:

https://legacy.reactjs.org/
https://legacy.reactjs.org/docs/components-and-props.html
https://www.freecodecamp.org/news/tag/react/

*/



//Alur untuk Menampilkan React
//JSX yang tertulis dalam App.js akan dikonversikan ke HTML dan ditampilkan dalam browser. Untuk menampilkan code React di browser, selain App.js, file index.js dan index.html juga diperlukan.



//App.js
class App extends React.Component {
    render() {
            return (
                <h1>Hello Wolrd</h1>
            );
    }
}


//Index.js 
import App from '/.components/App';
ReactDom.render(<App />, document.getElementById('root'));
// react dom -> return dari h1 
// get element id -> yaitu masukan element dengan id yang dispesifikasikan di index.html




//Index.html
<!DOCTYPE html>
<html>
  <head>
    <title>React App</title>
  </head>
  <body>
    {/* <!-- Tambahkan id ke tag div --> */}
    <div id="root"></div>
    <script src="bundle.js"></script>
  </body>
</html>