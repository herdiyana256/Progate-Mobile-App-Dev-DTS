// Menyertakan HTML didalam String
//Anda bisa menggunakan template literal untuk membuat string yang mengandung HTML.
const product = {
    name: "T-Shirt",
    price: 25.99
  };
  
  const htmlString = `
    <div class="product">
      <h2>${product.name}</h2>
      <p>Price: $${product.price}</p>
    </div>
  `;
  
  console.log(htmlString);

  /*

    <div class="product">
      <h2>T-Shirt</h2>
      <p>Price: $25.99</p>
    </div>
  
  */

