import React from 'react';
import CustomButton from '../custom-buttom/custom-button.component';
import './collection-tem.styles.scss';
import { connect } from 'react-redux';
import {addItem } from '../../redux/cart/cart.actions';


const CollectionItem = ({item ,addItem }) =>{
    const { name, price, imageUrl} = item;
    
    return (
     <div className='Collection-item'>
        <div className='image'
             
            style={{
                backgroundImage: `url(${imageUrl})`
            }}

         />
            <div className='collection-foot'>
                <span className='n'> {name} </span>
                <span className='p'> {price} </span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
         </div>
    
 
)};
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(
null,
mapDispatchToProps

)(CollectionItem);