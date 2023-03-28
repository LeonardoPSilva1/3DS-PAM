import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//componentes
import Header from './src/componentes/header';
import searchBar from './src/componentes/searchBar';


export default function App() {
  return (
    <View style={styles.container}>

      <Header />
      <searchBar />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141A29',
    alignItems: 'center',

  },
});


