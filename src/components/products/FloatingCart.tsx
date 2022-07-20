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
  Divider,
  Drawer,
  ScrollArea,
  Notification,
} from "@mantine/core";
import { ShoppingCart, X } from "tabler-icons-react";
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
    float: "left",
  },
}));

const FloatingCart = () => {
  const { cartItems, addToCart, editQuantity, deleteCartItem } =
    useContext(CartContext);
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const [drawerOpened, setDrawerOpened] = useState(false);

  const handleDelete = async (itemId: number) => {
    deleteCartItem(itemId);
  };

  useEffect(() => {
    console.log("Rendered");
  }, [cartItems, deleteCartItem]);

  return (
    <>
      <Drawer
        opened={drawerOpened}
        position="right"
        onClose={() => setDrawerOpened(false)}
        title="Your Cart"
        padding="xl"
        size="xl"
        overlayColor={theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        {cartItems.length > 0 ? (
          <div>
            <Text>Your items to be added to the quotation are as follows:</Text>
            <ScrollArea style={{ height: 650 }}>
              {cartItems.map((item: CartItem) => (
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
                        <Text color="dimmed" size="sm">
                          {item.productDescription}
                        </Text>
                        {/* <ActionIcon
                          variant="filled"
                          className={classes.float}
                          size={24}
                          onClick={() => {
                            handleDelete(item.id);
                          }}
                        >
                          <X size={16} />
                        </ActionIcon> */}
                        <Button
                          className={classes.float}
                          onClick={() => handleDelete(item.id)}
                        >
                          Remove
                        </Button>
                      </Group>
                    </Stack>
                  </Group>
                </div>
              ))}
            </ScrollArea>
            <Button
              onClick={() => alert("Submit Quotation Functionality Here")}
              className={classes.submitQuotationBtn}
              mt={10}
            >
              Submit Quotation
            </Button>
          </div>
        ) : (
          <Text>You have no items to be submitted for a quotation yet.</Text>
        )}
      </Drawer>
      <Affix position={{ bottom: 20, right: 20 }}>
        {cartItems.length > 0 ? (
          <Indicator size={12} offset={3} color="red">
            <ActionIcon
              className={classes.float}
              variant="filled"
              size={50}
              onClick={() => setDrawerOpened(true)}
            >
              <ShoppingCart size={25} />
            </ActionIcon>
          </Indicator>
        ) : (
          <ActionIcon
            className={classes.float}
            variant="filled"
            size={50}
            onClick={() => setDrawerOpened(true)}
          >
            <ShoppingCart size={25} />
          </ActionIcon>
        )}
      </Affix>
    </>
  );
};

export default FloatingCart;
