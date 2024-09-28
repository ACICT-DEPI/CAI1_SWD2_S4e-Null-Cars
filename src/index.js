import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ComponentPreviews, useInitial} from "./dev";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Fragment ComponentPreviews={ComponentPreviews}
                useInitialHook={useInitial}
    >
        <App/>
    </Fragment>
);


// reportWebVitals();
