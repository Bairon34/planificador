import React, { useState, useEffect } from 'react'
import { 
  Text, 
  View, 
  Image, 
  StyleSheet,
  Pressable 
} from 'react-native'

import globalStyles from '../styles'
import { formatearCantidad } from '../helper'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import CircularProgress from 'react-native-circular-progress-indicator'

const ControlPresupuesto = ({ presupuesto, gastos,resetApp }: any) => {

  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)
  const [porcentaje,setPorcentaje]= useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce((total: any, gasto: any) => Number(gasto.cantidad) + total, 0)
    const totalDisponible = presupuesto - totalGastado

    setDisponible(totalDisponible)
    setGastado(totalGastado)  
    setPorcentaje(((presupuesto - totalDisponible)/presupuesto)*100)

  }, [gastos])

  return (
    <View style={styles.contenedor}>
      <View style={styles.centrarGrafica}>
        <CircularProgress
          value={porcentaje}
          radius={150}
          valueSuffix={'%'}
          title='Gastado'
          inActiveStrokeColor='#F5F5F5'
          inActiveStrokeOpacity={20}
          activeStrokeColor='#3B82F6'
          activeStrokeWidth={30}
          inActiveStrokeWidth={20}
          titleStyle={{fontWeight:'bold',fontSize:20}}
          titleColor='#64748B'
          duration={1000}
        />
      </View>

      <View style={styles.contenedorTexto}>

        <Pressable 
          onLongPress={resetApp}
          style={styles.boton}
        >
          <Text style={styles.textBoton}>Reiniciar app</Text>
        </Pressable>

        <Text style={styles.valor}>
          <Text style={styles.label}>Presupuesto: {' '}</Text>
          {formatearCantidad(presupuesto)}
        </Text>

        <Text style={styles.valor}>
          <Text style={styles.label}>Disponible: {' '}</Text>
          {formatearCantidad(disponible)}
        </Text>

        <Text style={styles.valor}>
          <Text style={styles.label}>Gastado: {' '}</Text>
          {formatearCantidad(gastado)}
        </Text>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textBoton:{
    textAlign : 'center',
    color : '#FFF',
    fontWeight : 'bold',
    textTransform : 'uppercase',
  },
  boton: {
    backgroundColor : '#DB2777',
    padding : 10,
    marginBottom: 40,
    borderRadius : 5
  },
  contenedor: {
    ...globalStyles.contenedor
  },
  centrarGrafica: {
    alignItems: 'center',
  },
  contenedorTexto: {
    marginTop: 50,
    textAlign: "right"
  },
  valor: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color:'black',
  },
  label: {
    fontWeight: '700',
    color: '#3B82F6',
    fontSize: 16,
  }

});

export default ControlPresupuesto