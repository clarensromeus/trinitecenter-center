interface IJwePrint {
    Agent: string;
    DateFrom: string;
    DateEnd: string;
    Surcussale?: string;
    TotalFiche: string;
    TotalFicheGagne: string;
    TotalGagne: string;
    TotalAPaye: string;
    TotalEntre: string;
  }
  
  const printRapportData = (printInfo: IJwePrint): string => {
    if (!printInfo ) {
      return '';
    }
    // Format header with company logo and basic information
    const header = [
      "[L]<img>https://res.cloudinary.com/dmcxqwx6s/image/upload/v1750294358/Frame_1_2_q6siwh.png</img> \n",
      "[L]<b>      EXCELLENCE CENTER </b>\n",
      "[L]\n",
      "[L]<b>RAPPORTS PAR AGENT</b>\n",
      "[L]********************************\n",
      `[L]Vendeur : ${printInfo.Agent} \n`,
      `[L]Surcussale : ${printInfo.Surcussale} \n`,
      `[L]Du : ${printInfo.DateFrom}\n`,
      `[L]Au : ${printInfo.DateEnd}\n`,
      "[L]********************************\n",
      `[L]Fiche Vendues : ${printInfo.TotalFiche}\n`,
      `[L]Fiche gagnantes : ${printInfo.TotalFicheGagne}\n`,
      `[L]Profit/Perte : ${printInfo.TotalGagne} Gdes\n`,
      `[L]A paye : ${printInfo.TotalAPaye} Gdes\n`,
      `[L]Ventes : ${printInfo.TotalEntre} Gdes\n`,
    ].join('');
  
    // Add dividers and column headers
    const divider = "[L]********************************\n";
    
    // Add footer with validity notice
    const footer = `[L]"Merci pour votre collaboration"\n`;
  
    // Combine all sections
    return `${header}${divider}${footer}`;
  };
  
  export { printRapportData, IJwePrint };