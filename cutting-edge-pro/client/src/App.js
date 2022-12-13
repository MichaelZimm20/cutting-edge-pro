import './App.css';

function App() {

const uploadImage = (files) => {
  console.log(files[0]);
}


return (
  <div className="App">
    <header className="App-header">
      <div>
      <input type='file'onChange={(event) => { 
        uploadImage(event.target.files); 
      }}
        />
    </div>
    
    </header>
  </div>
);
}

export default App;


