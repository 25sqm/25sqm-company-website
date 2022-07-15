import {
  Button,
  Card,
  Group,
  Text,
  Image,
  Badge,
  NumberInput,
} from "@mantine/core";
import { useModals } from "@mantine/modals";
import { ModalsContext } from "@mantine/modals/lib/context";
import React, { useState } from "react";

export interface ProductProps {
  name: string;
  description: string;
  image: string;
  id: number;
}

const ProductItem = ({ name, description, image, id }: ProductProps) => {
  const modals = useModals();

  const modalContent: React.ReactNode = (
    <div>
      <Image src={image} height={160} alt="Norway" />
      <Group position="apart" style={{ marginBottom: 5, marginTop: 15 }}>
        <Text size="lg" weight={500}>
          {name}
        </Text>
        <Badge color="green" variant="light">
          In Stock
        </Badge>
      </Group>
      <Text mb={25} size="sm" style={{ lineHeight: 1.5 }}>
        {description}
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
      children: modalContent,
      labels: { confirm: "Add to Quote", cancel: "Keep Shopping" },
      onCancel: () => console.log("Cancelled"),
      onConfirm: () => console.log("Confirmed"),
    });

  return (
    <div key={id}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={image} height={160} alt="Norway" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: 15 }}>
          <Text weight={500}>{name}</Text>
          <Badge color="green" variant="light">
            In Stock
          </Badge>
        </Group>

        <Text size="sm" style={{ lineHeight: 1.5 }}>
          {description}
        </Text>

        <Button
          variant="light"
          color="blue"
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
