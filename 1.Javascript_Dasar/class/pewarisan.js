/*
Pewarisan (Inheritance):

Pewarisan memungkinkan Anda untuk membuat class baru yang mewarisi properti dan metode dari class lain. Class baru ini disebut subclass, dan class yang diwarisi disebut superclass.
*/

class Truk extends Mobil {
    constructor(merek, warna, tahun, muatanMaksimum) {
      super(merek, warna, tahun); // Memanggil constructor superclass
      this.muatanMaksimum = muatanMaksimum;
    }
  
    muatBarang(barang) {
      if (barang <= this.muatanMaksimum) {
        console.log(`Truk ${this.merek} ${this.warna} memuat barang ${barang} kg.`);
      } else {
        console.log(`Truk ${this.merek} ${this.warna} tidak dapat memuat barang ${barang} kg karena melebihi muatan maksimum.`);
      }
    }
  }