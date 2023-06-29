import React, { useState, useEffect } from 'react';
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
import Filtro from './src/components/Filtro';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {

  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0)
  const [gastos, setGastos] = useState([])
  const [modal, setModal] = useState(false)
  const [gasto, setGasto] = useState([])
  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])



  const handleAccion = () => {
    setModal(true)
    setGasto({})
  }

  useEffect(() => {
    const obtenerPresupuestoStorage = async () => {
      try {
        const presupuestoStorage = await AsyncStorage.getItem('planificador_presupuesto') ??0

        if (presupuestoStorage) {
          setPresupuesto(parseInt(presupuestoStorage))
          setIsValidPresupuesto(true)
        }
        
      } catch (error) {
        console.log(error)
      }
    }
  },[])

  useEffect(()=>{
    if(isValidPresupuesto){
      const guardarPrsupuestoStorage =async () => {
        try {
          await AsyncStorage.setItem('planificador_presupuesto', presupuesto)
        } catch (error) {
          console.log(error)
        }
      }
    }
  },[isValidPresupuesto])

  const handleNuevoPresupuesto = (presupuesto: any) => {
    if (Number(presupuesto) > 0) {
      setIsValidPresupuesto(true)
    } else {
      Alert.alert('Error', 'El valor no puede ser 0');
    }
  }
   

  const handleGasto = (gasto: any) => {
    if ([gasto.nombre, gasto.categoria, gasto.cantidad].includes('')) {
      Alert.alert('Warning', 'Complete el formulario.');
      return
    }
    
    if(gasto.id){
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)
    }else{
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }

    setModal(false)
    
  }

  const eliminarGasto = (id:any)=>{
    Alert.alert(
      'Deseas eliminar', 
      'dato eliminado no se puede recuperar.',
      [
        {text: 'No', style : 'cancel' },
        {text: 'Si Eliminar', style : 'default', onPress:()=>{

          const gastosActualizados = gastos.filter(gastoState =>
            gastoState.id!== id
          )
          setGastos(gastosActualizados)
          setModal(false)
          setGasto({})
        }}
      ]
    );
    
  }



  return (
    <View style={styles.contenedor}>
      <ScrollView>
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
          <>
            <Filtro
            filtro={filtro}
            setFiltro={setFiltro}
            gastos={gastos}
            setGastosFiltrados={setGastosFiltrados}
            />
            <ListadoGastos
              gastos={gastos}
              setModal={setModal}
              setGasto={setGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            />
          </>
          
        )}
      </ScrollView>


      {modal && (
        <Modal
          animationType='slide'
          visible={modal}
          onRequestClose={() => { setModal(!modal) }}
        >
          <FormularioGasto
            setModal={setModal}
            handleGasto={handleGasto}
            setGasto={setGasto}
            gasto={gasto}
            eliminarGasto={eliminarGasto}
          />
        </Modal>
      )}

      {isValidPresupuesto && (
        <Pressable 
          style={styles.presable}
          onPressIn={handleAccion}
        >
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
  presable:{
    width: 60,
    height: 60,
    position:'absolute',
    bottom: 40,
    right: 30
  },
  contenedor: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
  header: {
    minHeight:450,
    backgroundColor: '#3B82F6',
  },
  imagen: {
    width: 60,
    height: 60,
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
