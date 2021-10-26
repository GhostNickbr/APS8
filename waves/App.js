
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, View, TextInput, ScrollView} from 'react-native';
import Globais from './Globais';
import Requisicao from './Requisicao'

export default function App() {

  
  return (


    <View style={styles.container}>    
    <View style={styles.containerPesquisa}>   
    <TextInput type="text" placeholder="  Busque uma cidade..." style={styles.campoBusca} onChangeText={() => {Globais.cidade}}/>
      <View style={styles.envioBusca} >
      <Button 
      color="#87cefa"   
      borderRadius="20" 
      width= "200"
      height= "50"
      onPress={() => Requisicao()}
      title="Buscar" />    
      </View>   
    </View>   
    <Atualizar/>
  
  </View>

      

);
}


function Atualizar(){


  return(
    <View style={styles.container}>    

    <View>    
      <Text style={styles.campoCidade}>{Globais.cidade}</Text>
      <Text style={styles.campoData}>26/10/2021</Text>            
    </View>
    <View style={styles.containerResultado}>    
    <View style={styles.containerAgitacao}>   
    <Text style={styles.tituloResultado}>Periodo: Manhã</Text>    
    <Text style={styles.resultado}>Altura: {Globais.altura[0]} | Direção: {Globais.direçao[0]}</Text>
    <Text style={styles.resultado}>Agitação: {Globais.agitação[0]}</Text>
    <Text style={styles.resultado}>Vento: {Globais.vento[0]} | Direção: {Globais.ventodir[0]}</Text>
    </View>

    </View>

    <View style={styles.containerResultado}>    

    <View style={styles.containerAgitacao}>   
    <Text style={styles.tituloResultado}>Periodo: Tarde</Text>    
    <Text style={styles.resultado}>Altura: {Globais.altura[1]} | Direção: {Globais.direçao[1]}</Text>
    <Text style={styles.resultado}>Agitação: {Globais.agitação[1]}</Text>
    <Text style={styles.resultado}>Vento: {Globais.vento[1]} | Direção: {Globais.ventodir[1]}</Text>
    </View> 

     </View>

    <View style={styles.containerResultado}>        
      
    <View style={styles.containerAgitacao}>   
    <Text style={styles.tituloResultado}>Periodo: Noite</Text>    
    <Text style={styles.resultado}>Altura: {Globais.altura[2]} | Direção: {Globais.direçao[2]}</Text>
    <Text style={styles.resultado}>Agitação: {Globais.agitação[2]}</Text>
    <Text style={styles.resultado}>Vento: {Globais.vento[2]} | Direção: {Globais.ventodir[2]}</Text>
    </View>

    </View>

  </View>
  

  )

}




const styles = StyleSheet.create ({

//Formato da tela
container: {
  width: '100%',
  height: '100%',
},

//container que armazena o campo de pesquisa e o botão de consulta
containerPesquisa: {
  width: '100%' ,
  height: '15%',
  backgroundColor: '#fff',
  alignItems: 'center',
  marginTop: '9%',
  justifyContent: 'space-between',
  flexDirection: 'row',
},
  
//campo para realizar busca
campoBusca: {   
  backgroundColor: '#e5e4e2',    
  borderRadius: 10,
  marginLeft: '5%',
  width: '60%', 
  height: 40     
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

containerResultadoAgitacao: {
  width: '100%' ,
  height: '60%',
  backgroundColor: '#fff',
  alignItems: 'center',
  marginTop: '-8%',
  marginBottom: '8%',
  justifyContent: 'space-between',
  flexDirection: 'column',
},

containerResultado: {   
  width: '90%' ,
  height: 110,
  backgroundColor: '#e5e4e2',
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