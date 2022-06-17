import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { useControlerContext } from "../../context/ControlerContext";
import SpinningIcon from "./SpinningIcon";
import {
  findingAngles,
  arrayOfPositions,
  topAndLeft,
} from "../../helpers/Helpers";

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.35 },
  },
};

const fading = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Wrapper = () => {
  const { state } = useControlerContext();
  console.log(state);
  const testando = topAndLeft(
    arrayOfPositions(findingAngles(state.sides || 0))
  );
  return (
    <Flex w="100%" minH="100vh" bg="green" justify="center" alignItems="center">
      <Flex h={state.divSize} w={state.divSize} position="relative" bg="red">
        <Flex fontSize="24px" w="100%" justify="center" alignItems="center">
          <Box
            as={motion.div}
            key={Math.random()}
            animate={{
              rotate: 360,
              transition: {
                duration: 17,
                ease: "linear",
                repeat: Infinity,
              },
            }}
            h={state.divSize}
            w={state.divSize}
            position="relative"
            // borderRadius="50%"
            // border="1px"
            // borderColor="white"
          >
            <Box
              as={motion.div}
              variants={container}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {testando.map((position, index) => {
                return (
                  <Box key={Math.random()} as={motion.div} variants={fading}>
                    <SpinningIcon
                      config={{
                        top: `calc(${position.top}% - 25px)`,
                        left: `calc(${position.left}% - 25px)`,
                      }}
                      key={index}
                    >
                      {index}
                    </SpinningIcon>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Wrapper;
