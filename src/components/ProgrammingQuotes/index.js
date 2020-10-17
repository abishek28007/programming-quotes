import React, { memo, useEffect, useState, useRef } from "react";
import './style.scss';

import Rating from '../Rating';
const url = 'https://programming-quotes-api.herokuapp.com/quotes/page/'
/**
 *   _______________________________
    |                               |
    |                               |
    |                               |
    |_______________________________|
*/

// {
//     _id: "5a6ce86e2af929789500e7e4",
//     sr: "Računarska nauka se tiče računara koliko i astronomija teleskopa.",
//     en: "Computer Science is no more about computers than astronomy is about telescopes.",
//     author: "Edsger W. Dijkstra",
//     rating: 3.5,
//     id: "5a6ce86e2af929789500e7e4"
// }
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
        });
}

const ProgrammingQuotes = (props) => {
    let prevY = 0;
    const [quotes, setQuotes] = useState([]);
    const [page, setPage] = useState(1);
    const cardsRef = useRef(null);

    const callback = (entities) => {
        const y = entities[0].boundingClientRect.y;
        if (prevY > y) {
            setPage(page+1);
        }
        prevY = y;
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options);
        fetchQuotes(page)
            .then((qs) => {
                setQuotes([...quotes, ...qs]);
                if (cardsRef.current)
                    observer.observe(cardsRef.current);
            });
        return () => {
            observer.disconnect()
        }
    }, [page]);

    return (
        <div className='cards'>
            {quotes.map((quote, index) => {
                return <div className='card' key={index} ref={cardsRef}>
                    <div className='quote'>
                        {index}. {quote.en}
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
            })}
        </div>
    );
}
export default memo(ProgrammingQuotes);