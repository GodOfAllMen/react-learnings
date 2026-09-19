/*
=================================================
Student Details
=================================================
Name         : [Aaditya Adhikari]
Roll No.     : [5.]
Contact No.  : [97417792061]
Address      : [kamane]
Program      : [csit]
Semester     : [2nd]
=================================================
Task: Product Creation Form with Fake API
=================================================
*/

import { useState } from "react";

const initialForm = {
  name: "",
  description: "",
  category: "Electronics",
  price: "",
  stock: "",
  brand: "",
  condition: "New",
  imageUrl: "",
  available: true,
  featured: false,
};

function CreateProduct() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [productId, setProductId] = useState(null);

  // one shared handler for text/select inputs
  const updateField = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // shared handler for the two checkboxes
  const updateCheckbox = (e) => {
    const { name, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: checked }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Product name is required";
    if (!form.description.trim()) newErrors.description = "Description is required";
    if (!form.price) newErrors.price = "Price is required";
    else if (isNaN(form.price) || Number(form.price) <= 0)
      newErrors.price = "Price must be a positive number";
    if (!form.stock) newErrors.stock = "Stock quantity is required";
    else if (isNaN(form.stock) || Number(form.stock) < 0)
      newErrors.stock = "Stock must be a valid number";
    if (!form.brand.trim()) newErrors.brand = "Brand is required";
    if (!form.imageUrl.trim()) newErrors.imageUrl = "Product image URL is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setProductId(null);

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      const data = await response.json();
      setProductId(data.id);
      setStatus("success");
      setForm(initialForm);
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name</label><br />
          <input type="text" name="name" value={form.name} onChange={updateField} />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <label>Product Description</label><br />
          <textarea name="description" value={form.description} onChange={updateField} />
          {errors.description && <p style={{ color: "red" }}>{errors.description}</p>}
        </div>

        <div>
          <label>Category</label><br />
          <select name="category" value={form.category} onChange={updateField}>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
            <option value="Grocery">Grocery</option>
            <option value="Furniture">Furniture</option>
          </select>
        </div>

        <div>
          <label>Price</label><br />
          <input type="text" name="price" value={form.price} onChange={updateField} />
          {errors.price && <p style={{ color: "red" }}>{errors.price}</p>}
        </div>

        <div>
          <label>Stock Quantity</label><br />
          <input type="text" name="stock" value={form.stock} onChange={updateField} />
          {errors.stock && <p style={{ color: "red" }}>{errors.stock}</p>}
        </div>

        <div>
          <label>Brand</label><br />
          <input type="text" name="brand" value={form.brand} onChange={updateField} />
          {errors.brand && <p style={{ color: "red" }}>{errors.brand}</p>}
        </div>

        <div>
          <label>Product Condition</label><br />
          <label>
            <input
              type="radio"
              name="condition"
              value="New"
              checked={form.condition === "New"}
              onChange={updateField}
            /> New
          </label>
          <label>
            <input
              type="radio"
              name="condition"
              value="Used"
              checked={form.condition === "Used"}
              onChange={updateField}
            /> Used
          </label>
          <label>
            <input
              type="radio"
              name="condition"
              value="Refurbished"
              checked={form.condition === "Refurbished"}
              onChange={updateField}
            /> Refurbished
          </label>
        </div>

        <div>
          <label>Product Image URL</label><br />
          <input type="text" name="imageUrl" value={form.imageUrl} onChange={updateField} />
          {errors.imageUrl && <p style={{ color: "red" }}>{errors.imageUrl}</p>}
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="available"
              checked={form.available}
              onChange={updateCheckbox}
            /> Available for Sale
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="featured"
              checked={form.featured}
              onChange={updateCheckbox}
            /> Featured Product
          </label>
        </div>

        <br />
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Submitting product..." : "Submit"}
        </button>

        {status === "loading" && <p>Submitting product...</p>}
        {status === "success" && (
          <div style={{ color: "green" }}>
            <p>Product created successfully!</p>
            <p>Demo Product ID: {productId}</p>
          </div>
        )}
        {status === "error" && (
          <p style={{ color: "red" }}>
            Failed to create product. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}

export default CreateProduct;
