import React, { memo } from "react";
import './style.scss';

const Rating = (props) => {
    return (
        <div className="rating">
            <div className="rating-upper">
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
            </div>
            <div className="rating-lower" style={{width: `${props.value*20}%`}}>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
            <span className='rating-hover'>{props.value}</span>
        </div>
    )
}

export default memo(Rating);