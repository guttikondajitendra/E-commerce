import React from 'react';

import './collection-tem.styles.scss';

const CollectionItem = ({id, name, price, imageUrl}) => (
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

         </div>
    
 
);

export default CollectionItem;