import {
  Anchor,
  Container,
  Image,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { NavLink } from "react-router-dom";
import image from "../../assets/images/404.png";
import classes from "./NotFound.module.css";

export default function NotFound() {
  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <Image src={image} className={classes.mobileImage} />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text c="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Anchor
            component={NavLink}
            to="/"
            variant="outline"
            size="md"
            mt="xl"
            fw={500}
            display="inline-block"
            underline="never"
            className={classes.control}
          >
            Get back to home page
          </Anchor>
        </div>
      </SimpleGrid>
    </Container>
  );
}
