import { useTheme } from '../context/ThemeContext.jsx';
import { FaShoppingCart, FaMoon, FaSun } from 'react-icons/fa';

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <div className="header">
        <h1>Welcome to Our Shop</h1>
        <div className="icons d-flex justify-content-end">
          <FaShoppingCart size={24} />
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'dark' ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>
        </div>
      </div>
      <p>Explore our products and enjoy shopping with us!</p>
    </div>
  );
}

export default Home;

