export default function Product({ product }) {
    if (product !== undefined) {
        return <p>{product.nombre}</p>
    } 
}
