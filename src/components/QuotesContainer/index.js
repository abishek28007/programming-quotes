import React, { memo, useEffect, useState, useRef } from "react";
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import './style.scss';
import Rating from '../Rating';
import Loader from '../Loader';
import { quotesListState, loadedPagesState } from '../../store/atoms';
const url = 'https://programming-quotes-api.herokuapp.com/quotes/page/'
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0
};

function fetchQuotes(page) {
    return fetch(`${url}${page}`)
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(err)
            return []
        });
}

const QuotesContainer = (props) => {
    const [quotes, setQuotes] = useRecoilState(quotesListState);
    const [loadedPages, setloadedPages] = useRecoilState(loadedPagesState);
    const [page, setPage] = useState(1);
    const cardsRef = useRef(null);
    const history = useHistory();

    const callback = (entities) => {
        if (entities[0].isIntersecting) {
            setPage(loadedPages[loadedPages.length - 1] + 1);
        }
    }

    useEffect(() => {
        if (!loadedPages.includes(page)) {
            fetchQuotes(page)
                .then((qs) => {
                    setQuotes((quotes) => [...quotes, ...qs]);
                    setloadedPages((pages) => [...pages, page]);
                });
        }
    }, [page]);

    useEffect(() => {
        let observer;
        if (cardsRef.current) {
            observer = new IntersectionObserver(callback, options);
            observer.observe(cardsRef.current);
        }
        return () => {
            if(observer){
                observer.disconnect()
            }
        }
    }, [quotes]);

    const cardWidget = (quote, index) => {
        return <div className='card'
            key={index}
            ref={cardsRef}
            onClick={() => {
                history.push(`/quote/${quote.id}`, quote);
            }}>
            <div className='quote'>
                {index + 1}. {quote.en}
            </div>
            <div className='info'>
                <div className='author'>
                    {quote.author}
                </div>
                {quote.rating && <div className='rating-pos'>
                    <Rating value={quote.rating} />
                </div>}
            </div>
        </div>
    }

    return (
        <>
            {quotes.length == 0 && <Loader />}
            <div className='cards'>
                {quotes.map(cardWidget)}
            </div>
        </>
    );
}
export default memo(QuotesContainer);