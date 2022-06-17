import { Flex } from "@chakra-ui/react";
import React from "react";
import { useControlerContext } from "../../Context/Context";

const findingAngles = (number) => {
  const interiorAngle = (360 / number) * (Math.PI / 180);
  let arrayOfAngles = [];
  for (let i = 1; i <= number; i++) {
    arrayOfAngles.push(i * interiorAngle);
  }
  return arrayOfAngles;
};
const arrayOfPositions = (array) => {
  return array.map((angle) => {
    return { x: Math.sin(angle) / 2, y: Math.cos(angle) / 2 };
  });
};
const topAndLeft = (array) => {
  return array.map((position) => {
    return {
      left: (0.5 - position.x) * 100,
      top: (0.5 - position.y) * 100,
    };
  });
};

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
