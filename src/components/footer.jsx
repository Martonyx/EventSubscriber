import { Container, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Container
      backgroundColor={"blue.900"}
      maxW={"1400px"}
      position={"fixed"}
      bottom={"0"}
      py={"3"}
      zIndex={1}
    >
      <Text color={"white"} align={"center"}>
        &copy; 2023 Martonyx.
      </Text>
    </Container>
  );
}
