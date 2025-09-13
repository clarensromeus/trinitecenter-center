// import * as React from "react";
// import { Button, Dialog, Menu, Portal, Text } from "react-native-paper";
// import { Pressable, View, StyleSheet } from "react-native";
// import CalendarPicker from "react-native-calendar-picker";
// import AntDesign from "@expo/vector-icons/AntDesign";
// import moment from "moment";
// import { collection, getDocs, query, Timestamp, where, orderBy } from "firebase/firestore";
// import { db } from "@/firebaseConfig";
// import { IFiche } from "@/types/fiches";
// import ThermalPrinterModule from "react-native-thermal-printer"
// import { printRapportData } from "../imprimer/report_print";
// import { ALERT_TYPE, Toast } from "react-native-alert-notification";
// import { getAgentWinningReport } from "./gagnantLogic";
// import AsyncStorage from "@react-native-async-storage/async-storage";



// export interface IRapoProps {
//   setVisibleRapo: React.Dispatch<React.SetStateAction<boolean>>;
//   visibleRapo: boolean;
// }

// export function Rapo({ setVisibleRapo, visibleRapo }: IRapoProps) {
//   const [daterapo, setDate] = React.useState<any>();
//   const [visible, setVisible] = React.useState(false);
//   const [visibleBorlette, setVisibleBorlette] = React.useState<boolean>(false);
//   const [interval, setInterval] = React.useState<string>("Tous");
//   const [borlette, setBorlette] = React.useState<string>("Tous");
//   const [isLoading, setLoading] = React.useState<boolean>(false)

//   const openMenuBorlette = () => setVisibleBorlette(true);
//   const closeMenuBorlette = () => setVisibleBorlette(false);

//   // Printer Configuration
//   ThermalPrinterModule.defaultConfig = {
//     ...ThermalPrinterModule.defaultConfig,
//     ip: '192.168.100.246',
//     port: 9100,
//     mmFeedPaper: 4,
//     autoCut: true,
//     timeout: 30000,
//   };

//   const onChangeDate = (date: any) => {
//     setDate(date);
//   };

//   const closeMenu = () => {
//     setVisible(false);
//   };

//   const openMenu = () => {
//     setVisible(true);
//   };

//   const getUserData = async () => {
//     try {
//       const jsonValue = await AsyncStorage.getItem('VENDEUR');
//       return jsonValue != null ? JSON.parse(jsonValue) : null;
//     } catch (e) {
//       throw new Error(`${e}`);
//     }
//   };

//   const hideDialog = () => setVisibleRapo(false);

//   const rapport = async () => {
//     if (!daterapo) {
//       return;
//     }
//     setLoading(true)
//     try {
      
//       const start = moment(daterapo).startOf("day").toDate();
//       const end = moment(daterapo).endOf("day").toDate();
//       const user = await getUserData();
//       const fichesRef = collection(db, "fiches");
//       let q; 
//       if(borlette == "Tous") {
//         // Build Firebase query
//         q = query(
//           fichesRef,
//           where("Agent", "==", `${user.Pseudoname.toLowerCase()}`),  // Same here
//           orderBy("timestamp", "desc"),
//           where("timestamp", ">=", Timestamp.fromDate(start)),
//           where("timestamp", "<=", Timestamp.fromDate(end)),
//           // orderBy("timestamp", "asc")
//         );
//       } else {
//         // 🔎 Build Firebase query
//         q = query(
//           fichesRef,
//           where("Agent", "==", `${user.Pseudoname.toLowerCase()}`),  // Same here
//           where("Tirage", "==", `${borlette.toLowerCase()} ${interval.toLocaleLowerCase()}`),  // You can make this dynamic
//           orderBy("timestamp", "desc"),
//           where("timestamp", ">=", Timestamp.fromDate(start)),
//           where("timestamp", "<=", Timestamp.fromDate(end)),
//         );
//       }
  
//       const snapshot = await getDocs(q);
  
//       const filtered = snapshot.docs
//         .map(doc => ({ id: doc.id, ...doc.data() } as IFiche)).filter((fiche) => Boolean(fiche.isDeleted) === false)
//       if (filtered.length === 0) {
//         const report = {
//           agent: filtered[0].Agent,
//           // bank: filtered[0].Bank,
//           date: moment(daterapo).format("YYYY-MM-DD"),
//           tirage: interval,
//           borlette: borlette,
//           totalFiches: filtered.length,
//           totalNumbers: "0",
//           totalAmount: "0"
//         };
//         const receiptContent = printRapportData({
//         Agent: report.agent.toLowerCase(),
//         Date: report.date,
//         TotalFiche: `${report.totalFiches}`,
//         TotalFicheGagne: "0",
//         TotalGagne: "0",
//         TotalAPaye: `0`,
//         TotalEntre: report.totalAmount
//       });
//       await ThermalPrinterModule.printBluetooth({
//         payload: receiptContent,
//         printerNbrCharactersPerLine: 32,
//       });
//          setLoading(false)
//          setVisibleRapo(false)
//          alert("il ya 0 fiche")
//         return;
//       } else {
//         let totalAmount = 0;
//       let totalNumbers = 0;
  
//       filtered.forEach(fiche => {
//         fiche.Lottery.forEach((lot: any) => {
//           totalAmount += parseFloat(lot.montant);
//           totalNumbers++;
//         });
//       });
  
//       const report = {
//         agent: filtered[0].Agent,
//         // bank: filtered[0].Bank,
//         date: moment(daterapo).format("YYYY-MM-DD"),
//         tirage: interval,
//         borlette: borlette,
//         totalFiches: filtered.length,
//         totalNumbers,
//         totalAmount: totalAmount.toFixed(),
//       };
      
//       const tirageSection = borlette == "Tous" && interval == "Tous" ? "Tout" : `$${borlette.toLowerCase()} ${interval.toLowerCase()} `
//       const winningReport = await getAgentWinningReport(`${report.agent}`, filtered, tirageSection)
//       const receiptContent = printRapportData({
//         Agent: report.agent,
//         Date: report.date,
//         TotalFiche: `${report.totalFiches}`,
//         TotalFicheGagne: `${winningReport.totalWinningFiches}`,
//         TotalGagne: `${parseInt(report.totalAmount) - winningReport.totalAmountToPay}`,
//         TotalAPaye: `${winningReport.totalAmountToPay}`,
//         TotalEntre: report.totalAmount
//       });
//       await ThermalPrinterModule.printBluetooth({
//         payload: receiptContent,
//         printerNbrCharactersPerLine: 32,
//       });
//       setLoading(false)
//       setVisibleRapo(false)
//       Toast.show({
//         type: ALERT_TYPE.SUCCESS,
//         title: 'Enpresyon Resi',
//         textBody: 'Resi a enprime avèk siksè!',
//       });
//       }
  
//     } catch (error) {
//       console.log(`${error}`)
//       setLoading(false)
//       setVisibleRapo(false)
//       Toast.show({
//         type: ALERT_TYPE.DANGER,
//         title: "Enpresyon Resi",
//         textBody: "rapo fiche la pa soti, li gen yon erè"
//       })
//     }
//   };

//   return (
//     <Portal>
//       <Dialog visible={visibleRapo} onDismiss={hideDialog}>
//         <Dialog.Title>Imprimer Raport des tickets du </Dialog.Title>
//         <Dialog.Content>
//           <View>
//             <CalendarPicker
//               width={400}
//               weekdays={[
//                 "Dimanch",
//                 "Lundi",
//                 "Mardi",
//                 "Mercredi",
//                 "Jeudi",
//                 "Vendredi",
//                 "Samedi",
//               ]}
//               months={[
//                 "Janvier",
//                 "Février",
//                 "Mars",
//                 "Avril",
//                 "Mai",
//                 "Juin",
//                 "Juillet",
//                 "Aout",
//                 "Septembre",
//                 "Octobre",
//                 "Novembre",
//                 "Decembre",
//               ]}
//               selectedDayColor="#651fff"
//               selectedDayTextColor="white"
//               onDateChange={onChangeDate}
//             />
//           </View>
//           <View style={styles.triage}>
//             <Menu
//               visible={visible}
//               onDismiss={closeMenu}
//               anchor={
//                 <Pressable
//                   onPress={openMenu}
//                   style={{
//                     flexDirection: "row",
//                     gap: 10,
//                     alignItems: "center",
//                   }}
//                 >
//                   <Text>{interval}</Text>
//                   <AntDesign name="caretdown" size={14} color="#757575" />
//                 </Pressable>
//               }
//             >
//               <Menu.Item
//                 onPress={() => {
//                   setInterval("Tous");
//                   closeMenu();
//                 }}
//                 title="Tous"
//               />
//               <Menu.Item
//                 onPress={() => {
//                   setInterval("Midi");
//                   closeMenu();
//                 }}
//                 title="Mid"
//               />
//               <Menu.Item
//                 onPress={() => {
//                   setInterval("Soir");
//                   closeMenu();
//                 }}
//                 title="Soir"
//               />
//             </Menu>
//             <Menu
//               visible={visibleBorlette}
//               onDismiss={closeMenu}
//               anchor={
//                 <Pressable
//                   onPress={openMenuBorlette}
//                   style={{
//                     flexDirection: "row",
//                     gap: 10,
//                     alignItems: "center",
//                   }}
//                 >
//                   <Text>{borlette}</Text>
//                   <AntDesign name="caretdown" size={14} color="#757575" />
//                 </Pressable>
//               }
//             >
//               <Menu.Item
//                 onPress={() => {
//                   setBorlette("Tous");
//                   closeMenuBorlette();
//                 }}
//                 title="Tous"
//               />
//               <Menu.Item
//                 onPress={() => {
//                   setBorlette("Florida");
//                   closeMenuBorlette();
//                 }}
//                 title="Florida"
//               />
//               <Menu.Item
//                 onPress={() => {
//                   setBorlette("Georgia");
//                   closeMenuBorlette();
//                 }}
//                 title="Georgia"
//               />
//               <Menu.Item
//                 onPress={() => {
//                   setBorlette("New York");
//                   closeMenuBorlette();
//                 }}
//                 title="New York"
//               />
//             </Menu>
//           </View>
//         </Dialog.Content>
//         <Dialog.Actions>
//           <Button textColor="red" onPress={hideDialog}>
//             Anile
//           </Button>
//           <Button
//             textColor="white"
//             // onPress={() => {
//             //   console.log(daterapo, borlette, interval)
//             //   console.log("all in one: ", moment(daterapo).startOf("day").toDate())
//             // }}
//             onPress={rapport}
//             style={styles.printButton}
//           >
//             {isLoading ? "...Loading" : "Imprimer"}
//           </Button>
//         </Dialog.Actions>
//       </Dialog>
//     </Portal>
//   );
// }

// const styles = StyleSheet.create({
//   triage: {
//     paddingLeft: 20,
//     paddingTop: 20,
//     flexDirection: "row",
//     width: "100%",
//     gap: 40,
//     alignItems: "center",
//   },
//   printButton: {
//     width: 110,
//     paddingHorizontal: 8,
//     backgroundColor: "#651fff",
//     borderRadius: 4,
//   },
//   cancelButton: {

//   }
// });
