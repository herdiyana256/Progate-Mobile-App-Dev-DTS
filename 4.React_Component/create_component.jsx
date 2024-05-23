/*

Membuat Component pada React JS
Pendahuluan

Component adalah blok kode yang dapat digunakan untuk membangun UI (User Interface) pada aplikasi React JS. Component memungkinkan Anda untuk memecah UI menjadi bagian-bagian yang lebih kecil dan mudah dikelola, sehingga mempermudah pengembangan dan pemeliharaan aplikasi.

Cara Membuat Component

Ada dua cara utama untuk membuat component pada React JS:

1. Function Component

Function component adalah cara paling sederhana untuk membuat component. Berikut adalah contohnya:

JavaScript
function Greeting(props) {
  return (
    <h1>Halo, {props.name}!</h1>
  );
}
Gunakan kode dengan hati-hati.
content_copy
Component ini menerima props bernama name dan mengembalikan elemen <h1> yang menampilkan teks "Halo, [nama]!".

2. Class Component

Class component adalah cara yang lebih kompleks untuk membuat component, tetapi menawarkan lebih banyak fungsionalitas. Berikut adalah contohnya:

JavaScript
class Greeting extends React.Component {
  render() {
    return (
      <h1>Halo, {this.props.name}!</h1>
    );
  }
}
Gunakan kode dengan hati-hati.
content_copy
Component ini mirip dengan function component, tetapi menggunakan class untuk mendefinisikannya. Class component memiliki metode render() yang mengembalikan elemen JSX yang akan dirender ke DOM.

Menampilkan Component

Setelah membuat component, Anda dapat menampilkannya di dalam component lain menggunakan JSX. Berikut adalah contohnya:

JavaScript
function App() {
  return (
    <div>
      <Greeting name="Budi" />
      <Greeting name="Andi" />
    </div>
  );
}
Gunakan kode dengan hati-hati.
content_copy
Kode ini akan menampilkan dua elemen <h1> yang bertuliskan "Halo, Budi!" dan "Halo, Andi!".

Props

Props adalah cara untuk meneruskan data dari satu component ke component lain. Props didefinisikan sebagai objek JavaScript dan diteruskan ke component sebagai argumen. Berikut adalah contohnya:

JavaScript
function Greeting(props) {
  return (
    <h1>Halo, {props.name}!</h1>
  );
}

function App() {
  return (
    <div>
      <Greeting name="Budi" />
      <Greeting name="Andi" />
    </div>
  );
}
Gunakan kode dengan hati-hati.
content_copy
Dalam contoh ini, component App meneruskan props name ke component Greeting. Component Greeting kemudian menggunakan props name untuk menampilkan nama pengguna.

State

State adalah data internal yang dimiliki oleh component. State dapat diubah seiring waktu, dan perubahan ini akan memicu component untuk dirender ulang. Berikut adalah contohnya:

JavaScript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Tambah</button>
      </div>
    );
  }
}
Gunakan kode dengan hati-hati.
content_copy
Component ini memiliki state bernama count yang diinisialisasi dengan nilai 0. Ketika tombol "Tambah" diklik, metode incrementCount akan dipanggil. Metode ini akan mengubah state count dengan menambahkan 1. Perubahan state ini akan memicu component untuk dirender ulang, sehingga menampilkan nilai count yang baru.

Kesimpulan

Component adalah blok kode yang fundamental dalam React JS. Component memungkinkan Anda untuk membangun UI yang modular dan dapat digunakan kembali, sehingga mempermudah pengembangan dan pemeliharaan aplikasi.

Sumber Daya Tambahan

Dokumentasi React JS [URL yang tidak valid dihapus]
Tutorial React JS
Buku React JS [URL yang tidak valid dihapus]
Semoga materi ini bermanfaat!
*/





// 1. Function Component 
function Greeting(props) {
    return (
        <h1>Hallo, {props.name} !</h1>
    );
}
//Component ini menerima props bernama name dan mengembalikan elemen <h1> yang menampilkan teks "Halo, [nama]!".






// 2. Class Component 
//Class component adalah cara yang lebih kompleks untuk membuat component, tetapi menawarkan lebih banyak fungsionalitas. Berikut adalah contohnya:

class Greeting extends React.Component {
    render() {
        return (
            <h1>Halo, {this.props.name}!</h1>
        );
}

}








// 3.Menampilkan Component
//Setelah membuat component, Anda dapat menampilkannya di dalam component lain menggunakan JSX. Berikut adalah contohnya:

function App () {
    return (
        <div>
            <Greeting name="John" />
            <Greeting name="Wik" />
        </div>
    );
}






//Props
//Props adalah cara untuk meneruskan data dari satu component ke component lain. Props didefinisikan sebagai objek JavaScript dan diteruskan ke component sebagai argumen. Berikut adalah contohnya:

function Greeting(props) {
    return (
            <h1>Halo, {props.name}!</h1>
    );
}


function App () {
    return (
        <div>
            <Greeting name="John" />
            <Greeting name="Wik" />
        </div>
    );
}
//Dalam contoh ini, component App meneruskan props name ke component Greeting. Component Greeting kemudian menggunakan props name untuk menampilkan nama pengguna.






//State
//State adalah data internal yang dimiliki oleh component. State dapat diubah seiring waktu, dan perubahan ini akan memicu component untuk dirender ulang. Berikut adalah contohnya:

class Countr extends React.Component {
    constructor () {
        super(props);
        this.state = {count : 0};
    }


    incrementCount = () =>  {
        this.setState((prevState) => ({count: prevState.count + 1}));
    };

    render () {
            return (
                    <div>
                        <h1>Count: {this.state.count}</h1>
                        <button onClick={this.incrementCount}>Increment</button>
                    </div>
            );
    }
}

//Component ini memiliki state bernama count yang diinisialisasi dengan nilai 0. Ketika tombol "Tambah" diklik, metode incrementCount akan dipanggil. Metode ini akan mengubah state count dengan menambahkan 1. Perubahan state ini akan memicu component untuk dirender ulang, sehingga menampilkan nilai count yang baru.






// note : Seperti namanya, component adalah sebuah bagian atau element. Dalam React, kita akan membagi situs ke dalam beberapa component berdasarkan fungsinya. Kemudian kita akan menggabungkan component - component tersebut untuk menciptakan tampilan situs web yang kita inginkan.




//Component untuk Target
//Di sini, kita akan menciptakan beberapa component untuk menampilkan bahasa pelajaran sebagaimana ditunjukkan gambar di bawah ini. Kita akan menamakan component tersebut Language agar mudah dipahami.
