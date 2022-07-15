import { Button, Card, Group, Text, Image, Badge } from "@mantine/core";
import React from "react";

interface ProductProps {
  name: string;
  description: string;
  image: string;
  id: number;
}

const ProductItem = ({ name, description, image, id }: ProductProps) => {
  return (
    <div key={id}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={image} height={160} alt="Norway" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: 15 }}>
          <Text weight={500}>{name}</Text>
          <Badge color="pink" variant="light">
            On Sale
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
        >
          Add To Cart
        </Button>
      </Card>
    </div>
  );
};

export default ProductItem;
