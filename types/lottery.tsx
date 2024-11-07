interface LotteryInput {
  number: string;
  amount: string;
}

interface IBorlette {
  borlette: string;
  numero: string;
  montant: string;
  option: string;
}

interface IData {
  data: {
    number: string;
    amount: string;
  }[];
  handleInputChange: (
    index: number,
    type: keyof LotteryInput,
    value: string
  ) => void;
  defaultValue: {
    number: string;
    amount: string;
  }[];
  baseDetection: string;
  reload?: string;
}

interface IrenderItem {
  item: { number: string; amount: string };
  index: number;
}

export type { LotteryInput, IBorlette, IData, IrenderItem };
