import './App.css';
import { Input } from 'postcss';

function App() {

const uploadImage = (files) => {
  console.log(files[0]);
}


  return (
    <div className="App">
      <header className="App-header">
        
    <div>
      <Input type='file'onChange={(event) => { 
        uploadImage(event.target.files); 
      }}
        />
    </div>
      </header>
    </div>
  );
}

export default App;
