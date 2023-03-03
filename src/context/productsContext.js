import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const cartContext = createContext([])

export function UseCartContext() {
    return useContext(cartContext)
}

export default function ProductsContext({ children }) {
    const [products, setProducts] = useState([])


    function isInCart(id) {
        return products.some((product) => product.id === id)
    }

    function addToCart(item) {
        let quantity = item.quantity
        let id = item.product._id
        let product = item.product
        if (isInCart(id)) {
            let i = products.findIndex((i) => i.product.id === id)
            const newList = products
            newList[i].quantity += quantity
            setProducts(newList)
        } else {
            if (products.length === 0) {
                setProducts([{ product, quantity }])
            } else {
                setProducts([...products, { product, quantity }])
            }
        }
    }

    function clearCart() {
        setProducts([])

        let user = localStorage.getItem('name')
        axios.delete('http://localhost:8080/cart/', { user: user })
    }

    async function updateCartInServer() {
        let user = localStorage.getItem('name')
        // se comprueba si existe algun cart con ese usuario (para actualizarlo) caso contrario se crea.
        let data = await axios
            .post('http://localhost:8080/cart/', {
                user: localStorage.getItem('name'),
            })
            .then((response) => {
                return response.data[0]
            })
        if (data === '' || data.mensaje === 'no hay productos actualmente') {
            axios.post('http://localhost:8080/cart/create', {
                user: user,
                productos: products,
            })
        } else {
            axios
                .put('http://localhost:8080/cart/', {
                    old_cart: data,
                    productos: products,
                })
                .then((response) => {
                    console.log(response.data)
                })
        }
    }

    function clearItem(id) {
        let newProductsList = products

        const result = newProductsList.filter((item) => item._id !== id)

        setProducts(result)
    }

    // async function getCart(id) {
    //     let data;
    //     await axios.post('http://localhost:8080/cart/', {'user': id}).then((response) => {
    //         data = response.data[0]
    //     })
    //     updateCart(data.productos)
    // }

    async function cookiesManager(identifier, user) {
        switch (identifier) {
            case 'create':
                try {
                    const { data } = await axios.post(
                        'http://localhost:8080/users/cookies',
                        {
                            name: user.name,
                        },
                        {
                            withCredentials: true,
                        }
                    )
                    return data
                } catch (err) {
                    console.log(err)
                }
                break

            case 'update':
                break

            case 'check':
                try {
                    const { data } = await axios.get(
                        'http://localhost:8080/users/cookies'
                    )
                    return data
                } catch (err) {
                    console.log('ERROR ' + err)
                }
                break

            case 'delete':
                axios.delete('http://localhost:8080/users/deletecookies')
                break

            default:
                console.log('falta identificador')
                return
        }
    }

    return (
        <cartContext.Provider
            value={{
                products,
                clearCart,
                clearItem,
                cookiesManager,
                addToCart,
                updateCartInServer
            }}>
            {children}
        </cartContext.Provider>
    )
}
