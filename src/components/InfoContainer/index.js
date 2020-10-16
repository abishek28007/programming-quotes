import React, { memo, useState, useEffect } from "react";

import InfoWidget from '../InfoWidget';
import Cords from '../../public/cords.svg';
import Network from '../../public/wifi.svg';
import './style.scss';

function getCords(setCords){
    if (!navigator.geolocation) {
        setCords('Geolocation is not supported by your browser');
    } else {
        setCords('Loading...');
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setCords(`(${latitude.toFixed(4)},${longitude.toFixed(4)})`);
        }, (err) => {
            setCords('Unable to retrieve your location');
            console.log(err);
        },{timeout:10000});
    }
}
const Tertiary = (props) => {
    const [count, setCount] = useState(0);
    const [cords, setCords] = useState('');
    const [network, setNetwork] = useState('');
    useEffect(()=>{
        const type = navigator.connection.type;
        const effectiveType = navigator.connection.effectiveType;
        setNetwork(`type:${type},effectiveType:${effectiveType}`);
        getCords(setCords);
    },[]);
    console.log('Tertiary')
    return (
        <>
        <button onClick={() => { setCount(count + 1);}}>
            <span className='level'>click</span>{count}
        </button>
        <br/>
        <InfoWidget img={Cords} data={cords}/>
        <InfoWidget img={Network} data={network}/>
        </>
    );
}

export default memo(Tertiary);