import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';


function App() {

  return (
      <div className='App'>
          <BrowserRouter>
            <nav>
              <Link to="/">Home</Link>{'  '}
              <Link to="/contact">Contact</Link>{' '}
            </nav>

            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='contact' element={<Contact/>}></Route>
            </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
