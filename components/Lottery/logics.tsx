import { db } from "@/firebaseConfig";
import { IFiche } from "@/types/fiches";
import {
  CalendarDateTime,
  getLocalTimeZone,
  now,
  parseDateTime,
  parseTime,
  toTime,
  today,
} from "@internationalized/date";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getDocs,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  writeBatch,
  onSnapshot,
  updateDoc,
  orderBy,
  limit,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import moment from "moment-timezone"

interface IBetInfo {
  numero: string;
  montant: string;
  borlette: string;
  option: string;
}

interface IBL {
  numero: string;
  montant: string;
  option: string;
  borlette: string;
}

interface TicketData {
  Agent: string;
  Code: string;
  Bank: string;
  dateCreated: string;
  Lottery: Array<{
    borlette: string;
    montant: string;
    numero: string;
    option: string;
  }>;
  Tirage: string;
  Surcussale: string;
}

const blockageReference = collection(db, "blocageBoule");
const limiteBouleRef = collection(db, "limiteboule");
const limitebouleParAgentRef = collection(db, "limiteBouleParAgent");
const limiteJeuRef = collection(db, "limiteJeu");
const limiteJeuParAgentRef = collection(db, "limiteJeuParAgent");
const tirageRef = collection(db, "Tirages");
const ficheRef = collection(db, "fiches");

interface Test {
  Agent: string;
  Tirage: string;
  boule: string;
}

export function pairwiseCombinationProduct(arr: string[]): string[] {
  const results: string[] = [];

  // Loop through each unique pair of elements in the array
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      results.push(arr[i] + arr[j]);
    }
  }

  return results;
}

export const blockageBoule = async (
  boule: string[],
  Tirage: string,
  agent: string
) => {
  try {
    let limite: { data: string[]; state: boolean } = { data: [], state: false };
    const boules = await getDocs(blockageReference);
    // console.log(boule, Tirage, agent);
    if (boules.empty) {
      limite.state = false;
      return limite;
    } else {
      boules.docs.map((doc) => {
        if (
          (doc.data().Agent == agent || doc.data().Agent == "tout") &&
          (Tirage == doc.data().Tirage || doc.data().Tirage == "tout")
        ) {
          if (boule.filter((b) => b === doc.data().boule).length > 0) {
            boule
              .filter((bo) => bo.includes(doc.data().boule))
              .map((bb) => {
                limite.data.push(bb);
                limite.state = true;
              });
          }
        }
      });
    }
    return limite;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const limiteBoule = async (
  boule: string[],
  montant: string[],
  Tirage: string
) => {
  try {
    let limiteData: { data: string[]; state: boolean } = {
      data: [],
      state: false,
    };
    const q = query(limiteBouleRef, where("block", "==", true));
    const limites = await getDocs(q);
    // console.log(Tirage);

    if (limites.empty) {
      limiteData.state = false;
      return limiteData;
    } else {
      limites.docs.map((lb) => {
        // Tirage.filter((t) => t == lb.data().Tirage)
        if (Tirage == lb.data().Tirage || lb.data().Tirage == "tout") {
          const bo = boule.filter((b) => b == lb.data().Boule);
          const isLimite = montant.some(
            (l) => parseInt(l) > parseInt(lb.data().Limite)
          );
          if (isLimite && bo.length > 0) {
            limiteData.data = bo;
            limiteData.state = true;
          }
        }
      });
    }
    return limiteData;
  } catch (error) {
    console.log("error");
    throw new Error(`${error}`);
  }
};

export const limitBouleParAgent = async (
  boule: string[],
  Tirage: string,
  Agent: string,
  montant: string[]
) => {
  try {
    let limiteData: { data: string[]; state: boolean } = {
      data: [],
      state: false,
    };
    const q = query(limitebouleParAgentRef, where("block", "==", true));
    const limitePa = await getDocs(q);
    if (limitePa.empty) {
      limiteData.state = false;
    }
    limitePa.docs.map((lb) => {
      if (
        (Tirage == lb.data().Tirage || lb.data().Tirage == "tout") &&
        lb.data().Agent == Agent
      ) {
        const bo = boule.filter((b) => b == lb.data().Boule);
        const isLimite = montant.some(
          (l) => parseInt(l) > parseInt(lb.data().Limite)
        );
        if (isLimite && bo.length > 0) {
          limiteData.data = bo;
          limiteData.state = true;
        }
      }
    });
    return limiteData;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const limiteJeu = async (
  // montant: string[],
  Tirage: string,
  type: IBL[]
) => {
  try {
    let limiteData = {
      message: "",
      state: false,
    };
    const q = query(limiteJeuRef, where("block", "==", true));
    const limites = await getDocs(q);
    if (limites.empty) {
      limiteData.state = false;
    } else {
      limites.docs.map((l) => {
        // Tirage.filter((t) => t === l.data().Tirage).length > 0
        if (
          (Tirage == l.data().Tirage || l.data().Tirage == "tout") &&
          type.filter(
            (t) =>
              t.borlette == l.data().Option.replace(/\s/g, "") &&
              parseInt(t.montant) > parseInt(l.data().Limite)
          ).length > 0
          // type == l.data().Option
        ) {
          const allLimite = type
            .filter(
              (t) =>
                t.borlette == l.data().Option.replace(/\s/g, "") &&
                parseInt(t.montant) > parseInt(l.data().Limite)
            )
            .map((v) => v.montant);

          limiteData.message = `${allLimite.join(
            ","
          )} HTG, montan sa (yo) twò wo, ou pa ka jwe pou plis pase ${
            l.data().Limite
          } HTG `;
          limiteData.state = true;
        }
      });
    }
    return limiteData;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const limiteJeuParAgent = async (
  // montant: string[],
  Agent: string,
  Tirage: string,
  type: IBL[]
) => {
  try {
    let limiteAgent = {
      message: "",
      state: false,
    };
    const q = query(limiteJeuParAgentRef, where("block", "==", true));
    const limites = await getDocs(q);
    if (limites.empty) {
      limiteAgent.state = false;
    } else {
      limites.docs.map((lj) => {
        if (
          lj.data().Agent == Agent &&
          (Tirage == lj.data().Tirage || lj.data().Tirage == "tout") &&
          type.filter(
            (t) =>
              t.borlette == lj.data().Option.replace(/\s/g, "") &&
              parseInt(t.montant) > parseInt(lj.data().Limite)
          ).length > 0
          // type == lj.data().Option
        ) {
          const allLimite = type
            .filter(
              (t) =>
                t.borlette == lj.data().Option.replace(/\s/g, "") &&
                parseInt(t.montant) > parseInt(lj.data().Limite)
            )
            .map((v) => v.montant);

          limiteAgent.message = `${allLimite.join(
            ","
          )} HTG, montan sa (yo) twò wo, ou pa ka jwe pou plis pase ${
            lj.data().Limite
          } HTG`;
          limiteAgent.state = true;
        }
      });
    }
    return limiteAgent;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const accessTirage = async (Tirage: string[]) => {
  try {
    const Now = toTime(now(getLocalTimeZone()));
    const data: { message: string; state: boolean } = {
      message: "",
      state: false,
    };
    const tirages = await getDocs(tirageRef);
    console.log("first")
    if (tirages.empty) {
      data.state = false;
      console.log("one test")
    }
    // console.log("all tirage : ", tirages.docs.map((d) => d.data()))
    tirages.docs.map((t) => {
      if (Tirage.filter((v) => v == t.data().Nom).length > 0) {
        const status =
          Now.compare(parseTime(t.data().Ouverture)) < 0 ||
          Now.compare(parseTime(t.data().fermeture)) > 0
            ? "Fermé"
            : "En cours";
        console.log(status);

        if (t.data().Block == "Bloqué") {
          const blockedTirage = Tirage.filter((tt) => tt == t.data().Nom);
          data.message = `Ou pa ka jwe tirage (${blockedTirage.join(
            ","
          )}) konya, li(yo) bloke`;
          data.state = true;
        }

        if (status == "Fermé") {
          const shutTirage = Tirage.filter((tt) => tt == t.data().Nom);
          data.message = `Ou pa ka jwe, tirage (${shutTirage.join(
            ","
          )}) ferme pou konya`;
          data.state = true;
        }
      }
    });
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const createFiche = async (
  date: string,
  Lottery: IBetInfo[],
  Tirage: string,
  Agent: string,
  Surcussale: string,
  Bank: string
) => {
  try {
    // first the receipt needs to have an id
    const access: { message: string; state: boolean } = {
      message: "",
      state: false,
    };
    await addDoc(ficheRef, {
      dateCreated: date,
      Code: `${Math.floor(1000000 + Math.random() * 9000000)}`,
      Tirage,
      Agent,
      Surcussale,
      Lottery,
      toPaid: 0,
      Bank,
      isDeleted: false,
      isWinning: false,
      isPaid: false,
      timestamp: serverTimestamp(),
    });
    access.message = "Fiche la crée avec success";
    access.state = true;
    return access;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const suprimerFiche = async (code: string) => {
  try {
    const Now = now(getLocalTimeZone());
    const Today = today(getLocalTimeZone());
    const currentDateTime = new CalendarDateTime(
      Today.year,
      Today.month,
      Today.day,
      Now.hour,
      Now.minute,
      Now.second
    );
    const data = { message: "", state: false, fiche: {} as TicketData };
    // const fiche = await getDoc(doc(db, "fiches", code));
    const q =  query(collection(db, "fiches"), where("Code", "==", code), where("isDeleted", "==", false))
    const fiche = await getDocs(q)
    
    if (fiche.empty) {
      // data.message = "sorry, ou antre yon move code";
      // data.state = false;
      return {message: "sorry, pas de ticket trouvé", state: false, fiche: null}
    }

    if (!fiche.empty) {
      const ficheData = fiche.docs.map((da) => da.data())[0] as TicketData;
      const dateCreated = parseDateTime(ficheData.dateCreated);
      if (dateCreated.add({ minutes: 10 }).compare(currentDateTime) < 0) {
        // data.message = "ou paka siprime fich sa, li gen plis pase 10 minit";
        // data.state = false;
        // data.fiche = 
        return {message: "ou paka siprime fich sa, li gen plis pase 10 minit", state: false, fiche: null}
      } else {
        await updateDoc(fiche.docs[0].ref, {
          isDeleted: true,
        })  
        // data.message = "Fich la siprime ak sikse";
        // data.state = true;
        // data.fiche = ficheData
        return {message: "Fich la siprime ak siksè", state: true, fiche: ficheData}
      }
    }

    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const PayFiche = async (code: string) => {
  try {
    const data = { state: false, message: "" };
    const tike = await getDoc(doc(db, "fiches", code));
    if (tike.exists()) {
      if (
        tike.data().isDeleted == false &&
        tike.data().isPaid == false
      ) {
        data.state = true;
        data.message = "Ou peye tike a ak sikse";
        await updateDoc(doc(db, "fiches", code), {
          isPaid: true,
        });
      } else {
        data.state = false;
        data.message =
          "ou paka peye, fich la pa genyen ou suprime ou peye deja";
      }
    }
    if (!tike.exists()) {
      data.state = false;
      data.message = "Entre yon lot kod, tike sa pa egziste";
    }
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const rechercheFiche = async (code: string) => {
  try {
    // const rechercheRef = doc(db, "fiches", code);
    const rechercheRef2 = query(
      collection(db, "fiches"),
      where("Code", "==", `${code}`),
      where("isDeleted", "==", false)
    );
    const fiche = await getDocs(rechercheRef2);
    console.log("okay : okay ", code)
    if (!fiche.empty) {
      const searchedFiche  = fiche.docs.map((f) => f.data())[0];
      console.log("all searchedFiche : ", searchedFiche)
      return { state: true, data: searchedFiche as TicketData};
    } else {
      return { state: false, data:  null};
    }
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const suprimerTouteFicheYo = async (Agent: string) => {
  try {
    const q = query(ficheRef, where("Agent", "==", Agent));
    const Now = now(getLocalTimeZone());
    const Today = today(getLocalTimeZone());
    const currentDateTime = new CalendarDateTime(
      Today.year,
      Today.month,
      Today.day,
      Now.hour,
      Now.minute,
      Now.second
    );
    const batch = writeBatch(db);
    const docs = await getDocs(q);
    docs.docs.map((fi) => {
      const dateCreated = parseDateTime(fi.data().dateCreated);
      if (dateCreated.compare(currentDateTime) > 0) {
        batch.delete(fi.ref);
      }
    });
    await batch.commit();
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getOneFiche = async (
  code: string,
  setData: React.Dispatch<React.SetStateAction<IFiche>>
) => {
  try {
    const fiche = await getDoc(doc(db, "fiches", `${code}`));
    if (fiche.exists()) {
      setData({
        id: fiche.id,
        Tirage: fiche.data().Tirage,
        Agent: fiche.data().Agent,
        Lottery: fiche.data().Lottery,
        Surcussale: fiche.data().Surcussale,
        dateCreated: fiche.data().dateCreated,
      });
    }
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const allFicheParAgent = async (
  setFiche: React.Dispatch<React.SetStateAction<IFiche>>,
  setEmpty: React.Dispatch<React.SetStateAction<boolean>>,
  agent: String
) => {


  try {
    const timezone = 'America/Port-au-Prince';
    const now = moment.tz(timezone);

     // Get the start and end of the day in HAITI time
     const start = now.clone().startOf("day").toDate();
     const end = now.clone().endOf("day").toDate();

    const q = query(
      ficheRef,
      where("timestamp", ">=", Timestamp.fromDate(start)),
      where("timestamp", "<=", Timestamp.fromDate(end)),
      orderBy("timestamp", "desc"),
      where("Agent", "==", `${agent.toLowerCase()}`),
      where("isDeleted", "==", false),
      limit(1),
    );
    onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const allFiches = snapshot.docs.map((fi) => {
          return {
            id: fi.id,
            Tirage: fi.data().Tirage,
            Agent: fi.data().Agent,
            Code: fi.data().Code,
            Lottery: fi.data().Lottery,
            Surcussale: fi.data().Surcussale,
            dateCreated: fi.data().dateCreated,
          } as IFiche;
        });
        setFiche(allFiches[0]);
      } else {
        setEmpty(true);
        setFiche({} as IFiche);
      }
    });
  } catch (error) {
    setEmpty(true);
    throw new Error(`${error}`);
  }
};

const rapportParAgent = async () => {
  try {
    
  } catch (error) {
    throw new Error(`${error}`)
  }
}

export const findOneuser = async (id: string) => {
  try {
    const user = await getDoc(doc(db, "Vendeur", `${id}`));
    // const user = await getDocs(query(collection(db, "Vendeur"), where("Pseudoname", "==", `${Pseudoname}`)))
    console.log("no")
    if (user.exists()) {
      
      return user.data()
    }
  } catch (error) {
    throw new Error(`${error}`);
  }
}

export const getUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("VENDEUR");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
    
  } catch (e) {
    // error reading value
    throw new Error(`${e}`);
  }
};
