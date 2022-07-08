import {
  Center,
  Container,
  createStyles,
  Title,
  Text,
  Stack,
  Card,
  useMantineTheme,
} from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 2,
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // sbackgroundImage: `linear-gradient(180deg, ${theme.colors.brand[7]}80 0%, rgba(255, 255, 255, 1) 90%), url("https://images.unsplash.com/photo-1568386453619-84c3ff4b43c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80")`,
    backgroundSize: "cover",
    height: 240,
  },
  title: {
    fontSize: 55,
  },
}));

const MastHead = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <div>
      <Container className={classes.root}>
        <Card className={classes.card}>
          <Center>
            <Stack justify="flex-end" align="center">
              <Title className={classes.title}>
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{
                    from: theme.colors.brand[5],
                    to: theme.colors.brand[6],
                  }}
                >
                  Lorem Ipsum Dolor{" "}
                </Text>
              </Title>
              <Text color="dimmed" size="md">
                Lorem ipsum dolor sit amet.
              </Text>
            </Stack>
          </Center>
        </Card>
      </Container>
    </div>
  );
};

export default MastHead;
