import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import one from "./pages/one";
import two from "./pages/two";
import three from "./pages/three";
import NotFund from "./pages/NotFund";
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <div>
        <BrowserRouter>
            <Switch>
                <Route path='/' component={App} exact/>
                <Route path='/one/:id' component={one} />
                <Route path='/two' component={two} />
                <Route path='/three' component={three} />
                <Route path='/NotFund' component={NotFund} />
            </Switch>
        </BrowserRouter>
    </div>, document.getElementById('root'));
registerServiceWorker();
