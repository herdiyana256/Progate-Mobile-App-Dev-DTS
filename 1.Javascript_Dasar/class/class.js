// Class adalah blueprint atau rancangan dasar untuk membuat objek. 
// ini merupakan konsep fundamental dalam pemrograman berorientasi objek (OOP) yang memungkinkan anda untuk membuat objek dengan properti dan metode yang seragam .



class Mobil {
    // Properti 
    constructor(merek, warna, tahun) {
        this.merek = merek;
        this.warna = warna;
        this.tahun = tahun;
    }


    // Metode 
    mulai() {
        console.log(`${this.merek} ${this.warna}, ${this.tahun}, mulai berjalan.`);

    }

    berhenti(){
        console.log(`${this.merek} ${this.warna} tahun ${this.tahun } berhenti berjalan`);
    }


    info() {
        console.log(`Mobil: ${this.merek}, Warna: ${this.warna}, Tahun: ${this.tahun}`);

    }

    // Metode untuk mengganti warna mobil
    gantiWarna(warnaBaru) {
        this.warna = warnaBaru;
        console.log(`Warna mobil ${this.merek} telah diganti menjadi ${this.warna}`);
    }
};

// Contoh penggunaan kelas Mobil
const mobilSaya = new Mobil('Toyota', 'Merah', 2020);
mobilSaya.info();          // Output: Mobil: Toyota, Warna: Merah, Tahun: 2020
mobilSaya.mulai();         // Output: Toyota Merah, 2020, mulai berjalan.
mobilSaya.berhenti();      // Output: Toyota Merah, tahun 2020, berhenti berjalan.
mobilSaya.gantiWarna('Biru'); // Output: Warna mobil Toyota telah diganti menjadi Biru
mobilSaya.info();          // Output: Mobil: Toyota, Warna: Biru, Tahun: 2020



/*
Mobil: Toyota, Warna: Merah, Tahun: 2020
Toyota Merah, 2020, mulai berjalan.
Toyota Merah tahun 2020 berhenti berjalan
Warna mobil Toyota telah diganti menjadi Biru
Mobil: Toyota, Warna: Biru, Tahun: 2020

*/