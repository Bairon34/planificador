import React from 'react'
import {
    FlatList,
    Text,
    View,
    StyleSheet
} from 'react-native'

import Gasto from './Gasto'

const ListadoGastos = ({ gastos, setModal, setGasto, filtro, gastosFiltrados }: any) => {
    console.log("gastos objetc " + gastos)
    return (

        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Gastos</Text>

            {filtro ? gastosFiltrados.map(gasto => (
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                    setModal={setModal}
                    setGasto={setGasto}
                />
            )) : gastos.map(gasto => (
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                    setModal={setModal}
                    setGasto={setGasto}
                />
            ))
            }

            {(gastos.length === 0 || (gastosFiltrados.length === 0 && !!filtro)) && (
                <Text style={styles.noGastos}>No hay gastos</Text>
            )
            }

        </View>

    )
}

const styles = StyleSheet.create({
    contenedor: {
        marginTop: 70,
        marginBottom: 100
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
        marginTop: 20

    },
    textGasto: {
        color: 'black',
    },
})

export default ListadoGastos