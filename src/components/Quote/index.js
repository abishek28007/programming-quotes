import React, { memo, useEffect } from "react";

import Rating from '../Rating';
import './style.scss';

const Quote = (props) => {
    // const { match: { params } } = props;
    // const { id } = params;
    // useEffect(()=>{
        //     console.log(id)
        // },[])
    const quote = props.location.state;

    return quote && <div className='quote-card'>
        <div className='info'>
            <div className='author'>
                {quote.author}
            </div>
            {quote.rating && <div className='rating-pos'>
                <Rating value={quote.rating} />
            </div>}
        </div>
        <div className='qoute'>
            {quote.en}
        </div>
    </div>
}

export default memo(Quote);