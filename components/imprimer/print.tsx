interface IBorlette {
  numero: string;
  montant: string;
  option: string;
  borlette: string;
}

const formatBorletteWidth = (borlette: string): number => {
  if (borlette === "lotto3" || borlette === "lotto4" || borlette === "lotto5" || borlette === "mariage") {
    return 8;
  }
  return 0;
};

const formatReceiptLine = (item: IBorlette): string => {
  const borletteWidth = formatBorletteWidth(item.borlette);
  return `[L]${item.borlette.padEnd(borletteWidth)}  ${item.numero.padEnd(6)}  ${item.option.charAt(0)}     ${item.montant}\n`;
};

const printData = (printInfo: IBorlette[]): string => {
  if (!Array.isArray(printInfo) || printInfo.length === 0) {
    return '';
  }

  // Format each line of the receipt
  const formattedLines = printInfo.map(formatReceiptLine).join('');

  // Add header and footer
  const header = `[C]<font size='big'>Excellence CENTER</font>\n[C]${new Date().toLocaleDateString()}\n\n`;
  const divider = '[C]--------------------------------\n';
  const footer = '[C]Mèsi pou konfyans ou!\n[C]Bon chans!\n';

  // Combine all parts with proper spacing
  return `${header}${divider}${formattedLines}${divider}${footer}`;
};

export { printData };
