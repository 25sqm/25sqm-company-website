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
import React, { useState } from "react";

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
  const modalContent: React.ReactNode = (
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
        defaultValue={1}
        placeholder="Quantity"
        label="Quantity"
        required
      />
    </div>
  );

  const openProductModal = () =>
    modals.openConfirmModal({
      title: "View Product",
      size: "lg",
      centered: true,
      children: modalContent,
      labels: { confirm: "Add to Quote", cancel: "Keep Shopping" },
      onCancel: () => console.log("Cancelled"),
      onConfirm: () => console.log("Confirmed"),
    });

  return (
    <div key={id}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={productImage} height={160} alt="Norway" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: 15 }}>
          <Text weight={500}>{productName}</Text>
          <Badge color="green" variant="light">
            In Stock
          </Badge>
        </Group>

        <Text size="sm" lineClamp={2} style={{ lineHeight: 1.5 }}>
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
