import { Flex } from "@chakra-ui/react";
import React from "react";
import { useControlerContext } from "../../Context/Context";

const Wrapper = () => {
  const { state } = useControlerContext();
  console.log(state);
  return (
    <Flex w="100%" minH="100vh" bg="green" justify="center" alignItems="center">
      <Flex h={state.divSize} w={state.divSize} bg="red"></Flex>
    </Flex>
  );
};

export default Wrapper;
