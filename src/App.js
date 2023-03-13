import NavBar from './components/NavBar';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import ONama from './components/ONama';
import Footer from './components/Footer';

function App() {
  return (

    <div>
    <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/onama" element={<ONama></ONama>}></Route>
          </Routes>
     </BrowserRouter>
     <Footer></Footer>
  </div>
  );
}

export default App;
