import { Flex, Input, Text, Checkbox, Box, Tooltip } from "@chakra-ui/react";
import React from "react";
import { useControlerContext } from "../../context/ControlerContext";
import { HiOutlineInformationCircle } from "react-icons/hi";

const Controler = () => {
  const { state, dispatch } = useControlerContext();
  return (
    <Flex
      direction={["column", "row"]}
      w="100%"
      justify={["center", "space-around"]}
      gap={["8px"]}
      align="center"
    >
      <Flex
        borderColor="#08fdd8"
        borderWidth="1px"
        borderRadius="5px"
        p="8px"
        direction="column"
        gap="20px"
        w={["full", "250px"]}
      >
        <Flex w="100%" direction="column">
          <Flex w="100%" alignItems="center" justify="space-between">
            <Text w="100%">Number of smaller circles</Text>
            <Tooltip
              label="Number of circles that will be on the center circle"
              placement="bottom-end"
            >
              <span>
                <HiOutlineInformationCircle />
              </span>
            </Tooltip>
          </Flex>
          <Input
            variant="flushed"
            type="number"
            onChange={(e) =>
              dispatch({ type: "SIDES-UPDATE", value: +e.target.value })
            }
            placeholder={state.sides}
          />
        </Flex>
        <Flex w="100%" alignItems="center" justify="space-between">
          <Checkbox
            fontSize={["12px"]}
            isChecked={state.smallDivRotationAnim}
            onChange={(e) =>
              dispatch({
                type: "SMALLDIVANIM-UPDATE",
                value: e.target.checked,
              })
            }
          >
            Smaller circle animation
          </Checkbox>
          <Tooltip
            label="Smaller circles will rotate anticlockwise"
            placement="bottom-end"
          >
            <span>
              <HiOutlineInformationCircle />
            </span>
          </Tooltip>
        </Flex>
      </Flex>
      <Flex
        borderColor="#08fdd8"
        borderWidth="1px"
        borderRadius="5px"
        p="8px"
        direction="column"
        gap="20px"
        w={["full", "250px"]}
        // border="outlined"
      >
        <Flex w="100%" direction="column">
          <Flex w="100%" alignItems="center" justify="space-between">
            <Text>Size of center circle</Text>
            <Tooltip
              label="Value in pixels for the diameter of the center circle"
              placement="bottom-end"
            >
              <span>
                <HiOutlineInformationCircle />
              </span>
            </Tooltip>
          </Flex>
          <Input
            variant="flushed"
            type="number"
            onChange={(e) =>
              dispatch({ type: "DIV-UPDATE", value: +e.target.value })
            }
            placeholder={state.divSize}
          />
        </Flex>
        <Flex justify="space-between" alignItems="center">
          <Checkbox
            isChecked={state.bigDivRotationAnim}
            onChange={(e) =>
              dispatch({ type: "BIGDIVANIM-UPDATE", value: e.target.checked })
            }
          >
            Center circle animation
          </Checkbox>
          <Tooltip
            label="Center circle will rotate clockwise"
            placement="bottom-end"
          >
            <span>
              <HiOutlineInformationCircle />
            </span>
          </Tooltip>
        </Flex>
      </Flex>
      <Flex
        borderColor="#08fdd8"
        borderWidth="1px"
        borderRadius="5px"
        p="8px"
        direction="column"
        gap="20px"
        w={["full", "250px"]}
      >
        <Flex direction="column" w="100%">
          <Flex alignItems="center" justify="space-between">
            <Text>Size of smaller circles</Text>
            <Tooltip
              label="Size of the circles that are on the center circle. It bugs in some cases. I'm working on it"
              placement="bottom-end"
            >
              <span>
                <HiOutlineInformationCircle />
              </span>
            </Tooltip>
          </Flex>
          <Input
            variant="flushed"
            type="number"
            onChange={(e) =>
              dispatch({ type: "VERTICEDIV-UPDATE", value: +e.target.value })
            }
            placeholder={state.verticeDiv}
          />
        </Flex>
        <Flex align="center" justify="space-between">
          <Checkbox
            isChecked={state.fadeInAnim}
            onChange={(e) =>
              dispatch({ type: "FADEIN-UPDATE", value: e.target.checked })
            }
          >
            Fade-in animation
          </Checkbox>
          <Tooltip
            label="Circles on center circle will spawn with a certain delay"
            placement="bottom-end"
          >
            <span>
              <HiOutlineInformationCircle />
            </span>
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Controler;
