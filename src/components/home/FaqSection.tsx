import React from "react";
import {
  createStyles,
  Image,
  Accordion,
  Grid,
  Col,
  Container,
  Title,
} from "@mantine/core";
import faq from "./resources/images/faq.svg";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,
  },

  title: {
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  item: {
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
  },
}));

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.";

export function FaqWithImage() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container size="md">
        <Grid align="center" id="faq-grid" gutter={50}>
          <Col span={12} md={6}>
            <Image
              width={400}
              height={400}
              fit="contain"
              src={faq.src}
              withPlaceholder={faq.src === "" || null || undefined}
              alt="Frequently Asked Questions"
            />
          </Col>
          <Col span={12} md={6}>
            <Title order={2} align="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion iconPosition="right" initialItem={0}>
              <Accordion.Item
                label="Lorem ipsum dolor?"
                className={classes.item}
              >
                {placeholder}
              </Accordion.Item>
              <Accordion.Item
                label="Lorem ipsum dolor?"
                className={classes.item}
              >
                {placeholder}
              </Accordion.Item>
              <Accordion.Item
                label="Lorem ipsum dolor?"
                className={classes.item}
              >
                {placeholder}
              </Accordion.Item>
              <Accordion.Item
                label="Lorem ipsum dolor?"
                className={classes.item}
              >
                {placeholder}
              </Accordion.Item>
              <Accordion.Item
                label="Lorem ipsum dolor?"
                className={classes.item}
              >
                {placeholder}
              </Accordion.Item>
            </Accordion>
          </Col>
        </Grid>
      </Container>
    </div>
  );
}
