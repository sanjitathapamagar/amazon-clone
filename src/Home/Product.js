import React from 'react';
import './Product.css'
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from "../StateProvider";

function Product({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image
            }
        })
        // action
    };
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <div className='product__rating'>
                {Array(rating).fill().map((_, i) => (
                        <p>
                            ⭐
                        </p>
                    )
                )}
                <p></p>

            </div>
            <img src={image}/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product;
