import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Center from './Center';
import {useState} from 'react'; 


function App() {
  const[mode,setMode] =useState('light');

   const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042e50'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
    <Header  mode={mode} toggleMode={toggleMode} />
    

    <Center  mode={mode} />
    
    
    </>
     
  )
}

export default App;