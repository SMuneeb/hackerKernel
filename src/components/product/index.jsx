import React, { useContext, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import { UserContext } from "../../context/Provider";

const ProductList = () => {
  const { items, setItems } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  return (
    <>
      <Container>
        <Box sx={{ width: "100%", textAlign: "right", marginBottom: "20px" }}>
          <TextField
            size="small"
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Box>
        <TableContainer sx={{ width: "100%" }} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "600", color: "#1e293b" }}
                >
                  Product
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "600", color: "#1e293b" }}
                >
                  Description
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "600", color: "#1e293b" }}
                >
                  Price
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "600", color: "#1e293b" }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            {filteredItems.length > 0 ? (
              <TableBody>
                {filteredItems.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.description}</TableCell>
                    <TableCell align="center">$ {row.price}</TableCell>
                    <TableCell
                      align="center"
                      onClick={() => {
                        handleDelete(index);
                      }}
                    >
                      <DisabledByDefaultRoundedIcon
                        sx={{ color: "red", cursor: "pointer" }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <Typography variant="h5" padding={2}>
                No Product Found
              </Typography>
            )}
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default ProductList;
