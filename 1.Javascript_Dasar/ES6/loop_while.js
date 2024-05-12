// Loop while 
//cara melakukan iterasi adalah dengan menggunakan loop while. Loop ini ditulis seperti yang ditampilkan dalam contoh di gambar bawah. "Selama syaratnya bernilai true", code di dalam tanda kurung kurawal {} akan diulang. Anda tidak perlu menempatkan titik koma diakhir code loop while.


// while (kondisi) {
//     // code 

// } // tidak membutuhkan titik koma


// contoh loop while menampilkan secara manual secara 100x
let number = 1;

console.log(number);
number += 1;

console.log(number);
number += 1;

console.log(number);
number += 1; 


// dan seterusnya .....






// contoh loop while menampilkan angka 1 - 100 
let value = 1;

while(value < 100) {
    console.log(value);
    value += 1;
} // hanya perlu mengetikan
/*
1
2
3
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
*/



var  name = "Herdiyan";
var count = 0;

while(count < 100) {
    console.log("CEO Founder IslamiConnect adalah herdiyan");
    count++;
}   

/*
CEO Founder IslamiConnect adalah herdiyan
*/


// Menggunakan loop while(2)
//Selanjutnya, mari kita tambahkan syarat untuk menentukan kapan code berhenti diulang. Di sini, kita ingin mengulang isinya hingga number kurang dari atau sama dengan 100, oleh karena itu, kita akan menulis ekspresi bersyarat seperti yang ditunjukkan di gambar kiri. Code di dalam {} akan terus diulang selama syarat yang ditetapkan (number <= 100) bernilai true.
let angka = 1;
while(angka <= 100) {
    console.log(angka);
    angka += 1;
}
// output : angka 1 - 100



// catatan penting tentang loop while 
//Hati-hatilah ketika menggunakan loop while karena pada akhirnya syaratnya harus bernilai false, mencegah pengulangan yang akan menimbulkan error. Pada gambar kiri, tidak terdapat code untuk memperbarui number, sehingga menyebabkan code diulangi terus menerus tanpa henti, kondisi ini disebut infinite loop yaitu loop tanpa batas.
let number = 1;
while(number <= 100) {
    // loop ini tidak akan berakhir karena kondisi akan terus berstatus true!
    console.log(number);
} // code untuk mengupdate nilai lupa di buat 