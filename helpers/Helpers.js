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
