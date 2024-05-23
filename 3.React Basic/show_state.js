// Menampilkan State 

// example state 
import  React, {useState} from 'react';

function MyCompoent () {
    // Deklarasikan state 'message' dengan nilai awal "Hello World"
    const [message, setMessage] = useState ('Hello World');

    //kode lain nya 
    return (
        <div>
                <p>Pesan: {message}</p> 
        </div>
    );
}

//{message} di dalam tag <p> akan digantikan dengan nilai state message saat komponen dirender.






// Contoh lengkapnya  ->
// Impor React dan hook useState dari pustaka React
import React, { useState } from 'react';

// Definisikan komponen Counter sebagai fungsi
function Counter() {
    // Deklarasikan state 'count' dan fungsi 'setCount' untuk memperbarui state ini
    // Inisialisasi 'count' dengan nilai 0
    const [count, setCount] = useState(0);

    // Definisikan fungsi 'handleClick' yang akan dipanggil ketika tombol diklik
    const handleClick = () => {
        // Perbarui nilai 'count' dengan menambahkannya 1
        setCount(count + 1);
    };

    // Render komponen Counter
    return (
        <div>
            {/* Tampilkan nilai 'count' di dalam paragraf */}
            <p>Count: {count}</p>
            {/* Tampilkan tombol yang memanggil 'handleClick' ketika diklik */}
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

// Ekspor komponen Counter agar dapat digunakan di file lain
export default Counter;





//Cara mendapatkan State 
class App extends React.Component {
    constructor(props) {
        super(props);
        this.State = {name: "IT Frontend Developer"}; // object 
    }

    render (
        console.log("this.state");
        return(
            // kode disini 
        )
    )
}






// Menampilkan State 
//Karena this.state adalah sebuah object, Anda bisa mendapatkan nilai property di dalam object tersebut dengan menulis code seperti this.state.propertyName. Di contoh di bawah, this.state.name akan mengembalikan nilai Ninja Ken, sehingga pesan Halo, Ninja Ken! akan ditampilkan pada browser, seperti gambar di sebelah kanan.


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "Ninja Ken"}; // object
    }

    render (

            return (
            <h1>Halo , {this.state.name} </h1>

            )
    );


}






// end exercise 
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Ninja Ken'};
  }
  
  render() {
    return (
    	<div>
        {/* Tulis ulang bagian nama dari "Halo, Ninja Ken!" dengan menggunakan state */}
    	  <h1>Halo,{this.state.name}!</h1>
    	  
        <button onClick={() => {console.log('Guru Domba')}}>Guru Domba</button>
        <button onClick={() => {console.log('Ninja')}}>Ninja Ken</button>
      </div>
    );
  }
}
