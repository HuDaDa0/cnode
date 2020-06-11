import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { Button } from 'antd';
import routes from './router/index';

function App(props) {
    console.log(useSelector(state => state));
    return (
        <div className="App">
            <Switch>
                {
                    routes.map((item, index) => {
                        return (
                            <Route 
                                key={index} 
                                path={item.path}
                                exact={item.exact}
                                render={(props)=>{
                                    return item.render(props);
                                }}
                            />
                        )
                    })
                }
            </Switch>
            <Button type="primary">Button</Button>
        </div>
    );
}

export default App;
