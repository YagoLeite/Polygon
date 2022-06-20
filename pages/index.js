import { Box, useBreakpointValue } from "@chakra-ui/react";
import Wrapper from "../components/Body/Wrapper";
import Controler from "../components/Controler/Controler";
import Header from "../components/Header/Header";
import { useControlerContext } from "../context/ControlerContext";

export default function Home() {
  const breakPoint = useBreakpointValue({ sm: "lol" });
  console.log(breakPoint);
  return (
    <Box
      minH="100vh"
      h="calc(100% + 250px)"
      px={["16px"]}
      pt={["16px"]}
      bg="#1B2430"
      color="whiteAlpha.900"
      overflowX="hidden"
    >
      <Header />
      <Controler />
      <Wrapper />
    </Box>
  );
}
