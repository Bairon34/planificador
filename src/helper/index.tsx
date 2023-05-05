export const formatearCantidad = (cantidad:any) =>{
    return Number(cantidad).toLocaleString('en-US',{
        style: 'currency',
        currency: 'USD'
    })
}