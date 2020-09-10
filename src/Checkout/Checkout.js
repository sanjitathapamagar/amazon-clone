import React from 'react';
import './Checkout.css'
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import {useStateValue} from "../StateProvider";
import FlipMove from "react-flip-move";

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad'
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT19_tRK6I0qOKLSrNToc7xOEjIIWMGF_7v_Q&usqp=CAU'
                     alt=''/>

                <div>
                    <h3>Hello, {user? user.email.substring(0, user.email.lastIndexOf("@")): 'Guest'}</h3>
                    <h2 className='checkout__title'>
                        Your Shopping Basket
                    </h2>
                    <FlipMove staggerDurationBy="30"
                              duration={500}>
                        {basket.map((item, index) => (
                            <CheckoutProduct
                                key={`${item.id}-${index}`}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}></CheckoutProduct>
                        ))}
                    </FlipMove>

                    {/*<CheckoutProduct/>*/}
                </div>
            </div>

            <div className='checkout__right'>
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout;
