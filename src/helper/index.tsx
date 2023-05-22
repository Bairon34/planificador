export const formatearCantidad = (cantidad:any) =>{
    return Number(cantidad).toLocaleString('en-US',{
        style: 'currency',
        currency: 'USD'
    })
}

export const generarId =() =>{
    const random = Math.random().toString(36).substring(2,11)
    const fecha = Date.now().toString(36)
    return random + fecha
}

export const formatDate  =(date :any) =>{
    const newDate = new Date(date)
    const opcion = {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    }
    return newDate.toLocaleDateString('es-ES',opcion)
}

