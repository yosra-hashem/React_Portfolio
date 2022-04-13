import CounterP from "./components/CounterP";
import About from "./views/About";
import Home from "./views/Home";
import Shopping from "./views/Shopping";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from "./components/Nav";
import Product from './views/Products';

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/products" element={<Shopping/>}></Route>
        <Route path="/products/:id" element={<Product/>}></Route>
        <Route path="/counter" element={<CounterP/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
