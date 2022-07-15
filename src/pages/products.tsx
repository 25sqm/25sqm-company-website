import {
  Badge,
  Button,
  Card,
  Group,
  Text,
  Image,
  useMantineTheme,
  Container,
} from "@mantine/core";
import React from "react";
import MastHead from "../components/products/MastHead";
import ProductsList from "../components/products/ProductsList";

const products = () => {
  return (
    <Container size="md">
      <MastHead />
      <ProductsList />
    </Container>
  );
};

export default products;
