export const findingAngles = (number) => {
  const interiorAngle = (360 / number) * (Math.PI / 180);
  let arrayOfAngles = [];
  for (let i = 1; i <= number; i++) {
    arrayOfAngles.push(i * interiorAngle);
  }
  return arrayOfAngles;
};

export const arrayOfPositions = (array) => {
  return array.map((angle) => {
    return { x: Math.sin(angle) / 2, y: Math.cos(angle) / 2 };
  });
};

export const ArrayOfAngles = (angle) => {
  const transformedAngle = angle * (Math.PI / 180);
  let arr = [];
  return (num) => {
    for (let i = 1; i < num; i++) {
      arr.push(transformedAngle * i);
    }
    return arr;
  };
};

export const ArrayOfPositions = (array) => {
  return (num) => {
    return array.map((angle, index) => {
      return {
        x: (num * index * 0.3 * Math.sin(angle)) / 2,
        y: (num * index * 0.3 * Math.cos(angle)) / 2,
      };
    });
  };
};

export const topAndLeft = (array) => {
  return array.map((position) => {
    return {
      left: (0.5 - position.x) * 100,
      top: (0.5 - position.y) * 100,
    };
  });
};

export const colors = [
  "blue.100",
  "blue.200",
  "blue.300",
  "blue.400",
  "blue.500",
  "blue.600",
  "blue.700",
  "blue.800",
  "red.100",
  "red.200",
  "red.300",
  "red.400",
  "red.500",
  "red.600",
  "red.700",
  "red.800",
  "yellow.100",
  "yellow.200",
  "yellow.300",
  "yellow.400",
  "yellow.500",
  "yellow.600",
  "yellow.700",
  "yellow.800",
  "green.100",
  "green.200",
  "green.300",
  "green.400",
  "green.500",
  "green.600",
  "green.700",
  "green.800",
  "purple.100",
  "purple.200",
  "purple.300",
  "purple.400",
  "purple.500",
  "purple.600",
  "purple.700",
  "purple.800",
  "cyan.100",
  "cyan.200",
  "cyan.300",
  "cyan.400",
  "cyan.500",
  "cyan.600",
  "cyan.700",
  "cyan.800",
  "pink.100",
  "pink.200",
  "pink.300",
  "pink.400",
  "pink.500",
  "pink.600",
  "pink.700",
  "pink.800",
  "gray.100",
  "gray.200",
  "gray.300",
  "gray.400",
  "gray.500",
  "gray.600",
  "gray.700",
  "gray.800",
];
