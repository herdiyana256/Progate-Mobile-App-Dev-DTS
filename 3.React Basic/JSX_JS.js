// JSX dan JS 


// CONTOH JSX
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




// CONTOH JAVASCRIPT 
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Tombol ditekan: {count} kali</p>
      <button onClick={() => setCount(count + 1)}>Tekan Tombol</button>
    </div>
  );
}

export default App;


/*
Kapan Menggunakan JSX dan JS?
Gunakan JSX untuk membangun struktur UI yang deskriptif dan mudah dipahami.
Gunakan JS untuk menulis logika aplikasi, menangani peristiwa pengguna, dan membuat komponen UI yang dapat digunakan kembali.


NOTE :
JSX dan JS adalah dua alat penting dalam pengembangan web dengan React. JSX digunakan untuk membangun UI, sedangkan JS digunakan untuk menulis logika aplikasi. Memahami perbedaan dan hubungan keduanya sangatlah penting untuk membangun aplikasi React yang interaktif dan menarik.


*/


//App.js 
class App extends React.Component {
    render(){
        return (
            // LETAKAN JSX DISINI
        )
    }
}




//MENULIS JAVASCRIPT 
//JavaScript dapat ditulis di luar kolom return (tetapi tetap di dalam method render). Dalam contoh di bawah ini, constant text ditentukan dengan code JavaScript di method render.
class App extends React.Component {
    render() {
        const text = 'Hello World'; // code Javascript dapat diketik diluar return 
        return (
            
        );
    }

}







//Meletakan Code JS didalam JSX  -> App.js
render() {
    const text = 'Hello World!';
        return (
            <div>
                {text} 
            </div>
            // letakan code Javacript didalam tanda kurung keriting
        );
}

export default App;





// Meletalam Code Javascript didalam JSX -> App.js
render() {
    const imgUrl = "https://www.google.com/gambar.jpg";
    return (
        <img src={imgUrl}/> // Letakan code javascript didalam tanda kurung keriting 
    );

}


export default App;








// Komentar JSX dan JS ->Kita telah melihat ketika JSX diletakkan di antara {/* dan */} maka JSX tersebut akan menjadi komentar (seperti contoh di sebelah kiri). Namun, untuk JavaScript yang berada di luar return, membuat baris sebagai komentar harus dimulai dengan dua garis miring // seperti contoh di sebelah kanan.

//App.js 
class App React.Component {
    render() {
        return (
            <div>
                {/* JSX Komentar */}
            </div>
        );
    }
}

export default App;




//App.js 
class App React.Component {
    render() {
        // ini adalah komentar 
      const text = "Hello Wolrd!";
      return (
            //code 
      );
}