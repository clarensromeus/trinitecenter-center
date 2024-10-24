interface IBorlette {
  numero: string;
  montant: string;
  option: string;
  borlette: string;
}

const printData = (printInfo: IBorlette[]) => {
  const data =
    printInfo.length == 1
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n"
      : printInfo.length == 2
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n"
      : printInfo.length == 3
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n"
      : printData.length == 4
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n"
      : printInfo.length == 5
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n"
      : printInfo.length == 6
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n"
      : printInfo.length == 7
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n"
      : printInfo.length == 8
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n"
      : printInfo.length == 9
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n"
      : printInfo.length === 10
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n"
      : printInfo.length == 11
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n"
      : printInfo.length == 12
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n"
      : printInfo.length == 13
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n"
      : printInfo.length == 14
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n"
      : printInfo.length == 15
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n"
      : printInfo.length == 16
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n"
      : printInfo.length == 17
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n"
      : printInfo.length == 18
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n"
      : printInfo.length == 19
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n"
      : printInfo.length == 20
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n"
      : printInfo.length == 21
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n"
      : printInfo.length == 22
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n"
      : printInfo.length == 23
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n"
      : printInfo.length == 24
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n"
      : printInfo.length == 25
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n"
      : printInfo.length == 26
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n"
      : printInfo.length == 27
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n"
      : printInfo.length == 26
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n"
      : printInfo.length == 28
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n"
      : printInfo.length == 29
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n"
      : printInfo.length == 30
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n"
      : printInfo.length == 31
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n"
      : printInfo.length == 32
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n"
      : printInfo.length == 33
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n"
      : printInfo.length == 34
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n"
      : printInfo.length == 35
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n"
      : printInfo.length == 36
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n"
      : printInfo.length == 37
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n"
      : printInfo.length == 38
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n" +
        "[L] " +
        printInfo[37].borlette.padEnd(
          printInfo[37].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[37].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[37].numero.padEnd(6) +
        "  " +
        printInfo[37].option.charAt(0) +
        "     " +
        printInfo[37].montant +
        "\n"
      : printInfo.length == 39
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n"
      : printInfo.length == 36
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n"
      : printInfo.length == 37
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n"
      : printInfo.length == 38
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n" +
        "[L] " +
        printInfo[37].borlette.padEnd(
          printInfo[37].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[37].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[37].numero.padEnd(6) +
        "  " +
        printInfo[37].option.charAt(0) +
        "     " +
        printInfo[37].montant +
        "\n" +
        "[L] " +
        printInfo[38].borlette.padEnd(
          printInfo[38].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[38].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[38].numero.padEnd(6) +
        "  " +
        printInfo[38].option.charAt(0) +
        "     " +
        printInfo[38].montant +
        "\n"
      : printInfo.length == 40
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n" +
        "[L] " +
        printInfo[37].borlette.padEnd(
          printInfo[37].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[37].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[37].numero.padEnd(6) +
        "  " +
        printInfo[37].option.charAt(0) +
        "     " +
        printInfo[37].montant +
        "\n" +
        "[L] " +
        printInfo[38].borlette.padEnd(
          printInfo[38].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[38].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[38].numero.padEnd(6) +
        "  " +
        printInfo[38].option.charAt(0) +
        "     " +
        printInfo[38].montant +
        "\n" +
        "[L] " +
        printInfo[39].borlette.padEnd(
          printInfo[39].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[39].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[39].numero.padEnd(6) +
        "  " +
        printInfo[39].option.charAt(0) +
        "     " +
        printInfo[39].montant +
        "\n"
      : printInfo.length == 41
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n" +
        "[L] " +
        printInfo[37].borlette.padEnd(
          printInfo[37].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[37].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[37].numero.padEnd(6) +
        "  " +
        printInfo[37].option.charAt(0) +
        "     " +
        printInfo[37].montant +
        "\n" +
        "[L] " +
        printInfo[38].borlette.padEnd(
          printInfo[38].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[38].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[38].numero.padEnd(6) +
        "  " +
        printInfo[38].option.charAt(0) +
        "     " +
        printInfo[38].montant +
        "\n" +
        "[L] " +
        printInfo[39].borlette.padEnd(
          printInfo[39].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[39].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[39].numero.padEnd(6) +
        "  " +
        printInfo[39].option.charAt(0) +
        "     " +
        printInfo[39].montant +
        "\n" +
        "[L] " +
        printInfo[40].borlette.padEnd(
          printInfo[40].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[40].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[40].numero.padEnd(6) +
        "  " +
        printInfo[40].option.charAt(0) +
        "     " +
        printInfo[40].montant +
        "\n"
      : printInfo.length == 42
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n" +
        "[L] " +
        printInfo[37].borlette.padEnd(
          printInfo[37].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[37].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[37].numero.padEnd(6) +
        "  " +
        printInfo[37].option.charAt(0) +
        "     " +
        printInfo[37].montant +
        "\n" +
        "[L] " +
        printInfo[38].borlette.padEnd(
          printInfo[38].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[38].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[38].numero.padEnd(6) +
        "  " +
        printInfo[38].option.charAt(0) +
        "     " +
        printInfo[38].montant +
        "\n" +
        "[L] " +
        printInfo[39].borlette.padEnd(
          printInfo[39].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[39].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[39].numero.padEnd(6) +
        "  " +
        printInfo[39].option.charAt(0) +
        "     " +
        printInfo[39].montant +
        "\n" +
        "[L] " +
        printInfo[40].borlette.padEnd(
          printInfo[40].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[40].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[40].numero.padEnd(6) +
        "  " +
        printInfo[40].option.charAt(0) +
        "     " +
        printInfo[40].montant +
        "\n" +
        "[L] " +
        printInfo[41].borlette.padEnd(
          printInfo[41].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[41].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[41].numero.padEnd(6) +
        "  " +
        printInfo[41].option.charAt(0) +
        "     " +
        printInfo[41].montant +
        "\n"
      : printInfo.length == 43
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n" +
        "[L] " +
        printInfo[37].borlette.padEnd(
          printInfo[37].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[37].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[37].numero.padEnd(6) +
        "  " +
        printInfo[37].option.charAt(0) +
        "     " +
        printInfo[37].montant +
        "\n" +
        "[L] " +
        printInfo[38].borlette.padEnd(
          printInfo[38].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[38].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[38].numero.padEnd(6) +
        "  " +
        printInfo[38].option.charAt(0) +
        "     " +
        printInfo[38].montant +
        "\n" +
        "[L] " +
        printInfo[39].borlette.padEnd(
          printInfo[39].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[39].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[39].numero.padEnd(6) +
        "  " +
        printInfo[39].option.charAt(0) +
        "     " +
        printInfo[39].montant +
        "\n" +
        "[L] " +
        printInfo[40].borlette.padEnd(
          printInfo[40].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[40].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[40].numero.padEnd(6) +
        "  " +
        printInfo[40].option.charAt(0) +
        "     " +
        printInfo[40].montant +
        "\n" +
        "[L] " +
        printInfo[41].borlette.padEnd(
          printInfo[41].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[41].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[41].numero.padEnd(6) +
        "  " +
        printInfo[41].option.charAt(0) +
        "     " +
        printInfo[41].montant +
        "\n" +
        "[L] " +
        printInfo[42].borlette.padEnd(
          printInfo[42].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[42].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[42].numero.padEnd(6) +
        "  " +
        printInfo[42].option.charAt(0) +
        "     " +
        printInfo[42].montant +
        "\n"
      : printInfo.length == 44
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n" +
        "[L] " +
        printInfo[37].borlette.padEnd(
          printInfo[37].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[37].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[37].numero.padEnd(6) +
        "  " +
        printInfo[37].option.charAt(0) +
        "     " +
        printInfo[37].montant +
        "\n" +
        "[L] " +
        printInfo[38].borlette.padEnd(
          printInfo[38].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[38].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[38].numero.padEnd(6) +
        "  " +
        printInfo[38].option.charAt(0) +
        "     " +
        printInfo[38].montant +
        "\n" +
        "[L] " +
        printInfo[39].borlette.padEnd(
          printInfo[39].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[39].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[39].numero.padEnd(6) +
        "  " +
        printInfo[39].option.charAt(0) +
        "     " +
        printInfo[39].montant +
        "\n" +
        "[L] " +
        printInfo[40].borlette.padEnd(
          printInfo[40].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[40].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[40].numero.padEnd(6) +
        "  " +
        printInfo[40].option.charAt(0) +
        "     " +
        printInfo[40].montant +
        "\n" +
        "[L] " +
        printInfo[41].borlette.padEnd(
          printInfo[41].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[41].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[41].numero.padEnd(6) +
        "  " +
        printInfo[41].option.charAt(0) +
        "     " +
        printInfo[41].montant +
        "\n" +
        "[L] " +
        printInfo[42].borlette.padEnd(
          printInfo[42].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[42].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[42].numero.padEnd(6) +
        "  " +
        printInfo[42].option.charAt(0) +
        "     " +
        printInfo[42].montant +
        "\n" +
        "[L] " +
        printInfo[43].borlette.padEnd(
          printInfo[43].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[43].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[43].numero.padEnd(6) +
        "  " +
        printInfo[43].option.charAt(0) +
        "     " +
        printInfo[43].montant +
        "\n"
      : printInfo.length == 45
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n" +
        "[L] " +
        printInfo[37].borlette.padEnd(
          printInfo[37].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[37].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[37].numero.padEnd(6) +
        "  " +
        printInfo[37].option.charAt(0) +
        "     " +
        printInfo[37].montant +
        "\n" +
        "[L] " +
        printInfo[38].borlette.padEnd(
          printInfo[38].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[38].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[38].numero.padEnd(6) +
        "  " +
        printInfo[38].option.charAt(0) +
        "     " +
        printInfo[38].montant +
        "\n" +
        "[L] " +
        printInfo[39].borlette.padEnd(
          printInfo[39].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[39].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[39].numero.padEnd(6) +
        "  " +
        printInfo[39].option.charAt(0) +
        "     " +
        printInfo[39].montant +
        "\n" +
        "[L] " +
        printInfo[40].borlette.padEnd(
          printInfo[40].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[40].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[40].numero.padEnd(6) +
        "  " +
        printInfo[40].option.charAt(0) +
        "     " +
        printInfo[40].montant +
        "\n" +
        "[L] " +
        printInfo[41].borlette.padEnd(
          printInfo[41].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[41].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[41].numero.padEnd(6) +
        "  " +
        printInfo[41].option.charAt(0) +
        "     " +
        printInfo[41].montant +
        "\n" +
        "[L] " +
        printInfo[42].borlette.padEnd(
          printInfo[42].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[42].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[42].numero.padEnd(6) +
        "  " +
        printInfo[42].option.charAt(0) +
        "     " +
        printInfo[42].montant +
        "\n" +
        "[L] " +
        printInfo[43].borlette.padEnd(
          printInfo[43].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[43].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[43].numero.padEnd(6) +
        "  " +
        printInfo[43].option.charAt(0) +
        "     " +
        printInfo[43].montant +
        "\n" +
        "[L] " +
        printInfo[44].borlette.padEnd(
          printInfo[44].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[44].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[44].numero.padEnd(6) +
        "  " +
        printInfo[44].option.charAt(0) +
        "     " +
        printInfo[44].montant +
        "\n"
      : printInfo.length == 46
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n" +
        "[L] " +
        printInfo[37].borlette.padEnd(
          printInfo[37].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[37].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[37].numero.padEnd(6) +
        "  " +
        printInfo[37].option.charAt(0) +
        "     " +
        printInfo[37].montant +
        "\n" +
        "[L] " +
        printInfo[38].borlette.padEnd(
          printInfo[38].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[38].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[38].numero.padEnd(6) +
        "  " +
        printInfo[38].option.charAt(0) +
        "     " +
        printInfo[38].montant +
        "\n" +
        "[L] " +
        printInfo[39].borlette.padEnd(
          printInfo[39].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[39].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[39].numero.padEnd(6) +
        "  " +
        printInfo[39].option.charAt(0) +
        "     " +
        printInfo[39].montant +
        "\n" +
        "[L] " +
        printInfo[40].borlette.padEnd(
          printInfo[40].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[40].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[40].numero.padEnd(6) +
        "  " +
        printInfo[40].option.charAt(0) +
        "     " +
        printInfo[40].montant +
        "\n" +
        "[L] " +
        printInfo[41].borlette.padEnd(
          printInfo[41].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[41].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[41].numero.padEnd(6) +
        "  " +
        printInfo[41].option.charAt(0) +
        "     " +
        printInfo[41].montant +
        "\n" +
        "[L] " +
        printInfo[42].borlette.padEnd(
          printInfo[42].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[42].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[42].numero.padEnd(6) +
        "  " +
        printInfo[42].option.charAt(0) +
        "     " +
        printInfo[42].montant +
        "\n" +
        "[L] " +
        printInfo[43].borlette.padEnd(
          printInfo[43].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[43].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[43].numero.padEnd(6) +
        "  " +
        printInfo[43].option.charAt(0) +
        "     " +
        printInfo[43].montant +
        "\n" +
        "[L] " +
        printInfo[44].borlette.padEnd(
          printInfo[44].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[44].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[44].numero.padEnd(6) +
        "  " +
        printInfo[44].option.charAt(0) +
        "     " +
        printInfo[44].montant +
        "\n" +
        "[L] " +
        printInfo[45].borlette.padEnd(
          printInfo[45].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[45].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[45].numero.padEnd(6) +
        "  " +
        printInfo[45].option.charAt(0) +
        "     " +
        printInfo[45].montant +
        "\n"
      : printInfo.length == 47
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n" +
        "[L] " +
        printInfo[37].borlette.padEnd(
          printInfo[37].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[37].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[37].numero.padEnd(6) +
        "  " +
        printInfo[37].option.charAt(0) +
        "     " +
        printInfo[37].montant +
        "\n" +
        "[L] " +
        printInfo[38].borlette.padEnd(
          printInfo[38].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[38].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[38].numero.padEnd(6) +
        "  " +
        printInfo[38].option.charAt(0) +
        "     " +
        printInfo[38].montant +
        "\n" +
        "[L] " +
        printInfo[39].borlette.padEnd(
          printInfo[39].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[39].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[39].numero.padEnd(6) +
        "  " +
        printInfo[39].option.charAt(0) +
        "     " +
        printInfo[39].montant +
        "\n" +
        "[L] " +
        printInfo[40].borlette.padEnd(
          printInfo[40].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[40].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[40].numero.padEnd(6) +
        "  " +
        printInfo[40].option.charAt(0) +
        "     " +
        printInfo[40].montant +
        "\n" +
        "[L] " +
        printInfo[41].borlette.padEnd(
          printInfo[41].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[41].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[41].numero.padEnd(6) +
        "  " +
        printInfo[41].option.charAt(0) +
        "     " +
        printInfo[41].montant +
        "\n" +
        "[L] " +
        printInfo[42].borlette.padEnd(
          printInfo[42].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[42].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[42].numero.padEnd(6) +
        "  " +
        printInfo[42].option.charAt(0) +
        "     " +
        printInfo[42].montant +
        "\n" +
        "[L] " +
        printInfo[43].borlette.padEnd(
          printInfo[43].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[43].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[43].numero.padEnd(6) +
        "  " +
        printInfo[43].option.charAt(0) +
        "     " +
        printInfo[43].montant +
        "\n" +
        "[L] " +
        printInfo[44].borlette.padEnd(
          printInfo[44].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[44].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[44].numero.padEnd(6) +
        "  " +
        printInfo[44].option.charAt(0) +
        "     " +
        printInfo[44].montant +
        "\n" +
        "[L] " +
        printInfo[45].borlette.padEnd(
          printInfo[45].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[45].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[45].numero.padEnd(6) +
        "  " +
        printInfo[45].option.charAt(0) +
        "     " +
        printInfo[45].montant +
        "\n" +
        "[L] " +
        printInfo[46].borlette.padEnd(
          printInfo[46].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[46].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[46].numero.padEnd(6) +
        "  " +
        printInfo[46].option.charAt(0) +
        "     " +
        printInfo[46].montant +
        "\n"
      : printInfo.length == 48
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n" +
        "[L] " +
        printInfo[37].borlette.padEnd(
          printInfo[37].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[37].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[37].numero.padEnd(6) +
        "  " +
        printInfo[37].option.charAt(0) +
        "     " +
        printInfo[37].montant +
        "\n" +
        "[L] " +
        printInfo[38].borlette.padEnd(
          printInfo[38].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[38].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[38].numero.padEnd(6) +
        "  " +
        printInfo[38].option.charAt(0) +
        "     " +
        printInfo[38].montant +
        "\n" +
        "[L] " +
        printInfo[39].borlette.padEnd(
          printInfo[39].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[39].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[39].numero.padEnd(6) +
        "  " +
        printInfo[39].option.charAt(0) +
        "     " +
        printInfo[39].montant +
        "\n" +
        "[L] " +
        printInfo[40].borlette.padEnd(
          printInfo[40].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[40].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[40].numero.padEnd(6) +
        "  " +
        printInfo[40].option.charAt(0) +
        "     " +
        printInfo[40].montant +
        "\n" +
        "[L] " +
        printInfo[41].borlette.padEnd(
          printInfo[41].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[41].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[41].numero.padEnd(6) +
        "  " +
        printInfo[41].option.charAt(0) +
        "     " +
        printInfo[41].montant +
        "\n" +
        "[L] " +
        printInfo[42].borlette.padEnd(
          printInfo[42].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[42].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[42].numero.padEnd(6) +
        "  " +
        printInfo[42].option.charAt(0) +
        "     " +
        printInfo[42].montant +
        "\n" +
        "[L] " +
        printInfo[43].borlette.padEnd(
          printInfo[43].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[43].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[43].numero.padEnd(6) +
        "  " +
        printInfo[43].option.charAt(0) +
        "     " +
        printInfo[43].montant +
        "\n" +
        "[L] " +
        printInfo[44].borlette.padEnd(
          printInfo[44].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[44].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[44].numero.padEnd(6) +
        "  " +
        printInfo[44].option.charAt(0) +
        "     " +
        printInfo[44].montant +
        "\n" +
        "[L] " +
        printInfo[45].borlette.padEnd(
          printInfo[45].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[45].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[45].numero.padEnd(6) +
        "  " +
        printInfo[45].option.charAt(0) +
        "     " +
        printInfo[45].montant +
        "\n" +
        "[L] " +
        printInfo[46].borlette.padEnd(
          printInfo[46].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[46].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[46].numero.padEnd(6) +
        "  " +
        printInfo[46].option.charAt(0) +
        "     " +
        printInfo[46].montant +
        "\n" +
        "[L] " +
        printInfo[47].borlette.padEnd(
          printInfo[47].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[47].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[47].numero.padEnd(6) +
        "  " +
        printInfo[47].option.charAt(0) +
        "     " +
        printInfo[47].montant +
        "\n"
      : printInfo.length == 49
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n" +
        "[L] " +
        printInfo[37].borlette.padEnd(
          printInfo[37].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[37].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[37].numero.padEnd(6) +
        "  " +
        printInfo[37].option.charAt(0) +
        "     " +
        printInfo[37].montant +
        "\n" +
        "[L] " +
        printInfo[38].borlette.padEnd(
          printInfo[38].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[38].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[38].numero.padEnd(6) +
        "  " +
        printInfo[38].option.charAt(0) +
        "     " +
        printInfo[38].montant +
        "\n" +
        "[L] " +
        printInfo[39].borlette.padEnd(
          printInfo[39].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[39].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[39].numero.padEnd(6) +
        "  " +
        printInfo[39].option.charAt(0) +
        "     " +
        printInfo[39].montant +
        "\n" +
        "[L] " +
        printInfo[40].borlette.padEnd(
          printInfo[40].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[40].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[40].numero.padEnd(6) +
        "  " +
        printInfo[40].option.charAt(0) +
        "     " +
        printInfo[40].montant +
        "\n" +
        "[L] " +
        printInfo[41].borlette.padEnd(
          printInfo[41].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[41].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[41].numero.padEnd(6) +
        "  " +
        printInfo[41].option.charAt(0) +
        "     " +
        printInfo[41].montant +
        "\n" +
        "[L] " +
        printInfo[42].borlette.padEnd(
          printInfo[42].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[42].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[42].numero.padEnd(6) +
        "  " +
        printInfo[42].option.charAt(0) +
        "     " +
        printInfo[42].montant +
        "\n" +
        "[L] " +
        printInfo[43].borlette.padEnd(
          printInfo[43].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[43].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[43].numero.padEnd(6) +
        "  " +
        printInfo[43].option.charAt(0) +
        "     " +
        printInfo[43].montant +
        "\n" +
        "[L] " +
        printInfo[44].borlette.padEnd(
          printInfo[44].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[44].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[44].numero.padEnd(6) +
        "  " +
        printInfo[44].option.charAt(0) +
        "     " +
        printInfo[44].montant +
        "\n" +
        "[L] " +
        printInfo[45].borlette.padEnd(
          printInfo[45].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[45].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[45].numero.padEnd(6) +
        "  " +
        printInfo[45].option.charAt(0) +
        "     " +
        printInfo[45].montant +
        "\n" +
        "[L] " +
        printInfo[46].borlette.padEnd(
          printInfo[46].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[46].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[46].numero.padEnd(6) +
        "  " +
        printInfo[46].option.charAt(0) +
        "     " +
        printInfo[46].montant +
        "\n" +
        "[L] " +
        printInfo[47].borlette.padEnd(
          printInfo[47].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[47].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[47].numero.padEnd(6) +
        "  " +
        printInfo[47].option.charAt(0) +
        "     " +
        printInfo[47].montant +
        "\n" +
        "[L] " +
        printInfo[48].borlette.padEnd(
          printInfo[48].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[48].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[48].numero.padEnd(6) +
        "  " +
        printInfo[48].option.charAt(0) +
        "     " +
        printInfo[48].montant +
        "\n"
      : printInfo.length == 50
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n" +
        "[L] " +
        printInfo[37].borlette.padEnd(
          printInfo[37].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[37].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[37].numero.padEnd(6) +
        "  " +
        printInfo[37].option.charAt(0) +
        "     " +
        printInfo[37].montant +
        "\n" +
        "[L] " +
        printInfo[38].borlette.padEnd(
          printInfo[38].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[38].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[38].numero.padEnd(6) +
        "  " +
        printInfo[38].option.charAt(0) +
        "     " +
        printInfo[38].montant +
        "\n" +
        "[L] " +
        printInfo[39].borlette.padEnd(
          printInfo[39].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[39].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[39].numero.padEnd(6) +
        "  " +
        printInfo[39].option.charAt(0) +
        "     " +
        printInfo[39].montant +
        "\n" +
        "[L] " +
        printInfo[40].borlette.padEnd(
          printInfo[40].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[40].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[40].numero.padEnd(6) +
        "  " +
        printInfo[40].option.charAt(0) +
        "     " +
        printInfo[40].montant +
        "\n" +
        "[L] " +
        printInfo[41].borlette.padEnd(
          printInfo[41].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[41].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[41].numero.padEnd(6) +
        "  " +
        printInfo[41].option.charAt(0) +
        "     " +
        printInfo[41].montant +
        "\n" +
        "[L] " +
        printInfo[42].borlette.padEnd(
          printInfo[42].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[42].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[42].numero.padEnd(6) +
        "  " +
        printInfo[42].option.charAt(0) +
        "     " +
        printInfo[42].montant +
        "\n" +
        "[L] " +
        printInfo[43].borlette.padEnd(
          printInfo[43].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[43].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[43].numero.padEnd(6) +
        "  " +
        printInfo[43].option.charAt(0) +
        "     " +
        printInfo[43].montant +
        "\n" +
        "[L] " +
        printInfo[44].borlette.padEnd(
          printInfo[44].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[44].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[44].numero.padEnd(6) +
        "  " +
        printInfo[44].option.charAt(0) +
        "     " +
        printInfo[44].montant +
        "\n" +
        "[L] " +
        printInfo[45].borlette.padEnd(
          printInfo[45].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[45].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[45].numero.padEnd(6) +
        "  " +
        printInfo[45].option.charAt(0) +
        "     " +
        printInfo[45].montant +
        "\n" +
        "[L] " +
        printInfo[46].borlette.padEnd(
          printInfo[46].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[46].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[46].numero.padEnd(6) +
        "  " +
        printInfo[46].option.charAt(0) +
        "     " +
        printInfo[46].montant +
        "\n" +
        "[L] " +
        printInfo[47].borlette.padEnd(
          printInfo[47].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[47].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[47].numero.padEnd(6) +
        "  " +
        printInfo[47].option.charAt(0) +
        "     " +
        printInfo[47].montant +
        "\n" +
        "[L] " +
        printInfo[48].borlette.padEnd(
          printInfo[48].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[48].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[48].numero.padEnd(6) +
        "  " +
        printInfo[48].option.charAt(0) +
        "     " +
        printInfo[48].montant +
        "\n" +
        "[L] " +
        printInfo[49].borlette.padEnd(
          printInfo[49].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[49].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[49].numero.padEnd(6) +
        "  " +
        printInfo[49].option.charAt(0) +
        "     " +
        printInfo[49].montant +
        "\n"
      : printInfo.length == 51
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n" +
        "[L] " +
        printInfo[37].borlette.padEnd(
          printInfo[37].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[37].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[37].numero.padEnd(6) +
        "  " +
        printInfo[37].option.charAt(0) +
        "     " +
        printInfo[37].montant +
        "\n" +
        "[L] " +
        printInfo[38].borlette.padEnd(
          printInfo[38].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[38].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[38].numero.padEnd(6) +
        "  " +
        printInfo[38].option.charAt(0) +
        "     " +
        printInfo[38].montant +
        "\n" +
        "[L] " +
        printInfo[39].borlette.padEnd(
          printInfo[39].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[39].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[39].numero.padEnd(6) +
        "  " +
        printInfo[39].option.charAt(0) +
        "     " +
        printInfo[39].montant +
        "\n" +
        "[L] " +
        printInfo[40].borlette.padEnd(
          printInfo[40].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[40].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[40].numero.padEnd(6) +
        "  " +
        printInfo[40].option.charAt(0) +
        "     " +
        printInfo[40].montant +
        "\n" +
        "[L] " +
        printInfo[41].borlette.padEnd(
          printInfo[41].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[41].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[41].numero.padEnd(6) +
        "  " +
        printInfo[41].option.charAt(0) +
        "     " +
        printInfo[41].montant +
        "\n" +
        "[L] " +
        printInfo[42].borlette.padEnd(
          printInfo[42].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[42].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[42].numero.padEnd(6) +
        "  " +
        printInfo[42].option.charAt(0) +
        "     " +
        printInfo[42].montant +
        "\n" +
        "[L] " +
        printInfo[43].borlette.padEnd(
          printInfo[43].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[43].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[43].numero.padEnd(6) +
        "  " +
        printInfo[43].option.charAt(0) +
        "     " +
        printInfo[43].montant +
        "\n" +
        "[L] " +
        printInfo[44].borlette.padEnd(
          printInfo[44].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[44].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[44].numero.padEnd(6) +
        "  " +
        printInfo[44].option.charAt(0) +
        "     " +
        printInfo[44].montant +
        "\n" +
        "[L] " +
        printInfo[45].borlette.padEnd(
          printInfo[45].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[45].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[45].numero.padEnd(6) +
        "  " +
        printInfo[45].option.charAt(0) +
        "     " +
        printInfo[45].montant +
        "\n" +
        "[L] " +
        printInfo[46].borlette.padEnd(
          printInfo[46].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[46].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[46].numero.padEnd(6) +
        "  " +
        printInfo[46].option.charAt(0) +
        "     " +
        printInfo[46].montant +
        "\n" +
        "[L] " +
        printInfo[47].borlette.padEnd(
          printInfo[47].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[47].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[47].numero.padEnd(6) +
        "  " +
        printInfo[47].option.charAt(0) +
        "     " +
        printInfo[47].montant +
        "\n" +
        "[L] " +
        printInfo[48].borlette.padEnd(
          printInfo[48].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[48].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[48].numero.padEnd(6) +
        "  " +
        printInfo[48].option.charAt(0) +
        "     " +
        printInfo[48].montant +
        "\n" +
        "[L] " +
        printInfo[49].borlette.padEnd(
          printInfo[49].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[49].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[49].numero.padEnd(6) +
        "  " +
        printInfo[49].option.charAt(0) +
        "     " +
        printInfo[49].montant +
        "\n" +
        "[L] " +
        printInfo[50].borlette.padEnd(
          printInfo[50].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[50].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[50].numero.padEnd(6) +
        "  " +
        printInfo[50].option.charAt(0) +
        "     " +
        printInfo[50].montant +
        "\n"
      : printInfo.length == 52
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n" +
        "[L] " +
        printInfo[37].borlette.padEnd(
          printInfo[37].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[37].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[37].numero.padEnd(6) +
        "  " +
        printInfo[37].option.charAt(0) +
        "     " +
        printInfo[37].montant +
        "\n" +
        "[L] " +
        printInfo[38].borlette.padEnd(
          printInfo[38].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[38].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[38].numero.padEnd(6) +
        "  " +
        printInfo[38].option.charAt(0) +
        "     " +
        printInfo[38].montant +
        "\n" +
        "[L] " +
        printInfo[39].borlette.padEnd(
          printInfo[39].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[39].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[39].numero.padEnd(6) +
        "  " +
        printInfo[39].option.charAt(0) +
        "     " +
        printInfo[39].montant +
        "\n" +
        "[L] " +
        printInfo[40].borlette.padEnd(
          printInfo[40].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[40].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[40].numero.padEnd(6) +
        "  " +
        printInfo[40].option.charAt(0) +
        "     " +
        printInfo[40].montant +
        "\n" +
        "[L] " +
        printInfo[41].borlette.padEnd(
          printInfo[41].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[41].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[41].numero.padEnd(6) +
        "  " +
        printInfo[41].option.charAt(0) +
        "     " +
        printInfo[41].montant +
        "\n" +
        "[L] " +
        printInfo[42].borlette.padEnd(
          printInfo[42].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[42].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[42].numero.padEnd(6) +
        "  " +
        printInfo[42].option.charAt(0) +
        "     " +
        printInfo[42].montant +
        "\n" +
        "[L] " +
        printInfo[43].borlette.padEnd(
          printInfo[43].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[43].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[43].numero.padEnd(6) +
        "  " +
        printInfo[43].option.charAt(0) +
        "     " +
        printInfo[43].montant +
        "\n" +
        "[L] " +
        printInfo[44].borlette.padEnd(
          printInfo[44].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[44].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[44].numero.padEnd(6) +
        "  " +
        printInfo[44].option.charAt(0) +
        "     " +
        printInfo[44].montant +
        "\n" +
        "[L] " +
        printInfo[45].borlette.padEnd(
          printInfo[45].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[45].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[45].numero.padEnd(6) +
        "  " +
        printInfo[45].option.charAt(0) +
        "     " +
        printInfo[45].montant +
        "\n" +
        "[L] " +
        printInfo[46].borlette.padEnd(
          printInfo[46].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[46].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[46].numero.padEnd(6) +
        "  " +
        printInfo[46].option.charAt(0) +
        "     " +
        printInfo[46].montant +
        "\n" +
        "[L] " +
        printInfo[47].borlette.padEnd(
          printInfo[47].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[47].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[47].numero.padEnd(6) +
        "  " +
        printInfo[47].option.charAt(0) +
        "     " +
        printInfo[47].montant +
        "\n" +
        "[L] " +
        printInfo[48].borlette.padEnd(
          printInfo[48].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[48].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[48].numero.padEnd(6) +
        "  " +
        printInfo[48].option.charAt(0) +
        "     " +
        printInfo[48].montant +
        "\n" +
        "[L] " +
        printInfo[49].borlette.padEnd(
          printInfo[49].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[49].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[49].numero.padEnd(6) +
        "  " +
        printInfo[49].option.charAt(0) +
        "     " +
        printInfo[49].montant +
        "\n" +
        "[L] " +
        printInfo[50].borlette.padEnd(
          printInfo[50].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[50].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[50].numero.padEnd(6) +
        "  " +
        printInfo[50].option.charAt(0) +
        "     " +
        printInfo[50].montant +
        "\n" +
        "[L] " +
        printInfo[51].borlette.padEnd(
          printInfo[51].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[51].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[51].numero.padEnd(6) +
        "  " +
        printInfo[51].option.charAt(0) +
        "     " +
        printInfo[51].montant +
        "\n"
      : printInfo.length == 53
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n" +
        "[L] " +
        printInfo[37].borlette.padEnd(
          printInfo[37].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[37].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[37].numero.padEnd(6) +
        "  " +
        printInfo[37].option.charAt(0) +
        "     " +
        printInfo[37].montant +
        "\n" +
        "[L] " +
        printInfo[38].borlette.padEnd(
          printInfo[38].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[38].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[38].numero.padEnd(6) +
        "  " +
        printInfo[38].option.charAt(0) +
        "     " +
        printInfo[38].montant +
        "\n" +
        "[L] " +
        printInfo[39].borlette.padEnd(
          printInfo[39].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[39].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[39].numero.padEnd(6) +
        "  " +
        printInfo[39].option.charAt(0) +
        "     " +
        printInfo[39].montant +
        "\n" +
        "[L] " +
        printInfo[40].borlette.padEnd(
          printInfo[40].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[40].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[40].numero.padEnd(6) +
        "  " +
        printInfo[40].option.charAt(0) +
        "     " +
        printInfo[40].montant +
        "\n" +
        "[L] " +
        printInfo[41].borlette.padEnd(
          printInfo[41].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[41].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[41].numero.padEnd(6) +
        "  " +
        printInfo[41].option.charAt(0) +
        "     " +
        printInfo[41].montant +
        "\n" +
        "[L] " +
        printInfo[42].borlette.padEnd(
          printInfo[42].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[42].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[42].numero.padEnd(6) +
        "  " +
        printInfo[42].option.charAt(0) +
        "     " +
        printInfo[42].montant +
        "\n" +
        "[L] " +
        printInfo[43].borlette.padEnd(
          printInfo[43].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[43].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[43].numero.padEnd(6) +
        "  " +
        printInfo[43].option.charAt(0) +
        "     " +
        printInfo[43].montant +
        "\n" +
        "[L] " +
        printInfo[44].borlette.padEnd(
          printInfo[44].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[44].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[44].numero.padEnd(6) +
        "  " +
        printInfo[44].option.charAt(0) +
        "     " +
        printInfo[44].montant +
        "\n" +
        "[L] " +
        printInfo[45].borlette.padEnd(
          printInfo[45].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[45].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[45].numero.padEnd(6) +
        "  " +
        printInfo[45].option.charAt(0) +
        "     " +
        printInfo[45].montant +
        "\n" +
        "[L] " +
        printInfo[46].borlette.padEnd(
          printInfo[46].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[46].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[46].numero.padEnd(6) +
        "  " +
        printInfo[46].option.charAt(0) +
        "     " +
        printInfo[46].montant +
        "\n" +
        "[L] " +
        printInfo[47].borlette.padEnd(
          printInfo[47].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[47].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[47].numero.padEnd(6) +
        "  " +
        printInfo[47].option.charAt(0) +
        "     " +
        printInfo[47].montant +
        "\n" +
        "[L] " +
        printInfo[48].borlette.padEnd(
          printInfo[48].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[48].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[48].numero.padEnd(6) +
        "  " +
        printInfo[48].option.charAt(0) +
        "     " +
        printInfo[48].montant +
        "\n" +
        "[L] " +
        printInfo[49].borlette.padEnd(
          printInfo[49].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[49].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[49].numero.padEnd(6) +
        "  " +
        printInfo[49].option.charAt(0) +
        "     " +
        printInfo[49].montant +
        "\n" +
        "[L] " +
        printInfo[50].borlette.padEnd(
          printInfo[50].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[50].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[50].numero.padEnd(6) +
        "  " +
        printInfo[50].option.charAt(0) +
        "     " +
        printInfo[50].montant +
        "\n" +
        "[L] " +
        printInfo[51].borlette.padEnd(
          printInfo[51].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[51].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[51].numero.padEnd(6) +
        "  " +
        printInfo[51].option.charAt(0) +
        "     " +
        printInfo[51].montant +
        "\n" +
        "[L] " +
        printInfo[52].borlette.padEnd(
          printInfo[52].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[52].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[52].numero.padEnd(6) +
        "  " +
        printInfo[52].option.charAt(0) +
        "     " +
        printInfo[52].montant +
        "\n"
      : printInfo.length == 54
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n" +
        "[L] " +
        printInfo[37].borlette.padEnd(
          printInfo[37].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[37].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[37].numero.padEnd(6) +
        "  " +
        printInfo[37].option.charAt(0) +
        "     " +
        printInfo[37].montant +
        "\n" +
        "[L] " +
        printInfo[38].borlette.padEnd(
          printInfo[38].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[38].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[38].numero.padEnd(6) +
        "  " +
        printInfo[38].option.charAt(0) +
        "     " +
        printInfo[38].montant +
        "\n" +
        "[L] " +
        printInfo[39].borlette.padEnd(
          printInfo[39].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[39].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[39].numero.padEnd(6) +
        "  " +
        printInfo[39].option.charAt(0) +
        "     " +
        printInfo[39].montant +
        "\n" +
        "[L] " +
        printInfo[40].borlette.padEnd(
          printInfo[40].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[40].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[40].numero.padEnd(6) +
        "  " +
        printInfo[40].option.charAt(0) +
        "     " +
        printInfo[40].montant +
        "\n" +
        "[L] " +
        printInfo[41].borlette.padEnd(
          printInfo[41].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[41].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[41].numero.padEnd(6) +
        "  " +
        printInfo[41].option.charAt(0) +
        "     " +
        printInfo[41].montant +
        "\n" +
        "[L] " +
        printInfo[42].borlette.padEnd(
          printInfo[42].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[42].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[42].numero.padEnd(6) +
        "  " +
        printInfo[42].option.charAt(0) +
        "     " +
        printInfo[42].montant +
        "\n" +
        "[L] " +
        printInfo[43].borlette.padEnd(
          printInfo[43].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[43].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[43].numero.padEnd(6) +
        "  " +
        printInfo[43].option.charAt(0) +
        "     " +
        printInfo[43].montant +
        "\n" +
        "[L] " +
        printInfo[44].borlette.padEnd(
          printInfo[44].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[44].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[44].numero.padEnd(6) +
        "  " +
        printInfo[44].option.charAt(0) +
        "     " +
        printInfo[44].montant +
        "\n" +
        "[L] " +
        printInfo[45].borlette.padEnd(
          printInfo[45].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[45].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[45].numero.padEnd(6) +
        "  " +
        printInfo[45].option.charAt(0) +
        "     " +
        printInfo[45].montant +
        "\n" +
        "[L] " +
        printInfo[46].borlette.padEnd(
          printInfo[46].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[46].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[46].numero.padEnd(6) +
        "  " +
        printInfo[46].option.charAt(0) +
        "     " +
        printInfo[46].montant +
        "\n" +
        "[L] " +
        printInfo[47].borlette.padEnd(
          printInfo[47].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[47].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[47].numero.padEnd(6) +
        "  " +
        printInfo[47].option.charAt(0) +
        "     " +
        printInfo[47].montant +
        "\n" +
        "[L] " +
        printInfo[48].borlette.padEnd(
          printInfo[48].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[48].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[48].numero.padEnd(6) +
        "  " +
        printInfo[48].option.charAt(0) +
        "     " +
        printInfo[48].montant +
        "\n" +
        "[L] " +
        printInfo[49].borlette.padEnd(
          printInfo[49].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[49].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[49].numero.padEnd(6) +
        "  " +
        printInfo[49].option.charAt(0) +
        "     " +
        printInfo[49].montant +
        "\n" +
        "[L] " +
        printInfo[50].borlette.padEnd(
          printInfo[50].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[50].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[50].numero.padEnd(6) +
        "  " +
        printInfo[50].option.charAt(0) +
        "     " +
        printInfo[50].montant +
        "\n" +
        "[L] " +
        printInfo[51].borlette.padEnd(
          printInfo[51].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[51].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[51].numero.padEnd(6) +
        "  " +
        printInfo[51].option.charAt(0) +
        "     " +
        printInfo[51].montant +
        "\n" +
        "[L] " +
        printInfo[52].borlette.padEnd(
          printInfo[52].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[52].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[52].numero.padEnd(6) +
        "  " +
        printInfo[52].option.charAt(0) +
        "     " +
        printInfo[52].montant +
        "\n" +
        "[L] " +
        printInfo[53].borlette.padEnd(
          printInfo[53].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[53].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[53].numero.padEnd(6) +
        "  " +
        printInfo[53].option.charAt(0) +
        "     " +
        printInfo[53].montant +
        "\n"
      : printInfo.length == 55
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n" +
        "[L] " +
        printInfo[37].borlette.padEnd(
          printInfo[37].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[37].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[37].numero.padEnd(6) +
        "  " +
        printInfo[37].option.charAt(0) +
        "     " +
        printInfo[37].montant +
        "\n" +
        "[L] " +
        printInfo[38].borlette.padEnd(
          printInfo[38].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[38].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[38].numero.padEnd(6) +
        "  " +
        printInfo[38].option.charAt(0) +
        "     " +
        printInfo[38].montant +
        "\n" +
        "[L] " +
        printInfo[39].borlette.padEnd(
          printInfo[39].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[39].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[39].numero.padEnd(6) +
        "  " +
        printInfo[39].option.charAt(0) +
        "     " +
        printInfo[39].montant +
        "\n" +
        "[L] " +
        printInfo[40].borlette.padEnd(
          printInfo[40].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[40].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[40].numero.padEnd(6) +
        "  " +
        printInfo[40].option.charAt(0) +
        "     " +
        printInfo[40].montant +
        "\n" +
        "[L] " +
        printInfo[41].borlette.padEnd(
          printInfo[41].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[41].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[41].numero.padEnd(6) +
        "  " +
        printInfo[41].option.charAt(0) +
        "     " +
        printInfo[41].montant +
        "\n" +
        "[L] " +
        printInfo[42].borlette.padEnd(
          printInfo[42].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[42].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[42].numero.padEnd(6) +
        "  " +
        printInfo[42].option.charAt(0) +
        "     " +
        printInfo[42].montant +
        "\n" +
        "[L] " +
        printInfo[43].borlette.padEnd(
          printInfo[43].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[43].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[43].numero.padEnd(6) +
        "  " +
        printInfo[43].option.charAt(0) +
        "     " +
        printInfo[43].montant +
        "\n" +
        "[L] " +
        printInfo[44].borlette.padEnd(
          printInfo[44].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[44].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[44].numero.padEnd(6) +
        "  " +
        printInfo[44].option.charAt(0) +
        "     " +
        printInfo[44].montant +
        "\n" +
        "[L] " +
        printInfo[45].borlette.padEnd(
          printInfo[45].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[45].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[45].numero.padEnd(6) +
        "  " +
        printInfo[45].option.charAt(0) +
        "     " +
        printInfo[45].montant +
        "\n" +
        "[L] " +
        printInfo[46].borlette.padEnd(
          printInfo[46].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[46].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[46].numero.padEnd(6) +
        "  " +
        printInfo[46].option.charAt(0) +
        "     " +
        printInfo[46].montant +
        "\n" +
        "[L] " +
        printInfo[47].borlette.padEnd(
          printInfo[47].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[47].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[47].numero.padEnd(6) +
        "  " +
        printInfo[47].option.charAt(0) +
        "     " +
        printInfo[47].montant +
        "\n" +
        "[L] " +
        printInfo[48].borlette.padEnd(
          printInfo[48].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[48].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[48].numero.padEnd(6) +
        "  " +
        printInfo[48].option.charAt(0) +
        "     " +
        printInfo[48].montant +
        "\n" +
        "[L] " +
        printInfo[49].borlette.padEnd(
          printInfo[49].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[49].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[49].numero.padEnd(6) +
        "  " +
        printInfo[49].option.charAt(0) +
        "     " +
        printInfo[49].montant +
        "\n" +
        "[L] " +
        printInfo[50].borlette.padEnd(
          printInfo[50].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[50].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[50].numero.padEnd(6) +
        "  " +
        printInfo[50].option.charAt(0) +
        "     " +
        printInfo[50].montant +
        "\n" +
        "[L] " +
        printInfo[51].borlette.padEnd(
          printInfo[51].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[51].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[51].numero.padEnd(6) +
        "  " +
        printInfo[51].option.charAt(0) +
        "     " +
        printInfo[51].montant +
        "\n" +
        "[L] " +
        printInfo[52].borlette.padEnd(
          printInfo[52].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[52].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[52].numero.padEnd(6) +
        "  " +
        printInfo[52].option.charAt(0) +
        "     " +
        printInfo[52].montant +
        "\n" +
        "[L] " +
        printInfo[53].borlette.padEnd(
          printInfo[53].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[53].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[53].numero.padEnd(6) +
        "  " +
        printInfo[53].option.charAt(0) +
        "     " +
        printInfo[53].montant +
        "\n" +
        "[L] " +
        printInfo[54].borlette.padEnd(
          printInfo[54].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[54].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[54].numero.padEnd(6) +
        "  " +
        printInfo[54].option.charAt(0) +
        "     " +
        printInfo[54].montant +
        "\n"
      : printInfo.length == 56
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n" +
        "[L] " +
        printInfo[37].borlette.padEnd(
          printInfo[37].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[37].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[37].numero.padEnd(6) +
        "  " +
        printInfo[37].option.charAt(0) +
        "     " +
        printInfo[37].montant +
        "\n" +
        "[L] " +
        printInfo[38].borlette.padEnd(
          printInfo[38].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[38].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[38].numero.padEnd(6) +
        "  " +
        printInfo[38].option.charAt(0) +
        "     " +
        printInfo[38].montant +
        "\n" +
        "[L] " +
        printInfo[39].borlette.padEnd(
          printInfo[39].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[39].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[39].numero.padEnd(6) +
        "  " +
        printInfo[39].option.charAt(0) +
        "     " +
        printInfo[39].montant +
        "\n" +
        "[L] " +
        printInfo[40].borlette.padEnd(
          printInfo[40].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[40].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[40].numero.padEnd(6) +
        "  " +
        printInfo[40].option.charAt(0) +
        "     " +
        printInfo[40].montant +
        "\n" +
        "[L] " +
        printInfo[41].borlette.padEnd(
          printInfo[41].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[41].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[41].numero.padEnd(6) +
        "  " +
        printInfo[41].option.charAt(0) +
        "     " +
        printInfo[41].montant +
        "\n" +
        "[L] " +
        printInfo[42].borlette.padEnd(
          printInfo[42].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[42].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[42].numero.padEnd(6) +
        "  " +
        printInfo[42].option.charAt(0) +
        "     " +
        printInfo[42].montant +
        "\n" +
        "[L] " +
        printInfo[43].borlette.padEnd(
          printInfo[43].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[43].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[43].numero.padEnd(6) +
        "  " +
        printInfo[43].option.charAt(0) +
        "     " +
        printInfo[43].montant +
        "\n" +
        "[L] " +
        printInfo[44].borlette.padEnd(
          printInfo[44].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[44].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[44].numero.padEnd(6) +
        "  " +
        printInfo[44].option.charAt(0) +
        "     " +
        printInfo[44].montant +
        "\n" +
        "[L] " +
        printInfo[45].borlette.padEnd(
          printInfo[45].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[45].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[45].numero.padEnd(6) +
        "  " +
        printInfo[45].option.charAt(0) +
        "     " +
        printInfo[45].montant +
        "\n" +
        "[L] " +
        printInfo[46].borlette.padEnd(
          printInfo[46].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[46].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[46].numero.padEnd(6) +
        "  " +
        printInfo[46].option.charAt(0) +
        "     " +
        printInfo[46].montant +
        "\n" +
        "[L] " +
        printInfo[47].borlette.padEnd(
          printInfo[47].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[47].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[47].numero.padEnd(6) +
        "  " +
        printInfo[47].option.charAt(0) +
        "     " +
        printInfo[47].montant +
        "\n" +
        "[L] " +
        printInfo[48].borlette.padEnd(
          printInfo[48].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[48].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[48].numero.padEnd(6) +
        "  " +
        printInfo[48].option.charAt(0) +
        "     " +
        printInfo[48].montant +
        "\n" +
        "[L] " +
        printInfo[49].borlette.padEnd(
          printInfo[49].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[49].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[49].numero.padEnd(6) +
        "  " +
        printInfo[49].option.charAt(0) +
        "     " +
        printInfo[49].montant +
        "\n" +
        "[L] " +
        printInfo[50].borlette.padEnd(
          printInfo[50].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[50].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[50].numero.padEnd(6) +
        "  " +
        printInfo[50].option.charAt(0) +
        "     " +
        printInfo[50].montant +
        "\n" +
        "[L] " +
        printInfo[51].borlette.padEnd(
          printInfo[51].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[51].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[51].numero.padEnd(6) +
        "  " +
        printInfo[51].option.charAt(0) +
        "     " +
        printInfo[51].montant +
        "\n" +
        "[L] " +
        printInfo[52].borlette.padEnd(
          printInfo[52].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[52].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[52].numero.padEnd(6) +
        "  " +
        printInfo[52].option.charAt(0) +
        "     " +
        printInfo[52].montant +
        "\n" +
        "[L] " +
        printInfo[53].borlette.padEnd(
          printInfo[53].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[53].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[53].numero.padEnd(6) +
        "  " +
        printInfo[53].option.charAt(0) +
        "     " +
        printInfo[53].montant +
        "\n" +
        "[L] " +
        printInfo[54].borlette.padEnd(
          printInfo[54].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[54].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[54].numero.padEnd(6) +
        "  " +
        printInfo[54].option.charAt(0) +
        "     " +
        printInfo[54].montant +
        "\n" +
        "[L] " +
        printInfo[55].borlette.padEnd(
          printInfo[55].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[55].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[55].numero.padEnd(6) +
        "  " +
        printInfo[55].option.charAt(0) +
        "     " +
        printInfo[55].montant +
        "\n"
      : printInfo.length == 57
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n" +
        "[L] " +
        printInfo[37].borlette.padEnd(
          printInfo[37].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[37].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[37].numero.padEnd(6) +
        "  " +
        printInfo[37].option.charAt(0) +
        "     " +
        printInfo[37].montant +
        "\n" +
        "[L] " +
        printInfo[38].borlette.padEnd(
          printInfo[38].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[38].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[38].numero.padEnd(6) +
        "  " +
        printInfo[38].option.charAt(0) +
        "     " +
        printInfo[38].montant +
        "\n" +
        "[L] " +
        printInfo[39].borlette.padEnd(
          printInfo[39].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[39].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[39].numero.padEnd(6) +
        "  " +
        printInfo[39].option.charAt(0) +
        "     " +
        printInfo[39].montant +
        "\n" +
        "[L] " +
        printInfo[40].borlette.padEnd(
          printInfo[40].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[40].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[40].numero.padEnd(6) +
        "  " +
        printInfo[40].option.charAt(0) +
        "     " +
        printInfo[40].montant +
        "\n" +
        "[L] " +
        printInfo[41].borlette.padEnd(
          printInfo[41].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[41].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[41].numero.padEnd(6) +
        "  " +
        printInfo[41].option.charAt(0) +
        "     " +
        printInfo[41].montant +
        "\n" +
        "[L] " +
        printInfo[42].borlette.padEnd(
          printInfo[42].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[42].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[42].numero.padEnd(6) +
        "  " +
        printInfo[42].option.charAt(0) +
        "     " +
        printInfo[42].montant +
        "\n" +
        "[L] " +
        printInfo[43].borlette.padEnd(
          printInfo[43].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[43].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[43].numero.padEnd(6) +
        "  " +
        printInfo[43].option.charAt(0) +
        "     " +
        printInfo[43].montant +
        "\n" +
        "[L] " +
        printInfo[44].borlette.padEnd(
          printInfo[44].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[44].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[44].numero.padEnd(6) +
        "  " +
        printInfo[44].option.charAt(0) +
        "     " +
        printInfo[44].montant +
        "\n" +
        "[L] " +
        printInfo[45].borlette.padEnd(
          printInfo[45].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[45].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[45].numero.padEnd(6) +
        "  " +
        printInfo[45].option.charAt(0) +
        "     " +
        printInfo[45].montant +
        "\n" +
        "[L] " +
        printInfo[46].borlette.padEnd(
          printInfo[46].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[46].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[46].numero.padEnd(6) +
        "  " +
        printInfo[46].option.charAt(0) +
        "     " +
        printInfo[46].montant +
        "\n" +
        "[L] " +
        printInfo[47].borlette.padEnd(
          printInfo[47].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[47].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[47].numero.padEnd(6) +
        "  " +
        printInfo[47].option.charAt(0) +
        "     " +
        printInfo[47].montant +
        "\n" +
        "[L] " +
        printInfo[48].borlette.padEnd(
          printInfo[48].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[48].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[48].numero.padEnd(6) +
        "  " +
        printInfo[48].option.charAt(0) +
        "     " +
        printInfo[48].montant +
        "\n" +
        "[L] " +
        printInfo[49].borlette.padEnd(
          printInfo[49].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[49].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[49].numero.padEnd(6) +
        "  " +
        printInfo[49].option.charAt(0) +
        "     " +
        printInfo[49].montant +
        "\n" +
        "[L] " +
        printInfo[50].borlette.padEnd(
          printInfo[50].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[50].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[50].numero.padEnd(6) +
        "  " +
        printInfo[50].option.charAt(0) +
        "     " +
        printInfo[50].montant +
        "\n" +
        "[L] " +
        printInfo[51].borlette.padEnd(
          printInfo[51].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[51].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[51].numero.padEnd(6) +
        "  " +
        printInfo[51].option.charAt(0) +
        "     " +
        printInfo[51].montant +
        "\n" +
        "[L] " +
        printInfo[52].borlette.padEnd(
          printInfo[52].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[52].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[52].numero.padEnd(6) +
        "  " +
        printInfo[52].option.charAt(0) +
        "     " +
        printInfo[52].montant +
        "\n" +
        "[L] " +
        printInfo[53].borlette.padEnd(
          printInfo[53].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[53].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[53].numero.padEnd(6) +
        "  " +
        printInfo[53].option.charAt(0) +
        "     " +
        printInfo[53].montant +
        "\n" +
        "[L] " +
        printInfo[54].borlette.padEnd(
          printInfo[54].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[54].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[54].numero.padEnd(6) +
        "  " +
        printInfo[54].option.charAt(0) +
        "     " +
        printInfo[54].montant +
        "\n" +
        "[L] " +
        printInfo[55].borlette.padEnd(
          printInfo[55].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[55].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[55].numero.padEnd(6) +
        "  " +
        printInfo[55].option.charAt(0) +
        "     " +
        printInfo[55].montant +
        "\n" +
        "[L] " +
        printInfo[56].borlette.padEnd(
          printInfo[56].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[56].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[56].numero.padEnd(6) +
        "  " +
        printInfo[56].option.charAt(0) +
        "     " +
        printInfo[56].montant +
        "\n"
      : printInfo.length == 58
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n" +
        "[L] " +
        printInfo[37].borlette.padEnd(
          printInfo[37].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[37].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[37].numero.padEnd(6) +
        "  " +
        printInfo[37].option.charAt(0) +
        "     " +
        printInfo[37].montant +
        "\n" +
        "[L] " +
        printInfo[38].borlette.padEnd(
          printInfo[38].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[38].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[38].numero.padEnd(6) +
        "  " +
        printInfo[38].option.charAt(0) +
        "     " +
        printInfo[38].montant +
        "\n" +
        "[L] " +
        printInfo[39].borlette.padEnd(
          printInfo[39].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[39].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[39].numero.padEnd(6) +
        "  " +
        printInfo[39].option.charAt(0) +
        "     " +
        printInfo[39].montant +
        "\n" +
        "[L] " +
        printInfo[40].borlette.padEnd(
          printInfo[40].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[40].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[40].numero.padEnd(6) +
        "  " +
        printInfo[40].option.charAt(0) +
        "     " +
        printInfo[40].montant +
        "\n" +
        "[L] " +
        printInfo[41].borlette.padEnd(
          printInfo[41].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[41].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[41].numero.padEnd(6) +
        "  " +
        printInfo[41].option.charAt(0) +
        "     " +
        printInfo[41].montant +
        "\n" +
        "[L] " +
        printInfo[42].borlette.padEnd(
          printInfo[42].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[42].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[42].numero.padEnd(6) +
        "  " +
        printInfo[42].option.charAt(0) +
        "     " +
        printInfo[42].montant +
        "\n" +
        "[L] " +
        printInfo[43].borlette.padEnd(
          printInfo[43].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[43].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[43].numero.padEnd(6) +
        "  " +
        printInfo[43].option.charAt(0) +
        "     " +
        printInfo[43].montant +
        "\n" +
        "[L] " +
        printInfo[44].borlette.padEnd(
          printInfo[44].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[44].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[44].numero.padEnd(6) +
        "  " +
        printInfo[44].option.charAt(0) +
        "     " +
        printInfo[44].montant +
        "\n" +
        "[L] " +
        printInfo[45].borlette.padEnd(
          printInfo[45].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[45].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[45].numero.padEnd(6) +
        "  " +
        printInfo[45].option.charAt(0) +
        "     " +
        printInfo[45].montant +
        "\n" +
        "[L] " +
        printInfo[46].borlette.padEnd(
          printInfo[46].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[46].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[46].numero.padEnd(6) +
        "  " +
        printInfo[46].option.charAt(0) +
        "     " +
        printInfo[46].montant +
        "\n" +
        "[L] " +
        printInfo[47].borlette.padEnd(
          printInfo[47].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[47].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[47].numero.padEnd(6) +
        "  " +
        printInfo[47].option.charAt(0) +
        "     " +
        printInfo[47].montant +
        "\n" +
        "[L] " +
        printInfo[48].borlette.padEnd(
          printInfo[48].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[48].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[48].numero.padEnd(6) +
        "  " +
        printInfo[48].option.charAt(0) +
        "     " +
        printInfo[48].montant +
        "\n" +
        "[L] " +
        printInfo[49].borlette.padEnd(
          printInfo[49].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[49].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[49].numero.padEnd(6) +
        "  " +
        printInfo[49].option.charAt(0) +
        "     " +
        printInfo[49].montant +
        "\n" +
        "[L] " +
        printInfo[50].borlette.padEnd(
          printInfo[50].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[50].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[50].numero.padEnd(6) +
        "  " +
        printInfo[50].option.charAt(0) +
        "     " +
        printInfo[50].montant +
        "\n" +
        "[L] " +
        printInfo[51].borlette.padEnd(
          printInfo[51].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[51].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[51].numero.padEnd(6) +
        "  " +
        printInfo[51].option.charAt(0) +
        "     " +
        printInfo[51].montant +
        "\n" +
        "[L] " +
        printInfo[52].borlette.padEnd(
          printInfo[52].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[52].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[52].numero.padEnd(6) +
        "  " +
        printInfo[52].option.charAt(0) +
        "     " +
        printInfo[52].montant +
        "\n" +
        "[L] " +
        printInfo[53].borlette.padEnd(
          printInfo[53].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[53].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[53].numero.padEnd(6) +
        "  " +
        printInfo[53].option.charAt(0) +
        "     " +
        printInfo[53].montant +
        "\n" +
        "[L] " +
        printInfo[54].borlette.padEnd(
          printInfo[54].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[54].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[54].numero.padEnd(6) +
        "  " +
        printInfo[54].option.charAt(0) +
        "     " +
        printInfo[54].montant +
        "\n" +
        "[L] " +
        printInfo[55].borlette.padEnd(
          printInfo[55].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[55].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[55].numero.padEnd(6) +
        "  " +
        printInfo[55].option.charAt(0) +
        "     " +
        printInfo[55].montant +
        "\n" +
        "[L] " +
        printInfo[56].borlette.padEnd(
          printInfo[56].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[56].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[56].numero.padEnd(6) +
        "  " +
        printInfo[56].option.charAt(0) +
        "     " +
        printInfo[56].montant +
        "\n" +
        "[L] " +
        printInfo[57].borlette.padEnd(
          printInfo[57].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[57].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[57].numero.padEnd(6) +
        "  " +
        printInfo[57].option.charAt(0) +
        "     " +
        printInfo[57].montant +
        "\n"
      : printInfo.length == 59
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n" +
        "[L] " +
        printInfo[37].borlette.padEnd(
          printInfo[37].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[37].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[37].numero.padEnd(6) +
        "  " +
        printInfo[37].option.charAt(0) +
        "     " +
        printInfo[37].montant +
        "\n" +
        "[L] " +
        printInfo[38].borlette.padEnd(
          printInfo[38].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[38].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[38].numero.padEnd(6) +
        "  " +
        printInfo[38].option.charAt(0) +
        "     " +
        printInfo[38].montant +
        "\n" +
        "[L] " +
        printInfo[39].borlette.padEnd(
          printInfo[39].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[39].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[39].numero.padEnd(6) +
        "  " +
        printInfo[39].option.charAt(0) +
        "     " +
        printInfo[39].montant +
        "\n" +
        "[L] " +
        printInfo[40].borlette.padEnd(
          printInfo[40].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[40].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[40].numero.padEnd(6) +
        "  " +
        printInfo[40].option.charAt(0) +
        "     " +
        printInfo[40].montant +
        "\n" +
        "[L] " +
        printInfo[41].borlette.padEnd(
          printInfo[41].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[41].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[41].numero.padEnd(6) +
        "  " +
        printInfo[41].option.charAt(0) +
        "     " +
        printInfo[41].montant +
        "\n" +
        "[L] " +
        printInfo[42].borlette.padEnd(
          printInfo[42].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[42].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[42].numero.padEnd(6) +
        "  " +
        printInfo[42].option.charAt(0) +
        "     " +
        printInfo[42].montant +
        "\n" +
        "[L] " +
        printInfo[43].borlette.padEnd(
          printInfo[43].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[43].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[43].numero.padEnd(6) +
        "  " +
        printInfo[43].option.charAt(0) +
        "     " +
        printInfo[43].montant +
        "\n" +
        "[L] " +
        printInfo[44].borlette.padEnd(
          printInfo[44].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[44].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[44].numero.padEnd(6) +
        "  " +
        printInfo[44].option.charAt(0) +
        "     " +
        printInfo[44].montant +
        "\n" +
        "[L] " +
        printInfo[45].borlette.padEnd(
          printInfo[45].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[45].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[45].numero.padEnd(6) +
        "  " +
        printInfo[45].option.charAt(0) +
        "     " +
        printInfo[45].montant +
        "\n" +
        "[L] " +
        printInfo[46].borlette.padEnd(
          printInfo[46].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[46].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[46].numero.padEnd(6) +
        "  " +
        printInfo[46].option.charAt(0) +
        "     " +
        printInfo[46].montant +
        "\n" +
        "[L] " +
        printInfo[47].borlette.padEnd(
          printInfo[47].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[47].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[47].numero.padEnd(6) +
        "  " +
        printInfo[47].option.charAt(0) +
        "     " +
        printInfo[47].montant +
        "\n" +
        "[L] " +
        printInfo[48].borlette.padEnd(
          printInfo[48].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[48].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[48].numero.padEnd(6) +
        "  " +
        printInfo[48].option.charAt(0) +
        "     " +
        printInfo[48].montant +
        "\n" +
        "[L] " +
        printInfo[49].borlette.padEnd(
          printInfo[49].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[49].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[49].numero.padEnd(6) +
        "  " +
        printInfo[49].option.charAt(0) +
        "     " +
        printInfo[49].montant +
        "\n" +
        "[L] " +
        printInfo[50].borlette.padEnd(
          printInfo[50].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[50].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[50].numero.padEnd(6) +
        "  " +
        printInfo[50].option.charAt(0) +
        "     " +
        printInfo[50].montant +
        "\n" +
        "[L] " +
        printInfo[51].borlette.padEnd(
          printInfo[51].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[51].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[51].numero.padEnd(6) +
        "  " +
        printInfo[51].option.charAt(0) +
        "     " +
        printInfo[51].montant +
        "\n" +
        "[L] " +
        printInfo[52].borlette.padEnd(
          printInfo[52].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[52].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[52].numero.padEnd(6) +
        "  " +
        printInfo[52].option.charAt(0) +
        "     " +
        printInfo[52].montant +
        "\n" +
        "[L] " +
        printInfo[53].borlette.padEnd(
          printInfo[53].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[53].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[53].numero.padEnd(6) +
        "  " +
        printInfo[53].option.charAt(0) +
        "     " +
        printInfo[53].montant +
        "\n" +
        "[L] " +
        printInfo[54].borlette.padEnd(
          printInfo[54].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[54].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[54].numero.padEnd(6) +
        "  " +
        printInfo[54].option.charAt(0) +
        "     " +
        printInfo[54].montant +
        "\n" +
        "[L] " +
        printInfo[55].borlette.padEnd(
          printInfo[55].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[55].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[55].numero.padEnd(6) +
        "  " +
        printInfo[55].option.charAt(0) +
        "     " +
        printInfo[55].montant +
        "\n" +
        "[L] " +
        printInfo[56].borlette.padEnd(
          printInfo[56].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[56].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[56].numero.padEnd(6) +
        "  " +
        printInfo[56].option.charAt(0) +
        "     " +
        printInfo[56].montant +
        "\n" +
        "[L] " +
        printInfo[57].borlette.padEnd(
          printInfo[57].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[57].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[57].numero.padEnd(6) +
        "  " +
        printInfo[57].option.charAt(0) +
        "     " +
        printInfo[57].montant +
        "\n" +
        "[L] " +
        printInfo[58].borlette.padEnd(
          printInfo[58].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[58].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[58].numero.padEnd(6) +
        "  " +
        printInfo[58].option.charAt(0) +
        "     " +
        printInfo[58].montant +
        "\n"
      : printInfo.length == 60
      ? "[L] " +
        printInfo[0].borlette.padEnd(
          printInfo[0].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[0].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[0].numero.padEnd(6) +
        "  " +
        printInfo[0].option.charAt(0) +
        "     " +
        printInfo[0].montant +
        "\n" +
        "[L] " +
        printInfo[1].borlette.padEnd(
          printInfo[1].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[1].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[1].numero.padEnd(6) +
        "  " +
        printInfo[1].option.charAt(0) +
        "     " +
        printInfo[1].montant +
        "\n" +
        "[L] " +
        printInfo[2].borlette.padEnd(
          printInfo[2].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[2].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[2].numero.padEnd(6) +
        "  " +
        printInfo[2].option.charAt(0) +
        "     " +
        printInfo[2].montant +
        "\n" +
        "[L] " +
        printInfo[3].borlette.padEnd(
          printInfo[3].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[3].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[3].numero.padEnd(6) +
        "  " +
        printInfo[3].option.charAt(0) +
        "     " +
        printInfo[3].montant +
        "\n" +
        "[L] " +
        printInfo[4].borlette.padEnd(
          printInfo[4].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[4].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[4].numero.padEnd(6) +
        "  " +
        printInfo[4].option.charAt(0) +
        "     " +
        printInfo[4].montant +
        "\n" +
        "[L] " +
        printInfo[5].borlette.padEnd(
          printInfo[5].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[5].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[5].numero.padEnd(6) +
        "  " +
        printInfo[5].option.charAt(0) +
        "     " +
        printInfo[5].montant +
        "\n" +
        "[L] " +
        printInfo[6].borlette.padEnd(
          printInfo[6].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[6].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[6].numero.padEnd(6) +
        "  " +
        printInfo[6].option.charAt(0) +
        "     " +
        printInfo[6].montant +
        "\n" +
        "[L] " +
        printInfo[7].borlette.padEnd(
          printInfo[7].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[7].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[7].numero.padEnd(6) +
        "  " +
        printInfo[7].option.charAt(0) +
        "     " +
        printInfo[7].montant +
        "\n" +
        "[L] " +
        printInfo[8].borlette.padEnd(
          printInfo[8].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[8].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[8].numero.padEnd(6) +
        "  " +
        printInfo[8].option.charAt(0) +
        "     " +
        printInfo[8].montant +
        "\n" +
        "[L] " +
        printInfo[9].borlette.padEnd(
          printInfo[9].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[9].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[9].numero.padEnd(6) +
        "  " +
        printInfo[9].option.charAt(0) +
        "     " +
        printInfo[9].montant +
        "\n" +
        "[L] " +
        printInfo[10].borlette.padEnd(
          printInfo[10].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[10].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[10].numero.padEnd(6) +
        "  " +
        printInfo[10].option.charAt(0) +
        "     " +
        printInfo[10].montant +
        "\n" +
        "[L] " +
        printInfo[11].borlette.padEnd(
          printInfo[11].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[11].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[11].numero.padEnd(6) +
        "  " +
        printInfo[11].option.charAt(0) +
        "     " +
        printInfo[11].montant +
        "\n" +
        "[L] " +
        printInfo[12].borlette.padEnd(
          printInfo[12].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[12].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[12].numero.padEnd(6) +
        "  " +
        printInfo[12].option.charAt(0) +
        "     " +
        printInfo[12].montant +
        "\n" +
        "[L] " +
        printInfo[13].borlette.padEnd(
          printInfo[13].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[13].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[13].numero.padEnd(6) +
        "  " +
        printInfo[13].option.charAt(0) +
        "     " +
        printInfo[13].montant +
        "\n" +
        "[L] " +
        printInfo[14].borlette.padEnd(
          printInfo[14].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[14].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[14].numero.padEnd(6) +
        "  " +
        printInfo[14].option.charAt(0) +
        "     " +
        printInfo[14].montant +
        "\n" +
        "[L] " +
        printInfo[15].borlette.padEnd(
          printInfo[15].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[15].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[15].numero.padEnd(6) +
        "  " +
        printInfo[15].option.charAt(0) +
        "     " +
        printInfo[15].montant +
        "\n" +
        "[L] " +
        printInfo[16].borlette.padEnd(
          printInfo[16].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[16].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[16].numero.padEnd(6) +
        "  " +
        printInfo[16].option.charAt(0) +
        "     " +
        printInfo[16].montant +
        "\n" +
        "[L] " +
        printInfo[17].borlette.padEnd(
          printInfo[17].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[17].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[17].numero.padEnd(6) +
        "  " +
        printInfo[17].option.charAt(0) +
        "     " +
        printInfo[17].montant +
        "\n" +
        "[L] " +
        printInfo[18].borlette.padEnd(
          printInfo[18].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[18].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[18].numero.padEnd(6) +
        "  " +
        printInfo[18].option.charAt(0) +
        "     " +
        printInfo[18].montant +
        "\n" +
        "[L] " +
        printInfo[19].borlette.padEnd(
          printInfo[19].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[19].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[19].numero.padEnd(6) +
        "  " +
        printInfo[19].option.charAt(0) +
        "     " +
        printInfo[19].montant +
        "\n" +
        "[L] " +
        printInfo[20].borlette.padEnd(
          printInfo[20].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[20].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[20].numero.padEnd(6) +
        "  " +
        printInfo[20].option.charAt(0) +
        "     " +
        printInfo[20].montant +
        "\n" +
        "[L] " +
        printInfo[21].borlette.padEnd(
          printInfo[21].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[21].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[21].numero.padEnd(6) +
        "  " +
        printInfo[21].option.charAt(0) +
        "     " +
        printInfo[21].montant +
        "\n" +
        "[L] " +
        printInfo[22].borlette.padEnd(
          printInfo[22].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[22].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[22].numero.padEnd(6) +
        "  " +
        printInfo[22].option.charAt(0) +
        "     " +
        printInfo[22].montant +
        "\n" +
        "[L] " +
        printInfo[23].borlette.padEnd(
          printInfo[23].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[23].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[23].numero.padEnd(6) +
        "  " +
        printInfo[23].option.charAt(0) +
        "     " +
        printInfo[23].montant +
        "\n" +
        "[L] " +
        printInfo[24].borlette.padEnd(
          printInfo[24].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[24].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[24].numero.padEnd(6) +
        "  " +
        printInfo[24].option.charAt(0) +
        "     " +
        printInfo[24].montant +
        "\n" +
        "[L] " +
        printInfo[25].borlette.padEnd(
          printInfo[25].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[25].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[25].numero.padEnd(6) +
        "  " +
        printInfo[25].option.charAt(0) +
        "     " +
        printInfo[25].montant +
        "\n" +
        "[L] " +
        printInfo[26].borlette.padEnd(
          printInfo[26].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[26].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[26].numero.padEnd(6) +
        "  " +
        printInfo[26].option.charAt(0) +
        "     " +
        printInfo[26].montant +
        "\n" +
        "[L] " +
        printInfo[27].borlette.padEnd(
          printInfo[27].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[27].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[27].numero.padEnd(6) +
        "  " +
        printInfo[27].option.charAt(0) +
        "     " +
        printInfo[27].montant +
        "\n" +
        "[L] " +
        printInfo[28].borlette.padEnd(
          printInfo[28].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[28].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[28].numero.padEnd(6) +
        "  " +
        printInfo[28].option.charAt(0) +
        "     " +
        printInfo[28].montant +
        "\n" +
        "[L] " +
        printInfo[29].borlette.padEnd(
          printInfo[29].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[29].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[29].numero.padEnd(6) +
        "  " +
        printInfo[29].option.charAt(0) +
        "     " +
        printInfo[29].montant +
        "\n" +
        "[L] " +
        printInfo[30].borlette.padEnd(
          printInfo[30].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[30].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[30].numero.padEnd(6) +
        "  " +
        printInfo[30].option.charAt(0) +
        "     " +
        printInfo[30].montant +
        "\n" +
        "[L] " +
        printInfo[31].borlette.padEnd(
          printInfo[31].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[31].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[31].numero.padEnd(6) +
        "  " +
        printInfo[31].option.charAt(0) +
        "     " +
        printInfo[31].montant +
        "\n" +
        "[L] " +
        printInfo[32].borlette.padEnd(
          printInfo[32].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[32].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[32].numero.padEnd(6) +
        "  " +
        printInfo[32].option.charAt(0) +
        "     " +
        printInfo[32].montant +
        "\n" +
        "[L] " +
        printInfo[33].borlette.padEnd(
          printInfo[33].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[33].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[33].numero.padEnd(6) +
        "  " +
        printInfo[33].option.charAt(0) +
        "     " +
        printInfo[33].montant +
        "\n" +
        "[L] " +
        printInfo[34].borlette.padEnd(
          printInfo[34].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[34].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[34].numero.padEnd(6) +
        "  " +
        printInfo[34].option.charAt(0) +
        "     " +
        printInfo[34].montant +
        "\n" +
        "[L] " +
        printInfo[35].borlette.padEnd(
          printInfo[35].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[35].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[35].numero.padEnd(6) +
        "  " +
        printInfo[35].option.charAt(0) +
        "     " +
        printInfo[35].montant +
        "\n" +
        "[L] " +
        printInfo[36].borlette.padEnd(
          printInfo[36].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[36].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[36].numero.padEnd(6) +
        "  " +
        printInfo[36].option.charAt(0) +
        "     " +
        printInfo[36].montant +
        "\n" +
        "[L] " +
        printInfo[37].borlette.padEnd(
          printInfo[37].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[37].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[37].numero.padEnd(6) +
        "  " +
        printInfo[37].option.charAt(0) +
        "     " +
        printInfo[37].montant +
        "\n" +
        "[L] " +
        printInfo[38].borlette.padEnd(
          printInfo[38].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[38].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[38].numero.padEnd(6) +
        "  " +
        printInfo[38].option.charAt(0) +
        "     " +
        printInfo[38].montant +
        "\n" +
        "[L] " +
        printInfo[39].borlette.padEnd(
          printInfo[39].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[39].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[39].numero.padEnd(6) +
        "  " +
        printInfo[39].option.charAt(0) +
        "     " +
        printInfo[39].montant +
        "\n" +
        "[L] " +
        printInfo[40].borlette.padEnd(
          printInfo[40].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[40].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[40].numero.padEnd(6) +
        "  " +
        printInfo[40].option.charAt(0) +
        "     " +
        printInfo[40].montant +
        "\n" +
        "[L] " +
        printInfo[41].borlette.padEnd(
          printInfo[41].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[41].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[41].numero.padEnd(6) +
        "  " +
        printInfo[41].option.charAt(0) +
        "     " +
        printInfo[41].montant +
        "\n" +
        "[L] " +
        printInfo[42].borlette.padEnd(
          printInfo[42].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[42].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[42].numero.padEnd(6) +
        "  " +
        printInfo[42].option.charAt(0) +
        "     " +
        printInfo[42].montant +
        "\n" +
        "[L] " +
        printInfo[43].borlette.padEnd(
          printInfo[43].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[43].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[43].numero.padEnd(6) +
        "  " +
        printInfo[43].option.charAt(0) +
        "     " +
        printInfo[43].montant +
        "\n" +
        "[L] " +
        printInfo[44].borlette.padEnd(
          printInfo[44].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[44].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[44].numero.padEnd(6) +
        "  " +
        printInfo[44].option.charAt(0) +
        "     " +
        printInfo[44].montant +
        "\n" +
        "[L] " +
        printInfo[45].borlette.padEnd(
          printInfo[45].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[45].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[45].numero.padEnd(6) +
        "  " +
        printInfo[45].option.charAt(0) +
        "     " +
        printInfo[45].montant +
        "\n" +
        "[L] " +
        printInfo[46].borlette.padEnd(
          printInfo[46].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[46].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[46].numero.padEnd(6) +
        "  " +
        printInfo[46].option.charAt(0) +
        "     " +
        printInfo[46].montant +
        "\n" +
        "[L] " +
        printInfo[47].borlette.padEnd(
          printInfo[47].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[47].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[47].numero.padEnd(6) +
        "  " +
        printInfo[47].option.charAt(0) +
        "     " +
        printInfo[47].montant +
        "\n" +
        "[L] " +
        printInfo[48].borlette.padEnd(
          printInfo[48].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[48].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[48].numero.padEnd(6) +
        "  " +
        printInfo[48].option.charAt(0) +
        "     " +
        printInfo[48].montant +
        "\n" +
        "[L] " +
        printInfo[49].borlette.padEnd(
          printInfo[49].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[49].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[49].numero.padEnd(6) +
        "  " +
        printInfo[49].option.charAt(0) +
        "     " +
        printInfo[49].montant +
        "\n" +
        "[L] " +
        printInfo[50].borlette.padEnd(
          printInfo[50].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[50].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[50].numero.padEnd(6) +
        "  " +
        printInfo[50].option.charAt(0) +
        "     " +
        printInfo[50].montant +
        "\n" +
        "[L] " +
        printInfo[51].borlette.padEnd(
          printInfo[51].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[51].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[51].numero.padEnd(6) +
        "  " +
        printInfo[51].option.charAt(0) +
        "     " +
        printInfo[51].montant +
        "\n" +
        "[L] " +
        printInfo[52].borlette.padEnd(
          printInfo[52].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[52].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[52].numero.padEnd(6) +
        "  " +
        printInfo[52].option.charAt(0) +
        "     " +
        printInfo[52].montant +
        "\n" +
        "[L] " +
        printInfo[53].borlette.padEnd(
          printInfo[53].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[53].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[53].numero.padEnd(6) +
        "  " +
        printInfo[53].option.charAt(0) +
        "     " +
        printInfo[53].montant +
        "\n" +
        "[L] " +
        printInfo[54].borlette.padEnd(
          printInfo[54].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[54].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[54].numero.padEnd(6) +
        "  " +
        printInfo[54].option.charAt(0) +
        "     " +
        printInfo[54].montant +
        "\n" +
        "[L] " +
        printInfo[55].borlette.padEnd(
          printInfo[55].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[55].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[55].numero.padEnd(6) +
        "  " +
        printInfo[55].option.charAt(0) +
        "     " +
        printInfo[55].montant +
        "\n" +
        "[L] " +
        printInfo[56].borlette.padEnd(
          printInfo[56].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[56].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[56].numero.padEnd(6) +
        "  " +
        printInfo[56].option.charAt(0) +
        "     " +
        printInfo[56].montant +
        "\n" +
        "[L] " +
        printInfo[57].borlette.padEnd(
          printInfo[57].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[57].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[57].numero.padEnd(6) +
        "  " +
        printInfo[57].option.charAt(0) +
        "     " +
        printInfo[57].montant +
        "\n" +
        "[L] " +
        printInfo[58].borlette.padEnd(
          printInfo[58].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[58].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[58].numero.padEnd(6) +
        "  " +
        printInfo[58].option.charAt(0) +
        "     " +
        printInfo[58].montant +
        "\n" +
        "[L] " +
        printInfo[59].borlette.padEnd(
          printInfo[59].borlette === "lotto3" || "lotto4" || "lotto5"
            ? 8
            : printInfo[59].borlette === "mariage"
            ? 8
            : 0
        ) +
        "  " +
        printInfo[59].numero.padEnd(6) +
        "  " +
        printInfo[59].option.charAt(0) +
        "     " +
        printInfo[59].montant +
        "\n"
      : "";

  // then return the data
  return data;
};

export { printData };
