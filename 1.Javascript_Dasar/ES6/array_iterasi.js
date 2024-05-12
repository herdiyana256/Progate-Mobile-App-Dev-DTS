// Array & iterasi 

// Mari kita review array yang memiliki object sebagai element dan iterasi dengan menuliskan code untuk mengatasi beberapa masalah! Kita akan mencetak profil (name dan age) dari setiap karakter seperti yang ditunjukkan di bawah ini.
const characters = [
    {name: "dendi", position: "head IT"},
    {name: "regar", position: "Manager IT"},
    {name: "sulastri", position: "Manager IT"}
];
// gunakan iterasi untuk mengeprint nilai property name dan age sesuai urutan 



//example
const characters = [
    {name: "Ninja Ken", age: 14},
    {name: "Guru Domba", age: 100},
    {name: "Baby Ninja Ben", age: 5},
  ];
  
  // Selesaikan loop for di bawah
  for (let i= 0; i < characters.length; i++) {
    console.log("--------------------");
    
    // Tentukan nilai constant character
    const character = characters[i];
    
    // Cetak "Nama saya adalah ____"
    console.log(`Nama saya adalah ${character.name}`);
    
    // Cetak "Saya berusia ____ tahun"
    console.log(`Saya berusia ${character.age}tahun`);
    
  }
  

  


  // Mendapatlam element yang tidak ada ( array )
  const animals = ["anjing", "babi", "bagong"];

  console.log(animals[1]);


  console.log(animals[5]);// nomor index 5 tidak ada 





  // Object 
  const character = {name : "vey", age: 34};

  console,log(character.name);


  console.log(character.email); // properti ini tidak ada 