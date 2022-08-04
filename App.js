import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bloco}>
        <Text style={styles.titulo}>Previsão do tempo</Text>
      </View>
      <View style={styles.blocoGeral}>
        <Text style={styles.label}>digite sua cidade: </Text>
        <textImput
          placeholder='sua cidade...'
          style={styles.input}
        />
      </View>
      <View style={styles.blocoGeral}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textBotao}>buscar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  bloco:{
    alignItems: 'center',
    marginBottom:20,
    marginTop:20
  },
  titulo:{
    fontSize:30
  },
  label:{
    fontSize:20,
    marginLeft:'10%'
  },
  Input:{
    marginLeft:'10%',
    borderBottomWidth:2,
    marginRight:'10%',
    fontSize:20
  },
  botao:{
    marginLeft:'10%',
    marginRight:'10%',
    backgroundColor:'#000'
  },
  textBotao:{
    color:'#fff',
    fontSize:20,
    textAlign:'center'
  },
  textoGeral:{
    marginTop:20
  }
});
