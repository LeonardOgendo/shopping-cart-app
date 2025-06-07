import Home from './components/Home.jsx';
import Products from './components/Products.jsx'; 
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div style={{ background: '#444' }}>
      <div className="container pt-5">
        <h5>Shop With US</h5>
        <Home />
        <Products />
    </div>
      </div>
      
  );
}

export default App;