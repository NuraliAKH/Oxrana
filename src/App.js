import './App.css';
import Exit_Page from './pages/Exit_page/Exit.Page';
import LoginPage from './pages/Login_page/Login.Page';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/exit' element={<Exit_Page />} />
            {/* <Route path='/admin' element = { <Admin_Page/>}/> */}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
