import { getDocs, collection, query, where, Timestamp, Query } from 'firebase/firestore';
import { db } from '@/firebaseConfig';// your firestore config
import { IFiche } from '@/types/fiches';
import __ from "lodash"
import moment from "moment"

type Fiche = {
  Agent: string;
  Lottery: { numero: string; montant: string }[];
  Tirage: string;
  isDeleted: boolean;
  isWinning: boolean;
};



type Logagnant = {
  Lotto31eLot: string;
  SecondLot: string;
  ThirdLot: string;
  Tirage: string;
  timestamp: Timestamp;
};

interface IprimGen<S> {
  id?: S;
  tirage1: S;
  tirage2: S;
  tirage3: S;
  Mariage: S;
  Lotto3: S;
  Lotto4op1: S;
  Lotto4op2: S;
  Lotto4op3: S;
  Lotto5op1: S;
  Lotto5op2: S;
  Lotto5op3: S;
  MariageGratuit: S;
}

interface IPrime extends IprimGen<string> {
  Tirage: string;
  Agent: string;
  [key: string]: any;
}

const parseNumber = (value: string) => parseFloat(value || '0');

export async function getAgentWinningReport(agentId: string, fiches: IFiche[], tirageSection: string, startDate: Date, endDate: Date) {
  // 1. Get all fiches for this agent
  // const fichesSnap = await getDocs(query(collection(db, 'fiches'), where('Agent', '==', agentId)));
  // const fiches: any[] = [];
  // fichesSnap.forEach(doc => fiches.push({ id: doc.id, ...doc.data() }));

  // 2. Get winning numbers
  const lotGagnantQuery = query(
    collection(db, 'lotGagnants'), 
    where("timestamp", ">=", Timestamp.fromDate(startDate)),
    where("timestamp", "<=", Timestamp.fromDate(endDate)),
);

  // const logagnantSnap = await getDocs(collection(db, 'lotGagnants'));
  const logagnantSnap = await getDocs(lotGagnantQuery);
  const logagnants: Logagnant[] = [];
  logagnantSnap.forEach(doc => logagnants.push(doc.data() as Logagnant));
  console.log("lot gagnant : ", logagnants)

  // 3. Get primeAgent
  const primeAgentSnap = await getDocs(query(collection(db, 'primeAgent'), where('Agent', '==', agentId)));
  // const primeAgent = primeAgentSnap.empty ? null : primeAgentSnap.docs[0].data();

  // 4. Get primeTirage and primeGenerale
  let primeTirageSnap;
  if(tirageSection === "Tout") {
    primeTirageSnap = await getDocs(query(collection(db, 'primeTirage'), where("Agent", "==", agentId)));
  }else {
    primeTirageSnap = await getDocs(query(collection(db, 'primeTirage'), where("Agent", "==", agentId), where("Tirage", "==", `${tirageSection.toLowerCase()}`)));
  }

  
  // const primeTirage = primeTirageSnap.empty ? null : primeTirageSnap.docs[0].data();

  const primeGeneraleSnap = await getDocs(collection(db, 'primeGenerale'));
  const primeGenerale = primeGeneraleSnap.empty ? null : primeGeneraleSnap.docs[0].data();

  let totalWinningFiches = 0;
  let totalAmountToPay = 0;
  for (const fiche of fiches) {
  // if (fiche.isDeleted) continue;
 // if (fiche.isDeleted) continue;
 let primeAgentFilter: IPrime[] = [];
 if (!primeAgentSnap.empty) {
   primeAgentFilter = primeAgentSnap.docs
     .map(doc => ({ id: doc.id, ...doc.data() } as IPrime))
     .filter(ag => ag.Agent === fiche.Agent);
 }
 
 let primeAgent = primeAgentFilter.find(ag => ag.Tirage === "tout")
   || primeAgentFilter.find(ag => ag.Tirage === fiche.Tirage);
 
 
 let primeTirageFilter: IPrime[] = [];
 if (!primeTirageSnap.empty) {
   primeTirageFilter = primeTirageSnap.docs
     .map(doc => ({ id: doc.id, ...doc.data() } as IPrime));
 }
 
 let primeTirage = primeTirageFilter.find(ag => ag.Tirage === "tout")
   || primeTirageFilter.find(ag => ag.Tirage === fiche.Tirage);
    // Find the corresponding logagnant
    // const matchedDraw = logagnants.find(l =>
    //   l.Tirage.toLowerCase() === fiche.Tirage.toLowerCase()
    // );

    // complete match case
    const matchedDraw = logagnants.find(l => {
      return moment(l.timestamp.toDate()).isSame(moment(fiche.timestamp?.toDate()), 'day') && l.Tirage.toLowerCase() === fiche.Tirage.toLowerCase();
    })
    console.log("matched draw : ", matchedDraw)
    // console.log("matched Draw : ", matchedDraw)
    if (!matchedDraw) continue;
    const { Lotto31eLot, SecondLot, ThirdLot, Tirage } = matchedDraw;

    // Lotto4 combinations (2-number strings)
    const lotto4Combinations = [
        Lotto31eLot + SecondLot,
        SecondLot + Lotto31eLot,
        Lotto31eLot + ThirdLot,
        ThirdLot + Lotto31eLot,
        SecondLot + ThirdLot,
        ThirdLot + SecondLot,
      ];
  
      // Lotto5 combinations (3-number strings)
      const lotto5Combinations = [
        Lotto31eLot + SecondLot,
        SecondLot + Lotto31eLot,
        Lotto31eLot + ThirdLot,
        ThirdLot + Lotto31eLot
      ];

    let hasWinningTicket = false;
    for (const ticket of fiche.Lottery) {
     

      const numero = ticket.numero;
      const borlette = ticket.borlette;
      const montant = parseNumber(ticket.montant);
      let gain = 0;

      let prizeType = '';
      if(borlette === "borlette") {
    
        if (fiche.Tirage === Tirage && numero == Lotto31eLot.slice(1)) prizeType = 'tirage1';
        else if(fiche.Tirage === Tirage && numero === Lotto31eLot.slice(0, 2)) prizeType = "tirage1"
        else if (fiche.Tirage === Tirage && numero === SecondLot) prizeType = 'tirage2';
        else if (fiche.Tirage === Tirage && numero === ThirdLot) prizeType = 'tirage3';
      } else if(borlette === "lotto3") {
        
        // const finalDec = numero.toString().startsWith(SecondLot) || numero.toString().endsWith(SecondLot) || numero.toString().startsWith(ThirdLot) || numero.toString().endsWith(ThirdLot)
        if(fiche.Tirage === Tirage && numero === Lotto31eLot) prizeType = "Lotto3"
        // if(fiche.Tirage === Tirage && finalDec) prizeType = "tirage1"
      } else if(borlette === "lotto4") {
        // implement lott04 for me, it's a combination of 2 pair number
        if (fiche.Tirage === Tirage && lotto4Combinations.includes(numero) ) {
            prizeType = "Lotto4op1"; // you can adjust this to op2/op3 if needed
        }
      } else if(borlette == "mariage") {
        if(fiche.Tirage === Tirage && lotto4Combinations.includes(numero)) {
          prizeType = "Mariage"
        }
      } else {
        // implement lotto5 for me it's a combination of a pair number with a triple number
        if (fiche.Tirage === Tirage && lotto5Combinations.includes(numero)) {
            prizeType = "Lotto5op1"; // adjust as needed
          }
      }

      if (prizeType) {
        const primeSource = primeAgent || primeTirage || primeGenerale;
        
        const multiplier = parseNumber(primeSource?.[prizeType] || '0');
        gain = montant * multiplier;
        // increment the totalwinningFiches only if it's a differente fiche, no duplicate fiche
        if (!hasWinningTicket) {
          totalWinningFiches++;
          hasWinningTicket = true;
        }
        totalAmountToPay += gain;
      }
    }
  }

  return {
    totalWinningFiches,
    totalAmountToPay
  };
}
