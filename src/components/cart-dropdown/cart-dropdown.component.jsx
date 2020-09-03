import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-buttom/custom-button.component';
import './cart-droodown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropDown = ({cartItems}) => (
    <div className='cartdropdown'>
        <div className='cart-items' >
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
            </div>
            <CustomButton>checkout</CustomButton>
        

    </div>
);

const mapStateToProps = ({ cart : {cartItems}}) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropDown);