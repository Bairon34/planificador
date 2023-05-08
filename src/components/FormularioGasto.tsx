import React from 'react'
import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    TextInput,
    Pressable
} from 'react-native'

import { Picker } from '@react-native-picker/picker'

const FormularioGasto = () => {
    return (
        <SafeAreaView>
            <View>
                <Pressable>
                    <Text>Formulario gasto</Text>
                </Pressable>
            </View>
            <View>
                <Text>Cantidad Gasto</Text>

                <View>
                    <Text>Nombre Gasto</Text>
                    <TextInput
                        placeholder='Cantidad del gasto'
                        keyboardType='numeric'
                    />
                </View>
            </View>

            <View>
                <Text>Categoria Gasto</Text>
                <Picker>
                    <Picker.Item label='--Seleccion--' />
                    <Picker.Item label='Ahorro' value="ahorro"/>
                    <Picker.Item label='Comida' value="comida"/>
                    <Picker.Item label='Casa' value="casa"/>
                    <Picker.Item label='Gastos Varios' value="gastos"/>
                    <Picker.Item label='Ocio' value="ocio"/>
                    <Picker.Item label='Salud' value="salud"/>
                    <Picker.Item label='Suscripciones' value="suscripciones"/>
                </Picker>
            </View>

            <Pressable>
                <Text>Agregar Gasto</Text>
            </Pressable>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    texto: {
    }
});

export default FormularioGasto