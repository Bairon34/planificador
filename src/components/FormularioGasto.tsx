import React, { useState,useEffect } from 'react'
import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    TextInput,
    Pressable
} from 'react-native'

import globalStyles from '../styles'

import { Picker } from '@react-native-picker/picker'

const FormularioGasto = ({ setModal, handleGasto,setGasto,gasto }: any) => {

    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [categoria, setCategoria] = useState("")
    const [id, setId] = useState("")
    const [fecha, setFecha] = useState("")

    const handleAccion=()=>{
        setModal(false)
        setGasto({})
    }

    useEffect(()=>{
        if(gasto?.nombre){
            setNombre(gasto.nombre)
            setCantidad(gasto.cantidad)
            setCategoria(gasto.categoria)
            setId(gasto.id)
            setFecha(gasto.fecha)
        }
    },[gasto])

    return (
        <SafeAreaView style={styles.contenedor}>
            <View >
                <Pressable style={styles.btnCancelar} onPressIn={handleAccion}>
                    <Text style={styles.btnCancelarText}>Cancelar</Text>
                </Pressable>
            </View>

            <View style={styles.formulario}>
                <Text style={styles.titulo}>Nuevo Gasto</Text>

                <View style={styles.campo}>
                    <Text style={styles.label} >Nombre Gasto</Text>
                    <TextInput
                        value={nombre}
                        onChangeText={setNombre}
                        style={styles.input}
                        placeholder='Nombre del gasto'
                        placeholderTextColor={'#A5A5A5'}
                        
                    
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Cantidad Gasto</Text>
                    <TextInput
                        value={cantidad}
                        onChangeText={setCantidad}
                        style={styles.input}
                        placeholder='Cantidad del gasto'
                        keyboardType='numeric'
                        placeholderTextColor={'#A5A5A5'}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Categoria Gasto</Text>
                    <Picker
                        style={styles.input}
                        onValueChange={(valor)=> setCategoria(valor)}
                        selectedValue={categoria}
                    >
                        <Picker.Item label='--Seleccion--' />
                        <Picker.Item label='Ahorro' value="ahorro" />
                        <Picker.Item label='Comida' value="comida" />
                        <Picker.Item label='Casa' value="casa" />
                        <Picker.Item label='Gastos Varios' value="gastos" />
                        <Picker.Item label='Ocio' value="ocio" />
                        <Picker.Item label='Salud' value="salud" />
                        <Picker.Item label='Suscripciones' value="suscripciones" />
                    </Picker>
                </View>

                <Pressable 
                    style={styles.submitBtn}
                    onPress={()=> handleGasto({nombre,cantidad,categoria,id,fecha})}
                >
                    <Text style={styles.submitBtnText} >
                        {gasto?.nombre ? "Guardar Cambios Gasto" : "Agregar Gasto"}
                    </Text>
                </Pressable>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: "1E40AF",

    },
    formulario: {
        ...globalStyles.contenedor
    },
    titulo: {
        textAlign: "center",
        fontSize: 28,
        marginVertical: 30,
        color: '#64748B',
        marginBottom: 30,
    },
    label: {
        color: '#64748B',
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10
    },
    campo: {

    },
    input: {
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        color:'black',
    },
    submitBtn: {
        backgroundColor: '#3B82F6',
        padding: 10,
        marginTop: 80,
        borderRadius: 10,
    },
    submitBtnText: {

        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

    btnCancelar: {
        paddingHorizontal: 20,
        backgroundColor: '#DB2777',
        padding: 10,
        marginTop: 80,
        borderRadius: 10,
    },
    btnCancelarText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }

});

export default FormularioGasto