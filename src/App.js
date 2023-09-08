import './App.css';
import Exit_Page from './components/Exit_page/Exit.Page';
import LoginPage from './components/Login_page/Login.Page';
import {Route ,Routes , BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<LoginPage/>}/>
          <Route path='/exit' element ={<Exit_Page/>}/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
