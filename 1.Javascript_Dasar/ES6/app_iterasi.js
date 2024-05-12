// Menerapkan iterasi 
//Terakhir, mari kita coba latihan tingkat lanjut menggunakan loop for. Kali ini, kita akan tetap mencetak angka dari 1 hingga 100. Namun, bila angka adalah kelipatan 3, kita akan mencetak "Kelipatan 3".

for (variable; kondisi; update){
    if(ketika variable adalah kelipatan 3) {
        // kode
    } else {
        // kode 
    }

}


/*

Kita menggunakan loop for untuk mengiterasi dari 1 hingga 100.
Dalam setiap iterasi, kita menggunakan sebuah pernyataan if untuk memeriksa apakah nilai number adalah kelipatan 3 atau tidak dengan menggunakan operator modulo %.
Jika nilai number adalah kelipatan 3 (artinya, saat modulus dengan 3 adalah 0), kita mencetak "Kelipatan 3" ke konsol.
Jika bukan kelipatan 3, kita hanya mencetak nilai number.
*/
for (let number = 1; number <= 100; number++) {
    // Gunakan statement if untuk mencetak string "Kelipatan 3" ketika nilai angka adalah kelipatan 3
    if (number % 3 === 0) {
        console.log("Kelipatan 3");
    } else {
        console.log(number);
    }
}

/*
1
2
Kelipatan 3
4
5
Kelipatan 3
7
8
Kelipatan 3
10
11
Kelipatan 3
13
14
Kelipatan 3
16
17
Kelipatan 3
19
20
Kelipatan 3
22
23
Kelipatan 3
25
26
Kelipatan 3
28
29
Kelipatan 3
31
32
Kelipatan 3
34
35
Kelipatan 3
37
38
Kelipatan 3
40
41
Kelipatan 3
43
44
Kelipatan 3
46
47
Kelipatan 3
49
50
Kelipatan 3
52
53
Kelipatan 3
55
56
Kelipatan 3
58
59
Kelipatan 3
61
62
Kelipatan 3
64
65
Kelipatan 3
67
68
Kelipatan 3
70
71
Kelipatan 3
73
74
Kelipatan 3
76
77
Kelipatan 3
79
80
Kelipatan 3
82
83
Kelipatan 3
85
86
Kelipatan 3
88
89
Kelipatan 3
91
92
Kelipatan 3
94
95
Kelipatan 3
97
98
Kelipatan 3
100

*/
