interface IJwePrint {
  id: string;
  Code?: string;
  date: {
    hour: number;
    minute: number;
    date: string;
  };
  bank: string;
  tirage: string;
  montant: number;
  telephone: string;
  lottery: {
    borlette: string;
    numero: string;
    option: string;
    montant: string;
  }[];
}

const formatBorletteWidth = (borlette: string): number => {
  if (borlette === "lotto3" || borlette === "lotto4" || borlette === "lotto5" || borlette === "mariage") {
    return 8;
  }
  return 0;
};

const formatReceiptLine = (item: { borlette: string; numero: string; option: string; montant: string }): string => {
  const borletteWidth = formatBorletteWidth(item.borlette);
  return `[L]${item.borlette.padEnd(borletteWidth)}  ${item.numero.padEnd(6)}  ${item.option.charAt(0)}     ${item.montant}\n`;
};

const printJweData = (printInfo: IJwePrint): string => {
  if (!printInfo || !Array.isArray(printInfo.lottery) || printInfo.lottery.length === 0) {
    return '';
  }

  const header = [
    "[L]<img>https://res.cloudinary.com/dmcxqwx6s/image/upload/v1750294358/Frame_1_2_q6siwh.png</img> \n",
    "[L]<b>      EXCELLENCE CENTER </b>\n",
    "[L]\n",
    `[L]Tike : ${printInfo.Code} \n`,
    `[L]Date : ${printInfo.date.hour}:${printInfo.date.minute} - ${printInfo.date.date}\n`,
    `[L]Bank : ${printInfo.bank}\n`,
    `[L]Tirage : ${printInfo.tirage}\n`,
    `[L]Total Investi : ${printInfo.montant} Gdes\n`,
  ].join('');

  // Add dividers and column headers
  const divider = "[L]================================\n";
  const columnHeaders = "[L]Jwet      Nimero  Opt  Montant\n[L]--------------------------------\n";

  // Format lottery lines
  const formattedLines = printInfo.lottery.map(formatReceiptLine).join('');

  // Add footer with validity notice
  const footer = '[L]" Fiche yo valab pou 90 jou "\n';

  // Combine all sections
  return `${header}${divider}${columnHeaders}${formattedLines}${divider}${footer}`;
};

export { printJweData, IJwePrint };