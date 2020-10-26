import React, { memo, useState, useEffect } from "react";
import { useRecoilValue } from 'recoil';

import Rating from '../Rating';
import { quotesListState } from '../../store/atoms';
import './style.scss';

const url = 'https://programming-quotes-api.herokuapp.com/quotes/id/'

const Quote = (props) => {
    const { match: { params } } = props;
    const { id } = params;
    const quotes = useRecoilValue(quotesListState);
    const [quote, setQuote] = useState();

    useEffect(() => {
        if (props.location.state) {
            setQuote(props.location.state);
        } else if (quotes && quotes.length && quotes.filter((q) => (q.id == id))[0]) {
            setQuote(quotes.filter((q) => (q.id == id))[0])
        } else {
            fetch(`${url}${id}`)
                .then((res) => {
                    return res.json();
                })
                .then((qs) => {
                    setQuote(qs);
                })
                .catch((err) => {
                    console.log(err)
                });
        }
    }, []);

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