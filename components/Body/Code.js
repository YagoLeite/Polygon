import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useControlerContext } from "../../context/ControlerContext";

const Code = ({ positions }) => {
  const { state } = useControlerContext();
  return (
    <Flex>
      <Text>
        .parent
        {`{
          position: 'relative'
      }`}
      </Text>
      {positions.map((position, index) => {
        return (
          <Text key={index}>
            child{index}.
            {`
              {
                  position: 'absolute';
                  top: ${`calc(${position.top}% - ${Math.round(
                    state.verticeDiv / 2
                  )}px)`};
                  left: ${`calc(${position.left}% - ${Math.round(
                    state.verticeDiv / 2
                  )}px)`};
              }
              `}
          </Text>
        );
      })}
    </Flex>
  );
};

export default Code;
