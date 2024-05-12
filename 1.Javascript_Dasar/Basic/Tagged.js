// 4. Tagged Template Literals
//Template literal juga mendukung tagged template literal. Ini memungkinkan Anda untuk memanggil fungsi khusus dengan string literal sebagai argumen. Fungsi tersebut kemudian dapat memproses string dan mengembalikan string baru.

function emphasize(strings, ...values) {
    // ... logic to process strings and values
    return strings.map((str, i) => `${str}<strong>${values[i] || ""}</strong>`).join("");
  }
  
  const name = "Alice";
  
  const message = emphasize`Hello, ${name}! How are you doing?`;
  
  console.log(message);
  //Hello, <strong>Alice</strong>! How are you doing?<strong></strong>
  