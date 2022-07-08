import {
  Card,
  Container,
  Grid,
  createStyles,
  Overlay,
  useMantineTheme,
  Title,
  Text,
  Button,
  Group,
} from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  container: {
    paddingTop: theme.spacing.xs,
    paddingBottom: theme.spacing.xl * 2,
  },
  cardColoredBg: {
    backgroundColor: theme.colors.brand[7],
    height: 240,
  },
  card: {
    backgroundImage:
      'url("https://images.unsplash.com/photo-1568386453619-84c3ff4b43c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80")',
    backgroundSize: "cover",
    height: 240,
  },
  content: {
    position: "absolute",
    padding: theme.spacing.xl,
    zIndex: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  title: {
    color: theme.white,
  },
  description: {
    color: theme.white,
    maxWidth: 340,
  },

  cta: {
    position: "absolute",
    bottom: theme.spacing.xl,
    right: theme.spacing.xl,
  },
}));

const FeaturedSection = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <Container className={classes.container} size="md">
      <Grid>
        <Grid.Col xs={8}>
          <Card radius="md" className={classes.card}>
            <Overlay
              gradient={`linear-gradient(105deg, ${theme.black} 20%, #312f2f 50%, ${theme.colors.gray[4]} 100%)`}
              opacity={0.55}
              zIndex={0}
            />
            <div className={classes.content}>
              <Title className={classes.title} order={2}>
                Lorem Ipsum Products!
              </Title>
              <Text className={classes.description}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam excepturi nihil provident corporis, fuga
              </Text>
              <Button className={classes.cta} variant="white" component="a">
                See Our Products
              </Button>
            </div>
          </Card>
        </Grid.Col>
        <Grid.Col xs={4}>
          <Card radius="md" className={classes.cardColoredBg}>
            <Group position="apart" mb="xs">
              <Title order={3} className={classes.title}>
                Lorem Training
              </Title>
            </Group>
            <Text className={classes.description} size="xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              maxime pariatur exercitationem modi distinctio facere porro
              voluptates quisquam unde sed quam vitae id, eligendi sunt
              veritatis ipsam nobis sint commodi?
            </Text>
            <Group position="right" mt="xs">
              <Button className={classes.cta} variant="white" size="sm">
                Training Portal
              </Button>
            </Group>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default FeaturedSection;
