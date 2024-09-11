import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Dimensions, Pressable, ScrollView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

// Card data
const cardData = [
  "Lembaga Pemerintahan dan Keimiran di Jazirah Arab",
  "Letak Strategis Dunia Arab dan suku-sukunya",
  "Keyakinan dan Kepercayaan Bangsa Arab",
  "Kondisi Masyarakat Arab Dimasa Jahiliyah",
  "Nasab dan Keluaga Besar Nabi Sholollohu alaihi wasalam",
  "Kelahiran dan Empat Puluh Tahun Sebelum Kenabian",
  "Fase Makkkah",
  "Tahapan Pertama Perjuangan Dakwah",
  "Tahapan Kedua Berdakwah Secara Terang-terangan",
  "Pembolikotan Menyeluruh",
  "Tahun Kesedihan",
  "Menawakan Islam Kepada Kabilah dan Individu",
  "Isra' dan Mi'raj ",
  "Bai'at Aqabah Pertama",
  "Bai'at Aqabah Kedua(bai'at Kubra)",
  "Kontinge-kontingen Pertama yang berhijrah",
  "Parlemen Quraisy 'Darun Nadwah' Mengadakan sidang istimewa",
  "Nabi Saw berhijrah",
  "Kehidupan di madinah",
  "Pemukiman kabilah-kabilah Yatsrib ketika Hijrah",
  "Tahapan kedua kondisi aktual setelah berhijrah",
  "Membangun manyarakat baru",
  "Perjanjian dengan kaum yahudi",
  "Perlawanan berdarah",
  "Perang badar kubar Pertempuran Islam pertama yang menentukan",
  "Aktivitas militer menjelang perang uhud",
  "Perang uhud",
  "Pengiriaman Brigade(Satuan khusus)",
  "Perang Ahzab",
  "Perang Dengan Bani QURAIZHAH",
  "Aktivitas Militer Setelah perang ini berakhir",
  "Perang Bani Mushthaliq atau Al-Muraisi'",
  "UMRAH AL-HUDABIYAH",
  "PERIODE KEDUA-ERA BARU",
  "PENGIRIMAN SURAT UNTUK PARA RAJA DAN PENGUASA",
  "AKTIVITA KEMILITERAN SETELAH PERJANJIAN HUDAIBIYYAH",
  "PERANG KHAIBAR DAN WADIL QURA ",
  "UMRATUL QADHA",
];

export default function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const sidebarAnimation = useState(new Animated.Value(-width))[0]; // Start off-screen

  const toggleSidebar = () => {
    const toValue = sidebarVisible ? -width : 0;
    Animated.timing(sidebarAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setSidebarVisible(!sidebarVisible);
  };

  const filteredCards = cardData.filter(card =>
    card.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleSidebar}>
          <FontAwesome name={sidebarVisible ? 'arrow-left' : 'bars'} size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.text1}>Perjalanan Hidup rasul Yang Agung</Text>
          <Text style={styles.text2}>Muhammad Shalallahu 'alaihi wasalam</Text>
        </View>
      </View>
      <View style={styles.header2}>
        <TouchableOpacity style={styles.menu}>
          <FontAwesome name="home" size={20} color="black" />
          <Text style={styles.textmenu}>Menu Utama</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buku}>
          <FontAwesome name="book" size={20} color="black" />
          <Text style={styles.textbuku}>Pilih buku</Text>
        </TouchableOpacity>
      </View>
      <TextInput style={styles.input} placeholder="    Pencarian Kata" placeholderTextColor="#424242" />
      <Text style={styles.input2}></Text>

      {/* Overlay */}
      {sidebarVisible && (
        <Pressable style={styles.overlay} onPress={toggleSidebar} />
      )}

      {/* Sidebar */}
      <Animated.View style={[styles.sidebar, { transform: [{ translateX: sidebarAnimation }] }]}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleSidebar}>
          <FontAwesome name="arrow-left" size={25} color="black" />
          <Text style={styles.daftar}>Daftar Menu</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.sidebarInput}
          placeholder="Search..."
          placeholderTextColor="#424242"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />

        {/* Scrollable Cards */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {filteredCards.map((card, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardText}>{card}</Text>
            </View>
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  daftar: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },
  input2: {
    backgroundColor: '#F5F7F8',
    height: 650,
    width: 400,
    padding:20,
    justifyContent:'flex-start',
    marginLeft: 60,
    marginTop: 20,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 5,
  },
  input: {
    backgroundColor: '#F5F7F8',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    height: 30,
    width: 400,
    marginLeft: 60,
    marginTop: 20,
    borderRadius: 10,
  },
  container: {
    backgroundColor: '#F4DEB3',
    flex: 1,
  },
  textmenu: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5, // Space between icon and text
  },
  textbuku: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5, // Space between icon and text
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 150,
    borderRadius: 5,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    height: 35,
    justifyContent: 'center',
    backgroundColor: '#FF9874',
  },
  buku: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 150,
    borderRadius: 5,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#1E201E',
    shadowOpacity: 0.8,
    height: 35,
    justifyContent: 'center',
    backgroundColor: '#FF9874',
  },
  header2: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#E85C0D',
  },
  text1: {
    color: 'white',
    marginTop: 7,
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
  },
  text2: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
  header: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#800000',
    paddingHorizontal: 10,
  },
  menuButton: {
    marginRight: 10, // Space between icon and text
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width * 0.61, // Sidebar width
    height: '100%',
    backgroundColor: '#F4DEB3',
    padding: 20,
    zIndex: 1,
    elevation: 10,
  },
  sidebarInput: {
    backgroundColor: '#F5F7F8',
    height: 40,
    width: 250,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    // shadowColor: '#1E201E',
    // shadowOpacity: 0.4,
    borderRadius: 7,
    marginBottom: 20,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent black
    zIndex: 0, // Overlay below the sidebar
  },
  scrollContainer: {
    paddingBottom: 20, // Add some padding to ensure the last items are fully visible
    // marginLeft:10,
    
  },
  card: {
    backgroundColor: '#FF9874',
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    borderRadius: 10,
    padding: 10,
    width: 250,
    marginTop: 10,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 15,
    color: 'white',
  },
});
