// Q6: Reusable Product component
const Product = ({ productName, price, category, quantity }) => {
  return (
    <div style={{ border: "1px solid #999", padding: "8px", margin: "8px 0" }}>
      <p>Product Name: {productName}</p>
      <p>Price: {price}</p>
      <p>Category: {category}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default Product;
