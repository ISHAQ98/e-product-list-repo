import pic from "./pic.jpg";

const data = [
  { id: 1, title: "Product 1", price: 29.99, description: "A great product!" },
  {
    id: 2,
    title: "Product 2",
    price: 39.99,
    description: "Another amazing item!",
  },
  { id: 3, title: "Product 3", price: 19.99, description: "Don't miss out!" },
];

export default function App() {
  const initialData = data;
  return (
    <div>
      <NavBar />
      <FilterBar />
      <Main>
        <ProductList initialData={initialData} />
      </Main>
      <Cart />
      <WishList />
    </div>
  );
}
function NavBar() {
  return (
    <div className="navbar">
      <h1>Product list app</h1>
    </div>
  );
}

function FilterBar() {
  return (
    <>
      <div>
        {/* <div>
        <label>Filter Products</label>
        </div> */}
      </div>
      <div class="filter-bar">
        <label>Category</label>
        <select>
          <option>category X</option>
          <option>category Y</option>
          <option>category Z</option>
        </select>
        <label for="price-range">Filter by Price:</label>
        <input
          type="range"
          id="price-range"
          min="0"
          max="1000"
          step="10"
          value="500"
          onChange="updatePriceValue(this.value)"
        />
        <span id="price-value">$500</span>
      </div>
    </>
  );
}
function Main({ children }) {
  return <div className="main">{children}</div>;
}

function ProductList({ initialData }) {
  return (
    <ul className="box">
      {initialData.map((data) => (
        <ProductItem data={data} key={data.id} />
      ))}
    </ul>
  );
}
function ProductItem({ data }) {
  return (
    <div class="product-item">
      <img src="product-image.jpg" alt="Product 1" />
      <h3>Product 1</h3>
      <p class="price">$29.99</p>
      <button>Add to Cart</button>
    </div>
  );
}

function Cart() {
  return <div>Cart</div>;
}
function WishList() {
  return <div>WishList</div>;
}
