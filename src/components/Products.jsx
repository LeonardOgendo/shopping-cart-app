import productsList from '../productsList.js';

const Products = () => {
  return (
    <div className="container mt-5 pb-5">
      <h2 className="mb-4">Our Products</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productsList.map((product) => (
          <div className="col" key={product.id}>
            <div style={{ background: '#c2c2c2' }} className="card h-100 shadow-sm">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price.toFixed(2)}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>  

  );
}

export default Products;