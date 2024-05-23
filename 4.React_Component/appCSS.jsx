/*
Menerapkan CSS pada React JS
Ada beberapa cara untuk menerapkan CSS pada React JS, yaitu:

1. Inline Styles:

Metode ini melibatkan penambahan atribut style ke elemen HTML dalam komponen React. Atribut style menerima objek JavaScript yang berisi properti CSS. Cara ini mudah digunakan untuk gaya sederhana, tetapi tidak disarankan untuk gaya yang kompleks.

JavaScript
import React from 'react';

function MyComponent() {
  return (
    <div style={{ color: 'red', fontSize: 20 }}>
      Ini adalah teks merah dengan ukuran 20
    </div>
  );
}
Gunakan kode dengan hati-hati.
content_copy
2. CSS Modules:

CSS Modules adalah cara yang lebih terstruktur untuk menerapkan CSS pada React. Setiap komponen memiliki file CSS sendiri, dan nama kelas CSS di-scope untuk komponen tersebut. Hal ini membantu mencegah konflik nama kelas dan meningkatkan modularitas.

JavaScript
import React from 'react';
import styles from './MyComponent.module.css';

function MyComponent() {
  return (
    <div className={styles.redText}>
      Ini adalah teks merah dengan ukuran 20
    </div>
  );
}
Gunakan kode dengan hati-hati.
content_copy
3. Styled Components:

Styled components adalah pustaka pihak ketiga yang memungkinkan Anda menulis CSS langsung dalam komponen React Anda. Hal ini memungkinkan Anda untuk membuat gaya yang lebih deklaratif dan mudah dipelihara.

JavaScript
import React from 'react';
import styled from 'styled-components';

const MyComponent = styled.div`
  color: red;
  font-size: 20px;
`;

function MyComponent() {
  return (
    <MyComponent>
      Ini adalah teks merah dengan ukuran 20
    </MyComponent>
  );
}
Gunakan kode dengan hati-hati.
content_copy
4. CSS-in-JS Libraries:

Ada beberapa pustaka CSS-in-JS populer lainnya, seperti JSS, Emotion, dan Aphrodite. Pustaka ini menawarkan fitur yang berbeda-beda, seperti dukungan untuk animasi CSS, media query, dan preprocessor CSS.

Memilih Metode yang Tepat:

Metode terbaik untuk menerapkan CSS pada React JS tergantung pada kebutuhan spesifik Anda. Jika Anda memiliki gaya yang sederhana, inline styles mungkin cukup. Jika Anda membutuhkan gaya yang lebih kompleks dan terstruktur, CSS Modules atau styled components adalah pilihan yang lebih baik. Jika Anda membutuhkan fitur lanjutan seperti animasi CSS, Anda dapat menggunakan pustaka CSS-in-JS.

Berikut adalah beberapa sumber daya tambahan untuk mempelajari lebih lanjut tentang menerapkan CSS pada React JS:

Dokumentasi React tentang Styling
CSS Modules [URL yang tidak valid dihapus]
Styled Components
JSS
Emotion [URL yang tidak valid dihapus]
Aphrodite [URL yang tidak valid dihapus]
Semoga materi ini membantu!

*/



//Menerapkan CSS pada React JS
//Metode ini melibatkan penambahan atribut style ke elemen HTML dalam komponen React. Atribut style menerima objek JavaScript yang berisi properti CSS. Cara ini mudah digunakan untuk gaya sederhana, tetapi tidak disarankan untuk gaya yang kompleks.


// 1. inline style (penambahan style langsung)
import React from "react";

function MyComponent () {
    return (
        <div style={{color: 'red', fontSize: 20}}>
            Ini adalah teks merah dengan ukuran 20
        </div>
    );
}



// 2. CSS Modules : 
// CSS Modules adalah cara yang lebih terstruktur untuk menerapkan CSS pada React. Setiap komponen memiliki file CSS sendiri, dan nama kelas CSS di-scope untuk komponen tersebut. Hal ini membantu mencegah konflik nama kelas dan meningkatkan modularitas.

import React from "react";

import style from  "./MyComponent.modules.css";

function MyComponent () {
    return (
            <div className="{styles.redText">
                Ini adalah teks merah dengan ukuran 20 
            </div>
    );
}






// 3. Styled Components:
//Styled components adalah pustaka pihak ketiga yang memungkinkan Anda menulis CSS langsung dalam komponen React Anda. Hal ini memungkinkan Anda untuk membuat gaya yang lebih deklaratif dan mudah dipelihara.

import React from "react";

import styled from "styled-components";


const MyComponent = styled.div
        color: red;
        font-size: 20 px;
        

 
function MyComponent () {
    return (
        <MyComponent>
            Ini adalah teks merah dengan ukuran 20
        </MyComponent>
    );
}





// Menerapkan CSS -> 

// misalnya untuk App.js 
render () {
    return (
        <div>
            <h1>Hello World!</h1>
            <h2>Hello React!</h2>
        </div>
    );
}



// misalnya untuk stylesheet.css
h1 {
    color: red;
}

h2 {
    color: blue;
}







// JSX dan Nama Class -> aat menetapkan nama class dalam JSX, ingat bahwa syntax-nya berbeda dengan syntax HTML. Seperti gambar di sebelah kiri, nama class di JSX ditulis seperti: className='class_name'. Namun, cara menuliskan CSS tetap sama.
// App.js 

render () {
    return (
        <div>
            <h1 className="title">Hello World</h1>
            <p className="text">Hello React</p>
        </div>
    );
}




// stylesheet.css
.title {
    color: #e6855e;
    background-color: #f3f372;
}


.text {
    color: blue;
}