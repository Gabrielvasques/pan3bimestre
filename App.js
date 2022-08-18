import React, {useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';

import Tempo from './Components/Tempo';
import Api from './Components/Api';

export default function App() {
  const [dados, setDados] = useState();
  const [cidade, setCidade] = useState();

  async function BuscaCep(){
    const resposta = await Api.get('weather?array_limit=1&fields=only_results,temp,city_name,description,forecast,max,min,date&key=23d41228&city_name=peruibe,SP');
    
    
    console.warn("teste");
    setDados("dados");
  }
  return (
    <View style={styles.container}>
      <View style={styles.bloco}>
        <Text style={styles.titulo}>Previsão do tempo</Text>
      </View>
      <View style={styles.blocoGeral}>
        <Text style={styles.label}>digite sua cidade: </Text>
        <TextInput
          placeholder='sua cidade...'
          style={styles.input}

          value="testando123"
        />
      </View>
      <View style={styles.blocoGeral}>
        <TouchableOpacity
          style={styles.botao}
          onKeyPress={()=>{setDados("teste")}}
        >
          <Text style={styles.textBotao}>buscar</Text>
        </TouchableOpacity>
      </View>
      <Tempo dados={dados}/>
      <View>
        <Text></Text>
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
