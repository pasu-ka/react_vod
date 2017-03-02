'use_strict';

import './style/style.scss';
import Carousel from './comp/widget/carousel'

import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

function Layout() {
    return (
        <Carousel />
    );
}

ReactDom.render(
    // <Router history={hashHistory}>
    //     <Route path="/" component={Layout}>
    //         <IndexRoute component={Carousel}/>
    //         <Route path="video" component={Video}>
    //
    //         </Route>
    //     </Route>
    // </Router>,
    <Layout />,
    document.getElementById("container")
);
