import React, { memo, useEffect, useState } from "react";
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

const ProgrammingQuotes = (props) => {
    const url = 'https://programming-quotes-api.herokuapp.com/quotes/page/'
    const [quotes, setQuotes] = useState([]);
    useEffect(()=>{
        fetch(`${url}1`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setQuotes(data);
        })
        .catch((err)=>{
            console.log(err)
        });
    },[]);
    return (
        <div className='cards'>
        {quotes.map((quote, index) => {
            return <div className='card' key={index}>
                <div className='quote'>
                    {quote.en}
                </div>
                <div className='info'>
                    <div className='author'>
                        {quote.author}
                    </div>
                    {quote.rating && <div className='rating-pos'>
                        <Rating value={quote.rating}/>
                    </div>}
                </div>
            </div>
        })}
        </div>
    );
}
export default memo(ProgrammingQuotes);