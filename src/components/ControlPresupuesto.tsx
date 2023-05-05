import React from 'react'
import {Text,View,Image,StyleSheet} from 'react-native'



const ControlPresupuesto = () => {
  return (
    <View style={styles.contenedor}>
        <View>
            <Image source={require('../img/grafico.jpg')}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    
  },
  
});

export default ControlPresupuesto