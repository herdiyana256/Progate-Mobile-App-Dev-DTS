// Function dengan beberapa argument 

function calculateExamTotal (mathScore, scienceScore, englishScore) {
    const totalScore  = mathScore + scienceScore + englishScore;
    return totalScore;

}

const adamScore = calculateExamTotal(80,90,95);
console.log("Nilai rekapitulasi adam:", adamScore);


const andiScore = calculateExamTotal(90,98,100);
console.log("Nilai rekapitulasi andi:", andiScore);


// function dengan beberapa argument 
const FunctionName = {parameter1, parameter2, ...} => {
    // Code 
};



// example 
const introduce = (name, age) =>  {
    // code 
};




//Seperti saat Anda mendefinisikan beberapa parameter, gunakan koma , untuk memisahkan beberapa argument saat Anda memanggil function. Penerusan argument harus dalam urutan yang sama seperti parameter, karena cara pendefinisian function akan digunakan untuk pemanggilan fungsi.
// example full complete
const introduce = (name, age) => {
    console.log(`Nama saya ${name}`);
    console.log(`Saya berusia ${age}`);

};

introduce("Herdiyan",28);
/*
Nama saya Herdiyan
Saya berusia 28

*/


// example 
// Tambahkan parameter number1 dan number2 ke dalam function 
const add = (number1, number2) => {
    // Print penjumlahaan number1 dan number2
   console.log(number1 + number2);
  };
  
  // Panggil function dengan 5 dan 7 sebagai argument
  
  add(5, 7); // 12






//function untuk memformat tanggal
function formatDate(date, format) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Karena bulan dalam JavaScript dihitung dari 0
    const day = date.getDate();
  
    if (format === "YYYY-MM-DD") {
      return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
    } else if (format === "DD/MM/YYYY") {
      return `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year}`;
    } else {
      throw new Error("Format tanggal tidak valid");
    }
  }
  
  const today = new Date();
  const formattedDate1 = formatDate(today, "YYYY-MM-DD");
  console.log(formattedDate1); // Menampilkan "2024-05-13"
  
  const formattedDate2 = formatDate(today, "DD/MM/YYYY");
  console.log(formattedDate2); // Menampilkan "13/05/2024"




  //3. Function untuk Menghitung Rata-rata Nilai Ujian Beberapa Murid

  function calculateAverageExamScores(scores) {
    if (scores.length === 0) {
      throw new Error("Tidak ada nilai yang diinputkan");
    }
  
    let totalScore = 0;
    for (const score of scores) {
      totalScore += score;
    }
  
    const averageScore = totalScore / scores.length;
    return averageScore;
  }
  
  const mathScores = [80, 90, 75, 95, 85];
  const averageMathScore = calculateAverageExamScores(mathScores);
  console.log("Rata-rata nilai matematika:", averageMathScore); // Menampilkan "Rata-rata nilai matematika: 85"
  
  const scienceScores = [95, 85, 90, 100, 92];
  const averageScienceScore = calculateAverageExamScores(scienceScores);
  console.log("Rata-rata nilai sains:", averageScienceScore); // Menampilkan "Rata-rata nilai sains: 92.2"




  //4. Function untuk Mencari Nilai Maksimum dan Minimum dari Beberapa Bilangan

  function findMinMax(numbers) {
    if (numbers.length === 0) {
      throw new Error("Tidak ada bilangan yang diinputkan");
    }
  
    let min = numbers[0];
    let max = numbers[0];
  
    for (const number of numbers) {
      if (number < min) {
        min = number;
      } else if (number > max) {
        max = number;
      }
    }
  
    return {
      min: min,
      max: max
    };
  }
  
  const randomNumbers = [5, 2, 4, 1, 3];
  const minMaxValues = findMinMax(randomNumbers);
  console.log("Nilai minimum:", minMaxValues.min); // Menampilkan "Nilai minimum: 1"
  console.log("Nilai maksimum:", minMaxValues.max); // Menampilkan "Nilai maksimum: 5"






  //5. Function untuk Menggabungkan Dua Array
  function combineArrays(array1, array2) {
    const combinedArray = [...array1, ...array2];
    return combinedArray;
  }
  
  const colors1 = ["merah", "kuning", "hijau"];
  const colors2 = ["biru", "ungu", "jingga"];
  const combinedColors = combineArrays(colors1, colors2);
  console.log(combined

