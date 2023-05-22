import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

const Gasto = ({ gasto }: any) => {
    return (
        <View>
            {
                <Text style={styles.textGasto} >{gasto.nombre}</Text>
            }
        </View>

    )
}

const styles = StyleSheet.create({
    textGasto: {
        color: 'black',
    },
})


export default Gasto