import React, { memo, useContext } from "react";
import { store } from '../../store';
import './style.scss';

const Secondary = (props) => {
    const { state, dispatch } = useContext(store);
    console.log('Secondary');
    return(
        <>
            <span className='level'>
                click
        </span>
            <button onClick={() => { dispatch({ type: 'SET_CITY_BFR' }) }}>
                click
        </button>
        </>
    );
}
export default memo(Secondary);