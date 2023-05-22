import React from 'react'
import {
    FlatList,
    Text,
    View,
    StyleSheet
} from 'react-native'

import Gasto from './Gasto'

const ListadoGastos = ({ gastos }: any) => {
    console.log("gastos objetc " + gastos)
    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Gastos</Text>

            {gastos.length === 0 ?
                <Text style={styles.noGastos}>No hay gastos</Text> :
                gastos.map(gasto => (
                    <Gasto
                        key={gasto.id}
                        gasto={gasto}
                    />
                )
                )}
        </View>

    )
}

const styles = StyleSheet.create({
    contenedor: {
        marginTop: 70,
        marginBottom:100
    },
    noGastos: {
        marginVertical: 20,
        marginTop: 20,
        textAlign: 'center',
        fontSize: 20,
        color: '#64748B'
    },
    titulo: {
        color: '#64748B',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '700',
        marginTop:20

    },
    textGasto: {
        color: 'black',
    },
})

export default ListadoGastos