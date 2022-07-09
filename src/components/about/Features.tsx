import React from "react";
import {
  createStyles,
  Container,
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  useMantineTheme,
  Col,
} from "@mantine/core";
import { ReceiptOff, Flame, CircleDotted, FileCode } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.lg * 2}px ${theme.spacing.xl}px`,
  },

  title: {
    fontSize: 24,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.brand[6],
  },
}));

const features = [
  {
    icon: ReceiptOff,
    title: "Lorem Ipsum Dolor Sit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eius voluptatibus labore incidunt ",
  },
  {
    icon: FileCode,
    title: "Lorem Ipsum Dolor Sit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eius voluptatibus labore incidunt ",
  },
  {
    icon: CircleDotted,
    title: "Lorem Ipsum Dolor Sit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eius voluptatibus labore incidunt ",
  },
  {
    icon: Flame,
    title: "Lorem Ipsum Dolor Sit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eius voluptatibus labore incidunt ",
  },
];

export function FeaturesTitle() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{
          deg: 133,
          from: theme.colors.brand[5],
          to: theme.colors.brand[6],
        }}
      >
        <feature.icon size={26} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        {feature.title}
      </Text>
      <Text color="dimmed" size="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <Container className={classes.wrapper} size="md">
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title className={classes.title} order={2}>
            Get the Lorem Ipsum Now
          </Title>
          <Text color="dimmed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            voluptatem ipsam provident aperiam magnam dolor sed
          </Text>

          <Button
            variant="gradient"
            gradient={{
              deg: 133,
              from: theme.colors.brand[5],
              to: theme.colors.brand[6],
            }}
            size="lg"
            radius="md"
            mt="xl"
          >
            Drop Us a Line
          </Button>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid
            cols={2}
            spacing={30}
            breakpoints={[{ maxWidth: "md", cols: 1 }]}
          >
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </Container>
  );
}
