import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import MeuBotao from './componentes/MeuBotao';
import React, { useState } from 'react';

import {  TextInput, Button } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Open up App.tsx to start working on your app!</Text>
      <MeuBotao titulo="Clique aqui" 
      OnPress={()=>{Alert.alert("Atenção", "Botão /clicado")}}>
      </MeuBotao>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    margin: 10,
    flex: 1,
    backgroundColor: '#000',
    elevation: 10,
    shadowColor: "#000",
   shadowOffset: {
    width: 5,
    height: 10,
   },
   shadowOpacity: 0.5,
     },
  titulo:
  {
    color:'#fff',
    fontSize: 50,
    fontWeight:'bold',
  }
  const App: React.FC = () => {

    const [cep, setCep] = useState('');
    
    return (
    
    <View style={styles.container}>
    
    <Text style={styles.title}>Consulta CEP</Text>
    
    <TextInput
    
    style={styles.input}
    
    placeholder="Digite o CEP"
    
    keyboardType="numeric"
    
    value={cep}
    
    onChangeText={setCep}
    
    />
    
    <Button title="Buscar" onPress={() => {}} />
    
    </View>
    
    );
    
    type Address = {

      logradouro: string;
      
      bairro: string;
      
      localidade: string;
      
      uf: string;
      
      }
      
      const [address, setAddress] = useState<Address | null>(null);
      
      const [error, setError] = useState('')
      const fetchAddress = async () => {

        setError('');
        
        setAddress(null);
        
        if (cep.length !== 8) {
        
        setError('CEP inválido. Deve conter 8 dígitos.');
        
        return;
        
        }
        
        try {
        
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        
        if (response.data.erro) {
        
        setError('CEP não encontrado.');
        
        } else {
        
        setAddress(response.data);
        
        }
        
        } catch (error) {
        
        setError('Erro ao buscar CEP. Verifique sua conexão.');
        
        }
        
        };
        {error ? <Text style={styles.error}>{error}</Text> : null}

{address && (

<View style={styles.result}>

<Text>Logradouro: {address.logradouro}</Text>

<Text>Bairro: {address.bairro}</Text>

<Text>Cidade: {address.localidade} - {address.uf}</Text>

</View>

)}
const styles = StyleSheet.create({

  ...styles,
  
  error: {
  
  color: 'red',
  
  marginTop: 10,
  
  },
  
  result: {
  
  marginTop: 20,
  
  alignItems: 'center',
  
  },
  
  });
    });

