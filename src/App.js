import './App.css';
import Exit_Page from './components/Exit_page/Exit.Page';
import LoginPage from './components/Login_page/Login.Page';
import Admin_Page from './components/Admin_page/Admin.Page';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store/Store'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/exit' element={<Exit_Page />} />
            <Route path='/admin' element = { <Admin_Page/>}/>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
