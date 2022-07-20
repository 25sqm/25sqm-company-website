import { SimpleGrid, createStyles } from "@mantine/core";
import { env } from "process";
import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { CartItem } from "../../context/CartContext";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl,
  },
}));

const ProductsList = () => {
  const { classes } = useStyles();
  const [products, setProducts] = useState<any>([]);

  async function getProducts() {
    const response = await fetch("/api/product");
    const data = await response.json();
    console.log(data);
    setProducts(data);
  }

  useEffect(() => {
    if (env.NODE_ENV === "development") {
      getProducts();
    } else {
      setProducts([
        {
          id: 1,
          productName: "Profume: 99.8% Sulfuryl-Fluoride",
          productDescription:
            "Broad-spectrum fumigant designed for quick and easy fumigation with guaranteed effects within 24hrs upon exposure",
          productImage: "https://picsum.photos/500/600",
        },
        {
          id: 2,
          productName: "Vaporpho3s: 99% Phosphine ",
          productDescription:
            "Pure phosphine for the fumigation of post-harvest products and/or storage structures. Designed for use in conjunction with Cytec-approved blending equipment capable of diluting the phosphine concentration to below its lower flammability limit of 1.8% (vol.).",
          productImage: "https://picsum.photos/500/600",
        },
        {
          id: 3,
          productName: "Eco2fume: 2% Phosphine ",
          productDescription:
            "A gaseous mixture of 2% phosphine (by weight) in carbon dioxide. Carbon dioxide is an excellent carrier for phosphine and diluting phosphine to this concentration ensuring that the fumigant is nonflammable in all proportions with air.",
          productImage: "https://picsum.photos/500/600",
        },
      ]);
    }
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
