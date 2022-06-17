import { Flex, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import React from "react";
import { useControlerContext } from "../../Context/Context";

const Controler = () => {
  const { state, dispatch } = useControlerContext();
  return (
    <Flex justify="space-around" h="150px" bg="red">
      <Flex>
        <InputGroup>
          <InputLeftAddon children="Number of Sides" />
          <Input
            type="number"
            onChange={(e) =>
              dispatch({ type: "SIDES-UPDATE", value: +e.target.value })
            }
            placeholder={state.sides}
          />
        </InputGroup>
      </Flex>
      <Flex>
        <InputGroup>
          <InputLeftAddon children="Size of your div" />
          <Input
            type="number"
            onChange={(e) =>
              dispatch({ type: "DIV-UPDATE", value: +e.target.value })
            }
            placeholder={state.divSize}
          />
        </InputGroup>
      </Flex>
    </Flex>
  );
};

export default Controler;
