import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

import globalStyles from '../styles'

const Gasto = ({ gasto }: any) => {

    const {nombre,categoria,cantidad, id}=gasto

    return (
        <View style={styles.contenedor}>
            {
                <Text style={styles.textGasto} >{nombre}</Text>
            }
        </View>

    )
}

const styles = StyleSheet.create({
    textGasto: {
        color: 'black',
    },
    contenedor:{
        ...globalStyles.contenedor,
        marginBottom:10
    }

})


export default Gasto