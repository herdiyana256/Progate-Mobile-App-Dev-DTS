import React from 'react';


class App extends React.Component {
  render() {
    // Nyatakan constant name 
    const name = "Ninja Ken adalah Progate";
    
    // Nyatakan constant imgUrl 
    const imgUrl = "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/kentheninja.png";
    
    return (
      <div>
        {/* Gunakan constant name untuk menampilkan "Ninja Ken" */}
        <h1>{name}</h1>
        
        {/* Gunakan constant imgUrl untuk menampilkan gambar */}
        <img src={imgUrl} />
        
        
      <div className="button-container">
        <h1>Hallo, Herdiyan</h1>
        <h2>Welcome to my dashboard</h2>
        <button onClick={() => {console.log('IT Developer')}}>IT Developer</button>
        <button onClick={() => {console.log('IT Software Engineering')}}>IT Software Engineering</button>

        <h3 className='title'>Click Here</h3>
        <h4 className='text'>Back</h4>
      </div>


      </div>
    );
  }
}

export default App;










// // example 2  - state
// import React from 'react';

// class App extends React.Component {
//   // Nyatakan constructor di bawah
//   constructor(props) {
//     super(props);
//     // Penerapan state
//     this.state = {name: "Ninja Ken"};
//   }
  
//   render() {
//     return (
//     	<div>
//     	  <h1>Halo, Ninja Ken!</h1>
//         <button onClick={() => {console.log('Guru Domba')}}>Guru Domba</button>
//         <button onClick={() => {console.log('Ninja Ken')}}>Ninja Ken</button>
//       </div>
//     );
//   }
// }

// export default App;






