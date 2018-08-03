import React, { Component } from 'react';

class City extends Component
{
    render()
    {
        return(
            <div className="cantainer p-3">
                <div class="card">
                    <div class="card-header">
                        <img src="http://s1.iconbird.com/ico/2013/10/464/w128h1281380984457back3.png" className="img-back mr-1" onClick={ () => this.props.handler(null) }/>
                        {this.props.city.title}
                    </div>
                    <div class="card-body">
                        <img className="card-img-top" src={
                            this.props.city.url == "https://www.votpusk.ru/story/edit/foto/large/28959.jpg" 
                                ? "https://www.babyloncitytours.com/wp-content/uploads/2016/09/london-441853_960_720.jpg" 
                                : this.props.city.url
                            } alt="Card image"/>
                        <p class="card-text">{this.props.city.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default City;