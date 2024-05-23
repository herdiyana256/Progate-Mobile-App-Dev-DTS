// Catatan tentang tag img

//Di HTML, tag img tidak memiliki tag penutup sehingga dapat ditulis seperti <img src='URL gambar'>. Namun, tag penutup diperlukan oleh tag img di dalam JSX seperti <img src='URL gambar' />. ingatlah didalam JSX, tag img harus diakhir dengan /.


import React from 'react';


class App extends React.Component {
    render() {
        return(
            <img src="https://progate/com/family/png" />
        );
    }
}




//contoh lain 
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>Ayo belajar React bersama-sama!</p>
        {/* Gunakan tag <img> untuk menampilkan gambar */}
        <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/kentheninja.png" />
        
      </div>
    );
  }
}

export default App;
