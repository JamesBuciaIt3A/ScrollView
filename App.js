import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const scrollData = [
  {
    id: 1,
    fullname: 'James Warren Bucia',
    place: 'United Kingdom',
  },
  {
    id: 2,
    fullname: 'Glecerio Velez',
    place: 'Hongkong',
  },
  {
    id: 3,
    fullname: 'Mark James Prado',
    place: 'Australlia',
  },
  {
    id: 4,
    fullname: 'Reynante Tima',
    place: 'Cinetroisflin',
  },
  {
    id: 5,
    fullname: 'Erwin Dumay',
    place: 'Argenthal',
  },
  {
    id: 6,
    fullname: 'Edward Dumay',
    place: 'Malé, Maldives',
  },
  {
    id: 7,
    fullname: 'Gemuel Doroy',
    place: 'Humberto de Campos',
  },
  {
    id: 8,
    fullname: 'Dan Mark Buca',
    place: 'South Cleveland',
  },
  {
    id: 9,
    fullname: 'Ernest Guno',
    place: 'Manila, Philippines',
  },
  {
    id: 10,
    fullname: 'Vincent Tima',
    place: 'Luxembourg, Luxembourg',
  },
  {
    id: 11,
    fullname: 'Jhonloyd Cruz',
    place: 'San Jorge, Philippines',
  },
  {
    id: 12,
    fullname: 'Junlee Renegado',
    place: 'Avesnes-le-Comte',
  },
  {
    id: 13,
    fullname: 'Katrina Mora',
    place: 'Lisbon, Portugal',
  },
  {
    id: 14,
    fullname: 'Jak Roberto',
    place: 'Valencia, Spain',
  },
  {
    id: 15,
    fullname: 'Nadine Lustre',
    place: 'Mount Gambier',
  },
  {
    id: 16,
    fullname: 'Hayley Delacruz',
    place: 'Reykjavík, Iceland',
  },
  {
    id: 17,
    fullname: 'Rudy Cameron',
    place: 'Monaco, Monaco',
  },
  {
    id: 18,
    fullname: 'Daniel Padilla',
    place: 'Euclides da Cunha, Brazil',
  },
  {
    id: 19,
    fullname: 'Jhon Carlos',
    place: 'Marseille, France',
  },
  {
    id: 20,
    fullname: 'Jake thompson',
    place: 'Bear Valley Springs, United States',
  },
]


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dataTitle}>List of Guest</Text>
      <ScrollView style={styles.dataView}>
          {scrollData.map((item) => (
            <View key={item.id} style={styles.dataId}>
              <View style={styles.dataText}>
                <Text style={styles.fullname}>{item.fullname}</Text>
                <Text style={styles.place}>{item.place}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 30,
    marginTop: 250,
  },
  dataTitle:{
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dataView: {
    flex: 1,
  },
  dataId: {
    flexDirection: 'column',
  },
  fullname: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  place:{
    fontSize: 18,
    marginBottom: 5,
  }
});