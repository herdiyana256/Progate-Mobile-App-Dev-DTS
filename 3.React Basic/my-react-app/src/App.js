import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>List of Languages</h1>
        <div className="language">
        </div>
      </div>
    );
  }
}

export default App;


// jika extend class App maka -> Benar, dengan kode yang Anda berikan, aplikasi hanya akan menampilkan satu halaman utama. Hal ini karena kode tersebut hanya mendefinisikan satu component (App) dan tidak menggunakan routing untuk menampilkan halaman yang berbeda.


// maka solusinya  -> Untuk membuat aplikasi yang dapat menampilkan beberapa halaman, Anda perlu menggunakan routing. Berikut adalah contoh kode yang menggunakan React Router untuk menambahkan routing ke aplikasi Anda:
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pada antar page buat function ....x nama halaman lalu di app.js buat kode seperti ini -> 

/*
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguagePage from './components/LanguagePage';
import GreetingPage from './components/GreetingPage';

import './App.css';

const App = () => {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/language/:languageId" element={<LanguagePage />} />
        <Route path="/greeting" element={<GreetingPage />} />
      </Routes>
    </BrowserRouter>
  );
};


*/



