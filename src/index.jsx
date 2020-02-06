import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './_helpers';
import {App} from './App';
import Favicon from 'react-favicon';
//import favicon from './static/images/favicon.ico';


render(
<Provider store={store}>
        <Favicon url='' />
      
        <App />
    </Provider>,
    document.getElementById('app')
);
