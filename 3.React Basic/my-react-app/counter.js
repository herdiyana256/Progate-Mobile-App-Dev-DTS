// Fitur Counter 
//Fitur counter adalah salah satu contoh paling dasar untuk memahami konsep state dalam React. Berikut adalah materi dan kode untuk fitur counter sederhana:

/*
State: State adalah data yang disimpan di dalam komponen React dan dapat diubah seiring waktu.
useState Hook: useState hook adalah cara untuk mendeklarasikan state di dalam komponen React.
Event Click: Event click adalah peristiwa yang terjadi ketika pengguna mengklik elemen HTML.
Fungsi: Fungsi adalah blok kode yang dapat digunakan kembali untuk melakukan tugas tertentu.

*/



// example I 
import React, {useState} from 'react';


function Counter () {
    const [count, setCount] = useState(0); // Deklarasikan state "count" dengan nilai awal 0


    const handleClick = () => {
        setCount(count + 1); // mengubah state count dengan menambahkan 1 
    };


    return (
            <div>
                    <p>Jumlah Klik : {count}</p> // Render nilai state "count"
                    <button onClick={handleClick}>Klik</button> // Tambahkan event click pada tombol
            </div>
    );
}

export default Counter;

/*

Import React dan useState: Import library React dan useState hook pada awal kode.
Deklarasi State: Deklarasikan state count dengan nilai awal 0 menggunakan useState(0).
Fungsi handleClick: Buat fungsi handleClick untuk menangani event click tombol.
Ubah State: Di dalam fungsi handleClick, gunakan setCount(count + 1) untuk mengubah nilai state count menjadi satu lebih banyak.
Render UI: Render komponen HTML dengan:
Paragraf untuk menampilkan nilai state count (jumlah klik).
Tombol dengan event click yang dihubungkan ke fungsi handleClick.
Render Ulang: Setiap kali state count diubah, komponen akan dirender ulang, menampilkan jumlah klik yang terbaru.

*/



//State adalah bagian paling penting dari React. Untuk menyelesakan pelajaran ini, mari kita buat function lain agar dapat mereview apa saja yang telah kita pelajari.



//Review 
//2 alat dan 3 langkah milik state yang ditunjukkan di bawah ini diperlukan untuk membuat fitur yang dapat mengubah nama tampilan ketika tombol diklik. Mari kita gunakan dasar ini untuk membuat function berikutnya.

/*
    step1 : definisikan state 
    step2 : tampilkan state 
    step3 : update state 




    Fitur Counter 
    Mari kita ciptakan tombol hitungan (+), di mana saat tombol tersebut diklik angka di layar akan bertambah 1.

*/





// Menentukan & Menampilkan State 
//Gunakan 3 langkah state untuk membuat fitur counter. Pertama, kita akan menyelesaikan Langkah pertama: Tentukan State dan Langkah kedua: Tampilkan State.


class App React.Component {
    constructor () {
        super(props);
        this.state = {count: 0};
        // Stop  1: Definisikan State        
    };

    render() {
        return (
                <div>
                        <h1>{this.state.count}</h1>
                        <button>+</button>
                </div>
        );
    }
}






// contoh lengkap nya 
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Tentukan state
      this.state = {count: 0};
    
  }
  
  render() {
    return (
      <div>
        <h1>
          {/* Tampilkan nilai state */}
            {this.state.count}
          
        </h1>
        {/* Tambahkan tag <button> */}
        <button>+</button>
        
      </div>
    );
  }
}

export default App;





//Mari Mulai Menghitung! -> rena ini adalah event yang melibatkan klik, berarti kita bisa menggunakan event onClick?



// Mendefinisikan Method -> Mari kita lanjut ke Langkah ketiga: Perbarui State. Di langkah ini, kita akan membuat method untuk memanggil method, di mana ketika tombol plus (+) diklik, method tersebut akan menambahkan 1 ke nilai count di state tersebut. Dengan menambahkan 1 pada nilai count di state, pastikan angka yang ditampilkan juga bertambah.


// step 3 : update state 
handleClick () {
    this.setState({count: this.state.count + 1})// code untuk menambahkan 1 ke nilai count di state 
}




// Memanggil Method -> Terakhir, method handleClick dan tombol plus (+) harus dihubungkan sehingga method handleClick bisa dipanggil setiap kali tombol diklik.


class App extends React.Component {

    handleClick() {
            this.state({count: this.state.count});
    };


    render() {
        return (
                <button onClick={() => {this.handleClick()}}>+</button>
        );
    }
}








//Code lengkapnya 
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Inisialisasi state dengan properti count yang bernilai 0
    this.state = {count: 0};
  }
  
  // Buat method handleClick untuk menangani klik pada tombol
  handleClick () {
    // Update state dengan menambah nilai count sebesar 1
    this.setState({count: this.state.count + 1});
  }
  
  render() {
    return (
      <div>
        <h1>
          {/* Tampilkan nilai count dari state */}
          {this.state.count}
        </h1>
        {/* tambahkan event onClick di tag <button> yang memanggil handleClick */}
        <button onClick={() => {this.handleClick()}}>+</button>
      </div>
    );
  }
}

export default App;
