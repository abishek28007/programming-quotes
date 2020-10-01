import React, { useContext } from "react";
// import { store } from '../store';
import Secondary from './Secondary';
import Tertiary from './Tertiary';
// import WebPageLoader from './WebPageLoader';

const Main = (props) => {
    // const { state, dispatch } = useContext(store);
    console.log('Main');
    return(
            // hello {state.key}
            <>
            <Secondary/>
            <Tertiary/>
            </>
            // <WebPageLoader />
    );
}
export default Main;