interface IBL {
  numero: string;
  montant: string;
  option: string;
  borlette: string;
}

interface IFiche {
  id: string;
  Tirage: string[];
  Agent: string;
  Lottery: IBL[];
  Surcussale: string;
  dateCreated: string;
}

interface IBorlette {
  numero1: string;
  numero2: string;
  numero3: string;
  numero4: string;
  numero5: string;
  numero6: string;
  numero7: string;
  numero8: string;
}

interface IMontant {
  montant1: string;
  montant2: string;
  montant3: string;
  montant4: string;
  montant5: string;
  montant6: string;
  montant7: string;
  montant8: string;
}

export type { IFiche, IBorlette };
