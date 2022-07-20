import {
  Button,
  Card,
  Group,
  Text,
  Image,
  Badge,
  NumberInput,
  useMantineTheme,
  ThemeIcon,
} from "@mantine/core";
import { useModals } from "@mantine/modals";
import React, { useState, useContext } from "react";
import CartContext, { CartItem } from "../../context/CartContext";

export interface ProductProps {
  productName: string;
  productDescription: string;
  productImage: string;
  id: number;
}

const ProductItem = ({
  productName,
  productDescription,
  productImage,
  id,
}: ProductProps) => {
  const modals = useModals();
  const theme = useMantineTheme();
  const { cartItems, addToCart, editQuantity, deleteCartItem } =
    useContext(CartContext);

  const openProductModal = () => {
    let quantity = 1;
    modals.openConfirmModal({
      title: "View Product",
      size: "lg",
      centered: true,
      children: (
        <div>
          <Image src={productImage} height={250} alt="Norway" />
          <Group position="apart" style={{ marginBottom: 5, marginTop: 15 }}>
            <Text size="lg" weight={500}>
              {productName}
            </Text>
            <Badge color="green" variant="light">
              In Stock
            </Badge>
          </Group>
          <Text mb={25} size="sm" style={{ lineHeight: 1.5 }}>
            {productDescription}
          </Text>
          <NumberInput
            value={quantity}
            onChange={(value: number) => (quantity = value)}
            placeholder="Quantity"
            label="Quantity"
            required
          />
        </div>
      ),
      labels: { confirm: "Add to Quote", cancel: "Keep Shopping" },
      onCancel: () => console.log("Cancelled"),
      onConfirm: () => {
        addToCart({
          id,
          productName,
          productDescription,
          productImage,
          quantity,
        });
      },
    });
  };

  return (
    <div key={id}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={productImage} height={250} alt="Norway" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 15, marginTop: 15 }}>
          <Text weight={600}>{productName}</Text>
          <Badge color="green" variant="light">
            In Stock
          </Badge>
        </Group>

        <Text size="sm" lineClamp={4} style={{ lineHeight: 1.5 }}>
          {productDescription}
        </Text>

        <Button
          variant="filled"
          color={theme.colors.brand[7]}
          fullWidth
          style={{ marginTop: 14 }}
          onClick={openProductModal}
        >
          View Product
        </Button>
      </Card>
    </div>
  );
};

export default ProductItem;
