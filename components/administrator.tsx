import { db } from "@/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import * as React from "react";

const adminInfo = async (
  name: string,
  setSucurssale: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    const surcuRef = query(
      collection(db, "surcussale"),
      where("NomCentral", "==", `${name?.toLowerCase()}`)
    );
    const admininistrator = await getDocs(surcuRef);
    if (!admininistrator.empty) {
      const admin = admininistrator.docs.map((ad) => {
        return { numeroTelephone: ad.data().NumeroTelephone };
      });
      setSucurssale(admin[0].numeroTelephone);
    }
  } catch (error) {
    throw new Error(`${error}`);
  }
};

const adminInfo2 = async (name: string) => {
  try {
    const surcuRef = query(
      collection(db, "surcussale"),
      where("NomCentral", "==", `${name?.toLowerCase()}`)
    );
    const admininistrator = await getDocs(surcuRef);
    if (!admininistrator.empty) {
      const admin = admininistrator.docs.map((ad) => {
        return { numeroTelephone: ad.data().NumeroTelephone };
      });
      return admin[0].numeroTelephone;
    }
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export { adminInfo, adminInfo2 };
