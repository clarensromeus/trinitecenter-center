import { getOneFiche, suprimerFiche } from "@/components/Lottery/logics";
import { IFiche } from "@/types/fiches";
import * as React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { ActivityIndicator, Button, Card, Text } from "react-native-paper";
import __ from "lodash";
import {
  ALERT_TYPE,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ThermalPrinterModule from "react-native-thermal-printer";
import { parseDateTime, toCalendarDate, toTime } from "@internationalized/date";
import { printData } from "@/components/imprimer/print";
import { useLocalSearchParams } from "expo-router";

export default function CodeScreen() {
  const [fiche, setFiche] = React.useState<IFiche>({} as IFiche);
  const [isLoading, setLoading] = React.useState<boolean>(true);
  const [isPrinting, setPrinting] = React.useState<boolean>(false);
  const [finish, setFinish] = React.useState<boolean>(false);

  ThermalPrinterModule.defaultConfig = {
    ...ThermalPrinterModule.defaultConfig,
    ip: "192.168.100.246",
    port: 9100,
    mmFeedPaper: 12,
    autoCut: true,
    timeout: 30000, // in milliseconds (version >= 2.2.0)
  };

  const param = useLocalSearchParams();

  const getFiche = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("FICHE");
      return jsonValue != null ? JSON.parse(jsonValue).isCreated : null;
    } catch (e) {
      // error reading
      throw new Error(`${e}`);
    }
  };

  const getUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("VENDEUR");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      throw new Error(`${e}`);
    }
  };

  const suprimer = async (code: string) => {
    try {
      const user = await getUserData();
      setFinish(true);
      const suprim = await suprimerFiche(code);
      if (suprim.state == false) {
        setFinish(false);
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: "Nouveau Fiche!",
          textBody: `Agent ${user.Pseudoname} ${suprim.message}`,
        });
      } else {
        setFinish(false);
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: "Avestisman sou fich la!",
          textBody: `Agent ${user.Pseudoname} ${suprim.message}`,
        });
      }
    } catch (error) {
      setFinish(false);
      throw new Error(`${error}`);
    }
  };

  React.useEffect(() => {
    const oneFiche = async () => {
      await getOneFiche(`${param.code}`, setFiche);
      setLoading(false);
    };

    oneFiche();
  }, []);

  React.useEffect(() => {
    const isFiche = getFiche();
    const showMessage = async () => {
      try {
        const user = await getUserData();
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: "Nouveau Fiche!",
          textBody: `Bienvenue ${user.Pseudoname} sou paj kote ou ka jere fich yo`,
        });
        await AsyncStorage.removeItem("FICHE");
      } catch (error) {
        throw new Error(`${error}`);
      }
    };

    if (isFiche != null) {
      showMessage();
    }
  }, []);

  return (
    <AlertNotificationRoot>
      <View style={styles.container}>
        {isLoading ? (
          <View
            style={{
              flex: 1,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator animating={true} size={40} color={"#651fff"} />
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <View
              style={{
                paddingLeft: 16,
                paddingTop: 4,
                backgroundColor: "#651fff",
              }}
            >
              <View>
                <Text style={{ fontSize: 17, color: "white" }}>
                  Tike {":  "}
                  {fiche.id}
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: 17, color: "white" }}>
                  Distribite {":  "}
                  {fiche.Agent}
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: 17, color: "white" }}>
                  {!__.isUndefined(fiche.dateCreated) &&
                    toTime(parseDateTime(`${fiche.dateCreated}`)).hour}
                  :{" "}
                  {!__.isUndefined(fiche.dateCreated) &&
                    toTime(parseDateTime(`${fiche.dateCreated}`)).minute}{" "}
                  -{"  "}
                  {!__.isUndefined(fiche.dateCreated) &&
                    toCalendarDate(
                      parseDateTime(`${fiche.dateCreated}`)
                    ).toString()}
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: 17, color: "white" }}>
                  Tirage {":  "}
                  {fiche.Tirage?.length > 0 && fiche.Tirage}
                </Text>
              </View>
            </View>
            <View style={styles.ficheWrapper}>
              <View
                style={{
                  gap: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 22, fontWeight: "bold", color: "white" }}
                >
                  {fiche.Lottery?.length > 0 &&
                    __.size(fiche.Lottery?.map((f) => f.numero))}
                </Text>
                <Text style={{ color: "white", fontSize: 18 }}>
                  Vale nimero
                </Text>
              </View>
              <View
                style={{
                  gap: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 22, fontWeight: "bold", color: "white" }}
                >
                  {fiche.Lottery?.length > 0 &&
                    __.sum(fiche.Lottery?.map((m) => m.montant).map(Number))}
                </Text>
                <Text style={{ color: "white", fontSize: 18 }}>
                  Total investi
                </Text>
              </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.cardWrapper}>
                <Card contentStyle={{}}>
                  <Card.Content>
                    <View style={{ justifyContent: "space-between", gap: 20 }}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View style={styles.ficheHeader}>
                          <View>
                            <Text style={{ fontWeight: "bold" }}>Jeu</Text>
                          </View>
                          <View style={{ gap: 5 }}>
                            {fiche.Lottery?.map((l) => l.borlette).map(
                              (jeu, index) => (
                                <Text key={index} style={{}}>
                                  {jeu}
                                </Text>
                              )
                            )}
                          </View>
                        </View>
                        <View style={styles.ficheHeader}>
                          <View>
                            <Text style={{ fontWeight: "bold" }}>Nimero</Text>
                          </View>
                          <View style={{ gap: 5 }}>
                            {fiche.Lottery?.map((n) => n.numero).map(
                              (nimero, index) => (
                                <Text key={index} style={{}}>
                                  {nimero}
                                </Text>
                              )
                            )}
                          </View>
                        </View>
                        <View style={styles.ficheHeader}>
                          <View>
                            <Text style={{ fontWeight: "bold" }}>Option</Text>
                          </View>
                          <View style={{ gap: 5 }}>
                            {fiche.Lottery?.map((l) => l.option).map(
                              (option, index) => (
                                <Text key={index} style={{}}>
                                  {option}
                                </Text>
                              )
                            )}
                          </View>
                        </View>
                        <View style={styles.ficheHeader}>
                          <View>
                            <Text style={{ fontWeight: "bold" }}>Montant</Text>
                          </View>
                          <View style={{ gap: 5 }}>
                            {fiche.Lottery?.map((m) => m.montant).map(
                              (montant, index) => (
                                <Text key={index} style={{}}>
                                  {montant} G
                                </Text>
                              )
                            )}
                          </View>
                        </View>
                      </View>
                      <View style={styles.printButton}>
                        <View style={{ flex: 1 }}>
                          <Button
                            icon={finish ? "" : "delete"}
                            labelStyle={{ color: "#f44336" }}
                            mode="contained"
                            buttonColor="#ffcdd2"
                            style={{ borderRadius: 0 }}
                            onPress={() => {
                              suprimer(fiche.id);
                            }}
                          >
                            <Text
                              style={{
                                color: "#f44336",
                                fontWeight: "bold",
                                fontSize: 17,
                              }}
                            >
                              {finish ? (
                                <ActivityIndicator
                                  animating={true}
                                  color="red"
                                />
                              ) : (
                                "Suprimer"
                              )}
                            </Text>
                          </Button>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Button
                            icon={isPrinting ? "" : "printer"}
                            mode="contained"
                            buttonColor="#651fff"
                            style={{ borderRadius: 0 }}
                            onPress={async () => {
                              try {
                                const date = parseDateTime(fiche.dateCreated);
                                const onlyDate =
                                  toCalendarDate(date).toString();
                                const boule = __.size(
                                  fiche.Lottery.map((b) => b.numero)
                                );
                                const montant = __.sum(
                                  fiche.Lottery.map((m) => m.montant).map(
                                    Number
                                  )
                                );

                                const betNumbers = printData(fiche.Lottery);

                                const Tirage = fiche.Tirage;

                                const agent = await getUserData();
                                // just print
                                setPrinting(true);
                                await ThermalPrinterModule.printBluetooth({
                                  payload:
                                    "[L]<img>https://github.com/user-attachments/assets/fa44f2b7-8836-4db7-9256-48e572fad49d</img> \n" +
                                    "[L]<b>         TRINITE CENTER </b>\n" +
                                    "[L]Tike : " +
                                    fiche.id +
                                    " \n" +
                                    "[L]Date : " +
                                    date.hour +
                                    ":" +
                                    date.minute +
                                    " - " +
                                    onlyDate +
                                    "\n" +
                                    "[L]Bank : " +
                                    agent.Bank +
                                    "\n" +
                                    "[L]Agent : " +
                                    agent.Pseudoname +
                                    "\n" +
                                    "[L]" +
                                    onlyDate +
                                    " - " +
                                    date.hour +
                                    ":" +
                                    date.minute +
                                    "\n" +
                                    "[L]================================\n" +
                                    "[L]Vale nimero ou jwe : " +
                                    boule +
                                    "\n" +
                                    "[L]================================\n" +
                                    "[L] Jwet      Nimero  Opt  Montant" +
                                    "[L]--------------------------------\n" +
                                    betNumbers +
                                    "[L]--------------------------------\n" +
                                    "[L]Tirage : " +
                                    Tirage +
                                    "\n" +
                                    "[L]--------------------------------\n" +
                                    "[L]Total Investi : " +
                                    montant +
                                    " Gdes\n" +
                                    "[L]================================\n" +
                                    "[L]Telefone : " +
                                    agent.NumeroTelephone +
                                    "\n" +
                                    "[L]Adres : " +
                                    agent.AddresseComplet +
                                    "\n" +
                                    '[L]" Fiche yo valab pou 90 jou "\n',
                                  autoCut: true,
                                  mmFeedPaper: 12,
                                });
                                Toast.show({
                                  type: ALERT_TYPE.SUCCESS,
                                  title: "Avestisman sou fich la!",
                                  textBody: `fich la imprime ak sikse agent ${agent.Pseudoname}`,
                                });
                                setPrinting(false);
                              } catch (error) {
                                setPrinting(false);
                                throw new Error(`${error}`);
                              }
                            }}
                          >
                            <Text
                              style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 17,
                              }}
                            >
                              {isPrinting ? (
                                <ActivityIndicator
                                  animating={true}
                                  color="white"
                                />
                              ) : (
                                ""
                              )}
                              Imprimer
                            </Text>
                          </Button>
                        </View>
                      </View>
                    </View>
                  </Card.Content>
                </Card>
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    </AlertNotificationRoot>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, width: "100%" },
  ficheWrapper: {
    width: "100%",
    paddingTop: 90,
    paddingBottom: 18,
    paddingHorizontal: 15,
    gap: 150,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#651fff",
  },
  cardWrapper: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 24,
  },
  carContent: {
    paddingTop: 15,
    gap: 5,
  },
  printButton: {
    width: "100%",
    marginTop: 200,
    paddingHorizontal: 4,
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
  ficheHeader: {
    gap: 12,
  },
});
