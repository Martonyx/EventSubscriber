import {
  Box,
  Card,
  Container,
  Divider,
  SimpleGrid,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";

import { useState } from "react";
import { ethers } from "ethers";

import Instructions from "./instructions";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [contractAddress, setContractAddress] = useState("");
  const [logs, setLogs] = useState([]);

  const fetchLogs = async () => {
    setLoading(true);
    const provider = new ethers.providers.JsonRpcProvider(
      "https://dapps.shardeum.org"
    );

    const filter = {
      address: contractAddress,
    };

    const fetchedLogs = await provider.getLogs(filter);
    setLogs(fetchedLogs);
    setLoading(false);
  };

  const isempty = contractAddress === "";
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
          <Button onClick={fetchLogs} isDisabled={isempty}>
            Fetch Events
          </Button>
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
          ) : loading ? (
            <Text fontSize={"2xl"} fontWeight={"bold"} color={"blue.500"}>
              Loading...
            </Text>
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
