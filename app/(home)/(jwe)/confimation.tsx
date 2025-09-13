import React from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { ALERT_TYPE, Toast, AlertNotificationRoot } from 'react-native-alert-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import __ from 'lodash';
import EmptyDialog from '../../../components/Lottery/emptyDialog';
import { IFiche } from '../../../types/fiches';
import { suprimerFiche, allFicheParAgent } from '../../../components/Lottery/logics';
import { toTime, parseDateTime, toCalendarDate } from '@internationalized/date';
import { printJweData } from '../../../components/imprimer/jwe_print';
import ThermalPrinterModule from 'react-native-thermal-printer';
import * as Animatable from 'react-native-animatable';

export default function KonfimationScreen() {
  const [fiche, setFiche] = React.useState<IFiche>({} as IFiche);
  const [isLoading, setLoading] = React.useState(true);
  const [isPrinting, setPrinting] = React.useState(false);
  const [finish, setFinish] = React.useState(false);
  const [isEmpty, setEmpty] = React.useState(false);
  const [printerError, setPrinterError] = React.useState('');

  const router = useRouter();

  ThermalPrinterModule.defaultConfig = {
    ...ThermalPrinterModule.defaultConfig,
    ip: '192.168.100.246',
    port: 9100,
    mmFeedPaper: 12,
    autoCut: true,
    timeout: 30000,
  };

  const handlePrint = async () => {
    setPrinting(true);
    setPrinterError('');

    try {
      const printData = {
        id: fiche.id,
        Code: fiche.Code,
        date: {
          hour: toTime(parseDateTime(`${fiche.dateCreated}`)).hour,
          minute: toTime(parseDateTime(`${fiche.dateCreated}`)).minute,
          date: toCalendarDate(parseDateTime(`${fiche.dateCreated}`)).toString(),
        },
        bank: fiche.Agent || '',
        tirage: fiche.Tirage,
        montant: __.sum(fiche.Lottery?.map(m => m.montant).map(Number)) || 0,
        telephone: '',
        lottery: fiche.Lottery?.map(l => ({
          borlette: l.borlette,
          numero: l.numero,
          option: l.option,
          montant: l.montant.toString(),
        })) || [],
      };

      const receiptContent = printJweData(printData);
      await ThermalPrinterModule.printBluetooth({
        payload: receiptContent,
        printerNbrCharactersPerLine: 32,
      });

      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Enpresyon Resi',
        textBody: 'Resi a enprime avèk siksè!',
      });
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setPrinterError(`Printer error: ${errorMessage}`);
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Erè Enpresyon',
        textBody: `Pa ka enprime resi a: ${errorMessage}`,
      });
    } finally {
      setPrinting(false);
    }
  };

  const suprimer = async (code: string) => {
    setFinish(true);
    const user = await getUserData();
    const suprim = await suprimerFiche(code);
    setFinish(false);

    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: 'Avestisman!',
      textBody: `Agent ${user.Pseudoname} ${suprim.message}`,
    });
  };

  const getUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('VENDEUR');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      throw new Error(`${e}`);
    }
  };

  React.useEffect(() => {
    const allFiche = async () => {
      const user = await getUserData();
      await allFicheParAgent(setFiche, setEmpty, `${user.Pseudoname}`);
      setLoading(false);
    };
    allFiche();
  }, []);

  return (
    <AlertNotificationRoot>
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#651fff" />
            <Text style={styles.loadingText}>Chaje fich ou a...</Text>
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <EmptyDialog isVisible={isEmpty} />

            {!isEmpty && (
              <Animatable.View animation="fadeInUp" duration={600} style={{ flex: 1 }}>
                <View style={styles.infoContainer}>
                  <Text style={styles.infoTitle}>Fiche Konfimasyon</Text>
                  <Text style={styles.infoSub}>Kòd Fiche: {fiche.Code}</Text>
                  <Text style={styles.infoSub}>Agent: {fiche.Agent}</Text>
                  <Text style={styles.infoSub}>Tirage: {fiche.Tirage}</Text>
                </View>

                <View style={styles.cardWrapper}>
                  <Card style={styles.card}>
                    <Card.Title title="Detay Fiche" titleStyle={styles.cardTitle} />
                    <Card.Content>
                      <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Total Numero:</Text>
                        <Text style={styles.detailValue}>
                          {fiche.Lottery?.length ?? 0}
                        </Text>
                      </View>
                      <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Total Montan:</Text>
                        <Text style={styles.detailValue}>
                          {__.sum(fiche.Lottery?.map(m => m.montant).map(Number))} HTG
                        </Text>
                      </View>
                    </Card.Content>
                  </Card>
                </View>

                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                  {/* <View style={styles.listWrapper}>
                    {fiche.Lottery?.map((l, index) => (
                      <Card key={index} style={styles.lotteryCard}>
                        <Card.Content>
                          <Text style={styles.lotteryText}>
                            Jeu: {l.borlette} | Numero: {l.numero} | Opsyon: {l.option} | Montan: {l.montant} HTG
                          </Text>
                        </Card.Content>
                      </Card>
                    ))}
                  </View> */}
                  <View style={styles.cardWrapper}>
                  <Card style={styles.card}>
                    <Card.Content>
                      <View style={styles.contentContainer}>
                        <View style={styles.headerRow}>
                          <View style={styles.ficheHeader}>
                            <Text style={styles.headerText}>Jeu</Text>
                            <View style={styles.itemList}>
                              {fiche.Lottery?.map((l) => l.borlette).map(
                                (jeu, index) => (
                                  <Text key={index}>{jeu}</Text>
                                )
                              )}
                            </View>
                          </View>
                          <View style={styles.ficheHeader}>
                            <Text style={styles.headerText}>Nimero</Text>
                            <View style={styles.itemList}>
                              {fiche.Lottery?.map((n) => n.numero).map(
                                (nimero, index) => (
                                  <Text key={index}>{nimero}</Text>
                                )
                              )}
                            </View>
                          </View>
                          <View style={styles.ficheHeader}>
                            <Text style={styles.headerText}>Option</Text>
                            <View style={styles.itemList}>
                              {fiche.Lottery?.map((o) => o.option).map(
                                (opsyon, index) => (
                                  <Text key={index}>{opsyon}</Text>
                                )
                              )}
                            </View>
                          </View>
                          <View style={styles.ficheHeader}>
                            <Text style={styles.headerText}>Montan</Text>
                            <View style={styles.itemList}>
                              {fiche.Lottery?.map((m) => m.montant).map(
                                (montan, index) => (
                                  <Text key={index}>{montan}</Text>
                                )
                              )}
                            </View>
                          </View>
                        </View>
                      </View>
                    </Card.Content>
                  </Card>
                </View>
                </ScrollView>

                <View style={styles.buttonContainer}>
                  <Button
                    mode="contained"
                    onPress={handlePrint}
                    loading={isPrinting}
                    disabled={isPrinting || isEmpty}
                    style={styles.printButton}
                    labelStyle={{ fontWeight: '600' }}
                  >
                    {isPrinting ? 'Enprime...' : 'Enprime Resi'}
                  </Button>

                  {printerError ? (
                    <Text style={styles.errorText}>{printerError}</Text>
                  ) : null}

                  <Button
                    mode="outlined"
                    onPress={() => suprimer(fiche.id)}
                    loading={finish}
                    disabled={finish || isEmpty}
                    style={styles.deleteButton}
                    labelStyle={{ fontWeight: '600', color: '#651fff' }}
                  >
                    {finish ? 'Efase...' : 'Efase Resi'}
                  </Button>
                </View>
              </Animatable.View>
            )}
          </View>
        )}
      </View>
    </AlertNotificationRoot>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5' },
  loadingContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  loadingText: { marginTop: 12, fontSize: 16, color: '#555' },
  infoContainer: { padding: 16, backgroundColor: '#651fff', borderBottomLeftRadius: 16, borderBottomRightRadius: 16 },
  infoTitle: { fontSize: 22, fontWeight: 'bold', color: 'white' },
  infoSub: { color: 'white', marginTop: 4 },
  cardWrapper: { padding: 16 },
  card: { borderRadius: 12, elevation: 4 },
  cardTitle: { fontWeight: 'bold', fontSize: 18 },
  detailRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 },
  detailLabel: { fontSize: 16, color: '#555' },
  detailValue: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  listWrapper: { padding: 16 },
  lotteryCard: { marginBottom: 12, borderRadius: 12, elevation: 2 },
  lotteryText: { fontSize: 14, color: '#333' },
  buttonContainer: { padding: 16, gap: 12 },
  printButton: { backgroundColor: '#651fff', borderRadius: 8, paddingVertical: 6 },
  deleteButton: { borderColor: '#651fff', borderRadius: 8, paddingVertical: 6 },
  errorText: { color: '#f44336', textAlign: 'center', marginTop: 8 },
  contentContainer: {
    justifyContent: 'space-between',
    gap: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ficheHeader: {
    flex: 1,
  },
  headerText: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemList: {
    gap: 5,
  },
});
