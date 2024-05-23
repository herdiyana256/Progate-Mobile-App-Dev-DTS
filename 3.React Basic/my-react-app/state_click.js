// Memperbaharui State dengan onClick 
//mari kita buat method untuk mengubah nama yang ditampilkan ketika tombol diklik. 
//Method adalah untuk menggabungkan code, kan? OK, aku akan berusaha!


/*
Step 1 : definisikan state 
Step 2 : tampilkan state
Step 3 : update state 

*/



//Menentukan Method 
//Seperti yang telah kita bahas di Studi ES6 IV, method ditentukan di class. Code untuk menentukan method adalah methodName() { code }. Method memiliki tanda kurung kurawal { } seperti function.
class className{
    constructor () {
            // code
    }

    methodName () {
        // code yang akan dijalankan 
    }
}




// Mengubah State dengan Method 
//Kita akan membuat sebuah method handleClick yang dapat mengubah nilai property name di state. Tentukan method handleClick dan tambahkan code untuk mengubah state
class App extends React.Component {
    handleClick () {
        // Code disini akan dirubah 
        // Nilai property name di state 
    }
}



// Memanggil Method dengan Click 
//ethod juga dapat dipanggil dengan menggunakan event. Code onClick={() => {this.methodName()}} akan menjalankan method dengan nama methodName (bisa nama apa saja) di file App.js ketika component this (element yang berisi method itu sendiri) dik
class App extends React.Component {

    handleClick () {
        // Code disini akan dirubah 
        // Nilai Property name di state 
    }
}



// lanjutan example - App.js 
render () {
        return (
            <button onClick={() => {this.handleClick()}}>
                Guru Agung
            </button>
        );
}



// Meneruskan Argument ke Method 
//Di sini, Anda akan belajar cara meneruskan argument ke method. Pertama, method handleClick harus mengambil argument bernama name. Selanjutnya, teruskan argument tersebut ke code di manahandleClick tersebut dipanggil. Terakhir, gunakan argument name untuk mengubah nilai property name di state.
class App extends React.Component {
    handleClick (name) {

        this.setState({name : name});

    };


    // App.js
    <button onClick={() => {this.handleClick('Guru Domba')}}>
            Guru Domba
    </button>

    <button onClick={() => {this.handleClick('Ninja Ken')}}>
        Ninja Ken
    </button>
}




// Code lengkap nya 
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Ninja Ken'};
  }
  
  // Nyatakan method handleClick 
    handleClick (name) {
      this.setState({name: name});
    };
  
  render() {
    return (
    	<div>
    	  <h1>Hello, {this.state.name}!</h1>
    	  {/* Ganti event onClick supaya dapat memanggil method handleClick */}
        <button onClick={() => {this.handleClick('Guru Domba')}}>Guru Domba</button>
        
    	  {/* Ganti event onClick supaya dapat memanggil method handleClick */}
        <button onClick={() => {this.handleClick('Ninja Ken')}}>Ninja Ken</button>
        
      </div>
    );
  }
}

export default App;
