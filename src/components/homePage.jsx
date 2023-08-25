import {
  Box,
  Card,
  Container,
  Divider,
  SimpleGrid,
  Text,
  Input,
} from "@chakra-ui/react";
import { Web3Button } from "@thirdweb-dev/react";
import { useState } from "react";
import { ethers } from "ethers";

import Instructions from "./instructions";

export default function HomePage() {
  const [contractAddress, setContractAddress] = useState("");
  const [logs, setLogs] = useState([]);

  const fetchLogs = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://dapps.shardeum.org"
    );

    const filter = {
      address: contractAddress,
    };

    const fetchedLogs = await provider.getLogs(filter);
    setLogs(fetchedLogs);
    console.log(logs);
  };

  return (
    <Container maxW={"1400px"} py={8}>
      <Instructions />
      <SimpleGrid columns={2} spacing={8} minH={"60vh"}>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"} color={"blue.500"}>
            Smart contract Event Subscriber
          </Text>
          <Input
            value={contractAddress}
            onChange={(e) => {
              setContractAddress(e.target.value);
            }}
            placeholder="Contracts Address"
          ></Input>
          <Divider my={"5"} />
          <Web3Button
            contractAddress={contractAddress}
            action={() => {
              fetchLogs();
            }}
          >
            Fetch Events
          </Web3Button>
        </Box>
        <Container>
          {logs.length > 0 ? (
            logs.map((log, index) => (
              <Card key={index} my={"2"} p={"2"}>
                <Text>Address: {log.address}</Text>
                <Text>Block Number: {log.blockNumber}</Text>
                <Text>Block Hash: {log.blockHash}</Text>
                <Text>Value: {log.transactionIndex} wei</Text>
                <Text>Data: {log.data}</Text>
                <Text>TransactionHash: {log.transactionHash}</Text>
              </Card>
            ))
          ) : (
            <Text fontSize={"2xl"} fontWeight={"bold"} color={"blue.500"}>
              No Events to display
            </Text>
          )}
        </Container>
      </SimpleGrid>
    </Container>
  );
}
