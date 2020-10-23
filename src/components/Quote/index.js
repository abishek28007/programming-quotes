import React, { memo, useEffect } from "react";
import { useRecoilValue } from 'recoil';

import Rating from '../Rating';
import { quotesListState } from '../../store/atoms';
import './style.scss';

const Quote = (props) => {
    const { match: { params } } = props;
    const { id } = params;
    const quotes = useRecoilValue(quotesListState);
    useEffect(() => {
        console.log(quotes.filter((q)=>(q.id==id)));
        console.log(quotes);
    }, [])
    const quote = props.location.state;

    return quote && <div className='qoute-container'>
        <div className='quote-card'>
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
    </div>
}

export default memo(Quote);