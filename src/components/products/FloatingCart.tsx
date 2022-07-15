import React from "react";
import {
  ActionIcon,
  createStyles,
  useMantineTheme,
  Affix,
  Indicator,
} from "@mantine/core";
import { ShoppingCart } from "tabler-icons-react";
const useStyles = createStyles((theme) => ({
  float: {
    backgroundColor: theme.colors.brand[6],
    "&:hover": {
      backgroundColor: theme.colors.brand[7],
      transition: "all 0.2s ease-in-out",
    },
  },
}));
const FloatingCart = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const mockCartContent = 2;
  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Indicator size={12} offset={3} color="red">
        <ActionIcon className={classes.float} variant="filled" size={50}>
          <ShoppingCart size={25} />
        </ActionIcon>
      </Indicator>
    </Affix>
  );
};

export default FloatingCart;
