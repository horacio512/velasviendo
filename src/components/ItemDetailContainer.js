import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const itemDetail = 
        {
            id: 1,
            title: 'Vela Barata',
            description: 'Se trata de un lote en formato ahorro y de calidad, ya que con solo una compra se adquiere una gran cantidad de velas. Son ideales para eventos especiales y salas grandes en las que se equiere contar con una gran cantidad d eiluminación y elementos decorativos ',
            price: 300,
            picUrl: './images/candle1.jpg',
        }
    

    const [item, itemContent] = useState([])

    const getItem = () => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
              return resolve(itemDetail);
            }, 2000);
        });

    };

    useEffect(() => {

        const getProductsAsync = async () => {
            try {
                const data = await getItem()
                console.log("Llamada al mock",data)
                itemContent(data)
            } catch (error) {
                console.log(`Error: ${error}`)
            }
        }
        getProductsAsync();
    }, [])


    return (

        <ItemDetail data={item} />
    )
}

export default ItemDetailContainer