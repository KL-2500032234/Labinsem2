import Cart from "./Cart";
import Shop from "./Shop";

function App() {
  return (
    <div>
      <nav aria-label="Main navigation">
        <a href="#shop">Shop</a>{" "}
        <a href="#cart">Cart</a>
      </nav>
      <section id="shop">
        <Shop />
      </section>
      <section id="cart">
        <Cart />
      </section>
    </div>
  );
}

export default App;