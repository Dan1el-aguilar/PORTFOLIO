
import './App.css';
import { useState, useEffect} from 'react'
import Header from './components/Header/Header';
import Index from './page/Index';

function App() {
  
  const [scroll, setScroll] = useState(0)
  
  const handleScroll = () => {
    const position = window.pageYOffset
    setScroll(position) //cuando baje la pantalla se eleva el 0
 }



 useEffect(() => {
  window.addEventListener("scroll", handleScroll)
 },[scroll])


  return (
        <div className="App">
          
          <Header isCrolling ={scroll}/>
          <Index/>
            
        </div>
  );
}

export default App;
