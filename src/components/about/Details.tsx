import React from "react";
import {
  createStyles,
  Title,
  useMantineTheme,
  Text,
  Container,
  Image,
  Grid,
  Button,
  ThemeIcon,
  List,
} from "@mantine/core";
import image from "./resources/about.svg";
import { CircleCheck } from "tabler-icons-react";
const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
  },
  image: {
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  wrapper: {
    padding: `${theme.spacing.xs}px ${theme.spacing.xl}px`,
  },
  content: {
    // maxWidth: 505,
    // marginLeft: theme.spacing.xl * 2,
  },
  title: {
    fontSize: 44,
    lineHeight: 1.2,

    color: theme.colorScheme === "dark" ? theme.white : theme.colors.brand[6],
    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },
}));

const Details = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <Container size="md" className={classes.wrapper}>
      <Grid justify="center" align="center" gutter={80}>
        <Grid.Col span={12} md={5}>
          <div>
            <Image
              className={classes.image}
              // width={350}
              // height={350}
              fit="contain"
              src={image.src}
              withPlaceholder={image.src}
              alt="Our services at 25sqm"
            />
          </div>
        </Grid.Col>
        <Grid.Col span={12} md={7}>
          <div className={classes.content}>
            <Title className={classes.title}>Lorem Ipsum</Title>
            <Text color="dimmed" mt={15}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              sed ut dolore tempore quia error
            </Text>
            <List
              mt={15}
              icon={
                <ThemeIcon color={theme.colors.brand[7]} size={24} radius="xl">
                  <CircleCheck />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text color="dimmed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </List.Item>
              <List.Item>
                <Text color="dimmed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </List.Item>
              <List.Item>
                <Text color="dimmed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </List.Item>
            </List>
            <Button variant="outline" mt={20}>
              Get Started
            </Button>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Details;
