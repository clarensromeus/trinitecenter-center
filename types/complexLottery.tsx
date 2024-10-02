interface LotteryInputDropdown {
  number: string;
  amount: string;
  option: string;
}

interface IBorlette {
  borlette: string;
  numero: string;
  montant: string;
  option: string;
}

interface IDataDropdown {
  data: {
    number: string;
    amount: string;
    option: string;
  }[];
  handleInputChange: (
    index: number,
    type: keyof LotteryInputDropdown,
    value: string
  ) => void;
  defaultValue: {
    number: string;
    amount: string;
    option: string;
  }[];
  baseDetection: any;
}

interface IrenderItem {
  item: { number: string; amount: string };
  index: number;
}

export type { LotteryInputDropdown, IBorlette, IDataDropdown, IrenderItem };
