import {
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useControlerContext } from "../../Context/Context";

const Controler = () => {
  const { state, dispatch } = useControlerContext();
  return (
    <Flex justify="space-around" h="150px">
      <Flex>
        <Text>Number of sides</Text>
        <Input
          type="number"
          onChange={(e) =>
            dispatch({ type: "SIDES-UPDATE", value: +e.target.value })
          }
          placeholder={state.sides}
        />
      </Flex>
      <Flex>
        <Text>Size of your div</Text>
        <Input
          type="number"
          onChange={(e) =>
            dispatch({ type: "DIV-UPDATE", value: +e.target.value })
          }
          placeholder={state.divSize}
        />
      </Flex>
    </Flex>
  );
};

export default Controler;
