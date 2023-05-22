import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  Pressable,
  Image,
  Modal
} from 'react-native';

import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';
import { generarId } from './src/helper'; 
import ListadoGastos from './src/components/ListadoGastos';

const App = () => {

  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0)
  const [gastos, setGastos] = useState([])
  const [modal, setModal] = useState(false)
  

  const handleNuevoPresupuesto = (presupuesto: any) => {
    if (Number(presupuesto) > 0) {
      setIsValidPresupuesto(true)
    } else {
      Alert.alert('Error', 'El valor no puede ser 0');
    }
  }

  const handleGasto= (gasto: any) => {
    if(!Object.values(gasto).includes('')){
      gasto.id =  generarId()
      setGastos([...gastos,gasto])
      setModal(!modal)
    }else{
      Alert.alert('Warning', 'Complete el formulario');
    }
  }

  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        <Header />
        {isValidPresupuesto ? (
            <ControlPresupuesto 
              presupuesto={presupuesto} 
              gastos={gastos} 
            />
        ) : (
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            handleNuevoPresupuesto={handleNuevoPresupuesto}
          />
        )}
      </View>

      {isValidPresupuesto && (
        <ListadoGastos
          gastos={gastos}
        />
      )}

      {modal && (
        <Modal
          animationType='slide'
          visible={modal}
          onRequestClose={() => { setModal(!modal)}}
        >
          <FormularioGasto 
            setModal={setModal}
            handleGasto={handleGasto} 
          />
        </Modal>
      )}

      {isValidPresupuesto && (
        <Pressable onPressIn={() => setModal(true)}>
          <Image
            style={styles.imagen}
            source={require('./src/img/nuevo-gasto.png')}
          />
        </Pressable>
      )}
    </View>

  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
  header: {
    backgroundColor: '#3B82F6',
  },
  imagen: {
    width: 60,
    height: 60,
    position: 'absolute',
    right: 20
  },
  label: {
    color: '#64748B',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10
},
});

export default App;
