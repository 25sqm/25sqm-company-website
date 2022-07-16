import { SimpleGrid, createStyles } from "@mantine/core";
import React from "react";
import ProductItem from "./ProductItem";

const mockProductData = [
  {
    id: 1,
    name: "Product 1",
    description: "This is a product",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is a product",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is a product",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    name: "Product 3",
    description: "This is a product",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    name: "Product 3",
    description: "This is a product",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 6,
    name: "Product 3",
    description: "This is a product",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 7,
    name: "Product 3",
    description: "This is a product",
    image: "https://picsum.photos/200/300",
  },
];

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl,
  },
}));

const ProductsList = () => {
  const { classes } = useStyles();
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
      {mockProductData.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </SimpleGrid>
  );
};

export default ProductsList;
