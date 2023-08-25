import { Container, Flex, Text, Link } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function HeaderPage() {
  return (
    <>
      <Container maxW={"1400px"} py={5} backgroundColor={"blue.900"}>
        <Flex
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Link href={"/"}>
            <Text fontSize={"3xl"} fontWeight={"bold"} color={"white"}>
              Smart Contract Event Subscriber
            </Text>
            <Text color={"white"}>
              A Smart contract Event listening application
            </Text>
          </Link>
          <Flex flexDirection={"row"} alignItems={"center"}>
            <ConnectWallet />
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
