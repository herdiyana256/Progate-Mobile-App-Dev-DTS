//Polimorfisme memungkinkan Anda untuk mendefinisikan metode dengan nama yang sama di subclass yang berbeda, dengan implementasi yang berbeda. Hal ini memungkinkan Anda untuk menangani objek dari berbagai subclass dengan cara yang sama, meskipun mereka memiliki implementasi yang berbeda.


const mobilku = new Mobil("Toyota", "Merah", 2023);
const trukku = new Truk("Isuzu", "Biru", 2022, 5000);

mobilku.mulai(); // Output: Toyota Merah tahun 2023 mulai berjalan.
trukku.mulai(); // Output: Isuzu Biru tahun 2022 mulai berjalan.

mobilku.berhenti(); // Output: Toyota Merah tahun 2023 berhenti berjalan.
trukku.berhenti(); // Output: Isuzu Biru tahun 2022 berhenti berjalan.

trukku.muatBarang(3000); // Output: Truk Isuzu Biru memuat barang 3000 kg.
trukku.muatBarang(6000); // Output: Truk Isuzu Biru tidak dapat memuat barang 6000 kg karena melebihi muatan maksimum.