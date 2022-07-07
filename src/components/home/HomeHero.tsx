import React, { useRef, useContext } from "react";
import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  useMantineTheme,
} from "@mantine/core";
import { ScrollContext } from "../../utils/ScrollObserver";

const useStyles = createStyles((theme) => ({
  root: {
    // backgroundColor: theme.colors.brand[8],
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, ${theme.colors.brand[7]} 90%), url(https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)`,
    paddingTop: theme.spacing.xl * 10,
    paddingBottom: theme.spacing.md,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    marginRight: theme.spacing.xl * 3,
    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 48,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 500,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  control: {
    fontSize: 18,

    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
}));

export function HomeHero() {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);
  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <div
      ref={refContainer}
      style={{
        backgroundPositionY: `${progress * 80}vh`,
        backgroundRepeat: "no-repeat",
      }}
      className={classes.root}
    >
      <Container size="md">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Lorem{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{
                  from: theme.colors.brand[4],
                  to: theme.colors.brand[6],
                }}
              >
                Ipsum Dolor
              </Text>{" "}
              Amet Consectetur
            </Title>

            <Text className={classes.description} mt={30}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              nesciunt minus illo et cumque iure quam soluta eveniet, distinctio
              voluptates accusantium error, libero sit possimus maiores sed
              provident expedita! Cumque.
            </Text>

            <Button
              variant="gradient"
              gradient={{
                from: theme.colors.brand[4],
                to: theme.colors.brand[6],
              }}
              size="lg"
              className={classes.control}
              mt={40}
            >
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
