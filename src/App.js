//components
import { Header } from './components/Header.jsx';
import { Home } from './pages/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './pages/NotFound.jsx';
import { Cart } from './pages/Cart.jsx';
import { CartEmpty } from './pages/CartEmpty.jsx';

export const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="cartempty" element={<CartEmpty />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};
