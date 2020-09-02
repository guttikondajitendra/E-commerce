import React from 'react';
import CustomButton from '../custom-buttom/custom-button.component';
import './cart-droodown.styles.scss';

const CartDropDown = () => (
    <div className='cartdropdown'>
        <div className='items-cart' />
            <CustomButton>checkout</CustomButton>
        

    </div>
);

export default CartDropDown;