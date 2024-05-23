// State -> alah satu konsep penting dalam React yang memungkinkan Anda untuk menyimpan dan mengelola data yang dinamis dalam komponen React. State dapat diubah seiring waktu, dan perubahan ini akan memicu render ulang komponen yang bersangkutan.



//Counter sederhana 
//Misalkan Anda ingin membuat aplikasi counter sederhana yang menampilkan jumlah klik tombol. Berikut adalah contoh implementasinya:

import React, {useState} from 'react';


function Counter() {
    const [count, setCount] = useState(0);


    const handleClick = () => {
        setCount(count + 1);
    };


    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}


export default Counter;


/*
Penjelasan : 
Penjelasan:

useState Hook: Di dalam komponen Counter, kita mendeklarasikan state count dengan nilai awal 0 menggunakan useState hook.
Menyimpan Data: State count menyimpan jumlah klik tombol.
Fungsi handleClick: Fungsi handleClick didefinisikan untuk menangani event click tombol.
Mengubah State: Di dalam fungsi handleClick, nilai state count diubah dengan menggunakan setCount(count + 1).
Merender UI: Komponen merender paragraf HTML yang menampilkan nilai state count (jumlah klik) dan tombol HTML dengan event click yang dihubungkan ke fungsi handleClick.
Render Ulang: Setiap kali state count diubah (diklik), komponen akan dirender ulang, menampilkan jumlah klik yang terbaru.


*/





// Contoh formulir sederhana
//Anda ingin membuat formulir sederhana untuk memasukkan nama dan menampilkan salam. Berikut adalah contoh implementasinya:
import React, { useState } from 'react';

// Fungsi komponen Form
function Form() {
    // Deklarasi state menggunakan useState
    // State name akan menyimpan nilai input teks, diinisialisasi dengan string kosong
    const [name, setName] = useState('');
    // State greeting akan menyimpan pesan sapaan, diinisialisasi dengan string kosong
    const [greeting, setGreeting] = useState('');

    // Fungsi yang dijalankan saat input teks berubah
    const handleChange = (event) => {
        // Mengatur nilai state name dengan nilai input yang baru
        setName(event.target.value);
    };

    // Fungsi yang dijalankan saat form disubmit
    const handleSubmit = (event) => {
        // Mencegah perilaku default form yaitu reload halaman
        event.preventDefault();
        // Mengatur nilai state greeting dengan pesan sapaan yang menggunakan nilai dari state name
        setGreeting(`Hallo, ${name}`);
    };

    return (
        // Form yang memiliki event handler handleSubmit saat disubmit
        <form onSubmit={handleSubmit}>
            <label>Nama :</label>
            {/* Input teks yang memiliki event handler handleChange saat nilainya berubah */}
            <input type="text" value={name} onChange={handleChange} />
            <button type="submit">Submit</button>
            {/* Menampilkan greeting jika ada */}
            <p>{greeting}</p>
        </form>
    );
}

export default Form;



/*
Penjelasan:

useState Hook: Di dalam komponen Form, kita mendeklarasikan dua state: name untuk menyimpan nama pengguna dan greeting untuk menyimpan salam.
Menyimpan Data: State name menyimpan nilai yang diketikkan pengguna di dalam input field, dan state greeting menyimpan salam yang akan ditampilkan.
Fungsi handleChange: Fungsi handleChange didefinisikan untuk menangani event change pada input field.
Mengubah State: Di dalam fungsi handleChange, nilai state name diubah dengan menggunakan setName(event.target.value).
Fungsi handleSubmit: Fungsi handleSubmit didefinisikan untuk menangani event submit pada formulir.
Mencegah Perilaku Default: Di dalam fungsi handleSubmit, event preventDefault() digunakan untuk mencegah perilaku default formulir (mengirim data ke server).
Membuat Salam: Di dalam fungsi handleSubmit, nilai state greeting diubah dengan menggunakan setGreeting(Halo, ${name}!).
Merender UI: Komponen merender formulir HTML dengan input field dan tombol submit. Nilai state greeting (salam) dirender sebagai paragraf HTML.
Render Ulang: Setiap kali state name atau greeting diubah, komponen akan dirender ulang, menampilkan salam yang sesuai dengan nama yang dimasukkan.



Summary : 
State adalah alat yang sangat penting dalam React untuk membangun aplikasi yang interaktif dan dinamis. Dengan memahami konsep state dan cara menggunakannya, Anda dapat membuat aplikasi React yang kompleks dan menarik.


*/












//Materi State 
//Selanjutnya, mari kita ubah bagian name dari Hello, (name)! di dalam code sehingga ketika sebuah tombol ditekan, nama yang ditunjukkan di atas berubah. Di React, nilai yang dapat dirubah berdasarkan tindakan pengguna disebut state. Kita dapat memperbarui state setiap kali tombol ditekan, lalu mengubah nama yang akan ditampilkan berdasarkan state.


//Memperbaharui halaman dengan state 

/*
Aliran Perubahan tampilan state ada 3 

step 1 : definisikan state 
step 2 : tampilkan state 
step 3 : update state 

*/





//Review Object
//Sebelum belajar tentang menentukan state, mari kita review kembali object JavaScript yang telah dibahas di ES6 Study II. Object digunakan untuk mengelola beberapa nilai dengan property. State di React ditentukan dengan object.
const user = [name: "Herdiyan", age: 28];
             //property || value
console.log(user.age);





//Menentukan State -> State dibuat menggunakan sebuah object di constructor. Nilai awal state ditetapkan untuk object tersebut. Untuk bagian lain dari code seperti constructor(props) dan super(props);, ingat bahwa ini standar dan hampir selalu ditulis dengan cara yang sama.
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "Herdiyan Adam Putra"};
        // ditetapkan ke this.state           didefinisikan sebagai object 
    }
}
