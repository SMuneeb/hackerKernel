import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Container,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { UserContext } from "../../context/Provider";

const ProductForm = () => {
  const { items, setItems } = useContext(UserContext);
  const [products, setProducts] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducts((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addItem = (e) => {
    e.preventDefault();
    const duplicateItemIndex = items.findIndex(
      (item) => item.name === products.name
    );
    if (duplicateItemIndex === -1) {
      setItems((prevItems) => [...prevItems, products]);
      setProducts({ name: "", description: "", price: "" });
    } else {
      setError("Item already exists!");
    }
  };

  return (
    <Container>
      <Box sx={{ width: "100%", textAlign: "center", marginBottom: "15px" }}>
        <Typography variant="h4" color={"#44403c"}>
          Add Product Form
        </Typography>
      </Box>
      <form
        style={{
          width: "100%",
          textAlign: "center",
        }}
        onSubmit={addItem}
      >
        <TextField
          name="name"
          value={products.name}
          onChange={handleChange}
          size="small"
          style={{ width: "400px", margin: "5px" }}
          type="text"
          required
          label="Product Name"
          variant="outlined"
        />
        <br />
        <TextField
          size="small"
          name="description"
          value={products.description}
          onChange={handleChange}
          style={{ width: "400px", margin: "5px" }}
          type="text"
          label="Description"
          variant="outlined"
        />
        <br />
        <TextField
          size="small"
          name="price"
          value={products.price}
          onChange={handleChange}
          style={{ width: "400px", margin: "5px" }}
          type="text"
          label="Price"
          variant="outlined"
        />
        <br />
        <FormHelperText
          sx={{
            margin: "5px",
            textAlign: "center",
            color: "red",
          }}
        >
          {error && error}
        </FormHelperText>
        <Button
          size="small"
          sx={{ width: "400px", margin: "5px" }}
          type="submit"
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </form>
    </Container>
  );
};

export default ProductForm;
