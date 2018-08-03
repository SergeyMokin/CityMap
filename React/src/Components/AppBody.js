import React, { Component } from 'react';
import CityList from './CityList';
import City from './City';
import YMap from './YMap';
import { Route, Switch } from 'react-router-dom';

class AppBody extends Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        { 
            target: null
        }
    }

    handler(city)
    {
        this.setState(
            {
                target: city
            });
    };

    render()
    {
        if(this.state.target !== null)
        {
            return (
                <div className="container full-size">
                    <City city = { this.state.target } handler = {this.handler.bind(this) } />
                </div>
            );
        }

        return (
            <div className="container full-size">
                <Switch>
                    <Route exact path="/" component={() => (<CityList handler = { this.handler.bind(this) } />)} />
                    <Route path="/city-map" component={YMap} />
                </Switch>
            </div>
        );
    }
}

export default AppBody;