import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { useControlerContext } from "../../context/ControlerContext";
import SpinningIcon from "./SpinningIcon";
import {
  findingAngles,
  arrayOfPositions,
  topAndLeft,
  ArrayOfAngles,
  ArrayOfPositions,
} from "../../helpers/Helpers";
import Code from "./Code";

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.015 },
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
  // const positionArray = topAndLeft(
  //   arrayOfPositions(findingAngles(state.sides || 0))
  // );

  const positionArray = topAndLeft(
    ArrayOfPositions(ArrayOfAngles(222.5)(555))(0.01)
  );
  return (
    <Flex
      fontSize="24px"
      mt="150px"
      h={state.divSize * 2}
      w="100%"
      justify="center"
    >
      <Box
        overflow="hidden"
        h={state.divSize}
        w={state.divSize}
        borderRadius="50%"
      >
        <Box
          as={motion.div}
          key={Math.random()}
          // bgGradient="radial(#6dd5ed,#181d1e)"
          animate={
            state.bigDivRotationAnim
              ? {
                  rotate: 360,
                  transition: {
                    duration: 17,
                    ease: "linear",
                    repeat: Infinity,
                  },
                }
              : {}
          }
          h={state.divSize}
          w={state.divSize}
          position="relative"
          borderRadius="50%"
          whileHover={{ scale: 4.1 }}
          overflow="hidden"
        >
          <Box
            as={motion.div}
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {positionArray.map((position, index) => {
              return (
                <Box
                  key={Math.random()}
                  as={motion.div}
                  variants={state.fadeInAnim ? fading : ""}
                  // whileHover={{ scale: 1.1 }}
                >
                  <SpinningIcon
                    color={Math.floor(Math.random() * 64)}
                    config={{
                      top: `calc(${position.top}% - ${state.verticeDiv / 2}px)`,
                      left: `calc(${position.left}% - ${
                        state.verticeDiv / 2
                      }px)`,
                    }}
                    key={index}
                  >
                    {/* {index} */}
                  </SpinningIcon>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Wrapper;

{
  /* <Code positions={positionArray} /> */
}
