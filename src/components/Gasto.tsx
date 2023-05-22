import React from 'react'
import {
    Image,
    StyleSheet,
    View,
    Text
} from 'react-native'

import globalStyles from '../styles'
import { formatearCantidad,formatDate } from '../helper'



const diccionarioIconos = {
    ahorro: require('../img/icono_ahorro.png'),
    comida: require('../img/icono_comida.png'),
    casa: require('../img/icono_casa.png'),
    gastos: require('../img/icono_gastos.png'),
    ocio: require('../img/icono_ocio.png'),
    salud: require('../img/icono_salud.png'),
    suscripciones: require('../img/icono_suscripciones.png'),
}

const Gasto = ({ gasto }: any) => {

    const { nombre, categoria, cantidad, id, fecha } = gasto

    return (
        <View style={styles.contenedor}>
            <View style={styles.contenido}>

                <View style={styles.contenedorImagen}>
                    <Image
                        style={styles.imagen}
                        source={diccionarioIconos[categoria]}
                    />
                    <View  style={styles.contenedorTexto} >
                        <Text style={styles.categoria} >{categoria}</Text>
                        <Text style={styles.nombre} >{nombre}</Text>
                        <Text style={styles.fecha} >Fecha: {formatDate(fecha) }</Text>

                    </View>
                </View>
                <Text style={styles.cantidad} >{formatearCantidad(cantidad)}</Text>
            </View>



        </View>

    )
}

const styles = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor,
        marginBottom: 10
    },
  
    contenido: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    contenedorImagen :{
        flexDirection:'row',
        alignItems: 'center',
        flex:1
        
    },
    contenedorTexto:{
        flex:1
    },
    categoria:{
        color: '#94A3B8',
        fontSize: 16,
        fontweight: '700',
        textTransform: 'uppercase',
        marginBottom: 5
    },
    nombre: {
        color: '#64748B',
        fontSize:22,
        marginBottom:5
    },
    fecha: {
        color: '#DB2777',
        fontSize:12,
        fontWeight:'700'

    },
    cantidad:{
        color: '#64748B',
        fontSize:24,
        fontWeight: '700',
    },
    imagen: {
        width:80,
        height:80,
        marginRight:20
    },

})


export default Gasto