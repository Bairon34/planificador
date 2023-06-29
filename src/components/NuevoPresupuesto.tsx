import React,{useEffect} from 'react'
import {
    Text,
    View,
    Pressable,
    TextInput,
    StyleSheet,
    ScrollView

} from 'react-native'

import globalStyles from '../styles'


const NuevoPresupuesto = ({
    presupuesto,
    setPresupuesto,
    handleNuevoPresupuesto
}: any) => {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.text} >Definir presupuesto</Text>

            <TextInput style={styles.input}
                placeholderTextColor="#A5A5A5"
                keyboardType='numeric'
                placeholder='Agrega tu presupuesto'
                value={presupuesto.toString()}
                onChangeText={setPresupuesto}
            />

            <Pressable style={styles.boton}
                onPress={() => handleNuevoPresupuesto(presupuesto)}
            >
                <Text style={styles.botonText} >Agregar presupuesto</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor
    },
    text: {
        color: '#3B82F6',
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 10,

    },
    input: {
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 30,
        color: '#000000',

    },
    boton: {
        marginTop: 30,
        backgroundColor: '#1048A4',
        padding: 10,
        borderRadius: 10
    },
    botonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',

    }
});

export default NuevoPresupuesto


