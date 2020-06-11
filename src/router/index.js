import React from 'react';

import IndexPage from '../view/index';
import UserPage from '../view/user';
import GetStartPage from '../view/getstart';
import AboutPage from '../view/about';
import TopicPage from '../view/topic';
import Page404 from '../view/page404';


const routes = [
    {
        path: '/',
        exact: true,
        render(props) {
            return <IndexPage {...props} />
        }
    },{
        path: '/topic/:id',
        exact: true,
        render(props) {
            return <TopicPage {...props} />
        }
    }, {
        path: '/user/:id',
        exact: true,
        render(props) {
            return <UserPage {...props} />
        }
    }, {
        path: '/getstart',
        exact: true,
        render(props) {
            return <GetStartPage {...props} />
        }
    }, {
        path: '/about',
        exact: true,
        render(props) {
            return <AboutPage {...props} />
        }
    }, {
        path: "",
        exact: false,
        render(props){
            return <Page404 {...props} />
        }
    }





];










export default routes;