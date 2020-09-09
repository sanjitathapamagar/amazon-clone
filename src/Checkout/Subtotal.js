import React from 'react';
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "../StateProvider";

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    let totalSum = 0;
    for (const a of basket) {
        totalSum += a.price
    }

    return (
        <div className='subtotal'>
            <CurrencyFormat renderText={(value) => (
                <>
                    <p>Subtotal ({basket?.length} items): <strong>{value}</strong></p>
                    <small className='subtotal__gift'>
                        <input type='checkbox'/> This order contains a small gift
                    </small>
                </>
            )}
                            decimalScale={2}
                            value={totalSum}
                            displayType='text'
                            thousandSeparator={true}
                            prefix='$'>
            </CurrencyFormat>
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal;
