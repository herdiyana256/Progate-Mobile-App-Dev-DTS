// Memperbaharui State 
//Dalam React, memperbarui state adalah proses mengubah nilai yang disimpan di dalam state suatu komponen. Ketika state diperbarui, komponen tersebut akan dirender ulang secara otomatis, yang berarti UI akan diperbarui untuk mencerminkan perubahan tersebut.


// . Menggunakan setState():
// Ini adalah cara paling umum untuk memperbarui state dalam React. Metode setState() dipanggil pada instance komponen dan menerima objek yang berisi pembaruan state.

// Mengimpor React dan hook useState dari library react
import React, { useState } from 'react';

// Membuat komponen fungsional Counter
function Counter() {
    // Mendefinisikan state 'count' dengan nilai awal 0, dan fungsi 'setCount' untuk memperbarui 'count'
    const [count, setCount] = useState(0);

    // Mendefinisikan fungsi handleClick yang akan dipanggil ketika tombol diklik
    const handleClick = () => {
        // Memperbarui state 'count' dengan menambahkan 1 ke nilai saat ini
        setCount(count + 1);
    };

    // Mengembalikan elemen JSX yang akan dirender di halaman
    return (
        <div>
            {/* Menampilkan jumlah klik saat ini */}
            <p>Jumlah Klik {count}</p>
            {/* Menampilkan tombol yang memanggil fungsi handleClick ketika diklik */}
            <button onClick={handleClick}>Klik!</button>
        </div>
    );
}

// Mengekspor komponen Counter sebagai default export dari modul ini
export default Counter;









// Kode lengkap - latihan (full)
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Ninja Ken'};
  }
  
  render() {
    return (
    	<div>
    	  <h1>Halo, {this.state.name}!</h1>
    	  {/* Ubah state untuk event onClick */}
        <button onClick={() => {this.setState({name: "Guru Domba"})}}>Guru Domba</button>
        
        {/* Ubah state untuk event onClick */}
        <button onClick={() => {this.setState({name: "Ninja Ken"})}}>Ninja Ken</button>
        
      </div>
    );
  }
}

export default App;






//2. Memperbarui State Berdasarkan State Sebelumnya:
//apat menggunakan fungsi callback yang disediakan oleh setState(). Fungsi callback menerima state sebelumnya sebagai argumen dan memungkinkan Anda untuk menghitung nilai state baru berdasarkan 


// Mengimpor React dan hook useState dari pustaka React
import React, { useState } from 'react';

// Mendefinisikan komponen fungsional Counter
function Counter() {
  // Menggunakan hook useState untuk membuat state 'count' dan fungsi untuk memperbaruinya 'setCount'
  // 'count' diinisialisasi dengan nilai awal 0
  const [count, setCount] = useState(0);

  // Mendefinisikan fungsi incrementByTwo yang akan memperbarui state 'count'
  const incrementByTwo = () => {
    // Memperbarui state 'count' dengan menambahkan 2 pada nilai sebelumnya
    setCount(prevCount => prevCount + 2);
  };

  // Merender elemen JSX
  return (
    <div>
      {/* Menampilkan jumlah klik */}
      <p>Jumlah klik: {count}</p>
      {/* Menampilkan tombol yang ketika diklik akan memanggil fungsi incrementByTwo */}
      <button onClick={incrementByTwo}>Tambah 2</button>
    </div>
  );
}

// Mengekspor komponen Counter sebagai default export
export default Counter;





//Hal-Hal Penting Tentang Memperbarui State
//Di React, Anda tidak dapat mengubah nilai state dengan menetapkannya langsung ke state. Jika Anda ingin mengubah nilai di state, Anda harus menggunakan method setState. Hal ini penting untuk diingat ketika ingin memperbarui state.
//jadi apabila ada perubahan maka menggunakan this.setSate({name: "herdiyan"})


//salah 
this.state = {name: "herdiyan"};


//benar 
this.setState = {name: "herdiyan"};







//Cara memperbaharui State based on module
//Dengan code this.setState({propertyName: valueToUpdate}), nilai state untuk property yang ditentukan akan berubah. Ini artinya nilai yang dapat ditampilkan dengan this.state.name juga dapat diubah. Untuk mengubah nama yang ditampilkan ketika sebuah tombol diklik, kita akan meletakkan setState di dalam method event onClick, seperti yang ditunjukkan di bawah ini.
this.setSate({name: "USM"});
    // Property name nilai yang ingin di update 