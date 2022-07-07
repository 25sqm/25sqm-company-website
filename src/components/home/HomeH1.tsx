import {
  Col,
  Container,
  Grid,
  Image,
  createStyles,
  Title,
  Text,
  List,
  ThemeIcon,
  useMantineTheme,
  Button,
} from "@mantine/core";
import React from "react";
import { Check } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,
  },
}));

const HomeH1 = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <div className={classes.root}>
      <Container size="md">
        <Grid align="center" gutter={50}>
          <Grid.Col span={12} md={6}>
            <Image
              radius="md"
              height={450}
              width={"100%"}
              src={
                "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              fit="cover"
              alt="h1 picture"
              //   withPlaceholder
            />
          </Grid.Col>

          <Grid.Col span={12} md={6}>
            <Title order={1}>
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
                Ipsum
              </Text>{" "}
              Dolor
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <Check size={12} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Lorem</b> – Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Pariatur error sequi mollitia necessitatibus
                asperiores aliquid cum culpa
              </List.Item>
              <List.Item>
                <b>Ipsum</b> – Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Velit esse rerum sed. Reprehenderit quo
                suscipit doloribus similique
              </List.Item>
              <List.Item>
                <b>Dolor</b> – Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Nemo non excepturi commodi aspernatur
                molestiae explicabo?
              </List.Item>
            </List>
            <Button
              variant="outline"
              color={theme.colors.brand[4]}
              size="sm"
              mt={20}
            >
              Contact Us
            </Button>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default HomeH1;
