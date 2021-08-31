import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState('')
  const [valor2, setValor2] = useState('')
  const [resultado, setResultado] = useState(0)
  //Metodos

  const calcSumar = () => {
    //hay que parcear para pasarlos a numero ya que esta recibiendo string
    setResultado(parseFloat(valor1) + parseFloat(valor2))
  }

  const calcResta = () => {
    //hay que parcear para pasarlos a numero ya que esta recibiendo string
    setResultado(parseFloat(valor1) - parseFloat(valor2))
  }

  const calcMultiplica = () => {
    //hay que parcear para pasarlos a numero ya que esta recibiendo string
    setResultado(parseFloat(valor1) * parseFloat(valor2))
  }

  const calcDivide = () => {
    //hay que parcear para pasarlos a numero ya que esta recibiendo string
    setResultado(parseFloat(valor1) / parseFloat(valor2))
  }

  const calcLimpiar = () => {
    //hay que parcear para pasarlos a numero ya que esta recibiendo string
    setResultado('')
    setValor1('')
    setValor2('')
  }

  const calcResultado = (operacion) => {
    if (valor1 != '' && valor2 != '') {
      let miresultado = 0;
      switch (operacion) {
        case '+':
          miresultado = (parseFloat(valor1) + parseFloat(valor2));
          break;

        case '-':
          miresultado = (parseFloat(valor1) - parseFloat(valor2));
          break;

        case '*':
          miresultado = (parseFloat(valor1) * parseFloat(valor2));
          break;

        case '/':
          if(valor2 == 0){
            alert('ingresa otro valor difentrete de cero')
            setValor2('');
          }
          miresultado = (parseFloat(valor1) / parseFloat(valor2));
          break;
          
        case 'c':
          miresultado = 0;
          setValor1('');
          setValor2('');
          break;

      }
      // asignar el contenido de la variable mresultado a la variable de estado de resultado
      setResultado(miresultado)
    }
    else{
      alert('Porfavor ingrese los 2 valores')
    }

  }

  //final de metodos
  return (
    <View style={styles.container}>
      <Text>Mi calculador con react native</Text>
      <Text >{"\n"}</Text>
      <Text> Valor 1</Text>
      <TextInput
        placeholder="ingrese valor 1"
        style={{ borderStyle: 'soid', color: 'blue', fontSize: 18 }}
        onChangeText={valor1 => setValor1(valor1)}
        value={valor1}
      />
      <Text> Valor 2</Text>
      <TextInput
        placeholder="ingrese valor 2"
        style={{ borderStyle: 'soid', color: 'blue', fontSize: 18 }}
        onChangeText={valor2 => setValor2(valor2)}
        value={valor2}
      />
      <Text> Resultado</Text>
      <TextInput
        style={{ borderStyle: 'soid', color: 'blue', fontSize: 18 }}
        value={resultado}
      />
      <Text >{"\n"}</Text>
      <Button
        title="sumar"
        //onPress={calcSumar}
        onPress={() => calcResultado('+')}
      />
      <Text >{"\n"}</Text>
      <Button
        title="restar"
        //onPress={calcResta}
        onPress={() => calcResultado('-')}
      />
      <Text >{"\n"}</Text>
      <Button
        title="multiplicar"
        //onPress={calcMultiplica}
        onPress={() => calcResultado('*')}
      />
      <Text >{"\n"}</Text>
      <Button
        title="dividir"
        //onPress={calcDivide}
        onPress={() => calcResultado('/')}
      />
      <Text >{"\n"}</Text>
      <Button
        title="Limpiar"
        //onPress={calcLimpiar}
        onPress={() => calcResultado('c')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
