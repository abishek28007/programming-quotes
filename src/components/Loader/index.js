import React, { memo } from 'react';

import loader from '../../public/loader.svg';
import './style.scss';

const Loader = () => {
    return <div className='loader-container'>
        <img src={loader} className="loader" alt="Loading..." />
    </div>
}

export default memo(Loader)