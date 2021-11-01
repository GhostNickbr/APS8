import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, TextInput, ScrollView} from 'react-native';
import Globais from './Globais';
import Requisicao from './Requisicao'
import ImagedCardView from "react-native-imaged-card-view";
import Main from './Requisicao';
import ImagedCarouselCard from "react-native-imaged-carousel-card";





export default function App() {


  const [text, setText] = useState('');
  Globais.cidade = text
  
  return (

    <ScrollView style={styles.container}>
      <View style={{padding: 10}}>
        <TextInput
          style={styles.campoBusca}
          placeholder="Insira o nome da cidade"
          onChangeText={text => setText(text)}
          defaultValue= {text}
        />
      </View>
      <Button
            title="Pesquisar"
            onPress={() => Requisicao(Main)}
      />
           
      <Atualizar/>
</ScrollView>
      

);

/*return(
  <ScrollView style={styles.container}>
  <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Insira o nome da cidade"
        onChangeText={text => setText(text)}
        defaultValue= {text}
      />
  </View>
  <Button
        title="Pesquisar"
        onPress={() => Requisicao(Main)}
      />
  <View style={styles.image}>
    <ImagedCardView
      stars={5}
      reviews={456}
      ratings={4.5}
      title="Santos"
      subtitle = "Praia"
      leftSideTitle= "Agitação"
      leftSideValue = "oi"
      rightSideTitle = "Altura"
      rightSideValue = "tchau"
      backgroundColor="#ff6460"
      />
      <ImagedCarouselCard
      source={{
        uri: 'santos.jpg',
      }}/>
    </View>
</ScrollView>

);*/
}


function Atualizar(){


  return(
    
    <View style={styles.container}>    
    <View>    
      <Text style={styles.campoCidade}>{Globais.cidade}</Text>
      <Text style={styles.campoData}>26/10/2021</Text>            
    </View>

    <View style={styles.containerResultado}>
    <Text style={styles.tituloResultado}>Periodo: Manhã </Text>    
    <Text style={styles.resultado}>Altura: {Globais.altura[0]} | Direção: {Globais.direçao[0]}</Text>
    <Text style={styles.resultado}>Agitação: {Globais.agitação[0]}</Text>
    <Text style={styles.resultado}>Vento: {Globais.vento[0]} | Direção: {Globais.ventodir[0]}</Text>
    </View>

    <View style={styles.containerResultado}>    

 
    <Text style={styles.tituloResultado}>Periodo: Tarde</Text>    
    <Text style={styles.resultado}>Altura: {Globais.altura[1]} | Direção: {Globais.direçao[1]}</Text>
    <Text style={styles.resultado}>Agitação: {Globais.agitação[1]}</Text>
    <Text style={styles.resultado}>Vento: {Globais.vento[1]} | Direção: {Globais.ventodir[1]}</Text>
  

     </View>

    <View style={styles.containerResultado}>        
         
    <Text style={styles.tituloResultado}>Periodo: Noite</Text>    
    <Text style={styles.resultado}>Altura: {Globais.altura[2]} | Direção: {Globais.direçao[2]}</Text>
    <Text style={styles.resultado}>Agitação: {Globais.agitação[2]}</Text>
    <Text style={styles.resultado}>Vento: {Globais.vento[2]} | Direção: {Globais.ventodir[2]}</Text>
    </View>

  </View>
  

  )

}







const styles = StyleSheet.create ({

//Formato da tela
container: {
  width: '100%',
  padding: 30,
  marginTop: 10,
},

  
//campo para realizar busca
campoBusca: {   
  backgroundColor: '#e5e4e2',    
  borderRadius: 100,
  width: '100%', 
  height: 40,
  textAlign: 'center',
},

//botao de consulta
envioBusca: {        
  margin: '5%',    
  textAlign: 'center',
  color: "#fff",
  justifyContent: 'center',
  padding: 10
},  

//campo que aparece o nome da cidade ex: "São Paulo"
campoCidade: {   
  backgroundColor: '#fff', 
  alignItems: 'center',
  textAlign: 'center',
  width: '100%', 
  height: 70, 
  fontSize: 35,
  fontWeight: '600',
},

//campo que aparece a data"
campoData: {   
  backgroundColor: '#fff', 
  alignItems: 'center',
  textAlign: 'center',
  marginTop: '-5%',
  marginBottom: '-3%',
  width: '100%', 
  height: 70, 
  fontSize: 20,
  fontWeight: '600',
},


containerResultado: {   
  width: '100%' ,
  height: 110,
  backgroundColor: '#ADD8E6',
  alignItems: 'center',
  marginLeft: '5%',
  marginBottom: '4%',
  borderRadius: 25,
  justifyContent: 'space-between',
  flexDirection: 'column',
  paddingBottom: '5%'
},

tituloResultado: {       
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  marginTop: '2%', 
  marginLeft: '0%',
  height: 20, 
  fontSize: 17,
  fontWeight: 'bold',
},

resultado: { 
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  marginTop: '2%', 
  marginLeft: '0%',
  height: 20, 
  fontSize: 17,
  fontWeight: 'normal',
},

});