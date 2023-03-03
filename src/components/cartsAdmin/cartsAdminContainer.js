import { useEffect, useState } from 'react'
import axios from 'axios'
// import { UseCartContext } from "../../context/productsContext";
import CartsListAdmin from './cartsListAdmin.js'

export default function CartsContainer() {
    const [carts, setCarts] = useState([])

    useEffect(() => {
        async function fetchData() {
            await axios
                .post('http://localhost:8080/cart/', { user: '' })
                .then((response) => {
                    setCarts(response.data)
                })
        }
        fetchData()
    })
    return (
        <div>
            {
                <div>
                    {carts.result == "NO" ? <p>No hay carts disponibles</p> : <CartsListAdmin carts={carts} />}
                </div>
            }
        </div>
    )
}
