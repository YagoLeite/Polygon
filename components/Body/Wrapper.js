import React from "react";
import { useControlerContext } from "../../Context/Context";

const Wrapper = () => {
  const { state } = useControlerContext();
  console.log(state);
  return <div>Wrapper</div>;
};

export default Wrapper;
