import pic from "./images/Product-Your-Design-Here-02-3.jpg";
import pic2 from "./images/Buy-Plain-red-tshirts-online.webp";
import pic3 from "./images/images.jpg";
import { useState } from "react";
const data = [
  {
    id: 1,
    title: "Product 1",
    price: 29.99,
    description: "A great product!",
    pic: pic,
  },
  {
    id: 2,
    title: "Product 2",
    price: 39.99,
    description: "Another amazing item!",
    pic: pic2,
  },
  {
    id: 3,
    title: "Product 3",
    price: 199.99,
    description: "Don't miss out!",
    pic: pic,
  },
  {
    id: 4,
    title: "Product 4",
    price: 329.99,
    description: "Another amazing item!",
    pic: pic3,
  },
  {
    id: 5,
    title: "Product 5",
    price: 109.99,
    description: "Don't miss out!",

    pic: pic3,
  },
  {
    id: 6,
    title: "Product 6",
    price: 79.99,
    description: "Another amazing item!",
    pic: pic2,
  },
  {
    id: 7,
    title: "Product 7",
    price: 59.99,
    description: "Don't miss out!",
    pic: pic,
  },
];

export default function App() {
  const initialData = data;

  const [price, setPrice] = useState(30);
  const [showCard, setShowCard] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItems] = useState(initialData);

  function handleAddItem() {}

  function handlePriceFilter(getPrice) {
    setPrice(getPrice);
    console.log(price);
  }

  function handleShowCard() {
    setShowCard((show) => !show);
  }

  function handleSelection(currentId) {
    setSelectedItem(currentId === selectedItem?.id ? null : currentId);
    setItems((items) => (currentId) => [...items, currentId]);
    console.log(items);
    console.log(selectedItem);
  }

  return (
    <div>
      <NavBar />
      <FilterBar
        onPriceFilter={handlePriceFilter}
        price={price}
        onShowCard={handleShowCard}
      />
      {showCard && <Cart selectedItem={selectedItem} />}
      <Main>
        <ProductList
          items={items}
          price={price}
          onSelection={handleSelection}
          selectedItem={selectedItem}
          onAddItem={handleAddItem}
        />
      </Main>

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
function Cart({ selectedItem }) {
  return (
    <>
      <div className="cart-summary">
        <div className="cart-item">
          <img src={selectedItem?.pic} alt={selectedItem?.title} />
          <div className="item-details">
            <h4>{selectedItem.title}</h4>
            <p>${selectedItem.price}</p>
            <input type="number" value="1" className="quantity-input" />
            <button className="remove-item">Remove</button>
          </div>
        </div>

        <p className="cart-total">Total: $89.97</p>

        <button className="checkout-btn">Proceed to Checkout</button>
        <div className="promo-code">
          <input type="text" placeholder="Enter promo code" />
          <button>Apply</button>
        </div>
      </div>
    </>
  );
}

function FilterBar({ onPriceFilter, price, onShowCard }) {
  return (
    <>
      <div class="filter-bar">
        <div>
          <label for="price-range">Filter by Price:</label>
          <input
            type="range"
            id="price-range"
            min="30"
            max="500"
            step="10"
            value={price}
            onChange={(e) => onPriceFilter(e.target.value)}
          />
          <span id="price-value">{price}</span>
        </div>
        <div onClick={() => onShowCard()} class="cart-icon">
          <span class="cart-count">3</span>
          🛒
        </div>
      </div>
    </>
  );
}
function Main({ children }) {
  return <div className="">{children}</div>;
}

function ProductList({ items, price, onSelection, selectedItem }) {
  return (
    <ul className="box">
      {items.map(
        (data) =>
          data.price < price && (
            <ProductItem
              data={data}
              key={data.id}
              onSelection={onSelection}
              selectedItem={selectedItem}
            />
          )
      )}
    </ul>
  );
}
function ProductItem({ data, onSelection, selectedItem }) {
  const [showDetails, setShowDetails] = useState(false);
  const isSelected = selectedItem?.id !== data.id;
  console.log(isSelected);

  function handleClick() {
    setShowDetails((show) => !show);
  }
  return (
    <div className="product-item">
      <img src={data.pic} alt={data.title} />
      <h3>{data.title}</h3>
      <p className="price">{data.price}</p>
      <select>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      {showDetails && (
        <h1
          style={{ color: "red", backgroundColor: "Yellow", padding: "20px" }}
        >
          {data.description}
        </h1>
      )}

      <button onClick={() => onSelection(data)}>Add to Cart</button>
      <button onClick={() => handleClick()}>
        {!showDetails ? "Show Details" : "Hide details"}
      </button>
    </div>
  );
}

function WishList() {
  return <div>WishList</div>;
}
