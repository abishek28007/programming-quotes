import React, { memo } from "react";
import './style.scss';

const InfoWidget = (props) => {
    return (
        <div>
            <div>
            <img src={props.img} className='icon' />
            </div>
            <div>
                {props.data}
            </div>
        </div>
    );
}

export default memo(InfoWidget);