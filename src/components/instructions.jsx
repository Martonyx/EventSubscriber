import { Card, Stack, Text } from "@chakra-ui/react";

export default function Instructions() {
  return (
    <Card p={"2"} mb={"10"}>
      <Text fontWeight={"bold"} color={"red.500"}>
        INSTRUCTIONS
      </Text>
      <Stack>
        <Text>
          {" "}
          => Paste the address of the contract in the input box provided
        </Text>
        <Text>
          {" "}
          => Afterwards click on fetch Events to get all the events subcribed in
          the contract
        </Text>
        <Text>
          {" "}
          => If there are Events on the contract, they will be displayed on the
          right handside of the browser
        </Text>
      </Stack>
    </Card>
  );
}
