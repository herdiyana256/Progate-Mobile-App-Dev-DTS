//Mengubah Teks dengan Tombol

//Menggunakan Click Events
// 1. Event, 2.State


/*
1.Event Click 

Event click adalah peristiwa yang terjadi ketika pengguna mengklik elemen HTML.
Di React, event click dapat ditangani dengan menggunakan props onClick pada elemen yang ingin di klik.
Ketika elemen diklik, fungsi yang ditetapkan ke props onClick akan dijalankan.




2. State
State adalah data yang disimpan di dalam komponen React.
State dapat diubah dengan menggunakan metode setState().
Setiap kali state diubah, komponen akan dirender ulang.
*/



//Contoh State
import React, {useState} from 'react';

function App() {
    const [text, setText] = useState('Text Awal');

    const handleClick = ()=> {
        setText('Text telah diubah!');
    };
    return (
        <div>
                <p>{text}</p>
                <button onClick={handleClick}>Ubah Text</button>
        </div>
    );
}

export default App;

/*
Penjelasan : 
Penjelasan:

Di dalam komponen App, kita mendeklarasikan state text dengan nilai awal "Teks awal".
Kita membuat fungsi handleClick yang akan mengubah nilai state text menjadi "Teks telah diubah!".
Kita merender paragraf HTML dengan teks yang diambil dari state text.
Kita merender tombol HTML dengan props onClick yang diset ke fungsi handleClick.


Cara Kerja :
Saat pengguna mengklik tombol, fungsi handleClick akan dijalankan.
Di dalam fungsi handleClick, nilai state text diubah menjadi "Teks telah diubah!".
Karena state telah diubah, komponen App akan dirender ulang.
Saat komponen dirender ulang, paragraf HTML akan menampilkan teks yang baru, yaitu "Teks telah diubah!".
*/



//Cara Membuat Tombol
