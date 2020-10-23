import React, { memo } from 'react';

import hamburger from '../../public/hamburger.svg';
import './style.scss';

const Header = (props) => {
    return <div className='header'>
        <div>
            {/* <img src={hamburger} alt="Menu" className='hamburger' /> */}
        </div>
        <div>
            Header
        </div>
    </div>
}

export default memo(Header);