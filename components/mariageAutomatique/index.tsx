function splitStringByTwo(input: string) {
  if (input.length !== 4) {
    throw new Error("Input string must be of length 4.");
  }

  // Split the string into two parts of length 2 each
  const part1 = input.substring(0, 2);
  const part2 = input.substring(2, 4);

  return `${part1}x${part2}`;
}

const mariageAutomatique = (boules: string[]) => {
  const data =
    boules.length == 1
      ? "[L] " + splitStringByTwo(boules[0]) + " \n"
      : boules.length == 2
      ? "[L] " +
        splitStringByTwo(boules[0]) +
        " \n" +
        "[L] " +
        splitStringByTwo(boules[1]) +
        " \n"
      : boules.length == 3
      ? "[L] " +
        splitStringByTwo(boules[0]) +
        " \n" +
        "[L] " +
        splitStringByTwo(boules[1]) +
        " \n" +
        splitStringByTwo(boules[2]) +
        " \n"
      : boules.length == 4
      ? "[L] " +
        splitStringByTwo(boules[0]) +
        " \n" +
        "[L] " +
        splitStringByTwo(boules[1]) +
        " \n" +
        splitStringByTwo(boules[2]) +
        " \n" +
        splitStringByTwo(boules[3]) +
        " \n"
      : boules.length == 5
      ? "[L] " +
        splitStringByTwo(boules[0]) +
        " \n" +
        "[L] " +
        splitStringByTwo(boules[1]) +
        " \n" +
        splitStringByTwo(boules[2]) +
        " \n" +
        splitStringByTwo(boules[3]) +
        " \n" +
        splitStringByTwo(boules[4]) +
        " \n"
      : "";
  return data;
};
