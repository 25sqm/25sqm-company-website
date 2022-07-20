import { SimpleGrid, createStyles } from "@mantine/core";
import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl,
  },
}));

const ProductsList = () => {
  const { classes } = useStyles();
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await fetch("/api/product");
    const data = await response.json();
    console.log(data);
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <SimpleGrid
      breakpoints={[
        { maxWidth: "md", cols: 3, spacing: "md" },
        { maxWidth: "sm", cols: 2, spacing: "sm" },
        { maxWidth: "xs", cols: 1, spacing: "sm" },
      ]}
      className={classes.wrapper}
      cols={3}
    >
      {products.map((product: any) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </SimpleGrid>
  );
};

export default ProductsList;
