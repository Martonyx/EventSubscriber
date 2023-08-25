import { Container, Text, Link } from "@chakra-ui/react";

export default function WelcomePage() {
  return (
    <Container maxW={"1400px"}>
      <Text
        fontSize={"2xl"}
        fontWeight={"bold"}
        color={"blue.500"}
        marginTop={10}
        align={"center"}
      >
        Please connect your wallet to interact with the Event Contract
        Subscriber
      </Text>
      <Text
        fontSize={"2xl"}
        fontWeight={"bold"}
        color={"blue.500"}
        marginTop={10}
        align={"center"}
      >
        if you need the faucet, Checkout their discord through the link below
      </Text>

      <Link href={"https://discord.gg/shardeum"}>
        <Text
          color={"red.500"}
          marginTop={10}
          align={"center"}
          fontSize={"2xl"}
          fontWeight={"bold"}
        >
          {" "}
          @ shardeum
        </Text>
      </Link>
    </Container>
  );
}
