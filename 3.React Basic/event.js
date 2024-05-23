// EVENT PADA REACT -> Event adalah salah satu konsep penting dalam React yang memungkinkan interaksi pengguna dengan aplikasi.


/*
Click: Terjadi ketika pengguna mengklik elemen HTML.
Change: Terjadi ketika nilai input berubah.
Submit: Terjadi ketika formulir HTML dikirimkan.
Mouse Enter: Terjadi ketika kursor mouse memasuki elemen HTML.
Mouse Leave: Terjadi ketika kursor mouse keluar dari elemen HTML.
Keyboard Press: Terjadi ketika pengguna menekan tombol keyboard.


NOTE : 
Untuk menangani event di React, Anda dapat menggunakan props onEventName pada elemen HTML yang ingin dipantau. Di dalam fungsi yang ditetapkan ke props onEventName, Anda dapat melakukan tindakan yang diinginkan sebagai respons terhadap event.

*/

import React, {useState} from 'react';

function App() {
    const [count, setCount] = useState(0);


    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Tombol ditekan: {count} kali</p>
            <button onClick={handleClick}>Tekan Tombol</button>
            </div>
    );
}

export default App;

/*
Pada contoh di atas, props onClick diset ke fungsi handleClick pada elemen tombol.
Ketika tombol diklik, fungsi handleClick akan dijalankan.
Di dalam fungsi handleClick, state count diubah dengan menambahkan 1.
Karena state diubah, komponen App akan dirender ulang.
Saat komponen dirender ulang, paragraf HTML akan menampilkan nilai count yang baru, yaitu jumlah klik tombol.

*/







//event change
import React, {useState} from 'react';

function App() {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <input type='text' value={name} onChange={handleChange}></input>
            <p>Nama Anda: {name}</p>
         </div>
    );
}

export default App;




//Event Submit
import React, {useState} from 'react';

function App() {
    const [name, setName] = useState('');

    const handleSubmit = (event) =>  {
        event.preventDefault();
        alert(`Email Anda: ${email}`);
    };


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='email' value={email} onChange={(event) => setEmail(event.target.value)}  />
                <button type='submit'>Kirim</button>
            </form>
        </div>
    );
}

export default App;

//Kesimpulan -> Event di React adalah alat yang ampuh untuk membuat aplikasi yang interaktif dan responsif. Dengan memahami konsep event dan cara menanganinya, Anda dapat membangun aplikasi React yang menarik dan mudah digunakan oleh pengguna.







// Apa itu event ? -> Dengan event, Anda dapat menentukan kapan sebuah code akan dijalankan. Pada contoh di bawah ini, ketika tombol di klik, code akan dijalankan untuk membuat Ninja Ken melompat.




//Cara Menggunakan Event
//Dengan arrow function yang telah Anda pelajari di ES6 Study III, Anda dapat membuat perintah untuk hanya menjalankan code ketika suatu event terjadi, gunakan code berikut: eventName={() => { code }}. Karena arrow function adalah fungsi JavaScript, jangan lupa untuk mengapitnya dengan tanda kurung kurawal { }.

<button evenName={() => {code}}></button>
         // letakan nama event dan code disini







         
// Event onClick -> Kita dapat menggunakan event onClick untuk menjalankan code ketika element tertentu diklik. Nama untuk event ini sebaiknya adalah onClick. Contoh penulisan di element button adalah <button onClick={() => {code}}>. Tulis code yang ingin dijalankan ketika event klik terjadi di dalam tanda kurung kurawal { } (posisinya terletak di bagian {code} pada arrow function).

{/* <div>
    <h1>Halo, Herdiyan!</h1>
    <button onClick={(code) => {code}}>Ninja Hayabusa</button>
    <button onClick={(code)}>Ninja Ken</button>
</div> */}







//Menggunakan console.log() dengan Event onClick -> Untuk memastikan code di gambar kanan berfungsi ketika sebuah tombol diklik, kita dapat menggunakan console.log(). Anda dapat mencetak pesan dengan console.log() di dalam arrow function untuk event onClick.

<div>
        <h1>Hallo, Herdiyan!</h1>
        <button onClick={() => {console.log('IT Developer')}}>IT Developer</button>
        <button onClick={() => {console.log('IT Software Engineering')}}>IT Software Engineering</button>

</div>
