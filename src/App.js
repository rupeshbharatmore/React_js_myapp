
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
    <>
    <Navbar title ="Textutils" about = "About us"></Navbar>
    <div className='container mb-3'>
    <Textform title = "ENTER YOUR INPUT TEXT BELOW"></Textform>
    </div>
    
    </>
  );
}

export default App;
