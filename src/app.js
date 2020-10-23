import React from "react";
import { RecoilRoot } from 'recoil';
import ReactDOM from "react-dom";
import Main from './components/main';

ReactDOM.render(
    <RecoilRoot>
        <Main />
    </RecoilRoot>
    , document.getElementById("root")
);