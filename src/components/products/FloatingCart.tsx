import React, { useState, useContext, useEffect } from "react";
import {
  ActionIcon,
  createStyles,
  useMantineTheme,
  Affix,
  Indicator,
  Text,
  Group,
  Button,
  Image,
  Stack,
} from "@mantine/core";
import { ShoppingCart, X } from "tabler-icons-react";
import { useModals } from "@mantine/modals";
import CartContext, { CartItem } from "../../context/CartContext";

const useStyles = createStyles((theme) => ({
  float: {
    backgroundColor: theme.colors.brand[6],
    "&:hover": {
      backgroundColor: theme.colors.brand[7],
      transition: "all 0.2s ease-in-out",
    },
  },

  image: {
    flex: 1,
  },
  content: {
    flexGrow: 3,
  },

  cartItem: {
    borderBottom: "1px solid #e6e6e6",
    padding: "10px 5px",
  },

  submitQuotationBtn: {
    float: "right",
  },
}));

const FloatingCart = () => {
  const { cartItems, addToCart, editQuantity, deleteCartItem } =
    useContext(CartContext);
  const modals = useModals();
  const theme = useMantineTheme();
  const { classes } = useStyles();

  useEffect(() => {
    console.log("Rerender");
  }, [cartItems]);

  const handleDelete = async (id: number) => {
    await deleteCartItem(id);
  };

  const openCartModal = (cartItems: CartItem[]) => {
    const id = modals.openModal({
      title: "Shopping Cart",
      size: "xl",
      children: (
        <div>
          <Text>Your items to be added to the quotation are as follows:</Text>
          {cartItems.map((item) => (
            <div className={classes.cartItem} key={item.id}>
              <Group style={{ marginBottom: 5, marginTop: 15 }}>
                <Image
                  className={classes.image}
                  width={120}
                  height={120}
                  radius="md"
                  fit="cover"
                  alt="product from 25sqm"
                  src={item.productImage}
                />
                <Stack className={classes.content}>
                  <Group position="apart">
                    <Text weight={500}>{item.productName}</Text>
                    <Text>{item.quantity}</Text>
                  </Group>
                  <Group position="apart">
                    <Text size="sm">{item.productDescription}</Text>
                    <ActionIcon
                      variant="filled"
                      className={classes.float}
                      size={24}
                      onClick={() => handleDelete(item.id)}
                    >
                      <X size={16} />
                    </ActionIcon>
                  </Group>
                </Stack>
              </Group>
            </div>
          ))}
          <Button className={classes.submitQuotationBtn} mt={10}>
            Submit Quotation
          </Button>
        </div>
      ),
    });
  };

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Indicator size={12} offset={3} color="red">
        <ActionIcon
          className={classes.float}
          variant="filled"
          size={50}
          onClick={() => openCartModal(cartItems)}
        >
          <ShoppingCart size={25} />
        </ActionIcon>
      </Indicator>
    </Affix>
  );
};

export default FloatingCart;
