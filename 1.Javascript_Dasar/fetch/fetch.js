//Fetch API -> Fetch API adalah sebuah antarmuka JavaScript modern untuk melakukan permintaan HTTP dan mengambil data dari server. Fetch API menggantikan metode XMLHttpRequest yang lebih lama dan menawarkan beberapa keuntungan, seperti:

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


  //exampe
  fetch(<URL>, <OPTIONS>)
  .then(response => response.json())
  .then(data => console.log(data));
  </OPTIONS>

  {/* Sekarang, mari kita gantikan code XMLHttpRequest sebelumnya dengan fetch! Disini mari gunakan Async/Await! */}



  async function fetchData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10", {
      method: "GET"
  });

  const json = await response.json();
  const results = json.results;
	
  let data = '';
  for (i = 0; i < results.length; i++) {
    data = data + `<p>${results[i].name}</p>`;
  }

  document.getElementById("data").innerHTML = data;
}